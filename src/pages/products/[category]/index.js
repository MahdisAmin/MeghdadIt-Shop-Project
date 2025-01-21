import { useRouter } from "next/router";
import React from "react";

function ProductsByCategories() {
  const {category}= useRouter().query

    return <div>ProductsByCategories - {category}</div>;
}

export default ProductsByCategories;
