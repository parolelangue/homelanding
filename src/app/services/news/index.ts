import { PayloadType, TQueryPagination } from '@/@core/types/general';
import api from '@/@core/utils/api';
import { catchError } from '@/@core/utils/helpers';
import { filteredParams, filteredParamsSerializer } from '@/@core/utils/transform';

const basePath = '/pub' as const;

export const newsService = {
  getNews: <T>(
    payload?: Partial<
      TQueryPagination & { cateId?: string; articleType?: string[]; status?: string }
    >,
  ) =>
    catchError<T>(
      (async () =>
        await api.get(`${basePath}/articles`, {
          params: filteredParams(payload),
          paramsSerializer: filteredParamsSerializer,
        }))(),
    ),
  getNewDetail: <T>(id: string) =>
    catchError<T>((async () => await api.get(`${basePath}/${id}`))()),
  getCareers: <T>(payload: TQueryPagination) =>
    catchError<T>(
      (async () =>
        await api.get(`${basePath}/jobs`, {
          params: filteredParams(payload),
          paramsSerializer: filteredParamsSerializer,
        }))(),
    ),
  getJobDetail: <T>(id: string) =>
    catchError<T>((async () => await api.get(`${basePath}/jobs/${id}`))()),
  applyJob: <T>(payload: FormData) =>
    catchError<T>(
      (async () =>
        await api.post(`${basePath}/jobs/apply`, payload, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }))(),
    ),
};

export type NewsServicePayloadType = {
  ['getNews']: PayloadType<typeof newsService.getNews>[0];
  ['getNewDetail']: PayloadType<typeof newsService.getNewDetail>[0];
  ['getCareers']: PayloadType<typeof newsService.getCareers>[0];
};
