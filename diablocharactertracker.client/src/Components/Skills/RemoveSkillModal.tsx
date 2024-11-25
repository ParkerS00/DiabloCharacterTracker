import { FC } from "react";
import { Skill } from "../../Data/DTOs/skill";
import CancelItemButton from "../Items/CancelItemButton";
import { GetCharacterSkillRequest } from "../../Data/Requests/GetRequests/GetCharacterSkillRequest";
import { CharacterSkillQueries } from "../../Queries/CharacterSkillQuerires";

interface RemoveSkillModalProps {
  skill: Skill;
  playableCharacterId: number;
  onClose: () => void;
}

export const RemoveSkillModal: FC<RemoveSkillModalProps> = ({
  skill,
  onClose,
  playableCharacterId,
}) => {
  const getCharacterSkillRequest: GetCharacterSkillRequest = {
    playableCharacterId: playableCharacterId,
    skillId: skill.id,
  };

  const { data: characterSkillToRemove, isLoading: isFetchingSkill } =
    CharacterSkillQueries.useGetCharacterSkillByRequest(
      getCharacterSkillRequest
    );

  const { mutate: removeCharacterSkill, isPending: isRemovingSkill } =
    CharacterSkillQueries.useRemoveCharacterSkill(
      characterSkillToRemove?.id ?? 0
    );

  const handleDelete = () => {
    if (characterSkillToRemove) {
      removeCharacterSkill(undefined, {
        onSuccess: () => {
          onClose();
        },
        onError: (error) => {
          console.error("Failed to remove skill:", error);
        },
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-blood-950 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-blood-500 p-6 rounded-md shadow-md max-w-full">
        <h2 className="text-xl font-semibold mb-4 text-white">
          {isFetchingSkill ? "Loading..." : `Remove ${skill.skillName}?`}
        </h2>

        <div className="space-x-2">
          <button
            className="px-4 py-2 bg-blood-200 hover:bg-blood-400 text-white rounded-md shadow"
            onClick={handleDelete}
            disabled={isRemovingSkill || isFetchingSkill}
          >
            {isRemovingSkill ? "Removing..." : "Yes"}
          </button>
          <CancelItemButton onClose={onClose} />
        </div>
      </div>
    </div>
  );
};
