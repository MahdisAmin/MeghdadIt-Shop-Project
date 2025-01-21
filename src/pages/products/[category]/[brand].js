import { useRouter } from "next/router";

function ProductsByBrands() {
  const { category, brand } = useRouter().query;
  return (
    <div>
      ProductsByBrands - {category} - {brand}
    </div>
  );
}

export default ProductsByBrands;
