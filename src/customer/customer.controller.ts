import { Controller, Get, Query, Post, Body, Put, Param, Delete, Res, HttpStatus } from '@nestjs/common';
// library-specific response object. 
import { Response } from 'express';

@Controller('customer')
export class CustomerController {
    @Post()
    create(@Res() res: Response) {
      res.status(HttpStatus.CREATED).send();
    }
  
    @Get()
    findAll(@Res() res: Response) {
       res.status(HttpStatus.OK).json([]);
    }

    @Get()
findAll2(@Res({ passthrough: true }) res: Response) {
  res.status(HttpStatus.OK);
  return [];
}
}
