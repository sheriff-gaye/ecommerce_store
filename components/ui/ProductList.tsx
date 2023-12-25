import { Product } from "@/types"
import NoResults from "./no-result"
import ProductCard from "./product-card"


interface ProductListProps{
    title:string
    item:Product[]
}

const ProductList = ({title,item}:ProductListProps) => {
  return (
   <div className="space-y-4">

    <h3 className="font-bold text-3xl ">{title}</h3>
    {item.length===0 && <NoResults/>}

    <div className="grid grid-col-1  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-4">
        {
            item.map((product)=>(
              <ProductCard key={product.id} data={product}/>
            ))
        }

    </div>


   </div>
  )
}

export default ProductList