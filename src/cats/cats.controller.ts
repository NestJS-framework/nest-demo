import { Cat } from './../interfaces/cat.interface';
import { CreateCatDto } from './../create-cat.dto';
import { Body, Controller, Get, Header, HostParam, HttpCode, Param, Post, Query, Redirect, Req , Request} from '@nestjs/common';
import { CatsService } from './cats.service';


@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
      this.catsService.create(createCatDto);
    }
  
    @Get()
    async findAll(): Promise<Cat[]> {
      return this.catsService.findAll();
    }
}