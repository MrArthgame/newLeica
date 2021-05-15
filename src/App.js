import React from 'react'
import style from './App.module.css'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import Home from './HighComponents/Home'
import AboutUs from './HighComponents/AboutUs'
import Contact from './HighComponents/Contact'
import News from './HighComponents/News'
import Products from './HighComponents/Products'
import Services from './HighComponents/Services'
import PageForOneProd from './components/PageForOneProd/PageForOneProd'
import Header from './HighComponents/Header/Header'


function App() {
  return (
    <>       
    <BrowserRouter>
    
    <Header />

        
      <Route exact path='/' component={Home} />
      <Route exact path='/products' component={Products} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/news' component={News} />
      <Route exact path='/aboutUs' component={AboutUs} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/PageForOneProd' component={PageForOneProd} /> 

    </BrowserRouter>
    </>
  )
}
export default App