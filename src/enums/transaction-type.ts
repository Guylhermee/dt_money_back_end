export enum TransactionType {
  entrada,
  saida,
  total,
}

export const transactionTypes: { [key in TransactionType]: string } = {
  [TransactionType.entrada]: 'Entrada',
  [TransactionType.saida]: 'Saída',
  [TransactionType.total]: 'Total',
};
