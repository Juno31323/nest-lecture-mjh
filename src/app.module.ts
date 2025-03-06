import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BldgModule } from './bldg/bldg.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.CLOUDSQL_HOST,
      port: parseInt(process.env.CLOUDSQL_PORT || '5432', 10), // 기본값 설정1
      username: process.env.CLOUDSQL_USER,
      password: process.env.CLOUDSQL_PASS,
      database: process.env.CLOUDSQL_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      extra: { 
        // Cloud SQL Unix socket 경로 설정 
         socketPath: `/cloudsql/${process.env.CLOUDSQL_CONNECTION_NAME}`, 
      },
      
    }),
    BldgModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
