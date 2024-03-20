import './index.css'
const MoneyDetails = props => {
  const {income, balanceAmount, expenses} = props
  return (
    <div className="wallet-income-expenses-section">
      <div className="your-balance-card wallet-income-expenses-section">
        <img
          className="image-style"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p>Yout Balance</p>
          <p>Rs {balanceAmount}</p>
        </div>
      </div>
      <div className="your-balance-card-2 wallet-income-expenses-section">
        <img
          className="image-style"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p>Yout Income</p>
          <p>Rs {income}</p>
        </div>
      </div>
      <div className="your-balance-card-3 wallet-income-expenses-section">
        <img
          className="image-style"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p>Yout Expenses</p>
          <p>Rs {expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
