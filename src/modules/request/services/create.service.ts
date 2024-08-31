import { Injectable, PayloadTooLargeException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Request } from "../entities/request.entity";
import { Repository } from "typeorm";
import { CreateRequestDto } from "../dto/create-request.dto";
import { FindTypeId } from "../../requestTypes/services";
import { FindStateId } from "src/modules/stateTypes/services";

@Injectable()
export class Create {
    constructor(
        @InjectRepository(Request) private requestRepository: Repository<Request>,
        private readonly findTypeId: FindTypeId,
        private readonly findStateId: FindStateId
    ){};

    
    async create(type: string, state: number, requestData: CreateRequestDto): Promise<Request>{
        const typeId =  this.findTypeId.findTypeRequestId(type);
        const stateId = await this.findStateId.findStateId(state);
        console.log("stateId",stateId);
        

        requestData.id_requestType = typeId;
        requestData.id_state = stateId;
        
        
        
        
       const newRequest = this.requestRepository.create(requestData);
       return this.requestRepository.save(newRequest);
      }
};