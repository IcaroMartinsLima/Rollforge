import { create } from "zustand";
import { Character } from "../types/character";

type CharacterStore = {
  characters: Character[];
  activeCharacterId: string | null;
  createCharacter: (character: Character) => void;
  deleteCharacter: (id: string) => void;
  setActiveCharacter: (id: string) => void;
  updateCharacter: (character: Character) => void;
};

export const useCharacterStore = create<CharacterStore>((set) => ({
  characters: [],
  activeCharacterId: null,

  createCharacter: (character) =>
    set((state) => ({
      characters: [...state.characters, character],
      activeCharacterId: character.id,
    })),

  deleteCharacter: (id) =>
    set((state) => ({
      characters: state.characters.filter((c) => c.id !== id),
      activeCharacterId:
        state.activeCharacterId === id ? null : state.activeCharacterId,
    })),

  setActiveCharacter: (id) =>
    set(() => ({
      activeCharacterId: id,
    })),

  updateCharacter: (character) =>
    set((state) => ({
      characters: state.characters.map((c) =>
        c.id === character.id ? character : c
      ),
    })),
}));

export const useActiveCharacter = () =>
  useCharacterStore((state) =>
    state.characters.find((c) => c.id === state.activeCharacterId)
  );
