import {
    Entity,
    Column,
    PrimaryGeneratedColumn 
  } from 'typeorm';

@Entity('requestTypes')
export class Type {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  name: string;
}
 