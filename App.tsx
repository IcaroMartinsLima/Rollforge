import { View, Text } from "react-native";
import { Character, defaultCharacter } from "./src/core/character/character.types";
import { getSkillValue } from "./src/core/character/character.utils";
import { CharacterListScreen } from "./src/screens/CharacterListScreen";



export default function App() {
  return <CharacterListScreen />;
}