import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/Navbar"

const greeting = "Bienvenidos a ShadyCommerce"

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