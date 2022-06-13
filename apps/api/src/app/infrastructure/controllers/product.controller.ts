import { Controller, Get, Param, Query, Res } from "@nestjs/common";
import { ItemInteractor } from "../../application/interactors/product.interactor";

@Controller('items')
export class ItemController {
  constructor(private readonly  _itemInteractor: ItemInteractor) { }

  @Get()
  search(@Query('q') query) {
    return this._itemInteractor.search(query);
  }

  @Get(':id')
  detail(@Param('id') id: string) {
    return this._itemInteractor.detail(id);
  }
}
