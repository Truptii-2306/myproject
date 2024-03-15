import { Controller,Get, Param } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { contact } from "./contact.entity";

@Controller()
export class ContactController{
    constructor(private contactService: ContactService) {}

    @Get()
    getAllUser(): Promise<contact[]> {
        return this.contactService.findAll();
    }

    @Get("/:Id")
    getUserById(@Param('Id') Id:string): Promise<contact>{
        return this.contactService.findOne(Id);
    }

    @Get("/msg/:id")
    getContactsMsgs(@Param('id') id:string){
    return this.contactService.fetchContactMessages(+id)
    }
}