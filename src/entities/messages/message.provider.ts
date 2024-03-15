import { DataSource } from 'typeorm';
import { messages } from './messages.entity';

export const messagesProviders = [
  {
    provide: 'MESSAGE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(messages),
    inject: ['DATA_SOURCE'],
  },
];