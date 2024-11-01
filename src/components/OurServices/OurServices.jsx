import { FaMobileScreen } from "react-icons/fa6";
import { MdFoodBank, MdOutlineFastfood } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const OurServices = () => {
  return (
    <div className="container">
      {/* header section */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Our Services</h1>
      </div>
      {/* icons section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-12">
        <div className="flex justify-center items-center gap-3">
          <FaMobileScreen className="text-2xl" />
          <p className="text-2xl font-semibold">Online Booking</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <MdOutlineFastfood className="text-2xl" />
          <p className="text-2xl font-semibold">Fast Food</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <MdFoodBank className="text-2xl" />
          <p className="text-2xl font-semibold">Healthy Food</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <TbTruckDelivery className="text-2xl" />
          <p className="text-2xl font-semibold">Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
