import { useCartStore } from "../store/CartStore";

interface Item {
    item : {
        id: number
        title: string
        price: number
        category: string
        description: string
        image: string
        rating: {
        rate: number
        count: number
        }
    }
}

export default function CardItem({ item }: Item) {
    const  addToCart = useCartStore((state) => state.addToCart);


    return (
            <div className="card-skeleton">
             <div className="left-col">
                <img className="img" src={item.image} alt="" />
             </div>
             <div className="right-col">
                <p>{item.title}</p>
                {/* <p>{item.category}</p>
                <p>{item.description}</p>
                <p>{item.rating.rate}</p>
                <p>{item.rating.count}</p> */}
                <p>{item.price}</p>
             </div>
            <button
              onClick={() => {
                addToCart(item);
              }}
            >
              Add to cart
            </button>
          </div>
    )
}