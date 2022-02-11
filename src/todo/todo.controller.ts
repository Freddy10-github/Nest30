import { Controller, Get, Param } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  @Get(':id')
  getRank(@Param() params: { id: number }) {
    const { id } = params;
    if (typeof id !== 'number') {
      return 'type error';
    }
    return {
      id,
      title: `Title ${id}`,
      description: 'I am rank ' + id,
    };
  }
}
