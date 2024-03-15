import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ContactModule } from './entities/contacts/contact.module';
import { MessageModule } from './entities/messages/message.module';

@Module({
  imports: [DatabaseModule,ContactModule,MessageModule],

})

export class AppModule {}
