export enum TransactionCategory {
  lazer,
  edu,
}

export const transactionCategories: { [key in TransactionCategory]: string } = {
  [TransactionCategory.lazer]: 'Lazer',
  [TransactionCategory.edu]: 'Educação',
};
