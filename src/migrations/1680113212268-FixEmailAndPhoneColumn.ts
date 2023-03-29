import { MigrationInterface, QueryRunner } from "typeorm";

export class FixEmailAndPhoneColumn1680113212268 implements MigrationInterface {
    name = 'FixEmailAndPhoneColumn1680113212268'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_752866c5247ddd34fd05559537d"`);
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "phone" TYPE numeric(11)`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_84cae51c485079bdd8cdf1d828f"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_84cae51c485079bdd8cdf1d828f" UNIQUE ("phone")`);
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "phone" TYPE numeric(11,0)`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email")`);
    }

}
