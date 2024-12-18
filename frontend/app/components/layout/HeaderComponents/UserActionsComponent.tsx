import { useAppSelector } from "@/store/store";
import React from "react";

const UserActionsComponent = () => {
  const static_actions_data = useAppSelector((state) => state.dataReducer);

  return (
    <ul className="hidden md:flex items-center md:gap-3 lg:gap-7">
      {static_actions_data.layoutData.userActions.map((item, index) => (
        <li className="cursor-pointer" key={index}>
          {item.icon}
        </li>
      ))}
    </ul>
  );
};

export default UserActionsComponent;
