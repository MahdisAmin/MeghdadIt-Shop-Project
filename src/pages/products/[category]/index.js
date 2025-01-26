import { useRouter } from "next/router";
import data from "../../../../data/db.json";
import ProductsCards from "@/components/elements/ProductsCards";
import { useEffect, useState } from "react";

function ProductsByCategories() {
  const { category } = useRouter().query;
  const [datas, setDatas] = useState(data[category]);
  const [searchKey , setSearchKey] = useState(null);
  
  useEffect(() => { 
    setDatas(data[category]);
  }, category);

  useEffect(() => { 
    if(searchKey === null) return setDatas(datas);
     setDatas(data[category].filter((item) => item.text.includes(searchKey)))
  },[searchKey])

  return (
    <div>
      <div className="container m-12 mx-auto text-center">
        <input
          onChange={(e) => setSearchKey(e.target.value)}
          type="text"
          placeholder="دنبال چی میگردی؟"
          className="p-1 outline-none rounded-md w-96 border border-gray-400"
        />
      </div>
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
