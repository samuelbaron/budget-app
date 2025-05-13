export interface Expense {
  id: string;
  budgetId: string;
  amount: number;
  category: string;
  description: string;
  date: Date;
}
