import { useSelector } from 'react-redux'
import EmptyCart from '../Componets/CartPage/EmptyCart'
import OrderFoodCard from '../Componets/CartPage/OrderFoodCard'
import { useDispatch } from 'react-redux';
import { deleteItem } from '../Slices/AddItemsSlice'
import { formatSrilankaPrice } from '../Util/PriceSeperator';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const Navigate = useNavigate()
  const Dispatch = useDispatch()
  const cartCount = useSelector(sta => sta.count.count)
  const orderItems = useSelector(sta => sta.addItems)
  const OrderItemsWithQty = useSelector(sta => sta.addItemsWithQty)

  const subTotal = OrderItemsWithQty.reduce((acc, item) => {
    return acc + (item.Qty * item.price);
  }, 0);
  
  const Delivey = DeliveryCharge(subTotal);
  const Discount = DiscountCharge(subTotal);
  const Total = (subTotal + Delivey - Discount)
  const totalItems = (Count) => (Count < 10 ? `0${Count}` : Count);

  
  function DeliveryCharge(subTotal) {
    if (subTotal < 10000) {
      return +(subTotal * 0.10).toFixed(2);
    } else if (subTotal < 30000) {
      return +(subTotal * 0.07).toFixed(2);
    } else if (subTotal < 70000) {
      return +(subTotal * 0.05).toFixed(2);
    } else {
      return +(subTotal * 0.03).toFixed(2);
    }
  }

  function DiscountCharge(subTotal) {
    if (subTotal < 10000) {
      return +(subTotal * 0.005).toFixed(2);
    } else if (subTotal < 30000) {
      return +(subTotal * 0.02).toFixed(2);
    } else if (subTotal < 70000) {
      return +(subTotal * 0.04).toFixed(2);
    } else {
      return +(subTotal * 0.10).toFixed(2);
    }
  }

  return (
    <section className="mycontainer  my-10 sm:mt-20">

      {/* <!-- empty cart text  --> */}
      {cartCount <= 0 && <EmptyCart />}

      {/* <!-- exist items in the cart  --> */}
      <div className={`${cartCount > 0 ? "block" : "hidden"}`} >
        <h1 className="text-center font-ibm text-3xl my-3 md:my-5 sm:text-4xl">
          Your Cart
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-3 gap-y-5">

          {/* <!-- food details container  --> */}
          <div
            className="lg:col-span-2 text-left max-h-[60vh] overflow-scroll scroll-smooth relative"
          >
            <table className="w-full h-full relative">
              <thead className="sticky top-0 right-0 z-10 bg-gray-50 w-full">
                <tr className="border-b border-b-gray-300 text-gray-600 shadow">
                  <th className="py-1">Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  orderItems.map((items) => (
                    <OrderFoodCard key={items._id} details={items} FilterItems={(_id) => Dispatch(deleteItem(_id))} />
                  ))
                }
              </tbody>
            </table>

          </div>

          {/* <!-- summary container  --> */}
          <div className="col-span-1 h-fit md:my-auto">
            <div className="rounded">
              <h1
                className="text-lg md:text-xl font-cascadia text-center border-b-2 border-b-gray-300 py-2 bg-gray-200"
              >
                Order Summary
              </h1>
              <div className="flex flex-col p-3 bg-gray-200 text-lg text-gray-800">
                <div className="flex items-center justify-between">
                  <h1>Items</h1>
                  <p className="font-semibold">{totalItems(cartCount)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <h1>Subtotal</h1>
                  <p className="font-semibold">{formatSrilankaPrice(subTotal)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <h1>Delivery</h1>
                  <p className="font-semibold">{formatSrilankaPrice(Delivey)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <h1>Discount</h1>
                  <p className="font-semibold">{formatSrilankaPrice(Discount)}</p>
                </div>
                <div
                  className="flex items-center justify-between border-y-2 mt-4 border-y-gray-300 shadow-2xl font-bold"
                >
                  <h1>Total</h1>
                  <p className="font-semibold">Rs:- {formatSrilankaPrice(Total)}</p>
                </div>
              </div>
            </div>
            <div className="w-full h-full mt-5">
              <button title="Pay Money" onClick={() => Navigate("/user/cart/confirmation", { state: { total: Total, discount: Discount, delivery: Delivey } })}
                className="py-3 px-6   bg-green-600 text-white rounded outline-0 cursor-pointer w-full mt-4 text-xl uppercase hover:bg-green-800 transition duration-300">
                checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart