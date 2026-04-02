import star from "../assets/Star.svg";
import starFill from "../assets/Star_fill.svg"

const Product = ({ product }) => {
  const { name, image, rating, price, votes, popular, available } = product;

  return (
    <div className="space-y-3">
      <div className="relative">
        <img 
          src={image} 
          alt=""
          className="rounded-xl" 
        />

        {
          popular && (
            <span 
              className="absolute font-semibold text-xs px-2.5 py-1 rounded-full bg-[#F6C768] top-3 left-3"
              >
              Popular
            </span>
          )
        }
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-sm text-[#FEF7EE] font-semibold">
          {name}
        </h1>

        <span 
          className="text-xs bg-[#BEE3CC] px-1 py-0.5 font-semibold rounded-sm"
        >
          {price}
        </span>
      </div>

      <div className="flex items-center justify-between text-xs font-semibold">
        <div className="flex gap-1 items-center">
          <img 
            src={rating ? starFill : star} 
            alt="" 
          />

          <span className="text-[#FEF7EE]">{rating}</span>

          <span className="text-[#6F757C]">
            {
              rating ? `(${votes} votes)` : `No ratings` 
            }
          </span>
        </div>
        
        {
          available || (
            <span className="text-[#ED735D]">
              Sold out
            </span>
          )
        }
      </div>
    </div>
  );
};

export default Product;