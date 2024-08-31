import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Type} from "../entities/type-request.entity";

@Injectable()
export class FindTypeId {
    constructor(
        @InjectRepository(Type) private typeRequestRepository: Repository<Type>,
    ){};

    findTypeRequestId (name: string): number {
        // const typeRequest: TypeRequest = await this.typeRequestRepository.findOne({ 
        //     where:{
        //         name: name
        //     } 
        // })
        // console.log("typeRequestId",typeRequest);
        // console.log("typeRequestnamw",typeRequest);
        let typeRequestId : number = 1;
        if(name === "visit"){
            typeRequestId = 2;
        }
        
        return typeRequestId;
    }
}