import axios from 'axios';
import { useQuery } from 'react-query';
import { ApiList, Product } from 'app/types';

let API_URL = 'http://localhost:3000/api/v1';

export function useProducts() {
  return useQuery<ApiList<Product>>("products", async () => {
    const response = await axios.get(
      `${API_URL}/products`
    );
    return response.data;
  });
}


export { API_URL };
