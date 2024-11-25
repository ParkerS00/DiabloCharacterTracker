import { FC, useCallback, useState } from "react";
import { Skill } from "../../Data/DTOs/skill";
import { useAuth } from "react-oidc-context";
import { RemoveSkillModal } from "./RemoveSkillModal";

interface props {
  skill: Skill;
  playableCharacterId: number;
}

export const OpenRemoveSkillModal: FC<props> = ({
  skill,
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
      <div className="flex justify-end">
        <button
          className="px-4 py-2 bg-blood-400 hover:bg-blood-600 text-white rounded-md shadow"
          onClick={handleModal}
          aria-label={`Remove item ${skill.skillName || "unknown"}`}
        >
          Remove
        </button>
        {isModalOpen && (
          <RemoveSkillModal
            skill={skill}
            onClose={() => setIsModalOpen(false)}
            playableCharacterId={playableCharacterId}
          />
        )}
      </div>
    )
  );
};
