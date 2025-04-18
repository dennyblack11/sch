interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const BulkUploadStudent: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Center modal */}
      <div className="relative bg-white w-[90%] max-w-md p-6 rounded-lg shadow-xl z-50">
        <h2 className="text-lg font-bold mb-4">Bulk Upload Students</h2>
        <form className="flex flex-col gap-4">
          <input type="file" className="border p-2 rounded-md" />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Upload
          </button>
        </form>

        <div className="mt-4 bg-gray-100 p-3 rounded-md text-sm">
          <p>
            <strong>Instructions:</strong>
          </p>
          <ul className="list-disc pl-5">
            <li>Ensure file is in CSV format.</li>
            <li>Headers should include: name, surname, class, gender, etc.</li>
            <li>Maximum 100 records per upload.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BulkUploadStudent;
