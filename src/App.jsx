import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/Navbar"

const greeting = "Bienvenidos"

const App = () => {
  return (
    <>

    <Navbar />
    
      <ItemListContainer 
      greeting={greeting}/>


    </>
    
    )
  }
  
  export default App