import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { messages } from '../messages/messages.entity';

@Entity()
export class contact {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", {length: 15, nullable: false,unique:true})
    contact: string

    @Column("varchar", {length: 255, nullable: false, unique: true})
    name: string

    @Column("varchar", {length: 255, nullable: true})
    profile: string

    @OneToMany(()=>messages,(Message)=>Message.send_by)
    sent_messages:messages[]

    @OneToMany(()=>messages,(Message)=>Message.send_to)
    received_messages:messages[]

}