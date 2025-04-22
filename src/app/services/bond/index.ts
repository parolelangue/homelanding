import { PayloadType, TQueryPagination } from '@/@core/types/general';
import api from '@/@core/utils/api';
import { catchError } from '@/@core/utils/helpers';
import axios from 'axios';

const basePath = '/pub' as const;

export const bondService = {
  getBonds: <T>(payload: TQueryPagination) =>
    catchError<T>((async () => await api.get(`${basePath}/bonds`, { params: payload }))()),
  getBondDetail: <T>(id: string) =>
    catchError<T>((async () => await api.get(`${basePath}/bonds/${id}`))()),
  getBondsHistory: <T>(id: string) =>
    catchError<T>(
      (async () =>
        await api.get(`${basePath}/bonds/history`, {
          params: {
            bondId: id,
            sortBy: 'priceDate',
            sortDirection: 'ASC',
            pageSize: 10,
          },
        }))(),
    ),
};

export type BondServicePayloadType = {
  ['getBonds']: PayloadType<typeof bondService.getBonds>[0];
};
