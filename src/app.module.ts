import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    TasksModule,
    UsersModule,
    MongooseModule.forRoot(process.env.mongoDbString),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
