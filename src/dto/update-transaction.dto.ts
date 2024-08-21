import { ApiProperty } from '@nestjs/swagger';
import { TransactionCategory } from '../enums/transaction-category';

export class UpdateTransactionDTO {
  @ApiProperty({ example: 'Atualização' })
  title: string;
  @ApiProperty({ example: -1200 })
  price: number;
  @ApiProperty({ example: TransactionCategory.lazer })
  category: TransactionCategory;
}
