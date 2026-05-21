import { Attribute, Character, Skill } from "../types/character";
import uuid from "react-native-uuid";

export const ATTRIBUTES: Attribute[] = [
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma",
];

export const skillToAttribute: Record<Skill, Attribute> = {
  athletics: "strength",

  acrobatics: "dexterity",
  sleightOfHand: "dexterity",
  stealth: "dexterity",

  arcana: "intelligence",
  history: "intelligence",
  investigation: "intelligence",
  nature: "intelligence",
  religion: "intelligence",

  animalHandling: "wisdom",
  insight: "wisdom",
  medicine: "wisdom",
  perception: "wisdom",
  survival: "wisdom",

  performance: "charisma",
  deception: "charisma",
  intimidation: "charisma",
  persuasion: "charisma",
};

export const defaultCharacter: Character = {
  id: "default",
  level: 1,
  attributes: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
  skills: {
    acrobatics: { proficient: false, expertise: false },
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
    survival: { proficient: false, expertise: false },
  },
};

export function calcModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

export function calcSkill({
  modifier,
  proficiencyBonus,
  proficient,
  expertise,
}: {
  modifier: number;
  proficiencyBonus: number;
  proficient?: boolean;
  expertise?: boolean;
}): number {
  if (expertise) {
    return modifier + proficiencyBonus * 2;
  }
  if (proficient) {
    return modifier + proficiencyBonus;
  }
  return modifier;
}

export function getProficiencyBonus(level: number): number {
  if (level >= 17) return 6;
  if (level >= 13) return 5;
  if (level >= 9) return 4;
  if (level >= 5) return 3;
  return 2;
}

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
    skills: {
      acrobatics: { proficient: false, expertise: false },
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
      survival: { proficient: false, expertise: false },
    },
  };
}

export function getAttributeModifier(
  character: Character,
  attribute: Attribute
) {
  return calcModifier(character.attributes[attribute]);
}

export function getSkillValue(character: Character, skill: Skill) {
  const attribute = skillToAttribute[skill];
  const modifier = getAttributeModifier(character, attribute);
  const proficiencyBonus = getProficiencyBonus(character.level);
  const skillState = character.skills[skill] || {};
  return calcSkill({
    modifier,
    proficiencyBonus,
    proficient: skillState.proficient,
    expertise: skillState.expertise,
  });
}
