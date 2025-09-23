
import { ToastService } from './toastTypes';
// import { useToastContext } from './useToastContext';
import { useToastServiceZustand, useToastZustand } from './useToastZustand';
// import { useToastContext } from './useToastContext';

export function useToast(): ToastService['toast'] {
  // return useToastContext();
  // const { toast } = useToastContext();
  // return toast;
  const toast = useToastZustand();
  return toast;
}

export function useToastService(): Pick<ToastService, 'showToast' | 'hiddenToast'> {
  // const { showToast, hiddenToast } = useToastContext();

  // return {
  //   showToast,
  //   hiddenToast,
  // };

  return useToastServiceZustand();
}