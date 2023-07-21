import { create } from "zustand";

interface useStoreModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const UseStoreModal = create<useStoreModal>((set) => ({
  isOpen: false,
  onOpen: () =>
    set({
      isOpen: true,
    }),
  onClose: () => set({ isOpen: false }),
}));
