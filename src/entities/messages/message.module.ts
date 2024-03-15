import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { messagesProviders } from './message.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MessageController],
  providers: [
    ...messagesProviders,
    MessageService,
  ],

})

export class MessageModule {}