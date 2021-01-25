import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class User1611607545703 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'User',
        columns: [
          {
            name: 'id',
            type: 'string',
            isPrimary: true,
          },
          {
            name: 'company',
            type: 'string',
          },
          {
            name: 'password',
            type: 'string',
          },
          {
            name: 'createdAt',
            type: 'string',
          },
          {
            name: 'updatedAt',
            type: 'Date',
          },
          {
            name: 'projectCode',
            type: 'Date',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
