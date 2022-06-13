import { ProductRepository } from '../repositories/product.repository';

export class SearchProductUseCase {
  constructor(protected repository: ProductRepository) {}

  public execute(query: string) {
    return this.repository.search(query);
  }
}
