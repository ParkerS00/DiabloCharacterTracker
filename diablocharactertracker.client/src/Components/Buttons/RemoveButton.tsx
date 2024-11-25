import { Item } from "../../Data/DTOs/Item";
import React, { useState, useCallback } from "react";
import { useAuth } from "react-oidc-context";
import { RemoveItemModal } from "../Items/RemoveItemModal";

interface RemoveButtonProps {
  item: Item;
  playableCharacterId: number;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({
  item,
  playableCharacterId,
}) => {
  const { isAuthenticated } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsModalOpen((prev) => !prev);
  }, []);

  return (
    isAuthenticated && (
      <div>
        <button
          className="px-4 py-2 bg-blood-600 hover:bg-blood-800 text-white rounded-md shadow"
          onClick={handleModal}
          aria-label={`Remove item ${item.name || "unknown"}`}
        >
          Remove
        </button>
        {isModalOpen && (
          <RemoveItemModal
            item={item}
            onClose={() => setIsModalOpen(false)}
            playableCharacterId={playableCharacterId}
          />
        )}
      </div>
    )
  );
};

export default RemoveButton;
