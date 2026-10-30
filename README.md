# Nosso site — 2 anos

Site surpresa de aniversário de namoro. Vite + React + Framer Motion.

## Rodar no seu computador

```bash
npm install
npm run dev
```

Abre em http://localhost:5173. Para testar no celular na mesma rede Wi-Fi: `npm run dev -- --host` e acesse o endereço "Network" que aparece no terminal.

## Onde mexer

**Quase tudo fica em `src/conteudo.js`**: nomes, data de início, textos, momentos, legendas, cartinhas e a carta final. Os componentes leem dali, então você não precisa tocar no resto.

| O quê | Onde |
|---|---|
| Textos, datas, cartinhas, carta final | `src/conteudo.js` |
| Fotos | `public/fotos/` |
| Músicas (.mp3) | `public/musicas/` |
| Cores e fontes | topo de `src/index.css` (variáveis `--papel`, `--vinho` etc.) |

### Fotos

1. Coloque as fotos originais em `public/fotos-originais/`.
2. Rode `npm run fotos`. Elas viram `.webp` leves em `public/fotos/`, com o mesmo nome.
3. No `conteudo.js`, aponte para `fotos/nome-da-foto.webp`.

Fotos `.HEIC` do iPhone precisam ser exportadas como JPG antes.
A pasta `fotos-originais/` não precisa ir para o deploy (está no `.gitignore`).

### Músicas

Coloque os `.mp3` em `public/musicas/` e liste em `musicas` no `conteudo.js`. Elas tocam em sequência e voltam ao início. A primeira começa quando ela toca no selo do envelope.

Mantenha o tamanho razoável (3–5 músicas). Se algum arquivo for muito grande, dá pra reduzir com:
`ffmpeg -i entrada.mp3 -b:a 128k saida.mp3`

### Senha (opcional)

Em `abertura.senha`. Vazio = abre direto. A comparação ignora maiúsculas, acentos, espaços e pontuação, então `02/11`, `0211` e `02 11` contam igual.
É só um charme: não protege as fotos de quem souber o link e entender de código.

### Apagar os exemplos

Depois de trocar o conteúdo, apague `public/fotos/exemplo-*.webp` e `public/musicas/exemplo-*.mp3`.

## Publicar (Vercel, grátis)

1. Suba o projeto num repositório **privado** no GitHub.
2. Em vercel.com → Add New → Project → importe o repositório. As configurações padrão do Vite já funcionam.
3. Em Settings → Domains, troque o nome gerado por algo seu, ex.: `lucas-e-nome.vercel.app`.

O site já vem marcado para **não aparecer em buscadores** (`robots.txt`, meta tag e cabeçalho no `vercel.json`). Só entra quem tiver o link.

## Antes de entregar

- [ ] Testar no celular, com som, do começo ao fim
- [ ] Conferir data de início no contador
- [ ] Ler a carta final em voz alta uma vez
- [ ] Gerar o QR code do link e imprimir no cartão
