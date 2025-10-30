import { create } from "zustand";
import axios from "axios";

const useAIStore = create((set) => ({
  chats: [],
  chatsLoading: false,
  error: null,

  fetchChats: async () => {
    set({ chatsLoading: true, error: null });

    try {
      const res = await axios.get("https://api.astrolozee.com/api/astro/history", {
        withCredentials: true,
      });

      if (res.data.success) {
        set({ chats: res.data.data.questions, chatsLoading: false });
        console.log(res.data.data.questions);
      } else {
        set({
          chats: [],
          chatsLoading: false,
          error: res.data.message || "Failed to fetch chat history",
        });
      }
    } catch (err) {
      console.error("Error fetching chats:", err);
      set({
        chats: [],
        chatsLoading: false,
        error:
          err.response?.data?.message ||
          err.message ||
          "An unexpected error occurred while fetching chats.",
      });
    }
  },

  sendMessage : async(data) => {
    try {
        const res = await axios.post("https://api.astrolozee.com/api/astro/ask",data,{
            withCredentials:true,
        });
        if(res.data.success){
            set((state) => ({
                chats: [...state.chats, res.data.data],
            }));
            console.log(res.data.data);
        }
        else{
            return { success: false, message: res.data.message || "Failed to send message" };
        }

    } catch (error) {
        console.error("Error sending message:", error);
        return { 
            success: false, 
            message: error.response?.data?.message || error.message || "An unexpected error occurred while sending the message." 
        };
    }
  }
}));

export default useAIStore;
