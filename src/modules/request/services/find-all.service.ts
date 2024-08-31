import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Request } from "../entities/request.entity";

@Injectable()
export class FindAll {
    constructor(
        @InjectRepository(Request) private requestRepository: Repository<Request>
    ){};
    
    async getAllRequest(): Promise<Request[]>{
        const request = await this.requestRepository.find();
        return request
    }

    async getRequest(id: number): Promise<Request>{
        const request = await this.requestRepository.findOne({where:{id}});
        return request
    }

}