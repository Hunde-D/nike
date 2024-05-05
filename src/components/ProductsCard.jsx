import PropTypes from "prop-types";
import { TiStar } from "react-icons/ti";

const ProductsCard = ({ product }) => {
  const { imgURL, rating, productName, price } = product;
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt="shoe image" className=" w-72 h-72" />
      <div className="mt-8 flex justify-start gap-2.5">
        <TiStar className="text-yellow-400 text-3xl" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {productName}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

// ProductsCard.protoTypes = {
// //   product: PropTypes.shape({
// //     imgURL: PropTypes.string.isRequired,
// //     rating: PropTypes.number.isRequired,
// //     productName: PropTypes.string.isRequired,
// //     price: PropTypes.string.isRequired,
//     //   }).isRequired
//     product: PropTypes.object.
// };
// imgURL: PropTypes.any.isRequired,

export default ProductsCard;
