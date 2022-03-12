import { LoginIcon, ViewGridIcon } from "@heroicons/react/outline";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState("Dashboard");

  const handleSelect = (name) => {
    setActive(name);
  };
  return (
    <aside className="w-1/6 bg-gray-200 flex flex-col justify-between">
      <div className="p-2">
        {menus.map((menu) => {
          let Icon = menu.Icon;
          return (
            <section
              className="m-2 p-2 text-xl font-semibold rounded flex items-center cursor-pointer hover:bg-black hover:text-white"
              onClick={() => handleSelect(menu.name)}
            >
              <Icon
                className={`h-8 mr-2  ${
                  active === menu.name ? "" : "text-gray-400"
                }`}
              />
              <span className={active === menu.name ? "" : "text-gray-400"}>
                {menu.name}
              </span>
            </section>
          );
        })}
      </div>
      <div
        className="p-2 group cursor-pointer"
        onClick={() => dispatch(logout())}
      >
        <section className="m-2 p-2 text-xl rounded flex items-center group-hover:bg-orange-400">
          <LoginIcon className="h-8 mr-2" />
          <span>Log Out</span>
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;

const menus = [
  {
    name: "Dashboard",
    Icon: ViewGridIcon,
  },
  {
    name: "Items",
    Icon: ViewGridIcon,
  },
  {
    name: "Users",
    Icon: ViewGridIcon,
  },
  {
    name: "Orders",
    Icon: ViewGridIcon,
  },
];
