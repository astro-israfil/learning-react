import { useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { InputBox } from './components';

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  const currencyRate = useCurrencyInfo();
  console.log(currencyRate);
  function onAmountChange(e) {
    setAmount(e.target.value);
  }

  function onFromCurrencyChange(e) {
    setFrom(e.target.value);
  }

  function onToCurrencyChange(e) {
    setTo(e.target.value);
  }

  function convertCurrency() {
    if (from === "USD") {
      setConvertedAmount(amount * currencyRate[to]);
    } else {
      setConvertedAmount((amount / currencyRate[from]) * currencyRate[to]);
    }
  }

  function swapConvertion() {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <>
      <div style={{
        backgroundImage: `url("https://assets.bizclikmedia.net/1800/65ddfe8b868712e5ca44e059bdcd8def:10848e06df83a6cdeffd8041c07ff5b1/gettyimages-1312767508.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        }} className='w-full h-screen flex justify-center items-center text-white'>
          <div className='w-full max-w-md p-12 relative bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
            <h1 className='text-center text-2xl relative z-10'>Currency Converter App</h1>
            <div className='my-4 relative'>
              <InputBox label="From" amount={amount} onAmountChange={onAmountChange} currency={from} onCurrencyChange={onFromCurrencyChange} currencyRate={currencyRate} />
              <button className='bg-blue-600 text-white outline-none rounded-sm py-2 px-3 absolute left-1/2 top-1/2 mt-3 -translate-x-1/2 -translate-y-1/2' onClick={swapConvertion}>Swap</button>
              <InputBox label="To" amount={convertedAmount} onAmountChange={() => {}} currency={to} onCurrencyChange={onToCurrencyChange} currencyRate={currencyRate} isDisabledField />
            </div>
            <div className='position relative z-10'>
              <button onClick={convertCurrency} className='bg-blue-700 text-white rounded-sm w-full py-2'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
