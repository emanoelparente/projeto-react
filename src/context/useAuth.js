import { useContext } from 'react';
import { AuthContext } from './AuthContext'; // ajuste o caminho se necessário

export function useAuth() {
  return useContext(AuthContext);
}
