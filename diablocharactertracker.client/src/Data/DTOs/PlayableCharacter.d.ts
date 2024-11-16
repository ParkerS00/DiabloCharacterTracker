import { CharacterClass } from "./CharacterClass";
import { UserAccount } from "./UserAccount";

export interface PlayableCharacter {
  id: number;
  name: string;
  characterClassDTO: CharacterClass;
  userAccountDTO: UserAccount;
}
