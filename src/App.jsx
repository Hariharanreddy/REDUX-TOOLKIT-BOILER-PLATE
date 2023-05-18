import { useSelector } from 'react-redux'
import Home from './Home'

function App() {

  const {c} = useSelector(state => state.custom);

  return (

    <div>
      <h2>This is in app.jsx, that is parent of home and home is having all the buttons
        and state is being accessed from store. {c}
      </h2>
      <Home />
    </div>
  )
}

export default App
