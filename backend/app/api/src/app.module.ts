import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { FilesModule } from './modules/files/files.module';
import { UsersModule } from './modules/users/users.module';
import databaseConfig from './config/db.config';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    //ConfigModule
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [databaseConfig],
    }),

    //TypeORM
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.getOrThrow<TypeOrmModuleOptions>('database'),
      }),
      inject: [ConfigService],
    }),
    FilesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
