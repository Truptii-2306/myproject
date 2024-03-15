import { contact } from "./entities/contacts/contact.entity";
import { IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
    @IsNotEmpty()
    sendById: contact;

    @IsNotEmpty()
    sendToId: contact;

    @IsNotEmpty()
    msg_text:string;

    created_time:Date;
    delivered_time?:Date;
    read_time?:Date
}

