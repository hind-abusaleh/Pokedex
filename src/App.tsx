import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Header } from './sections/index'
import { Home } from './pages/index'
//import { Container } from './components/index'



function App() {
  return (
    <Router>  
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
  </Router>
    
  );
}

export default App;
