// hooks/useFetchUser.js
import { useState, useEffect } from 'react';
import { UserEntity } from '../models/UserEntity';

const useFetchUser = () => {
  const [user, setUser] = useState<UserEntity | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simular uma requisição assíncrona para buscar o usuário
    const fetchUser = async () => {
      try {
        // Substitua esta lógica pela sua autenticação real
        // Este exemplo apenas simula um atraso de 1 segundo
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Verifique se o usuário está autenticado (simulado aqui)
        const isAuthenticated = Math.random() < 0.5;

        if (isAuthenticated) {
          setUser();
        } else {
          setUser(null);
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsPending(false);
      }
    };

    fetchUser();
  }, []);

  return { isPending, error, user };
};

export default useFetchUser;
