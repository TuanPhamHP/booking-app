import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { PostsModule } from './modules/posts/posts.module';
import OrmConfig from './config/orm.config';
@Module({
  imports: [TypeOrmModule.forRoot(OrmConfig.options), UsersModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
