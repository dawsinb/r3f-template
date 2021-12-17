import create from 'zustand';

const scrollSlice = (set, get) => ({
  sections: [],
  breakpoints: [],
  numSections: 8,
  scrollPosition: 0,
  maxScroll: 0,
  applyScrollDelta: (delta) => {
    set({
      scrollPosition: Math.min(Math.max(get().scrollPosition + delta, 0), get().maxScroll)
    });
  }
});

const useStore = create((set, get) => ({
  isVertical: false,
  ...scrollSlice(set, get)
}));

export default useStore;
