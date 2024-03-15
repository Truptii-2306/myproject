import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, JoinTable } from 'typeorm';
import { contact } from '../contacts/contact.entity';

@Entity()
export class messages {
    @PrimaryGeneratedColumn()
    msg_id: number

    @ManyToOne(() => contact,(Contact)=>Contact.sent_messages,{nullable: false})
    @JoinColumn({name:"send_by"})
    send_by: contact;

    @ManyToOne(() => contact,(Contact)=>Contact.received_messages,{nullable: false})
    @JoinColumn({name:"send_to"})
    send_to: contact;

    @Column({type:"longtext",nullable: false})
    msg_text: string

    @Column({type:"timestamp",default: () => 'CURRENT_TIMESTAMP',nullable: false})
    created_date:Date

    @Column({type:"timestamp",nullable: true})
    delivered_time:Date

    @Column({type:"timestamp",nullable: true})
    read_time:Date
}