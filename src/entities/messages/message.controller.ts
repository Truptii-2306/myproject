import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateMessageDto } from "src/createMessage.dto";
import { messages } from "./messages.entity";
import { MessageService } from "./message.service";

@Controller()
export class MessageController{
    constructor(private messageService: MessageService){}
    @Get("/:Id/:send_by/:send_to")
        getMessages(@Param('send_by') send_by:string,@Param('send_to') send_to:string): Promise<messages[]>{    
        return this.messageService.findMessagesByUser(send_by,send_to)
    }

    @Post()
        async create(@Body() createMessageDto: CreateMessageDto) {  
        return this.messageService.createMessage(createMessageDto);
    }

    @Delete("/:id")
    async deleteContact(@Param('id') id:string){
      if(!await this.messageService.findOneMsg(id)){
        return  {message : "Invalid Message"}
      }
      await this.messageService.delete(id)
      return {message : "Message deleted successfully"}
    }
}