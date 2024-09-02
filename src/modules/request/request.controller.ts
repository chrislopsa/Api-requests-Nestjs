import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';


@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestService.create(createRequestDto);
  }

  @Get()
  findAll() {
    return this.requestService.getRequest();
  }
 
  @Patch(':id')
  async updateandCreate(@Param('id', ParseIntPipe) id:number, @Body() updateRequestDto: UpdateRequestDto): Promise<void> {
    await this.requestService.Update(id, updateRequestDto);
  }
}
