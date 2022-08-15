import axios from 'axios';

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
}); // baseURL é o endereço do serviço

export default api; // exporta a api para ser usada em outros lugares do projeto
