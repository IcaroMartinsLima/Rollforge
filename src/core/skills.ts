import { Attribute } from "./attributes";

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