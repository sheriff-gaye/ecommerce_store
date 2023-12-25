import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/ui/Billboard";
import Container from "@/components/ui/Container";

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
  const sized = await getSizes();
  const category = await getCategory(params.categoryId);
  return (
    <div className="bg-white">
        <Container>
            <Billboard data={category.billboard}/>
        </Container>

    </div>
  );
};

export default CategoryPage;
