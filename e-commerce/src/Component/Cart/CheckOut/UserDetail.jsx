import React, { useRef, useState } from "react";
import TextInput from "../../TextInput/TextInput";
import OrangeButton from "../../Buttons/OrangeButton";
import saveData from "../../Api/saveDataApi";
import totalAmount from "../../../CustomFunction/totalAmount";

const UserDetail = ({ cartData, setVisible }) => {
  const [err, setErr] = useState(0);
  const name = useRef();
  const phone = useRef();
  const address = useRef();

  const proceed = () => {
    if (name.current?.value == "") {
      setErr(1);
    } else if (phone.current?.value == "") {
      setErr(2);
    } else if (address.current?.value == "") {
      setErr(3);
    } else {
      setErr(0);
      saveData(
        {
          name: name.current.value,
          phone: phone.current.value,
          address: address.current.value,
          total: totalAmount(cartData),
          item: cartData.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        },
        setVisible
      );
    }
  };
  return (
    <div className="flex flex-col  ">
      <TextInput
        label={"Name"}
        err={err == 1 && true}
        placeholder={"Enter name"}
        ref={name}
      />
      <TextInput
        label={"Phone"}
        err={err == 2 && true}
        placeholder={"Enter Phone number"}
        ref={phone}
      />
      <TextInput
        label={"Address"}
        err={err == 3 && true}
        placeholder={"Enter Address"}
        ref={address}
      />
      <div className="flex justify-center ">
        <OrangeButton title={"Proceed"} onClick={() => proceed()} />
      </div>
    </div>
  );
};

export default UserDetail;
