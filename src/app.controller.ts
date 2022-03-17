import { Controller, Get, HttpCode, Param, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('animals')
export class AppController {
  // constructor(private readonly appService: AppService) {}
  @Get('/dogs')
  create(): string {
  
    return 'This action adds a new cat';
  }

  // @Get('cats')
  // findAll() {
  //   console.log('444阿1松大');
  //   return '12344'
    
  // }

  @Get(':id')
  findOne(@Param('id') id): string {
    // console.log(params.id);
    return `This action returns a #${id} cat`;
  }

  // getHello(): string {
  //   return 'HELLO';
  // }
}