import { Global, Module } from "@nestjs/common";
import { ItemInteractor } from "./interactors/product.interactor";

@Global()
@Module({
  providers: [ItemInteractor],
  exports: [ItemInteractor],
})
export class ApplicationModule { }
