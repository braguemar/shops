import { HttpModule } from '@nestjs/axios';
import { Global, Module } from "@nestjs/common";
import { PRODUCT_BEAN } from "./product.bean";

const BEANS = [
  ...PRODUCT_BEAN,
];

@Global()
@Module({
  imports: [HttpModule],
  providers: BEANS,
  exports: BEANS,
})
export class BeansModule { }
