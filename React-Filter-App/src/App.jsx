import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Electronics from "./Electronics"
import { Item,category } from  "./Data"
import { useState } from 'react'

function App() {
  const [products, setproducs] = useState(Item)
  const filterData = (c) => {
    if(c === "all"){
      setproducs(Item)
    }else{
      let f = Item.filter(p => p.category === c)
      setproducs(f)
    }
  }
  return (
    <>
      <Electronics
          product = {products}
          menu = {category}
          filterData = {filterData}
      />
    </>
  )
}

export default App
