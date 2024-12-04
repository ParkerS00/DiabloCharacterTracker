import { CharacterSkillQueries } from "../Queries/CharacterSkillQuerires";
import ItemCard from "../Components/Items/ItemCard";
import { CharacterItemQueries } from "../Queries/CharacterItemQueries";
import { useAuth } from "react-oidc-context";
import { useParams } from "react-router-dom";
import SkillCard from "../Components/Skills/SkillCard";
import Loading from "../Components/Loading";
import { FilterComponent } from "../Components/Forms/FilterComponent";
import { itemClasses } from "../Components/Items/itemClasses";
import { useState, useEffect } from "react";
import { OpenRemoveSkillModal } from "../Components/Skills/OpenRemoveSkillModal";
import RemoveButton from "../Components/Buttons/RemoveButton";
import { PlayableCharacterQueries } from "../Queries/PlayableCharacterQueries";

const ViewCharacter = () => {
  const { characterId } = useParams<{ characterId: string }>();
  const { isAuthenticated } = useAuth();

  const [activeClass, setActiveClass] = useState(() => {
    return (
      localStorage.getItem("viewCharacterActiveClass") || itemClasses[0].key
    );
  });

  useEffect(() => {
    localStorage.setItem("viewCharacterActiveClass", activeClass);
  }, [activeClass]);

  const { data: playableCharacter } =
    PlayableCharacterQueries.useGetPlayableCharacterById(Number(characterId));

  const { data: items, isLoading: gettingCharacters } =
    CharacterItemQueries.useGetAllItemsForCharacter(Number(characterId));

  const { data: skills, isLoading: gettingSkills } =
    CharacterSkillQueries.useGetAllSkillsForCharacter(Number(characterId));

  const filteredItems = items?.filter((item) => item.slot === activeClass);

  if (gettingCharacters || gettingSkills) {
    return <Loading />;
  }

  return (
    isAuthenticated && (
      <div className="bg-blood-800 min-h-screen">
        <FilterComponent
          classes={itemClasses}
          activeClass={activeClass}
          setActiveClass={setActiveClass}
        />
        <div className="text-white flex justify-center items-center p-2">
          <RemoveButton
            playableCharacterId={Number(characterId)}
            playableCharacterName={playableCharacter?.name}
          />
        </div>
        {activeClass !== "skills" && (
          <div className="pb-6 pl-6 pr-6 pt-2 h-full flex flex-col items-center">
            <h1 className="text-2xl text-white mb-4">Character Items</h1>
            <div className="grid justify-center items-center sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredItems?.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  characterPage={true}
                  playableCharacterId={Number(characterId)}
                />
              ))}
            </div>
          </div>
        )}
        {activeClass === "skills" && (
          <div className="p-6 h-full flex flex-col items-center">
            <h1 className="text-2xl text-white mb-4">Character Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full max-w-screen-item">
              {skills?.map((skill) => (
                <div>
                  <SkillCard key={skill.id} skill={skill} />
                  <OpenRemoveSkillModal
                    skill={skill}
                    playableCharacterId={Number(characterId)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default ViewCharacter;
