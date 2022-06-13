import { ItemController } from './controllers/product.controller';
import { Global, Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { BeansModule } from './beans/beans.module';
import { HttpExceptionFilter } from './configs/http.exception.filter';

@Global()
@Module({
  controllers: [ItemController],
  imports: [BeansModule],
  exports: [BeansModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class InfrastructureModule {}
