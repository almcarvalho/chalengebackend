import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class stationsMigration1629064504681 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "stations",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "planet_id",
                        type: "integer",
                        isNullable: false,
                    }
                ],
                foreignKeys: [
                    {
                        name: "PlanetStation",
                        referencedTableName: "planets",
                        referencedColumnNames: ["id"],
                        columnNames: ["planet_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("stations");
    }

}
