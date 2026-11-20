# Nerd Point

Catálogo virtual de produtos geek, inspirado no universo dos animes, games, filmes e séries.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- CSS
- Axios

## Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/AndreViriatoMoreiraCapoani/nerdpoint-catalog.git
```

2. Entre na pasta do projeto:

```bash
cd nerdpoint-catalog
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto:

```bash
npm run dev
```

5. Acesse o endereço local indicado no terminal.

## Fonte dos dados

A primeira listagem de produtos utiliza dados externos fornecidos pelo **Mockaroo**, por meio de um endpoint JSON.

O acesso aos dados é organizado em três partes:

- `src/lib/axios.ts`: configuração do Axios.
- `src/services/product-service.ts`: serviço responsável pela requisição à API.
- `src/hook/use-products.ts`: hook responsável pelo carregamento dos produtos e pelo tratamento dos estados de carregamento e erro.

Os dados recebidos são adaptados aos tipos utilizados pela aplicação.

A segunda listagem, de figuras, continua utilizando um vetor de dados local.

## Funcionalidades

- Exibição de produtos em destaque.
- Listagem de figuras.
- Carregamento de produtos por API externa.
- Estado visual de carregamento.
- Mensagem de erro em caso de falha na requisição.
- Sistema de favoritos.
- Layout responsivo.