import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { Create, FindAll, FindId, Update } from './services';
import { Request } from './entities/request.entity';
import { UpdateRequestDto } from './dto/update-request.dto';

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

 async getRequest(): Promise<Request[]>{
   return this.findAll.getAllRequest()
 }
async Update(id:number, updateRequestDto: UpdateRequestDto): Promise<void>{
   return this.update.updateAndNewRequest(id, updateRequestDto)
 
}
}
