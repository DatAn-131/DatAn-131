import { MdSupportAgent } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { TbDiscount, TbTruckDelivery } from "react-icons/tb";

const Features = () => {
  return (
    <div className="px-4 container grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-8 mx-auto">
      <div className="flex gap-2 bg-gray-100 dark:bg-slate-600 px-4 py-6 font-karla">
        <TbTruckDelivery className="text-4xl dark:text-white" />
        <div>
          <h2 className="font-medium text-xl dark:text-white">Free Delivery</h2>
          <p className="text-gray-600 dark:text-white">Orders from all item</p>
        </div>
      </div>
      <div className="flex gap-2 bg-gray-100 dark:bg-slate-600 px-4 py-6 font-karla">
        <RiRefund2Fill className="text-4xl dark:text-white" />
        <div>
          <h2 className="font-medium text-xl dark:text-white">
            Return & Refund
          </h2>
          <p className="text-gray-600 dark:text-white">Money back guarantee</p>
        </div>
      </div>
      <div className="flex gap-2 bg-gray-100 dark:bg-slate-600 px-4 py-6 font-karla">
        <TbDiscount className="text-4xl dark:text-white" />
        <div>
          <h2 className="font-medium text-xl dark:text-white">
            Member Discount
          </h2>
          <p className="text-gray-600 dark:text-white">On order over $99</p>
        </div>
      </div>
      <div className="flex gap-2 bg-gray-100 dark:bg-slate-600 px-4 py-6 font-karla">
        <MdSupportAgent className="text-4xl dark:text-white" />
        <div>
          <h2 className="font-medium text-xl dark:text-white">Support 24/7</h2>
          <p className="text-gray-600 dark:text-white">
            Contact us 24 hours a day
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
