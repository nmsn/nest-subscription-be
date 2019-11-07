import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rsshub {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column({ length: 500 })
  description: string;

  @Column()
  pubDate: string;
}
