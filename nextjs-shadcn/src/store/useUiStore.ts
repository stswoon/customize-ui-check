import {create} from 'zustand'

interface UiState {
    buttonColor: string
    buttonSize: string
    fontSize: string
    setButtonColor: (color: string) => void
    setButtonSize: (size: string) => void
    setFontSize: (size: string) => void
}

export const useUiStore = create<UiState>((set) => ({
    buttonColor: '',
    buttonSize: '',
    fontSize: '',
    setButtonColor: (color) => set({buttonColor: color}),
    setButtonSize: (size) => set({buttonSize: size}),
    setFontSize: (size) => set({fontSize: size}),
}))
