import { create } from "zustand";
import axios from "axios";

const useKundliStore = create((set) => ({
  kundli: null,
  loading: false,

  generateKundli: async (data) => {
    set({ loading: true });

    try {
      const res = await axios.post("http://localhost:5000/api/kundli/generate",data,
        { withCredentials: true }
      );

      if (res.data.success) {
        set({ kundli: res.data.data, loading: false });
        console.log(res.data.data);
      } else {
        set({ kundli: null, loading: false });
        return { success: false, message: res.data.message || "Failed to generate kundli" };
      }
    } catch (error) {
      set({ kundli: null, loading: false });
      console.error("Error generating kundli:", error);
      return {
        success: false,
        message:
          error.response?.data?.message ||
          error.message ||
          "An unexpected error occurred while generating kundli.",
      };
    }
  },
}));

export default useKundliStore;