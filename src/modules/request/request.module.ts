import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from './entities/request.entity';
import { Create, FindAll, FindId, Update } from './services';

@Module({
  imports:[TypeOrmModule.forFeature([Request])],
  controllers: [RequestController],
  providers: [RequestService, Create, FindAll, FindId, Update],
})
export class RequestModule {}
