import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import Category from "./pages/Category"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Myself from "./component/Myself"

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clicker" element={<Category />}/>
        <Route path="/pl" element={<About />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
