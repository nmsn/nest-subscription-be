import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Photo {

  @Column({ name: '_id' })
  id: string;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('int')
  views: number;

  @Column()
  isPublished: boolean;
}
