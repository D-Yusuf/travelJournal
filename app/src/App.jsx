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
    <div className="md:max-w-xl max-w-sm mx-auto flex flex-col my-3 rounded-xl bg-gray-50 px-2">
      <Header />
      {places}
    </div>
  )
}
export default App
