import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import Planet from './Planet';

@Entity("stations")
class Station {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    planet_id: number

    @ManyToOne(() => Planet, planet => planet.stations)
    @JoinColumn({ name: "planet_id" })
    planet: Planet
}

export default Station;