import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from './entities/request.entity';
import { Create, FindAll, FindId, Update } from './services';
import { FindTypeId } from '../requestTypes/services';
import { Type } from '../requestTypes/entities/type-request.entity';
import { StateType } from '../stateTypes/entities/state-types.entity';
import { FindStateId } from '../stateTypes/services';

@Module({
  imports: [TypeOrmModule.forFeature([Request, Type, StateType])],
  controllers: [RequestController],
  providers: [RequestService, Create, FindAll, FindId, Update, FindTypeId, FindStateId],
})
export class RequestModule {}
