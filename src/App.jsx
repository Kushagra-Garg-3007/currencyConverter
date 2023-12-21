import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyinfo from './hooks/useCurrencyinfo'

function App() {
  
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const currencyInfo = useCurrencyinfo(from);
  const currencies = Object.keys(currencyInfo);
  const [amount, setAmount] = useState(0);
  const [convertedAmnt, setConvertedAmnt] = useState(0);

  return (
    <div  className='bg-gradient-to-r from-sky-500 to-indigo-500 p-6 rounded-md'>
      <InputBox Fromlabel="from"
        currency={from}
        currencies={currencies}
        amount={amount}
        onCurrChange={(currency) => setFrom(currency)}
        onAmntChange={(amnt) => setAmount(amnt)} />
      <button className='bg-[#484890] h-10'
      onClick={()=>{
        setFrom(to);
        setTo(from);
      }}>Swap</button>
      <InputBox Fromlabel="to"
        currency={to}
        currencies={currencies}
        readOnly={true}
        amount={convertedAmnt}
        onCurrChange={(currency) => setTo(currency)} />
      <button className='bg-slate-600 my-2'
       onClick={() => {
        setConvertedAmnt(amount * currencyInfo[to])
      }}>Convert</button>
    </div>
  )
}

export default App
