import { FC, ReactNode } from "react";
import { ClipLoader } from "react-spinners";

interface iBtnProps {
  text?: string;
  icon?: ReactNode;
  loadingText?: string;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  bgColor: string;
  textColor: string;
  W?: string;
  H?: string;
}

const CustomButton: FC<iBtnProps> = ({
  text,
  icon,
  loading,
  loadingText,
  onClick,
  bgColor,
  textColor,
  W,
  H,
}) => {
  return (
    <div>
      <button
        className={`py-2 px-7 ${W} ${H} ${bgColor} ${textColor} rounded-[6px] flex justify-center items-center transition-all duration-300 hover:shadow-sm scale-100`}
        onClick={onClick}
      >
        {loading ? (
          <>
            <ClipLoader
              color={"#fff"}
              className="mr-2"
              loading={loading}
              size={20}
            />
            {loadingText}
          </>
        ) : (
          <div className="flex items-center gap-2">
            <p>{text}</p>
            <div>{icon}</div>
          </div>
        )}
      </button>
    </div>
  );
};

export default CustomButton;
