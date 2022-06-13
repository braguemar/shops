import { ProductRepository } from "../repositories/product.repository";

export class GetDescriptionUseCase {
  constructor(protected repository: ProductRepository) {}

  public execute(id: string) {
    return this.repository.getDescription(id);
  }
}
