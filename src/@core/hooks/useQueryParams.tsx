'use client';
import { ReadonlyURLSearchParams, useParams, useSearchParams } from 'next/navigation';
import { parseReadonlyURLSearchParams } from '../utils/transform';
export const useQueryParams = <T extends Object = any>(defaultParams?: T) => {
  const searchParams = useSearchParams();

  const onSetParams = (newParams: T, path?: string) => {
    const params = new URLSearchParams((searchParams as ReadonlyURLSearchParams).toString());
    Object.entries(newParams).forEach(([key, value]) => {
      if (typeof value !== 'object' && value !== '' && value !== undefined && value !== null)
        params.set(key, value);
      else if (typeof value === 'object' && value) params.set(key, JSON.stringify(value));
      else params.delete(key);
    });
    window.history.replaceState(null, path ?? '', `?${params.toString()}`);
  };

  return {
    params: parseReadonlyURLSearchParams(searchParams),
    onSetParams,
  };
};
