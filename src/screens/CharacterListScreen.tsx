import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { useCharacterStore } from "../stores/character.store";
import { createBaseCharacter } from "../core/character/character.factory";

export function CharacterListScreen() {
  const {
    characters,
    createCharacter,
    setActiveCharacter,
  } = useCharacterStore();

  const handleCreate = () => {
    const newChar = createBaseCharacter();
    createCharacter(newChar);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Criar personagem" onPress={handleCreate} />

      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setActiveCharacter(item.id)}
            style={{
              padding: 15,
              borderBottomWidth: 1,
            }}
          >
            <Text>Personagem {item.id.slice(0, 5)}</Text>
            <Text>Nível {item.level}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}