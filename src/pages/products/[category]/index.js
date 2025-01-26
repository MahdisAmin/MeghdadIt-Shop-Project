import { useRouter } from "next/router";
import data from "../../../../data/db.json";
import ProductsCards from "@/components/elements/ProductsCards";

function ProductsByCategories() {
  // console.log(data);
  
  const {category}= useRouter().query
  
  const datas = data[category] 
  console.log(datas)

  return (
    <div>
      <h4 className="text-center my-5 font-bold text-xl">{category}</h4>
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

export default ProductsByCategories;
