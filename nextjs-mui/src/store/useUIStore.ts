import { create } from 'zustand';

interface UIState {
  buttonColor: string;
  buttonSize: string;
  cardTitleSize: string;
  setButtonColor: (color: string) => void;
  setButtonSize: (size: string) => void;
  setCardTitleSize: (size: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  buttonColor: '',
  buttonSize: '',
  cardTitleSize: '',
  setButtonColor: (color) => set({ buttonColor: color }),
  setButtonSize: (size) => set({ buttonSize: size }),
  setCardTitleSize: (size) => set({ cardTitleSize: size }),
}));
