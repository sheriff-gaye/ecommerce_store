"use client";

import CartItem from "@/components/cart-item";
import Container from "@/components/ui/Container";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import Summary from "./components/summary";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const cart=useCart();

  if (!isMounted) {
    return null;
  }


  return <div className="bg-white">
    <Container>

      <div className="px-4 py-16  sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
        <div className="mt-12  lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <div className="lg:col-span-7">
            {
              cart.items.length===0 && <p className="text-neutral-500">No Item Added to Cart</p>
            }
            <ul>
              {
                cart.items.map((item)=>(
                  <CartItem data={item} key={item.id}/>
                ))
              }
            </ul>

          </div>
          <Summary/>

        </div>

      </div>
    </Container>

  </div>;
};

export default CartPage;
