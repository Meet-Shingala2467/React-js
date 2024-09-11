import Navbar from "./components/Navbar";
import "./App.css";
import ProductList from "./components/Productlist";


function App() {
  const product = [
    {
      id: 1,
      name: 'iPhone 12',
      price: '₹79,900',
      currency: 'INR',
      quantity: 10
    },
    {
      id: 2,
      name: 'iPhone 12 Pro',
      price: '₹1,19,900',
      currency: 'INR',
      quantity: 5
    },
    {
      id: 3,
      name: 'iPhone 12 Pro Max',
      price: '₹1,29,900',
      currency: 'INR',
      quantity: 8
    },
    {
      id: 4,
      name: 'iPhone 12 Mini',
      price: '₹69,900',
      currency: 'INR',
      quantity: 12
    },
    
  ]
  return (
    <>
      <Navbar />
      <ProductList Product={product}/>
      {/* <Footer /> */}

    </>
  );
}

export default App;
