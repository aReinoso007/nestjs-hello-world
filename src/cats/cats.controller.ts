import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'this action returns all cats';
  }

  @Post()
  create(): string {
    return 'this action adds a new cat';
  }
}
