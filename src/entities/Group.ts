import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  group_name: string;

  @Column()
  group_description: string;
}
