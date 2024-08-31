import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Request {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int')
  id_property: number;

  @Column('int')
  id_client: number;

  @Column('int')
  id_state: number;

  @Column('int')
  id_requestType: number;

  @Column('int')
  id_owner: number;

  @Column('int')
  id_role: number;

  @Column('date')
  date: Date;

  @Column('varchar')
  proposed_time: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;
}
