import { ItemPriceEntity } from './item-price.entity';

export interface ItemEntity {
  id: string;
  title: string;
  thumbnail: string;
  pictures: string[];
  condition: string;
  isFreeShipping: boolean;
  soldQuantity?: number;
  description?: string;
  price: ItemPriceEntity;
  state: string;
}
