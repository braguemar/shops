import { ProductRepository } from "../repositories/product.repository";

export class DetailProductUseCase {
  constructor(protected repository: ProductRepository) {}

  public execute(id: string) {
    return this.repository.detail(id);
  }
}
