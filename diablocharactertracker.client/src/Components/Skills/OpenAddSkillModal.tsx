import {
  UserAccountContext,
  UserAccountContextInterface,
} from "../../Data/Context/UserAccountContext";
import { Skill } from "../../Data/DTOs/skill";
import React, { useState } from "react";
import { useAuth } from "react-oidc-context";
import AddSkillModal from "./AddSkillModal";

interface OpenAddSkillModalProps {
  skill: Skill;
}

const OpenAddSkillModal: React.FC<OpenAddSkillModalProps> = ({ skill }) => {
  const { isAuthenticated } = useAuth();
  const { usr } = React.useContext(
    UserAccountContext
  ) as UserAccountContextInterface;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    isAuthenticated && (
      <>
        <button
          className="px-4 py-2 bg-blood-200 hover:bg-blood-400 text-white rounded-md shadow"
          onClick={handleModal}
        >
          Add
        </button>
        {isModalOpen && (
          <AddSkillModal
            onClose={handleModal}
            skill={skill}
            userId={usr?.id ?? 0}
          />
        )}
      </>
    )
  );
};

export default OpenAddSkillModal;
