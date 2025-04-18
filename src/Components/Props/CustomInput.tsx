import { FC, useState } from "react";

interface iInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  W?: string;
  H?: string;
}

const CustomInput: FC<iInputProps> = ({
  placeholder,
  value,
  onChange,
  W,
  H,
}) => {
  const [click, setClick] = useState<boolean>(false);

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className={`py-2 px-3 ${W} ${H} border rounded-[6px] outline-none ${
          click ? "border-blue-600" : ""
        }`}
        value={value}
        onChange={onChange}
        onClick={() => {
          setClick(true);
        }}
        onBlur={() => {
          setClick(false);
        }}
      />
    </div>
  );
};

export default CustomInput;
