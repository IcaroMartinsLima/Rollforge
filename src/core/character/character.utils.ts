import { Character } from "./character.types";
import { getProficiencyBonus } from "../proficiency";
import { skillToAttribute, Skill } from "../skills";
import { calcModifier } from "../calcModifier";
import { calcSkill } from "../calcSkill";

export function getAttributeModifier(
  character: Character,
  attribute: keyof Character["attributes"]
) {
  const value = character.attributes[attribute];
  return calcModifier(value);
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