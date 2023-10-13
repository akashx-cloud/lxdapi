import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { InstanceController } from './instance/instance.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, InstanceController],
  providers: [AppService],
})
export class AppModule {}
