/**
 * Hook personalizado para gerenciar o estado do usuário e buscar dados do usuário.
 * Retorna o estado do usuário e uma função para buscar os dados do usuário.
 * Os dados do usuário são obtidos de uma API RESTful.
 */
import { useState, useEffect } from 'react';
import axios from 'axios';

const useUser = () => {
  // Define o estado do usuário
  const [user, setUser] = useState([]);

  // Função assíncrona para buscar os dados do usuário na API
  const fetchUser = async () => {
    try {
      // Faz uma requisição GET para obter os dados do usuário
      const response = await axios.get('http://localhost:3000/user');
      // Extrai os dados do usuário da resposta
      const data = response.data.user;
      // Verifica se há dados de usuário disponíveis
      if (data.length > 0) {
        // Define os dados do primeiro usuário encontrado no estado
        setUser(data[0]);
      } else {
        // Se não houver usuário, define o estado com campos vazios
        setUser({
          nome: "",
          idade: 0,
          dataDeNascimento: "",
          rua: "",
          numero: 0,
          complemento: "",
          bairro: "",
          cidade: "",
          estado: "",
          biografia: "",
          avatar: ""
        });
      }
    } catch (error) {
      // Registra qualquer erro ocorrido durante a obtenção dos dados do usuário
      console.error('Erro ao obter usuário:', error);
    }
  };

  // Hook useEffect para executar a busca dos dados do usuário uma vez após a renderização inicial
  useEffect(() => {
    fetchUser();
  }, []);

  // Retorna o estado do usuário e a função para buscar os dados do usuário
  return { user, fetchUser };
};

export default useUser;
