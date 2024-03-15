import { Equal, Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { contact } from './contact.entity';

export class ContactService{
    constructor(
        @Inject('CONTACT_REPOSITORY')
        private contactRepository: Repository<contact>,
      ) {}
async findAll(): Promise<contact[]> {
    return this.contactRepository.find();
  }

  async fetchContactMessages(id: number){
    const contacts=await this.contactRepository.find({
      where:{
        id
      },
      relations:["sent_messages","received_messages"]
    })
    return contacts
  }

  findOne(Id : string): Promise<contact> {
    const id=parseInt(Id)
    return this.contactRepository.findOne({
      where: {
        id
      },
    });
  }
}