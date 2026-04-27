import { Character } from "./character.types";
import uuid from "react-native-uuid";

export function createBaseCharacter(): Character {
  return {
    id: uuid.v4() as string,
    level: 1,

    attributes: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    },

    skills: {acrobatics: {expertise: true, proficient: true},
  athletics: { proficient: false, expertise: false },
  animalHandling: { proficient: false, expertise: false },
  arcana: { proficient: false, expertise: false },
  deception: { proficient: false, expertise: false },
  history: { proficient: false, expertise: false },
  insight: { proficient: false, expertise: false },
  intimidation: { proficient: false, expertise: false },
  investigation: { proficient: false, expertise: false },
  medicine: { proficient: false, expertise: false },
  nature: { proficient: false, expertise: false },
  perception: { proficient: false, expertise: false },
  performance: { proficient: false, expertise: false },
  persuasion: { proficient: false, expertise: false },
  religion: { proficient: false, expertise: false },
  sleightOfHand: { proficient: false, expertise: false },
  stealth: { proficient: false, expertise: false },
  survival: { proficient: false, expertise: false }
},
  };
}