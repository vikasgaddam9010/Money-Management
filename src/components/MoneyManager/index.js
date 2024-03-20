import {Component} from 'react'
import {v4} from 'uuid'
import TransactionEachItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'
const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: 0,
    type: transactionTypeOptions[0].optionId,
    balanceAmount: 0,
    incomeAmount: 0,
    expensesAmount: 0,
    transactionsList: [],
  }

  getIdFunction = id => {
    const {transactionsList, incomeAmount, amount, expensesAmount} = this.state
    this.setState({
      transactionsList: transactionsList.filter(each => each.id !== id),
    })
    const toBeAdded = transactionsList.filter(each => each.id === id)
    if (transactionTypeOptions[0].optionId === toBeAdded[0].type) {
      this.setState(prevState => ({
        incomeAmount: prevState.incomeAmount - toBeAdded[0].amount,
      }))
      this.setState(prevState => ({
        balanceAmount: prevState.balanceAmount - toBeAdded[0].amount,
      }))
    } else {
      this.setState(prevState => ({
        balanceAmount: prevState.balanceAmount + toBeAdded[0].amount,
      }))
      this.setState(prevState => ({
        expensesAmount: prevState.expensesAmount - toBeAdded[0].amount,
      }))
    }
  }

  onClickFunction = event => {
    event.preventDefault()
    const {
      title,
      amount,
      type,
      balanceAmount,
      incomeAmount,
      expensesAmount,
      transactionsList,
    } = this.state

    if (
      type === transactionTypeOptions[0].optionId &&
      amount > 0 &&
      title !== ''
    ) {
      this.setState(prevState => ({
        incomeAmount: prevState.incomeAmount + amount,
      }))
      this.setState(prevState => ({
        balanceAmount: prevState.balanceAmount + amount,
      }))
      const newTransaction = {id: v4(), title, amount, type}

      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransaction],
      }))
    } else if (
      type === transactionTypeOptions[1].optionId &&
      balanceAmount >= amount &&
      amount > 0 &&
      title !== ''
    ) {
      this.setState(prevState => ({
        expensesAmount: prevState.expensesAmount + amount,
      }))
      this.setState(prevState => ({
        balanceAmount: prevState.balanceAmount - amount,
      }))
      const newTransaction = {id: v4(), title, amount, type}

      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransaction],
      }))
    }

    this.setState({
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    })
  }

  onChnageInputTitle = event => {
    const {title} = this.state
    this.setState({title: event.target.value})
  }

  onChangeInputAmout = event => {
    const {amount} = this.state
    const inputAmount = event.target.value
    this.setState({amount: parseInt(inputAmount)})
  }

  onChangeSelectedType = event => {
    const {type} = this.state
    this.setState({type: event.target.value})
  }

  render() {
    const {
      title,
      amount,
      balanceAmount,
      type,
      incomeAmount,
      expensesAmount,
      transactionsList,
    } = this.state

    return (
      <div className="bg-container">
        <div className="top-section">
          <h1 className="hi-richard">Hi, Richard</h1>
          <p className="para">
            Welcome back to your
            <span className="span-app-name"> Money Manger</span>
          </p>
        </div>
        <div className="middle-section">
          <MoneyDetails
            incomeAmount={incomeAmount}
            balanceAmount={balanceAmount}
            expensesAmount={expensesAmount}
          />
        </div>
        <div className="wallet-income-expenses-section bottom-section">
          <div className="transactions-add-card">
            <form
              onSubmit={this.onClickFunction}
              className="form-transactions-add-card"
            >
              <h1>Add Transaction</h1>
              <label htmlFor="title">Title</label>
              <input
                value={title}
                onChange={this.onChnageInputTitle}
                id="title"
                placeHolder="TITLE"
                type="text"
              />
              <label htmlFor="amount">Amount</label>
              <input
                value={amount}
                onChange={this.onChangeInputAmout}
                id="amount"
                placeHolder="AMOUNT"
                type="text"
              />
              <label htmlFor="type">Type</label>
              <select
                onChange={this.onChangeSelectedType}
                value={type}
                className="option"
                id="type"
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button className="btn" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="transactions-history-card">
            <h1>History</h1>
            <div className="history">
              <p className="margin">Title</p>
              <p className="margin">Amount</p>
              <p className="margin">Type</p>
            </div>
            <ul className="ul">
              {transactionsList.map(eachItem => (
                <TransactionEachItem
                  key={eachItem.id}
                  eachItem={eachItem}
                  getIdFunction={this.getIdFunction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
