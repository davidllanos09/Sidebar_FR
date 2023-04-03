import Sidebar from "./components/Sidebar"
import Header from "./components/Header"

function App() {

  return(
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen ">
        <Sidebar /> 
        <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8">
          <Header />
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
          </section>
        </main>
    </div>
  ) 

}

export default App
