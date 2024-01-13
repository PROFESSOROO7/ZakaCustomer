import { Link } from "react-router-dom";
const ProductsData = [
  {
    id: 1,
    img: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=70&crop=true",
    title: "Casual Wear",
    price: 2000,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: "https://rukminim2.flixcart.com/image/832/832/xif0q/sandal/z/s/n/8-combo-pp-pri-1820-1939-swiggy-multicolor-original-imagrcfkzdryace8.jpeg?q=70&crop=false",
    title: "Men Slippers",
    rating: 1500,
    color: "grey",
    aosDelay: "200",
  },
  {
    id: 3,
    img: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/o/m/y/-original-imagzry3gugpvqty.jpeg?q=70&crop=true",
    title: "Lace Up",
    price: 1500,
    color: "Black",
    aosDelay: "400",
  },
  {
    id: 4,
    img: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/w/k/g/7-6g-842-7-campus-bt-grn-blk-original-imagsfs46jdxt5cb.jpeg?q=70&crop=true",
    title: "Running Sports",
    price: 3000,
    color: "Blue",
    aosDelay: "600",
  },
  {
    id: 5,
    img:  "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/1/e/x/-original-imagugv4sdfaztam.jpeg?q=70&crop=true",
    title: "Women Running Shoes",
    price: 3500,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (   
              <Link key={data.id} to="/productdetails">   
                <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <h3>${data.price}</h3>
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
              </Link>   
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <Link to="AllProducts">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
