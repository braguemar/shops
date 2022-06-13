import { environment } from "apps/api/src/environments/environment";

export const ApiConfig = Object.freeze({
  search: `${environment.api}sites/MCO/search?q=`,
  items: `${environment.api}items/`,
  categories: `${environment.api}categories/`,
});
