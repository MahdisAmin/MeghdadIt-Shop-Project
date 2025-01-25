import data from "../../../data/db.json";
import ProductsCards from "../elements/ProductsCards";

function HomePage() {
  const { laptops, mobiles, cameras } = data;

  return (
    <>
      <div className="container m-12 mx-auto">
        <h1 className="font-bold px-8">لپ تاپ (laptop) </h1>
      </div>
      <div className="container text-center my-12 mx-auto">
        <div className="flex flex-wrap m-4">
          {laptops.slice(0, 4).map((laptop) => (
            <div className="p-4 w-full md:w-1/3 lg:w-1/4" key={laptop.id}>
              <ProductsCards {...laptop} />
            </div>
          ))}
        </div>
      </div>
      <div className="container m-12 mx-auto">
        <h1 className="font-bold px-8">موبایل(mobile) </h1>
      </div>
      <div className="container text-center my-12 mx-auto">
        <div className="flex flex-wrap m-4">
          {mobiles.slice(0, 4).map((mobiles) => (
            <div className="p-4 w-full md:w-1/3 lg:w-1/4" key={mobiles.id}>
              <ProductsCards {...mobiles} />
            </div>
          ))}
        </div>
      </div>
      <div className="container m-12 mx-auto">
        <h1 className="font-bold px-8">موبایل(mobile) </h1>
      </div>
      <div className="container text-center my-12 mx-auto">
        <div className="flex flex-wrap m-4">
          {cameras.slice(0, 4).map((camera) => (
            <div className="p-4 w-full md:w-1/3 lg:w-1/4" key={camera.id}>
              <ProductsCards {...camera} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
