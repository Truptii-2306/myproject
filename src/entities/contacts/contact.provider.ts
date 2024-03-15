import { DataSource } from 'typeorm';
import { contact } from './contact.entity';

export const contactProviders = [
  {
    provide: 'CONTACT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(contact),
    inject: ['DATA_SOURCE'],
  },
];