import { Controller, Get, Header, HttpCode, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'this action returns all cats';
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'this action adds a new cat';
  }

  @Get('ab*cd')
  findAllWildCard(): string {
    return 'this route uses a wildcard';
  }

  @Get('/hola')
  hola(): string {
    return 'hola bebe';
  }
}
