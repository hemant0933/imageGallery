import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const SearchDropdown = ({menucontent}) => {
    const [selectedItem, setSelectedItem] = useState(
        menucontent && menucontent[0] ? menucontent[0].label : ""
    );  // the default value is selected

    const selectedItemObj = menucontent.find(item => item.label === selectedItem)

  return (
    <>
      <Menu as="div" className="w-32 relative inline-block text-black bg-gray-100 border-2 border-gray-300 hover:bg-gray-200 rounded-md ">
        <div>
          <Menu.Button className="inline-flex w-full gap-1 p-2 text-black items-center rounded-lg bg-opacity-20 text-md font-medium 
          hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white 
          focus-visible:ring-opacity-75">
          <selectedItemObj.icon /> {selectedItem}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-black "
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 text-black w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
            {Array.isArray(menucontent) &&
                menucontent.map((value) => (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-200 text-gray-700" : "text-gray-800"
                        } group flex w-full justify-center items-center rounded-md 
                        px-2 py-2 text-md font-semibold gap-2`}
                        onClick={() => setSelectedItem(value.label)}
                      >
                        <value.icon/>
                        {value.label}
                      </button>
                    )}
                  </Menu.Item>
                ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

export default SearchDropdown;


