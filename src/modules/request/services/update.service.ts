import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Request } from "../entities/request.entity";
import { Repository } from "typeorm";
import { UpdateRequestDto } from '../dto/update-request.dto'
import { error } from "console";

@Injectable()
export class Update {
    constructor(
        @InjectRepository(Request) private requestRepository: Repository<Request>,
    ){};

    async updateAndNewRequest(id: number, updateRequestDto: UpdateRequestDto): Promise<void> {
        const IdRequest = await this.requestRepository.findOneBy({id});
        if (!IdRequest) {
            throw new NotFoundException("The Id request not found");
        }

        if(IdRequest.id_state === 1) {
            IdRequest.id_state = 3;
            await this.requestRepository.save(IdRequest);
        }

        const newRequest = this.requestRepository.create({
            ...IdRequest,
            id: undefined,
            date: new Date(updateRequestDto.date),
            
        });

        await this.requestRepository.save(newRequest);

      }
}
