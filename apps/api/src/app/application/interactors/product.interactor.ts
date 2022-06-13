import { Injectable, Scope } from "@nestjs/common";
import { ProductRepository } from "../../domain/repositories/product.repository";
import { DetailProductUseCase } from "../../domain/use-cases/detail-product.use-case";
import { GetCategoriesUseCase } from "../../domain/use-cases/get-categories.use-case";
import { GetDescriptionUseCase } from "../../domain/use-cases/get-description.use-case";
import { SearchProductUseCase } from "../../domain/use-cases/search-product.use-case";
import { ProductMapper } from "../mappers/product.mapper";

@Injectable({ scope: Scope.REQUEST })
export class ItemInteractor {
  private _searchProductUseCase: SearchProductUseCase;
  private _detailProductUseCase: DetailProductUseCase;
  private _getDescriptionUseCase: GetDescriptionUseCase;
  private _getCategoriesUseCase: GetCategoriesUseCase;

  constructor(private repository: ProductRepository) {
    this._searchProductUseCase = new SearchProductUseCase(this.repository);
    this._detailProductUseCase = new DetailProductUseCase(this.repository);
    this._getDescriptionUseCase = new GetDescriptionUseCase(this.repository);
    this._getCategoriesUseCase = new GetCategoriesUseCase(this.repository);
  }

  public async search(query: string) {
    const response = await this._searchProductUseCase.execute(query);

    const products = ProductMapper.fromList(response.results);

    products[0].categories = await this._getCategoriesUseCase.execute(response.results[0]?.category_id);

    return products;
  }

  public async detail(id: string) {
    const response = await this._detailProductUseCase.execute(id);
    const description = await this._getDescriptionUseCase.execute(id);
    const categories = await this._getCategoriesUseCase.execute(response.category_id);

    return ProductMapper.from(response, description.plain_text, categories);
  }
}
