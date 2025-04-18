import { useContext } from "react";
import { GlobalContext } from "../../Global/ReactContextApi/ContextProvider";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  NotebookPen,
  History,
  Settings,
  School,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { motion } from "framer-motion";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, to: "/dashboard" },
  { name: "Teachers", icon: Users, to: "/dashboard/teachers" },
  { name: "Students", icon: GraduationCap, to: "/dashboard/students" },
  { name: "Classes", icon: School, to: "/dashboard/classes" },
  { name: "Subjects", icon: BookOpen, to: "/dashboard/subjects" },
  { name: "Lesson Note", icon: NotebookPen, to: "/dashboard/lesson-notes" },
  {
    name: "Operational History",
    icon: History,
    to: "/dashboard/operations-history",
  },
  { name: "Settings", icon: Settings, to: "/dashboard/settings" },
];

const DashSider = () => {
  const { toggle } = useContext(GlobalContext);
  const { pathname } = useLocation();

  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="h-full flex flex-col justify-between items-center"
    >
      <div className="w-full pr-2">
        {navItems.map(({ name, icon: Icon, to }, index) => {
          const isActive = pathname === to;

          return (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.3 }}
            >
              <Link to={to}>
                <nav
                  className={clsx(
                    "p-3 my-2 flex items-center gap-2 rounded-tr-[20px] rounded-br-[20px] cursor-pointer transition-all duration-300",
                    {
                      "pl-4 font-semibold": toggle,
                      "justify-center": !toggle,
                      "bg-white text-blue-600 shadow-sm": isActive,
                      "hover:bg-gray-100 hover:text-blue-600": !isActive,
                    }
                  )}
                >
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  {toggle && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {name}
                    </motion.span>
                  )}
                </nav>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="p-3 w-full"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link to="/dashboard/subscription-plans">
          <div className="bg-white text-blue-800 shadow-sm rounded-md h-[100px] flex items-center justify-center text-center text-sm font-medium transition-all duration-300 hover:scale-[1.02]">
            Upgrade Your Plan
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default DashSider;
