import Nav from "./components/Nav"
import Trip from "./components/Trip"
import Form from "./components/Form"
import Filter from "./components/Filter"
import DataCollection from "./components/DataCollection"

function App() {

  return (
    <>
      <Nav/>
      <h3 className='p-4 text-3xl font-extrabold font-mono border-b-2 ps-24'>Master Price</h3>
      
      <div className="flex flex-col items-center justify-center">
        <Trip />
        <Form/>
        <Filter/>
        <DataCollection/>
      </div>
      
    </>
  )
}

export default App
