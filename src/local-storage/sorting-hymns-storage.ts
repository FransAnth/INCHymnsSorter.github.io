import { create } from "zustand";
import { WholeWeekCollection } from "../data/sorted-hymns-collection";

interface ISortedHymns {
  sortedHymns: any;
  setSortedHymns: (value: any) => void;
}

export const useSortedHymnsData = create<ISortedHymns>((set) => ({
  sortedHymns: [],
  setSortedHymns(data) {
    set((state: any) => ({
      ...state,
      sortedHymns: data,
    }));
  },
}));
