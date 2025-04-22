import { configureStore } from '@reduxjs/toolkit';
import { clientReducer as client } from '@/app/reducers';
import { homeReducer as home } from '@/app/reducers';
import { newsReducer as news } from '@/app/reducers';
import { categoryReducer as category } from '@/app/reducers';
import { bondReducer as bond } from '@/app/reducers';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    client,
    home,
    news,
    category,
    bond,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type AppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppState>();
