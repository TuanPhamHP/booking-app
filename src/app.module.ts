import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import OrmConfig from './config/orm.config';
@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig.options), // Use the options from the OrmConfig
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
