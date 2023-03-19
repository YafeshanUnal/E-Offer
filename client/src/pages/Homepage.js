import { images } from "../assets/images/images";
import { icons } from "../assets/icons/icons";
import React, { useState } from "react";
export const Homepage = () => {
  const [product, setProduct] = useState(false);

  // path yolununu al ve hangi id ye tıkladıysan onunla ilgili bilgileri getir
  const scrollDiv = (path) => {
    const element = document.getElementById(path);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const products = [
    {
      id: 1,
      name: "Samsung Galaxy S21",
      price: 1000,
      image: images.samsung,
    },
    {
      id: 2,
      name: "Iphone 12",
      price: 1000,
      image: images.iphone,
    },
    {
      id: 3,
      name: "Huawei P40",
      price: 1000,
      image: images.huawei,
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <div className="w-full flex justify-between px-20 items-center fixed top-0 z-10 py-2 ">
        <a href="#home">
          <img src={images.whiteLogo} alt="logo" className="h-14 w-17 cursor-pointer" />
        </a>
        <ul className="flex gap-6 text-3 font-medium text-emerald-500 ">
          <li className="mr-6 cursor-pointer">
            <a href="#home" onClick={() => scrollDiv("home")}>
              Home
            </a>
          </li>
          <li className="mr-6 cursor-pointer">
            {/* aynı sayfada olacak bunlar */}
            <a href="#products" onClick={() => scrollDiv("products")}>
              Products
            </a>
          </li>
          <li className="mr-6 cursor-pointer">
            <a
              href="#about"
              className="cursor-pointer"
              onClick={() => scrollDiv("about")}
            >
              About
            </a>
          </li>
        </ul>
      </div>
      {/* Welcome */}
      <div
        className="flex flex-col items-center justify-center h-screen w-full"
        id="home"
        style={{
          backgroundImage: `url(${images.background})
          `,
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-6xl font-bold">Welcome to Kartaca Shop </h1>
        {/* Keyifli alışverişler ingilizce yaz */}
        <p className="text-2xl font-medium mt-4">Enjoy your shopping</p>
        {/* Scroll to Products button*/}
        <button className="absolute bottom-10" onClick={() => scrollDiv("products")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-emerald-200"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 00-1 1v10.586l-2.293-2.293a1 1 0 10-1.414 1.414l4 4a.997.997 0 001.414 0l4-4a1 1 0 10-1.414-1.414L11 15.586V4a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* Products */}
      <div
        className="flex flex-col items-center justify-evenly h-screen w-full"
        id="products"
      >
        <h1 className="text-6xl font-bold">Products</h1>
        {/* Product List */}
        <div className="flex items-center justify-center gap-10 w-2/3">
          {products.map((product) => (
            <div
              className="flex flex-col items-center basis-1/3 h-full text-center p-4 hover:shadow-2xl hover:rounded-3xl hover:cursor-pointer hover:transform hover:scale-110"
              key={product.id}
            >
              <button
                className="absolute top-0 right-0 bg-emerald-500 text-white font-bold text-2xl px-4 py-2 rounded-br-3xl"
                onClick={() => setProduct(true)}
              >
                Give Offer
              </button>
              <img src={product.image} alt="product" className="h-40 w-40" />
              <h1 className="text-4xl font-bold mt-4">{product.name}</h1>
              <p className="text-2xl font-medium mt-4">{product.price} TL</p>
            </div>
          ))}
          {product && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-10">
              <div className="flex flex-col items-center justify-center w-1/3 h-1/3 bg-white rounded-3xl">
                <h1 className="text-4xl font-bold">Give Offer</h1>
                <input
                  type="text"
                  className="w-2/3 h-12 border-2 border-emerald-500 rounded-3xl mt-4 px-4"
                  placeholder="Offer Price"
                />
                <div className="flex w-full px-20 space-x-4">
                  <button
                    className="w-2/3 h-12 bg-whiye text-emerald-500 border border-emerald-500 font-bold text-2xl px-4 py-2 rounded-3xl mt-4"
                    onClick={() => setProduct(false)}
                  >
                    Cancel
                  </button>
                  <button className="w-2/3 h-12 bg-emerald-500 text-white font-bold text-2xl px-4 py-2 rounded-3xl mt-4">
                    Send Offer
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      1{/* About */}
      <div
        className="flex flex-col items-center justify-center h-screen w-full"
        id="about"
      >
        <h1 className="text-6xl font-bold">About</h1>
        <p className="text-2xl font-medium mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates,
          quod, quia, voluptatibus quae voluptatem quibusdam voluptatum quos quidem quas
          nesciunt. Quisquam, quae. Quisquam voluptates, quod, quia, voluptatibus quae
          voluptatem quibusdam
        </p>
      </div>
    </div>
  );
};
export default Homepage;
