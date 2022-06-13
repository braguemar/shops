import { ProductEntity } from "@shops/api-interfaces";
import { ProductDto } from "../dtos/product.dto";

export class ProductMapper {
  public static from(product: ProductDto, description = '', categories: string[] = []): ProductEntity {
    return {
      author: {
        name: 'Brandon Felipe',
        lastname: 'Guerrero Martinez',
      },
      item: {
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        pictures: this.getPictures(product?.pictures),
        condition: product.condition,
        soldQuantity: product.sold_quantity,
        isFreeShipping: product.shipping?.free_shipping,
        description,
        price: {
          amount: product.price,
          currency: product.currency_id,
          decimals: this.getDecimals(product.price),
        },
        state: product.address.state_name
      },
      categories,
    };
  }

  public static fromList(products: ProductDto[]): ProductEntity[] {
    return products.map((product) => this.from(product));
  }

  private static getPictures(pictures: ProductDto['pictures']) {
    return pictures?.map((picture) => picture?.url);
  }

  private static getDecimals(amount: number): number {
    const [, decimals] = amount.toString().split('.');

    return decimals?.length ?? 0;
  }
}
