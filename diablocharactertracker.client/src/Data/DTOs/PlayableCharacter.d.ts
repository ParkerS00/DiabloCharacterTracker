import { CharacterClass } from "./CharacterClass";
import { UserAccount } from "./UserAccount";

export interface PlayableCharacter {
  id: number;
  name: string;
  characterClass: CharacterClass;
  userAccount: UserAccount;
}
