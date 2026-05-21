export type Attribute =
  | "strength"
  | "dexterity"
  | "constitution"
  | "intelligence"
  | "wisdom"
  | "charisma";

export type Skill =
  | "athletics"
  | "acrobatics"
  | "sleightOfHand"
  | "stealth"
  | "arcana"
  | "history"
  | "investigation"
  | "nature"
  | "religion"
  | "animalHandling"
  | "insight"
  | "medicine"
  | "perception"
  | "survival"
  | "performance"
  | "deception"
  | "intimidation"
  | "persuasion";

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
