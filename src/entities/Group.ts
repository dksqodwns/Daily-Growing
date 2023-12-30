import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  group_name: string;

  @Column()
  group_description: string;
}
