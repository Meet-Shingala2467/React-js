import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./curdPages/View"
import Add from "./curdPages/Add"
import Edit from "./curdPages/Edit"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
