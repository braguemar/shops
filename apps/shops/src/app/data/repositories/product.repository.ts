import { ApiConfig } from './../configs/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductEntity } from '@shops/api-interfaces';

@Injectable()
export class ProductRepository {

  constructor(private httpClient: HttpClient) {}

  public search(query: string) {
    return this.httpClient.get<ProductEntity[]>(`${ApiConfig.search}${query}`);
  }

  public getItem(id: string) {
    return this.httpClient.get<ProductEntity>(`${ApiConfig.detail}${id}`);
  }
}
