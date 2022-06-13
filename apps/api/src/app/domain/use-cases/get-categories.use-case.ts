import { ProductRepository } from "../repositories/product.repository";

export class GetCategoriesUseCase {
  constructor(protected repository: ProductRepository) {}

  public execute(id: string) {
    return this.repository.getCategories(id);
  }
}
