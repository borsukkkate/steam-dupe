import { useState } from 'react';
import { AxiosResponse } from 'axios';

import { useApiStatus } from '@/api/hooks/useApiStatus';
import { PENDING, SUCCESS, ERROR } from '@/api/constants/apiStatus';
import { IApp } from '@/shared/interfaces';

type ApiFunction<T = unknown> = (...args: unknown[]) => T | Promise<T>;

export function useApi<TData = unknown, TError = unknown>(
  fn: ApiFunction<TData>,
  onInited?: (apps: IApp[]) => void
) {
  const [error, setError] = useState<TError | unknown>();
  const [data, setData] = useState();
  const { status, setStatus, ...normalisedStatuses } = useApiStatus();

  const init = async <A>(...args: A[]) => {
    try {
      setStatus(PENDING);

      const data = await fn(...args);

      if (onInited) {
        onInited((data as AxiosResponse).data);
      }

      setData((data as AxiosResponse).data);

      setStatus(SUCCESS);
      return {
        error: null,
      };
    } catch (error) {
      setError(error);
      setStatus(ERROR);
      return {
        error,
      };
    }
  };

  return {
    data,
    status,
    error,
    init,
    ...normalisedStatuses,
  };
}
