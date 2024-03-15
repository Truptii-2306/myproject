import { Inject, Injectable } from "@nestjs/common"
import { messages } from "./messages.entity"
import { Equal } from "typeorm"
import { CreateMessageDto } from "src/createMessage.dto"
import { Repository } from 'typeorm';

@Injectable()
export class MessageService{
    constructor(
        @Inject('MESSAGE_REPOSITORY')
        private messagesRepository:Repository<messages>
    ) {}
    findOneMsg(id:string):Promise<messages>{
        const msg_id=parseInt(id)
        return this.messagesRepository.findOne({
          where:{
            msg_id
          },
        })
      }

    async findMessagesByUser(send_by: string,send_to:string):Promise<messages[]> {
        const sendBy=parseInt(send_by)
        const sendTo=parseInt(send_to)
        return this.messagesRepository.find({
          where: [
            { send_by: Equal(sendBy), send_to: Equal(sendTo) },
            { send_by: Equal(sendTo), send_to: Equal(sendBy) },
          ],
        });
      }
  
    async createMessage(createMessageDto:CreateMessageDto):Promise<messages>{
        const message=this.messagesRepository.create(createMessageDto)
        return this.messagesRepository.save(message)
      }

    async delete(id: string): Promise<void> {
        const Id=parseInt(id)
       await this.messagesRepository.delete(Id);
      }
}