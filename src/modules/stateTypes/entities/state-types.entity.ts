import{
    Entity,
    Column,
    PrimaryGeneratedColumn 
} from 'typeorm'

@Entity('stateTypes')
export class StateType {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    name: string
}