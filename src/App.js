import {Switch, Route,BrowserRouter} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import SimpleTodos from './components/SimpleTodos'

import './App.css'

const App = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={SimpleTodos} />
  </Switch>
  </BrowserRouter>
)

export default App 