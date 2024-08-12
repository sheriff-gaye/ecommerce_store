import Container from "@/components/ui/Container";
import React from "react";
import Billboard from "../../components/ui/Billboard";
import getBillboard from "@/actions/get-billboards";
import ProductList from '../../components/ui/ProductList';
import getProducts from "@/actions/get-products";

export const revalidate = 0;

const HomePage = async () => {
  const billboards = await getBillboard("baca0369-1660-456d-b91c-b91e279488c6");
  const produts = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
      </div>
      <div className="flex flex-col gap-y-8 px-4  sm:px-6 lg:px-8">
        <ProductList item={produts} title="Featured Products"/>

      </div>
    </Container>
  );
};

export default HomePage;
