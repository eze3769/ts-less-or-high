import { AppState } from '../..';

export const isLoading = (state: AppState, action: string) => {
  const { isLoading: loading } = state;

  return !!loading?.[action];
};
