import { BrowserRouter, Route, Routes } from "react-router-dom"
import QRCodePassGenerator from "./pages/QrPage"
import { Pass } from "./components/pass"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QRCodePassGenerator/>}/>
          <Route path="/pass/:id" element={<Pass/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
