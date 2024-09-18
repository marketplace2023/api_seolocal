import { Gbp } from 'src/gbps/entities/gbp.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phoneNumber: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Gbp, (gbp) => gbp.client)
  gbps: Gbp[];

  @CreateDateColumn()
  createdAt: Date;
}
