# Movies Explorer

![Imagem do Projeto](/src/assets/og-image.png)


Movies Explorer é um aplicativo mobile desenvolvido em React Native com Expo, que permite explorar filmes e séries populares, buscar títulos, visualizar detalhes e salvar favoritos.

## Funcionalidades

- Listagem de filmes e séries populares
- Busca por filmes e séries pelo título
- Visualização de detalhes (sinopse, avaliação, data de lançamento, trailer)
- Salvar e remover filmes/séries favoritos
- Interface moderna com navegação por abas

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Gluestack UI](https://ui.gluestack.io/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Axios](https://axios-http.com/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)

## Estrutura do Projeto

```
MoviesExplorer/
├── src/
│   ├── app/                # Rotas e telas principais
│   ├── assets/             # Imagens e recursos estáticos
│   ├── components/         # Componentes reutilizáveis
│   ├── config/             # Configurações de tema e cores
│   ├── hooks/              # Hooks customizados (ex: API)
│   ├── storage/            # Gerenciamento de favoritos
│   ├── types/              # Tipagens TypeScript
│   └── utils/              # Utilitários
├── .env                    # Variáveis de ambiente (API)
├── app.config.js           # Configuração do Expo
├── package.json            # Dependências e scripts
└── ...
```

## Como rodar o projeto

1. **Clone o repositório**

   ```sh
   git clone https://github.com/seuusuario/moviesexplorer.git
   cd moviesexplorer
   ```

2. **Instale as dependências**

   ```sh
   npm install
   ```

3. **Configure as variáveis de ambiente**

   - Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
     ```
     API_URL=https://api.themoviedb.org/3
     API_TOKEN=seu_token_aqui
     API_KEY=sua_api_key_aqui
     ```

4. **Inicie o projeto**
   ```sh
   npm start
   ```
   Ou use `npm run android` ou `npm run ios` para rodar em um emulador específico.

## Scripts Disponíveis

- `npm start` — Inicia o Expo
- `npm run android` — Executa no Android
- `npm run ios` — Executa no iOS
- `npm run web` — Executa no navegador
- `npm test` — Executa os testes

## Licença

Este projeto é apenas para fins de estudo.

---

Sinta-se à vontade para contribuir ou sugerir melhorias! Ou use `npm run android` ou `npm run ios` para rodar em um emulador específico.

## Scripts Disponíveis

- `npm start` — Inicia o Expo
- `npm run android` — Executa no Android
- `npm run ios` — Executa no iOS
- `npm run web` — Executa no navegador
- `npm test` — Executa os testes

## Licença

Este projeto é apenas para fins de estudo.

---

Sinta-se à vontade para contribuir ou sugerir melhorias!
