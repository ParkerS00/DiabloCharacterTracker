import { Skill } from "@/Data/DTOs/skill";
import toast from "react-hot-toast";

interface AddSkillModalProps {
  onClose: () => void;
  skill: Skill;
  userId: number;
}

const AddSkillModal: React.FC<AddSkillModalProps> = ({
  onClose,
  skill,
  userId,
}) => {


    return (
      <div className="fixed inset-0 bg-blood-950 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-blood-500 p-6 rounded-md shadow-md w-96">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Add {skill.skillName}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="mb-4 text-white">
              Select which character you want to add to:
            </p>
            <SelectItemComponent
              characters={characters ?? []}
              character={character}
              setCharacter={setCharacter}
            />
            <div className="flex justify-end gap-4">
              <CancelItemButton onClose={onClose} />
              <button
                type="submit"
                className="px-4 py-2 bg-blood-200 hover:bg-blood-400 text-white rounded-md"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddSkillModal;
