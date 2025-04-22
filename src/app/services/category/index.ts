import { EDictDataKey, PayloadType } from '@/@core/types/general';
import api from '@/@core/utils/api';
import { catchError } from '@/@core/utils/helpers';
import { TContactFormData } from '@/views/category/templates/contactTemplate';

const basePath = '/pub' as const;

export const categoryService = {
  getDetailData: <T>(id) =>
    catchError<T>((async () => await api.get(`${basePath}/articles/${id}`))()),
  getDetailDataByCategoryId: <T>(id) =>
    catchError<T>((async () => await api.get(`${basePath}/articles/category/${id}`))()),
  contact: <T>(payload: TContactFormData) =>
    catchError<T>((async () => await api.post(`${basePath}/cu-request`, payload))()),
  getContactInfo: <T>(key: EDictDataKey) =>
    catchError<T>(
      (async () =>
        await api.get(`${basePath}/dict-data/type/loca/${key}`, {
          params: {
            dictTypKey: key,
          },
        }))(),
    ),
};

export type CategoryServicePayloadType = {
  ['getDetailData']: PayloadType<typeof categoryService.getDetailData>[0];
};
