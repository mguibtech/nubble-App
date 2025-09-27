import {Toast, ToastService} from '@services';
import {create} from 'zustand';

const useToastStore = create<ToastService>(set => ({
  toast: null,
  showToast: (toast: Toast) => set({toast}),
  hideToast: () => set({toast: null}),
}));

export function useToastZustand(): ToastService['toast'] {
  return useToastStore(state => state.toast);
}

export function useToastServiceZustand(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  const showToast = useToastStore(state => state.showToast);
  const hiddenToast = useToastStore(state => state.hideToast);

  return {
    showToast,
    hideToast: hiddenToast,
  };
}
