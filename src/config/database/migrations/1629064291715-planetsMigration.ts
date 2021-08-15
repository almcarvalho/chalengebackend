import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class planetsMigration1629064291715 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "planets",
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
                        name: "mass",
                        type: "decimal",
                        isNullable: false,
                    },
                    {
                        name: "has_station",
                        type: "boolean",
                        isNullable: false,
                        default: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("planets")
    }

}
