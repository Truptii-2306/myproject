import { Module } from '@nestjs/common';
import { contactProviders } from './contact.provider';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ContactController],
  providers: [
    ...contactProviders,
    ContactService,
  ],

})

export class ContactModule {}