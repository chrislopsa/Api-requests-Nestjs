import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from '../entities/request.entity';
import { Repository } from 'typeorm';
import { CreateRequestDto } from '../dto/create-request.dto';

@Injectable()
export class Create {
  constructor(
    @InjectRepository(Request) private requestRepository: Repository<Request>,
  ) {}
  async create(requestData: CreateRequestDto): Promise<Request> {
    return;
  }
}
