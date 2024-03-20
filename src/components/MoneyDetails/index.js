import './index.css'
const MoneyDetails = props => {
  const {incomeAmount, balanceAmount, expensesAmount} = props
  return (
    <div className="wallet-income-expenses-section">
      <div className="your-balance-card wallet-income-expenses-section">
        <img
          className="image-style"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balanceAmount}</p>
        </div>
      </div>
      <div className="your-balance-card-2 wallet-income-expenses-section">
        <img
          className="image-style"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="your-balance-card-3 wallet-income-expenses-section">
        <img
          className="image-style"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
