import { TransactionCategory } from '../enums/transaction-category';

export class UpdateTransactionDTO {
  title: string;
  price: number;
  category: TransactionCategory;
}
