import data from "../../../data/db.json";
import ProductsCards from "../elements/ProductsCards";

function HomePage() {
  const { laptops, mobiles, tablets } = data;

  return (
    <div className="container text-center my-12 mx-auto">
      <div className="flex flex-wrap m-4">
        {laptops.slice(0,4).map((laptop) => (
          <div className="p-4 w-full md:w-1/3 lg:w-1/4" key={laptop.id}>
                <ProductsCards {...laptop} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
