import { FC, useState } from "react";
import { AlertTriangle, Trash2 } from "lucide-react";
import { notification } from "antd";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  studentImage: string;
  onDelete?: () => void;
}

const DeleteStudent: FC<Props> = ({
  isOpen,
  onClose,
  studentName,
  studentImage,
  onDelete,
}) => {
  const [confirmationText, setConfirmationText] = useState("");

  if (!isOpen) return null;

  const isConfirmed = confirmationText.trim().toLowerCase() === "i am sure";

  const handleDeleteStudent = () => {
    notification.success({
      message: "Success!",
      description: "Filter's Cleared.",
      placement: "topRight",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-md p-6 rounded-xl shadow-2xl z-50">
        {/* Warning Header */}
        <div className="flex items-center gap-3 mb-4 text-red-600">
          <AlertTriangle className="w-6 h-6" />
          <h2 className="text-xl font-semibold">Danger Zone: Delete Student</h2>
        </div>

        {/* Student Info */}
        <div className="flex flex-col items-center gap-3 mb-4 text-center">
          <img
            src={studentImage}
            alt={studentName}
            className="w-24 h-24 rounded-full object-cover border-4 border-red-100"
          />
          <p className="text-gray-700 font-semibold text-lg">{studentName}</p>
        </div>

        {/* Warning Message */}
        <div className="bg-red-50 text-red-800 border border-red-200 p-4 rounded-md text-sm">
          <p>
            You're about to permanently delete <strong>{studentName}</strong>{" "}
            from the system. This action cannot be undone. All records
            associated with this student (e.g., scores, performances,
            attendance) will be removed.
          </p>
          <p className="mt-2 font-semibold">
            To confirm, type{" "}
            <span className="bg-red-100 px-1 rounded text-red-700">
              I am sure
            </span>{" "}
            below.
          </p>
        </div>

        {/* Confirmation Input */}
        <input
          type="text"
          placeholder='Type "I am sure" to confirm'
          value={confirmationText}
          onChange={(e) => setConfirmationText(e.target.value)}
          className="mt-4 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-400"
        />

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>

          {isConfirmed && (
            <button
              className="px-4 py-2 text-sm bg-red-600 text-white hover:bg-red-700 rounded-md flex items-center gap-2"
              onClick={handleDeleteStudent}
            >
              <Trash2 className="w-4 h-4" />
              Yes, Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteStudent;
