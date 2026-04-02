import bgImg from "../assets/bg-cafe.jpg";
import vector from "../assets/vector.svg";
import TabButton from "./TabButton";
import Products from "./Products";
import { Suspense, useState } from "react";
import Available from "./Available";

const getProductsPromise = async () => {
  const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json");

  return response.json();
}

const productsPromise = getProductsPromise();

const Page = () => {
  const [activeTab, setActiveTab] = useState("All Products");

  return (
    <section className="min-h-screen">
      <img 
        src={bgImg} 
        alt=""
        className="w-full h-75 object-cover" 
      />

      <div className="max-w-7xl w-[92%] mx-auto bg-[#1B1D1F] rounded-2xl relative -top-35 py-20">
        <img 
          src={vector} 
          alt=""
          className="absolute left-1/2 top-0 sm:top-[5%] z-0 -translate-x-1/2 sm:translate-x-0" 
        />

        <div className="text-center mb-10 relative z-10">
          <h1 className="text-[32px] text-[#FEF7EE] font-semibold mb-2">
            Our Collection
          </h1>

          <p className="text-[#6F757C] font-medium max-w-125 mx-auto mb-5">
            Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
          </p>

          <div className="space-x-4">
            <TabButton
              title = {"All Products"}
              activeTab = {activeTab}
              setActiveTab = {setActiveTab}
            />
            
            <TabButton
              title = {"Available Now"}
              activeTab = {activeTab}
              setActiveTab = {setActiveTab}
            />
          </div>

          {
            activeTab === "All Products" && (
              <Suspense>
                <Products
                  productsPromise = {productsPromise} 
                />
              </Suspense>
            )
          }

          {
            activeTab === "Available Now" && (
              <Suspense>
                <Available
                  productsPromise = {productsPromise}
                />
              </Suspense>
            )
          }
        </div>
      </div>
    </section>
  );
};

export default Page;