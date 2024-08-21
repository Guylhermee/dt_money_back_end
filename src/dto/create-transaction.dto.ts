import { ApiProperty } from '@nestjs/swagger';
import { TransactionCategory } from '../enums/transaction-category';

export class CreateTransactionDTO {
  @ApiProperty({ example: 'Criação' })
  title: string;
  @ApiProperty({ example: 12000 })
  price: number;
  @ApiProperty({ example: TransactionCategory.lazer })
  category: TransactionCategory;
}
