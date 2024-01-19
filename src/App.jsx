import Destination from './components/Destination'
import Experience from './components/Experience'
import Experts from './components/Experts'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import Service from './components/Service'
import TopDestination from './components/TopDestination'
import WorkingHours from './components/WorkingHours'
import Signup from './components/Signup'
function App() {
  return (
    <>
      <div className='overflow-hidden'>
        <Navbar/>
        <Introduction />
        <Service />
        <Destination />
        <WorkingHours />
        <TopDestination />
        <Experience />
        <Experts />
        <Signup />
      </div>
    </>
  )
}

export default App
