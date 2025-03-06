import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 포트는 process.env.PORT에서 가져오고, 기본값은 8080
  const port = process.env.PORT || 8080;
  
  // 0.0.0.0에 바인딩하여 외부 요청 수신 가능하도록 설정
  await app.listen(port, '0.0.0.0');

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
