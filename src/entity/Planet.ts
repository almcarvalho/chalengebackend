import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Station from './Station';

@Entity("planets")
class Planet {
    @PrimaryGeneratedColumn({ name: "planet_id" })
    planetId: number

    @Column()
    name: string

    @Column({ type: "float" })
    mass: number

    @Column({ type: "boolean" })
    hasstation: boolean

    @OneToMany(() => Station, station => station.planet)
    station: Station[]

}

export default Planet;