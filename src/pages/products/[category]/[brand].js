import { useRouter } from "next/router";
import data from "../../../../data/db.json";
import { useEffect, useState } from "react";
import ProductsCards from "@/components/elements/ProductsCards";
function ProductsByBrands() {
  const { category, brand } = useRouter().query;
  const [datas, setDatas] = useState(data[category]);

  useEffect(() => {
    const filteredData = data[category]?.filter((item) => item.brand === brand);
    setDatas(filteredData);
  }, [category, brand]);

  return (
    <div>
       <h1 className="container mx-auto font-bold text-lg p-2 m-4 text-center">لپتاپ-{(brand)}</h1>
      <div className="container text-center my-12 mx-auto">
        <div className="flex flex-wrap m-4">
          {datas?.map((item) => (
            <div className="p-4 w-full md:w-1/3 lg:w-1/4" key={item.id}>
              <ProductsCards {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsByBrands;
