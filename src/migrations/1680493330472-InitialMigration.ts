import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1680493330472 implements MigrationInterface {
    name = 'InitialMigration1680493330472'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "first_name" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "name" TO "first_name"`);
    }

}
