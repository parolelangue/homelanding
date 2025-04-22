import localStorageData from '@/@core/utils/localStorage';
import { useParams, useRouter } from 'next/navigation';
import { createContext, PropsWithChildren, useEffect, useReducer } from 'react';

import api from '@/@core/utils/api';
import { AUTH_ACTIONS_TYPE } from '@/domains/actions/auth.action';
import { AuthActionTypeable } from '@/domains/interfaces/auth.interface';
import authConfig from '../configs/auth';
import { authDefaultProvider } from '@/app/states';
import { authReducer } from '@/app/reducers';

const AuthContext = createContext(authDefaultProvider);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(authReducer, authDefaultProvider);
  const { returnUrl } = useParams<{ returnUrl: string }>();

  const authenticated = async () => {
    dispatch({ type: AUTH_ACTIONS_TYPE.SET_IS_INITIALIZED, payload: true });
    if (localStorageData.getItem(authConfig.storageAccessTokenKey)) {
      await api
        .get(authConfig.meEndPoint)
        .then((response: any) => {
          dispatch({ type: AUTH_ACTIONS_TYPE.SET_LOADING, payload: false });
          dispatch({ type: AUTH_ACTIONS_TYPE.SET_USER, payload: { ...response.data } });
        })
        .catch((error) => {
          localStorageData.removeItem(authConfig.storageAccessTokenKey);
          localStorageData.removeItem(authConfig.storeRefreshTokenKey);
          localStorageData.removeItem(authConfig.storeUser);

          dispatch({ type: AUTH_ACTIONS_TYPE.SET_USER, payload: null });
          dispatch({ type: AUTH_ACTIONS_TYPE.SET_LOADING, payload: false });

          router.push('/');
        });
    } else {
      dispatch({ type: AUTH_ACTIONS_TYPE.SET_LOADING, payload: false });
    }
  };

  const login = async (params: any, cb?: any) => {
    await api
      .post(authConfig.loginUrl, params)
      .then((res: any) => {
        localStorageData.setItem(authConfig.storageAccessTokenKey, res.data.data.accessToken);
        localStorageData.setItem(authConfig.storeRefreshTokenKey, res.data.data.refreshToken);

        const { data } = res.data;
        dispatch({ type: AUTH_ACTIONS_TYPE.SET_USER, payload: data });
        localStorageData.setItem(authConfig.storeUser, JSON.stringify(data));
        const redirectUrl = returnUrl && returnUrl !== '/' ? returnUrl : '/';
        router.replace(redirectUrl);
      })
      .catch((error) => {
        if (cb) cb(error);
      });
  };

  const register = async (params: any, cb?: any) => {
    await api
      .post(authConfig.registerUrl, params)
      .then(async (res: any) => {
        await login({ username: params.username, password: params.password });
      })
      .catch((error) => {
        if (cb) cb(error);
      });
  };

  const logout = async () => {
    localStorageData.removeItem(authConfig.storageAccessTokenKey);
    localStorageData.removeItem(authConfig.storeRefreshTokenKey);
    localStorageData.removeItem(authConfig.storeUser);

    dispatch({ type: AUTH_ACTIONS_TYPE.SET_USER, payload: null });
    dispatch({ type: AUTH_ACTIONS_TYPE.SET_LOADING, payload: false });
    dispatch({ type: AUTH_ACTIONS_TYPE.SET_IS_INITIALIZED, payload: false });

    router.push('/login');
  };

  const useDispatch = async (action: AuthActionTypeable) => {
    return await dispatch(action);
  };

  useEffect(() => {
    authenticated();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout, useDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
