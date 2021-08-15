import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Station from './Station';

@Entity("planets")
class Planet {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column()
    mass: number

    @Column()
    has_station: boolean

    @OneToMany(() => Station, station => station.planet)
    stations: Station[]
}

export default Planet;