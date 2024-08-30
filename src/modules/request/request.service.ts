import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { Create, FindAll, FindId, Update } from './services';

@Injectable()
export class RequestService {
 constructor(
  private readonly createRequest: Create,
  private readonly findAll: FindAll,
  private readonly findId: FindId,
  private readonly update: Update
 ){}

 async create(createRequestDto: CreateRequestDto): Promise<Request>{
   return //this.createRequest.create(createRequestDto)
 }

}
