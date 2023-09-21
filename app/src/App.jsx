import Place from "./components/Place"
import Header from "./components/Header"
import data from "./data"
function App() {
  const places = data.map((place)=>{
    return(
      <Place key={place.id} 
        {...place}
      />
    )
  })

  return (
    <div className="max-w-lg mx-auto flex flex-col my-3 rounded-xl bg-gray-50">
      <Header />
      {places}
    </div>
  )
}
export default App
