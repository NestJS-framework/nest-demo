import { Injectable } from '@nestjs/common';
import { CreateCatDto } from '../create-cat.dto';
import { Cat } from 'src/interfaces/cat.interface';

@Injectable()
export class CatsService {
  private cats = [];

  create(createCatDto: CreateCatDto) {
    this.cats.push(createCatDto);
  }

  findAll() {
    return this.cats;
  }
  findOne(id: number): any {
    return this.cats.filter((item) => item.id == id);
  }
}
