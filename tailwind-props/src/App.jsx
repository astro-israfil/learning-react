import Card from './Card'

import './App.css'

function App() {

  return (
    <>
      <h1 className='bg-green-300 text-gray-900 mb-4'>Tailwind CSS</h1>
      <Card username="Israfil" />
      <Card username="Delba" btnText="Visit Me" />
    </>
  )
}

export default App
