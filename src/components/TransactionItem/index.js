import './index.css'
const TransactionEachItem = props => {
  const {eachItem, getIdFunction} = props
  const {id, title, type, amount} = eachItem

  const onClickIdPass = () => {
    getIdFunction(id)
  }

  return (
    <li className="history-item">
      <p className="margin-item">{title}</p>
      <p className="margin-item">{amount}</p>
      <p className="margin-item">{type}</p>
      <button data-testid="delete" onClick={onClickIdPass} className="button">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionEachItem
