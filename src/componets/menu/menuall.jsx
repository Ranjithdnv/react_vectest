import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";

import "./memu.css";
import "../../index.css";

export function MenuWithSearchInput() {
  return (
    <Menu
      dismiss={{
        itemPress: false,
      }}
    >
      <MenuHandler>
        <Button className=" !rounded-lg bg-blue-600 py-2  px-2 ">Menu</Button>
      </MenuHandler>
      <MenuList>
        <Input
          label="Search"
          containerProps={{ className: "mb-4  relative" }}
          className="border  border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          labelProps={{
            className:
              "absolute MuiInputLabel-root flex px-2 items-center justify-center   text-gray-500 transform transition-all duration-300 pointer-events-none",
          }}
          placeholder="Enter search term"
        />
        <MenuItem className="px-4 py-2  rounded-lg hover:bg-blue-100 active:bg-blue-200 transition duration-200">
          Menu Item 1
        </MenuItem>
        <MenuItem className="px-4 py-2 rounded-lg hover:bg-blue-100 active:bg-blue-200 transition duration-200">
          Menu Item 2
        </MenuItem>{" "}
        <MenuItem className="px-4 py-2 rounded-lg hover:bg-blue-100 active:bg-blue-200 transition duration-200">
          Menu Item 3
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
