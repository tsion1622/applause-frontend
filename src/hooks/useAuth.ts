import { useAuthStore } from '@/stores/useAuth';  // adjust path if needed

export const useAuth = () => {
  const token = useAuthStore(state => state.accessToken);
  
  return { token };
};
