import { useEffect, useState } from "react";
import axios from 'axios'
import "./Styles.css";
import CardItem from "./CardItem";

import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'


interface Products {
    item: Item[]
}

interface Item {
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

export default function AvailableProducts() {
  const [items, setItems] = useState<Products>()
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData()
  }, [])
  
  async function getData() {
    axios.get('https://fakestoreapi.com/products?limit=5').then((response) => {
      setItems(response.data);
      setLoading(false);
    });
  }

  console.log(items);

  return (
    <div>
      <h1>Choose a product</h1>
      <ul>
        {loading ? Array.from({ length: 5 }).map((_, index) => (
          <div className="card-skeleton" key={index}>
             <div className="left-col">
                  <Skeleton circle width={40} height={40} />
             </div>
             <div className="right-col">
                  <Skeleton count={4} style={{marginBottom: ".6rem"}}/>
             </div>
          </div>
        )) : items?.map((item) => (
          <li className="list" key={item.id}>
            <CardItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}