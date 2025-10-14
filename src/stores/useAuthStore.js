import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  isAuthenticated: false,

  // Set user data
  setUser: (user) => set({ 
    user, 
    isAuthenticated: true, 
    loading: false 
  }),

  // Clear user data
  clearUser: () => set({ 
    user: null, 
    isAuthenticated: false, 
    loading: false 
  }),

  // Check authentication status
  checkAuth: async () => {
    try {
      const response = await fetch(`https://astrolozee-backend.vercel.app/api/auth/get-user`, {
        method: 'GET',
        credentials: 'include' // Important: sends cookie
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        set({ 
          user: data, 
          isAuthenticated: true, 
          loading: false 
        });
        return true;
      } else {
        set({ 
          user: null, 
          isAuthenticated: false, 
          loading: false 
        });
        return false;
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      set({ 
        user: null, 
        isAuthenticated: false, 
        loading: false 
      });
      return false;
    }
  },

  // Logout function
  logout: async () => {
    try {
      await fetch(`https://astrolozee-backend.vercel.app/api/auth/logout`, {
        method: 'POST',
        credentials: 'include'
      });
      set({ 
        user: null, 
        isAuthenticated: false, 
        loading: false 
      });
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout error:', error);
    }
  }
}));

export default useAuthStore;