import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { Create, FindAll, FindId, Update } from './services';
import { Request } from './entities/request.entity';

@Injectable()
export class RequestService {
 constructor(
  private readonly createRequest: Create,
  private readonly findAll: FindAll,
  private readonly findId: FindId,
  private readonly update: Update
 ){}

 async create(type: string, state: number, createRequestDto: CreateRequestDto): Promise<Request>{
   return this.createRequest.create(type, state, createRequestDto)
 }

 async getRequest(): Promise<Request[]>{
   return this.findAll.getAllRequest()
 }

}
