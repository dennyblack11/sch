import { FC, useEffect, useState } from "react";
import { ChevronRight, HomeIcon, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface iDashboardNavs {
  currentPage: string;
  currentPageUrl?: string;
  newPage?: string;
  newPageUrl?: string;
  goBack?: boolean;
}

const DashboardNavs: FC<iDashboardNavs> = ({
  currentPage,
  currentPageUrl,
  newPage,
  newPageUrl,
  goBack,
}) => {
  const [route, setRoute] = useState<boolean>(false);
  const navigate = useNavigate();

  const routeCheck = () => {
    if (!newPage) {
      setRoute(false);
    } else {
      setRoute(true);
    }
  };

  useEffect(() => {
    routeCheck();
  }, [newPage!]);

  return (
    <div className="mb-4">
      <div className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
        <Link to="/" className="flex items-center gap-1 hover:text-blue-600">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden md:inline">Home</span>
        </Link>

        <ChevronRight className="w-4 h-4 text-gray-400" />

        <Link
          to={currentPageUrl!}
          className={` ${
            route ? "text-gray-700" : "font-semibold text-blue-800"
          }`}
        >
          {currentPage}
        </Link>

        {route && (
          <>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link
              to={`${currentPageUrl}${newPageUrl!}`}
              className="text-black font-semibold hover:text-blue-600"
            >
              {newPage}
            </Link>
          </>
        )}

        {goBack && (
          <>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1 text-black font-semibold hover:text-red-500"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          </>
        )}
      </div>

      <div className="mt-3 text-blue-800 font-bold text-xl md:text-3xl">
        {route ? newPage : currentPage}
      </div>
    </div>
  );
};

export default DashboardNavs;
