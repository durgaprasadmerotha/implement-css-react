import "./App.css"
import Header from "./components/Header"
const App = () => {
  const css = {
    color: "pink",
    fontSize: "90px"
  }
  return (
    <>
      {/* external css */}
      <div>helllo</div>       

      {/* inline css */}
      <h1 style={{color: "green", fontSize: "40px"}}>Durgu</h1>
      
      {/* internal css */}
      <h1 style={css}>durgain</h1>

      {/* module css */}
      <Header />
    </>
  )
}

export default App
