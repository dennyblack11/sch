import { useContext, useState } from "react";
import DashSider from "./DashSider";
import DashHeader from "./DashHeader";
import { GlobalContext } from "../../Global/ReactContextApi/ContextProvider";
import { Outlet } from "react-router-dom";

const DashLayout = () => {
  const [isSiderOpen, setIsSiderOpen] = useState(false);
  const { toggle } = useContext(GlobalContext);

  const toggleSider = () => {
    setIsSiderOpen(!isSiderOpen);
  };

  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <DashHeader toggleSider={toggleSider} />
      </header>

      {/* SideBar */}
      <aside
        className={`hidden md:block fixed top-[75px] left-0 h-[calc(100vh-75px)] z-40 bg-blue-800 text-white shadow-sm transition-all duration-300 ease-in-out ${
          toggle ? "md:w-64" : "md:w-20"
        }`}
      >
        <DashSider />
      </aside>

      {/* Main Screens */}
      <main
        className={`pt-[75px] bg-gray-200 transition-all duration-300 ease-in-out ${
          toggle ? "md:ml-64" : "md:ml-20"
        }`}
      >
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashLayout;
