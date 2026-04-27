import { Attribute } from "../attributes";
import { Skill } from "../skills";

export type Attributes = Record<Attribute, number>;

export type SkillState = {
  proficient?: boolean;
  expertise?: boolean;
};

export type SkillsState = Record<Skill, SkillState>;

export type Character = {
  id: string;

  level: number;

  attributes: Attributes;

  skills: SkillsState;
};

export const defaultCharacter: Character = {
  id: "default",
  level: 1,
  attributes: {
    charisma: 10,
    constitution: 10,
    dexterity: 10,
    intelligence: 10,
    strength: 10,
    wisdom: 10,
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
}}