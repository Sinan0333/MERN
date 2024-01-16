import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserRoutes from './Routes/UserRoutes'
import AdminRoutes from './Routes/AdminRoutes'
import './app.css'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/*' element={<UserRoutes />} />
        <Route path='/admin/*' element={<AdminRoutes />} />
      </Routes>
    </Router>
  )
}

export default App
