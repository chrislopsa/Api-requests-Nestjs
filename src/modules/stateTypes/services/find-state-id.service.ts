import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { StateType } from "../entities/state-types.entity"; 

@Injectable()
export class FindStateId{
    constructor(
        @InjectRepository(StateType) private stateRepository: Repository<StateType>
    ){};

    async findStateId (id: number): Promise<number>{
        const state: StateType = await this.stateRepository.findOne({
            where: {
                id
            }
        })
        console.log("state",state);
        return state.id;
    }
}