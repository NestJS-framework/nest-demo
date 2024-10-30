import { Module } from '@nestjs/common';
import {
  AdminController,
  AppController,
  CMatsController,
} from './app.controller';
import { AppService } from './app.service';
import { CustomerController } from './customer/customer.controller';
import { Cats2Controller } from './cats2/cats2.controller';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
