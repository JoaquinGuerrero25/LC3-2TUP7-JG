import './App.css'
import Table from './components/Table';

function App() {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 }
  ];

  const averageIncome = netIncomes.reduce((total, item) => total + item.income, 0) / netIncomes.length

  return (
    <>
      <Table netIncomes={netIncomes} />
      <p>Promedio de ingreso neto: {averageIncome.toFixed(2)}</p>
    </>

  )
}

export default App
