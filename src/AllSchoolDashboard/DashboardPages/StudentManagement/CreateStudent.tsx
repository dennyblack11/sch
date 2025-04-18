import { useState } from "react";
import CustomInput from "../../../Components/Props/CustomInput";
import CustomButton from "../../../Components/Props/CustomButton";

interface Props {
  onClose: () => void;
}

const CreateStudentModal = ({ onClose }: Props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    gender: "",
    class: "",
    address: "",
    parentPhone: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Slide-in panel */}
      <div className="relative w-[400px] bg-white h-screen shadow-lg z-50 animate-slideInRight ml-auto p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Create New Student</h2>
          <button onClick={onClose} className="text-red-500 text-sm">
            Close
          </button>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <CustomInput
            W="w-full"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
          <CustomInput
            W="w-full"
            placeholder="Surname"
            value={formData.surname}
            onChange={(e) => handleChange("surname", e.target.value)}
          />
          <select
            className="w-full border border-blue-300 rounded-[6px] p-2"
            value={formData.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select
            className="w-full border border-gray-300 rounded-[6px] p-2"
            value={formData.class}
            onChange={(e) => handleChange("class", e.target.value)}
          >
            <option value="">Select Class</option>
            <option value="JSS1">JSS1</option>
            <option value="JSS2">JSS2</option>
          </select>
          <CustomInput
            W="w-full"
            placeholder="Address"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
          <CustomInput
            W="w-full"
            placeholder="Parent's Phone Number"
            value={formData.parentPhone}
            onChange={(e) => handleChange("parentPhone", e.target.value)}
          />

          <CustomButton
            W="w-full"
            text="Register Student"
            bgColor="bg-blue-600"
            textColor="text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateStudentModal;
