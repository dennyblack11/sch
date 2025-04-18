import React, { useState, useEffect } from "react";
import {
  MdOutlineSignalCellularAlt,
  MdSignalCellularConnectedNoInternet2Bar,
} from "react-icons/md";

const ConnectionBack = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-green-600 text-white text-center p-2 z-30">
      <div className="flex justify-center items-center gap-2">
        <MdOutlineSignalCellularAlt className="text-[20px]" />
        <p>Connected. Welcome Back.</p>
      </div>
    </div>
  );
};

const NetworkStatus: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showWelcomeBack, setShowWelcomeBack] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowWelcomeBack(true);
      setTimeout(() => {
        setShowWelcomeBack(false);
      }, 2500);
    };

    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div>
      {!isOnline && (
        <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white text-center p-2 z-30">
          <div className="flex justify-center items-center gap-2">
            <MdSignalCellularConnectedNoInternet2Bar className="text-[20px]" />
            <p>
              No Internet Connection. Please wait, you’ll automatically be
              reconnected when back online.
            </p>
          </div>
        </div>
      )}
      {isOnline && showWelcomeBack && <ConnectionBack />}
    </div>
  );
};

export default NetworkStatus;
