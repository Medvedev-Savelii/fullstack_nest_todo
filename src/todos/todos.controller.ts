import { Get, Controller, Param, Post, Body, HttpCode, HttpStatus, Header, Patch, Delete } from '@nestjs/common';
import { ChangeTodo } from './dto/change-todo.dto';
import { CreateTodo } from './dto/create-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAllTodods() {
    return this.todosService.findAll();
  }

  @Get(':id')
  getOneTodo(@Param('id') id: string) {
    return this.todosService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-Type', 'application/json')
  createTodo(@Body() createTodo: CreateTodo) {
    console.log('createTodo', createTodo);
    return this.todosService.create(createTodo);
  }

  @Patch(':id')
  changeTodo(@Body() changeTodo: ChangeTodo, @Param('id') id: string) {
    return this.todosService.update(id, changeTodo);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todosService.remove(id);
  }
}
