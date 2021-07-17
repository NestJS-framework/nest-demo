import { Module } from '@nestjs/common';
import { AdminController, AppController, CMatsController,  } from './app.controller';
import { AppService } from './app.service';
import { CustomerController } from './customer/customer.controller';
import { Cats2Controller } from './cats2/cats2.controller';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [AppController, CMatsController, CustomerController, AdminController, Cats2Controller],
  providers: [AppService, CatsService],
})
export class AppModule {}
