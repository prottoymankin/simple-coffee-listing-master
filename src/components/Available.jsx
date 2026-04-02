import { use } from "react";
import Product from "./Product";

const Available = ({ productsPromise }) => {
  const productsData = use(productsPromise);
  const availableProducts = productsData.filter(p => p.available);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-fit mx-auto mt-10">
      {
        availableProducts.map(product => (
          <Product
            key = {product.id}
            product = {product}
          />
        ))
      }
    </div>
  );
};

export default Available;