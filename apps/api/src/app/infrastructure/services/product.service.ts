import { map } from 'rxjs';
import { HttpService } from "@nestjs/axios";
import { ProductRepository } from "../../domain/repositories/product.repository";
import { ApiConfig } from "../configs/api.config";

export class ImplProductRepository implements ProductRepository {

  constructor(private httpService: HttpService) {}

  public search(query: string) {
    return this.httpService.get(`${ApiConfig.search}${query}&limit=4`).pipe(map(response => response.data)).toPromise();
  }

  public detail(id: string) {
    return this.httpService.get(`${ApiConfig.items}${id}`).pipe(map(response => response.data)).toPromise();
  }

  public getDescription(id: string) {
    return this.httpService.get(`${ApiConfig.items}${id}/description`).pipe(map(response => response.data)).toPromise();
  }

  public async getCategories(id: string) {
    const data = await this.httpService.get(`${ApiConfig.categories}${id}`).pipe(map(response => response.data)).toPromise();

    return data.path_from_root.map(({name}) => name);
  }
}
