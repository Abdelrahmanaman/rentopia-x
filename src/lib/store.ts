import { create } from "zustand";

interface ImageState {
  images: string[];
}

interface ImageActions {
  handleImageUpdate: (resultInfo: any) => void; 
  resetImages: () => void;
}

export const useStore = create<ImageState & ImageActions>((set) => ({
  images: [],
  handleImageUpdate: (resultInfo) =>
    set((state) => ({
      images: [...state.images, resultInfo.secure_url],
    })),
  resetImages: () => set({ images: [] }),
}));
