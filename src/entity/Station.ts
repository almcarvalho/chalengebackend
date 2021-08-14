import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import Planet from './Planet';

@Entity("stations")
class Station {
    @PrimaryGeneratedColumn({ name: "station_id" })
    stationId: number

    @Column()
    name: string


    @Column({ type: "int", name: "planet_id" })
    planetId: number
    @ManyToOne(() => Planet, planet => planet.station)
    @JoinColumn({ name: "planet_id" })
    planet: Planet

}

export default Station;