import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/ui/Billboard";
import Container from "@/components/ui/Container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from './components/mobile-filters';

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    sizeId: string;
    colorId: string;
  };
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId
  });

  const colors = await getColors();
  const sizes = await getSizes();
  const category = await getCategory(params.categoryId);
  return (
    <div className="bg-white">
        <Container>
            <Billboard data={category.billboard}/>

            <div className="p-4 sm:px-6lg:px-8 pb-24">
                <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                    <MobileFilters sizes={sizes} colors={colors}/>
                    <div className="hidden lg:block">
                        <Filter name="Sizes" valueKey="sizeId" data={sizes}/>
                        <Filter name="Colors" valueKey="colorId" data={colors}/>
                    </div>
                    <div className="mt-6  lg:col-span-4 lg:mt-0">
                        {
                            products.length==0 && <NoResults/>
                        }
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            {
                                products.map((product)=>(
                                    <ProductCard key={product.id} data={product}/>
                                ))
                            }

                        </div>

                    </div>

                </div>

            </div>
        </Container>

    </div>
  );
};

export default CategoryPage;
