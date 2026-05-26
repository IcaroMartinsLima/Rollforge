# Rollforge

Aplicativo mobile para criação e gerenciamento de personagens de RPG de mesa (sistema D&D). Construído com React Native (Expo) e TypeScript.

## Stack

| Tecnologia | Versão |
|---|---|
| React Native | 0.81.5 |
| Expo SDK | ~54 |
| React | 19.1.0 |
| TypeScript | 5.9.2 |
| Zustand | 5.0.12 |

## Funcionalidades Atuais

- **Criação de personagens** — Gera personagens com UUID único, atributos padrão (10 em todos) e nível 1
- **Listagem de personagens** — Visualização em cards com ID e nível
- **Sistema de atributos** — Força, Destreza, Constituição, Inteligência, Sabedoria, Carisma
- **Sistema de perícias** — 18 perícias compatíveis com D&D 5e, cada uma vinculada ao seu atributo governante
- **Cálculo de modificadores** — `(score - 10) / 2` (arredondado para baixo)
- **Bônus de proficiência** — Escala por nível (2–6 conforme tabela D&D)
- **Cálculo de valor de perícia** — Suporta não-proficiente, proficiente e expertise
- **Tema claro/escuro** — Paleta com detecção automática do dispositivo e alternância manual
- **Seleção de personagem ativo** — Navegação entre personagens na lista

## Roadmap

### Fase 1 — Personagem (implementado)
- [x] Criação de personagem com valores padrão
- [x] Listagem de personagens em cards
- [x] Exclusão de personagens
- [x] Seleção de personagem ativo
- [x] Cálculo de modificadores de atributo
- [x] Cálculo de bônus de proficiência por nível
- [x] Cálculo de valor de perícia (proficiente/expertise)
- [x] Tema claro/escuro

### Fase 2 — Edição e Persistência
- [ ] Tela de edição de atributos (distribuição de pontos / rolagem)
- [ ] Tela de edição de perícias (proficiência e expertise)
- [ ] Edição de nível do personagem
- [ ] Persistência local (AsyncStorage / SQLite)
- [ ] Deleção com confirmação

### Fase 3 — Ficha de Personagem
- [ ] Tela de ficha completa com atributos, perícias e modificadores calculados
- [ ] Exibição de salvaguardas (saving throws)
- [ ] Exibição de CA (Classe de Armadura), HP (Pontos de Vida), deslocamento
- [ ] Seleção de raça e classe com bônus iniciais

### Fase 4 — Sistema de Navegação
- [ ] Navegação entre telas (React Navigation)
- [ ] Tela inicial com lista de personagens
- [ ] Tela de ficha detalhada
- [ ] Tela de edição de atributos
- [ ] Tela de edição de perícias

### Fase 5 — Multijogador e Avançado
- [ ] Exportar/importar personagem (JSON)
- [ ] Suporte a múltiplos sistemas de RPG
- [ ] Rolagem de dados integrada (d4, d6, d8, d10, d12, d20)
- [ ] Histórico de rolagens
- [ ] Compartilhamento de personagens

## Como rodar

```bash
npm install
npx expo start
```

Para plataforma específica:

```bash
npm run android
npm run ios
npm run web
```
