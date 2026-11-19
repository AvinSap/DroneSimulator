import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScenariosModule } from './scenarios/scenarios.module';

@Module({
  imports: [ScenariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
