import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './module/content/content.module';

@Module({
  imports: [ContentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
