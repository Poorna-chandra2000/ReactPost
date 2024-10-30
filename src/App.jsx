import './App.css';
import Nav from './components/Nav';
import NavRouter from './components/NavRouter';
function App() {
  return (
  <div className='h-svh w-svw bg-violet-950 box-border p-0 m-0'>
    <Nav/>
    {/* <Home/>
    <About/>
    <Contact/> */}
    <NavRouter/>
  </div>
  )
}

export default App
