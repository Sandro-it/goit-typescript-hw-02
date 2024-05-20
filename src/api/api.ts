import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

const fetchApi = async (
  query: string,
  currentPage: number
): Promise<Response> => {
  const responce = await axios.get(
    `/?client_id=uT2ew7XWMEiXCmenzpjTq7zwrxqSGKrdY78JNVB5PyA&orientation=landscape&query=${query}&per_page=12&page=${currentPage}`
  );
  return responce;
};

export default fetchApi;

export interface Response {
  data: {
    total: number;
    total_pages: number;
    results: any[];
  };
}
