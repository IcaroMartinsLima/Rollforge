type Params = {
  modifier: number;
  proficiencyBonus: number;
  proficient?: boolean;
  expertise?: boolean;
};

export function calcSkill({
  modifier,
  proficiencyBonus,
  proficient,
  expertise,
}: Params): number {
  if (expertise) {
    return modifier + proficiencyBonus * 2;
  }

  if (proficient) {
    return modifier + proficiencyBonus;
  }

  return modifier;
}