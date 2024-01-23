import "./App.css";
import AvailableProducts from "./components/AvailableProducts";
import Cart from "./components/Cart";
import Total from "./components/Total";

export default function App() {
  return (
    <>
      <Total />
      <AvailableProducts /> 
      <Cart />
    </>
  );
}