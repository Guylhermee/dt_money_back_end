import { TransactionCategory } from '../enums/transaction-category';

export class CreateTransactionDTO {
  title: string;
  price: number;
  category: TransactionCategory;
}
