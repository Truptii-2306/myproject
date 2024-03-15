import { DataSource } from 'typeorm';
import { contact } from '../entities/contacts/contact.entity';
import { messages } from 'src/entities/messages/messages.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Trupti',
        database: 'whatsapp',
        entities: [
            contact,
            messages
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];