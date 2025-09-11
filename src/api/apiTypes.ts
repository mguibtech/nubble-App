export interface MetaDataPageAPI {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  previous_page_url: string | null;
}

/**
 * @description Interface que define o formato de dados paginados retornados pela API
 * @template Data Tipo dos dados contidos na página
 */
export interface PageAPI<Data> {
  meta: MetaDataPageAPI;
  data: Data[];
}
