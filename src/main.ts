import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

import { AllExceptionFilter } from './common/filter/all-exception.filter';

declare const module: any;

import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(
    new AllExceptionFilter(),
  );

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
