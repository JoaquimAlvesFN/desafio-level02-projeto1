import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    let income = 0;
    let outcome = 0;
    let total = 0;

    this.transactions.map(transaction => {
      if(transaction.type == 'income'){
        return income += transaction.value;
      }

      if(transaction.type == 'outcome') {
        return outcome += transaction.value;
      }
    });

    total = income - outcome;

    return {
      income,
      outcome,
      total
    }
  }

  public create(title: string, value: number, type: 'income' | 'outcome'): Transaction {
    // TODO
    const transactions = new Transaction({title, value, type});

    this.transactions.push(transactions);

    return transactions;
  }
}

export default TransactionsRepository;
