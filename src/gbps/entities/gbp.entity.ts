import { Client } from 'src/clients/entities/client.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class Gbp {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Client, (client) => client.gbps)
  client: Client;

  @Column()
  companyName: string;

  @Column()
  bussinessType: string;

  @Column({ unique: true })
  email: string;

  @Column()
  bussinessCategory: string;

  @Column()
  servicesArea: string;

  @Column()
  phoneNumber: string;

  @Column()
  website: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  address: string;

  @Column()
  postalCode: string;

  @Column('text', { array: true }) // This will store an array of additional services
  additionalServices: string[];

  @Column('text', { array: true }) // Assuming schedules will be an array of strings or objects
  schedules: string[]; // TODO: change to Schedule[] once Schedule entity is defined

  @Column('text')
  largeDescription: string;

  @Column()
  pinterest: string;

  @Column()
  tiktok: string;

  @Column()
  linkedin: string;

  @Column()
  instagram: string;

  @Column()
  facebook: string;

  @Column()
  twitter: string;

  @Column()
  youtube: string;

  @Column('text')
  shortDescription: string;

  @Column('text')
  customersOpinions: string;

  @Column('text')
  featuredProperties: string;

  @Column('text', { array: true }) // Placeholder for AppointmentContact[]
  appointmentsContacts: string[]; // TODO: change to AppointmentContact[] once entity is defined

  @Column('text', { array: true }) // Placeholder for RelatedAgency[]
  relatedAgencies: string[]; // TODO: change to RelatedAgency[] once entity is defined

  @Column('text', { array: true }) // Placeholder for PaymentMethod[]
  paymentMethods: string[]; // TODO: change to PaymentMethod[] once entity is defined

  @Column('text')
  hashtags: string;

  @Column('text')
  keywords: string;

  @Column()
  slongan: string;

  @Column()
  startOperations: string;

  @Column()
  certification: string;

  @Column('text')
  positions: string;

  @Column('text')
  description: string;

  @CreateDateColumn()
  createdAt: Date;
}
