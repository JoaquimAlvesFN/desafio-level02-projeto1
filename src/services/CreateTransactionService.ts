import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface RequestDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({title, value, type}: RequestDTO): Transaction {
    // TODO
    const transactions = this.transactionsRepository.create(title, value, type);

    const balance = this.transactionsRepository.getBalance();
    if(value > balance.total){
      throw Error('Not found outcome balance');
    }

    return transactions;
  }
}

export default CreateTransactionService;
