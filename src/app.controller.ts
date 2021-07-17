import { Body, Controller, Get, Header, HostParam, HttpCode, HttpException, HttpStatus, Param, Post, Query, Redirect, Req , Request} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { AppService } from './app.service';
import { CreateCatDto } from './create-cat.dto';
// Controllers are responsible for handling incoming requests and returning responses to the client
// @Controller() decorator allows us to easily group a set of related routes
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // A basic controller with a single route.
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
}
// http://localhost:3000/cats
@Controller('cats')
export class CMatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  // the request object represents the HTTP request and has properties for the request query string, parameters, HTTP headers, and body
  // http://localhost:3000/cats/by
  @Get('by')
  findAll2(@Req() request: Request): string {
    return 'This action returns all findAll2';
  }

  @Post()
  @HttpCode(204)  // it is optional  you can  easily change this behavior 
  @Header('Cache-Control', 'none') // it is also optional
  create(@Body() createCatDto: CreateCatDto): string {
    return 'This action adds a new cat';
  }




  // Route wildcards - 
  // The 'ab*cd' route path will match abcd, ab_cd, abecd, and so on
  // http://localhost:3000/cats/abcd
  @Get('ab*cd')
  findAll3() {
  return 'This route uses a wildcard';
}

// http://localhost:3000/cats/decoratorRedirect  - return webpage and If you run this in postman it return html
@Get('decoratorRedirect')
// The default value of statusCode is 302 (Found) if omitted.
@Redirect('https://nestjs.com', 301)
findAll4() {
}

// accept dynamic data
@Get(':id')
findOne(@Param() params): string {
  console.log(params.id);
  return `This action returns a #${params.id} cat`;
}

@Get(':id')
findTwo(@Param('id') id: string): string {
  return `This action returns a #${id} cat`;
}

@Get()
async asynchronicity(): Promise<any[]> {
  return [];
}

@Get()
dataExtraction(): Observable<any[]> {
  return of([]);
}


// For typical HTTP REST/GraphQL API based applications, it's best practice to send standard HTTP response objects when certain error conditions occur.
@Get()
async throwingStandardExceptions() {
  // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  throw new HttpException({
    status: HttpStatus.FORBIDDEN,
    error: 'This is a custom message',
  }, HttpStatus.FORBIDDEN);
}

@Get('docs')
@Redirect('https://docs.nestjs.com', 302)
getDocs(@Query('version') version) {
  if (version && version === '5') {
    return { url: 'https://docs.nestjs.com/v5/' };
  }
}
}

// Sub-Domain Routing
@Controller({ host: 'admin.example.com' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }

  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }


}