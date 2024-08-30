import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from 'src/common/config/connection-db.config';
import { RequestModule } from './request/request.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfigService,
    }),
    RequestModule,
  ],
  providers: [DatabaseConfigService],
  exports: [DatabaseConfigService],
})
export class DatabaseModule {}
