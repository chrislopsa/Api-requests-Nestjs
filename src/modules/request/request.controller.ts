import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';


@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post(':type/:state')
  create(@Param('type') type: string, @Param('state') state: number, @Body() createRequestDto: CreateRequestDto) {
    return this.requestService.create(type, state, createRequestDto);
  }

  // @Post('visits')
  // createVisit(@Body() createRequestDto: CreateRequestDto) {
  //   return this.requestService.create(createRequestDto);
  // }

  @Get()
  findAll() {
    return this.requestService.getRequest();
  }
 
}
