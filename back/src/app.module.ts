import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { FilesModule } from './files/files.module';
import {MulterModule} from "@nestjs/platform-express";
import { SharpModule } from './sharp/sharp.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    PrismaModule,
    FilesModule,
    MulterModule.register({
      dest: './pictures',
    }),
    SharpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
