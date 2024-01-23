import { useCartStore } from "../store/CartStore";

export default function Cart() {
  const [items, removeFromCart] = useCartStore((state) => [
    state.cart,
    state.removeFromCart,
  ]);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
            <button
              onClick={() => {
                removeFromCart(item.id);
              }}
            >
              Delete to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}