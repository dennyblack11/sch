import { useContext } from "react";
import { GlobalContext } from "../../Global/ReactContextApi/ContextProvider";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MoonIcon, BellIcon, AlignLeft, Settings } from "lucide-react";
import logo from "../../assets/default_school_logo.jpg";

interface HeaderProps {
  toggleSider: () => void;
}

const DashHeader = ({ toggleSider }: HeaderProps) => {
  const { handleToggle } = useContext(GlobalContext);

  return (
    <header className="h-[75px] px-4 py-3 flex items-center justify-between">
      <button
        className="md:hidden focus:outline-none text-blue-800 hover:bg-blue-700 hover:text-white p-2 rounded"
        onClick={toggleSider}
      >
        <AlignLeft />
      </button>

      <div className="flex items-center gap-6">
        <div>
          <button
            className="hidden md:inline-block focus:outline-none text-blue-800 hover:bg-blue-700 hover:text-white p-1 rounded text-sm md:text-base lg:text-lg"
            onClick={handleToggle}
          >
            <AlignLeft />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="School Logo"
            className="h-10 lg:h-12 w-auto rounded object-contain"
          />
          <h1 className="text-sm md:text-base lg:text-lg xl:text-xl text-blue-700 font-semibold">
            ROCK FOUNDATION MODEL SCHOOL
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="focus:outline-none text-blue-800 hover:bg-blue-700 hover:text-white p-2 rounded">
          <BellIcon />
        </button>

        <button className="focus:outline-none text-blue-800 hover:bg-blue-700 hover:text-white p-2 rounded">
          <MoonIcon />
        </button>

        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center gap-2 bg-gray-200 text-blue-800 hover:bg-blue-700 hover:text-white p-2 rounded focus:outline-none">
            <img
              src={logo}
              alt="School Logo"
              className="h-6 w-6 rounded object-cover"
            />
            <Settings />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-[400px] min-h-[450px] origin-top-right bg-white text-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <div>Hello</div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
};

export default DashHeader;
