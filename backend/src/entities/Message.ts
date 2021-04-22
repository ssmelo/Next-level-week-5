import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { User } from "./src/entities/User";

@Entity("messages")
class Message {
    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    text: string;

    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User) // muitas mensagens(many) para um usuario(one)
    user: User;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Message }