import { Item } from "../Data/DTOs/Item";

interface AddModalProps {
  onClose: () => void;
  item: Item;
}

export const AddModal: React.FC<AddModalProps> = ({ onClose, item }) => {
  return (
    <div className="fixed inset-0 bg-blood-950 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-blood-500 p-6 rounded-md shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Add {item.name}
        </h2>
        <p className="mb-4 text-white">
          Select which character you want to add to:
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              console.log("Item added");
              onClose();
            }}
            className="px-4 py-2 bg-blood-200 hover:bg-blood-400 text-white rounded-md"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
