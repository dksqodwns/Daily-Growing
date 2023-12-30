import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  contents: string;
}
