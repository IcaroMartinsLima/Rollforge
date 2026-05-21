import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import CardView from "../components/CardView";
import { createBaseCharacter } from "../lib/character";
import { useCharacterStore } from "../store/characterStore";

export function CharacterListScreen() {
  const { characters, createCharacter, setActiveCharacter } =
    useCharacterStore();

  const handleCreate = () => {
    const newChar = createBaseCharacter();
    createCharacter(newChar);
  };

  return (
    <View style={styles.container}>
      <Button title="Criar personagem" onPress={handleCreate} />

      {characters.map((char) => (
        <CardView onPress={() => setActiveCharacter(char.id)}>
          <Text>Personagem {char.id.slice(0, 5)}</Text>
          <Text>Nível {char.level}</Text>
        </CardView>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 10 },
  item: {
    padding: 15,
    borderBottomWidth: 1,
  },
});
