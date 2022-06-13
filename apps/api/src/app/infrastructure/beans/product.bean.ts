import { ImplProductRepository } from './../services/product.service';
import { Provider } from "@nestjs/common";
import { ProductRepository } from "../../domain/repositories/product.repository";
import { HttpService } from '@nestjs/axios';

export const PRODUCT_BEAN: Provider[] = [
  {
    provide: ProductRepository,
    useFactory: (httpService: HttpService) => new ImplProductRepository(httpService),
    inject: [HttpService]
  }
];
