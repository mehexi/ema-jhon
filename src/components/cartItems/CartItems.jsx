import React from "react";
import { getShoppingCart } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove, faTrash } from "@fortawesome/free-solid-svg-icons";

const CartItems = (props) => {
  // const prodects = getShoppingCart()
  const {
    id,
    catagory,
    img,
    price,
    quantity,
    ratings,
    seller,
    shipping,
    stock,
    name
  } = props.cart;
    // console.log(props)
    const updatedCart = props.updatedCart

  return (
    <div className="cart-item flex gap-6 p-3 border rounded  items-center  justify-between w-9/12">
      <div className="flex gap-6">
        <img className="w-[91px] rounded" src={img} alt="" />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">{name}</h1>
          <p>Price: <span className="text-[#FF9900]">{price}</span></p>
          <p>Shipping Charge: <span className="text-[#FF9900]">{shipping}</span></p>
        </div>
      </div>
      <div onClick={()=> updatedCart(id)} className="bg-red-400/20 rounded-full border text-center align-middle flex flex-col justify-center border-red-600 w-[50px] h-[50px]  hover:border-red-300 duration-150 cursor-pointer">
        <FontAwesomeIcon
          className="text-3xl p-3 text-red-600  hover:text-red-300 duration-150"
          icon={faTrash}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default CartItems;
