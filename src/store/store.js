import create from "zustand";
import { devtools } from "zustand/middleware";

const apiKey = "fpWNdimAnhKyTN2O8yZRj5XI7bOdLSgl6vWtNkoK";
const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;

export const useStore = create(
  devtools((set, get) => ({
    APODs: [],
    isLoading: false,
    isLoadingMore: false,
    fetchAPODs: () => {
      set(() => ({ isLoading: true }));
      fetch(baseUrl + "&count=10")
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw new Error(`Response status: ${response.status}, not 200.`);
        })
        .then((res) => {
          // removes duplicates and non-images
          set((prev) => ({
            APODs: [
              ...new Set(
                prev.APODs.concat(
                  res.filter((post) => post.media_type === "image")
                )
              ),
            ],
          }));
          set(() => ({ isLoading: false }));
        })
        .catch((error) => console.log(error.message));
    },
    fetchMoreAPODs: () => {
      set(() => ({ isLoadingMore: true }));
      fetch(baseUrl + "&count=10")
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw new Error(`Response status: ${response.status}, not 200.`);
        })
        .then((res) => {
          // removes duplicates and non-images
          set((prev) => ({
            APODs: [
              ...new Set(
                prev.APODs.concat(
                  res.filter((post) => post.media_type === "image")
                )
              ),
            ],
          }));
          set(() => ({ isLoadingMore: false }));
        })
        .catch((error) => console.log(error.message));
    },
  }))
);
