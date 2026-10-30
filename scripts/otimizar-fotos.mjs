// Converte as fotos de public/fotos-originais/ para WebP leve em public/fotos/.
// Uso: coloque as fotos originais na pasta e rode `npm run fotos`.
// Mantém o nome do arquivo (ex.: praia.jpg -> fotos/praia.webp).
import { readdir, mkdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ENTRADA = 'public/fotos-originais'
const SAIDA = 'public/fotos'
const LADO_MAXIMO = 1600
const QUALIDADE = 78
const ACEITAS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff'])

await mkdir(SAIDA, { recursive: true })

let arquivos
try {
  arquivos = await readdir(ENTRADA)
} catch {
  console.error(`Crie a pasta ${ENTRADA}/ e coloque as fotos lá.`)
  process.exit(1)
}

const fotos = arquivos.filter((a) => ACEITAS.has(path.extname(a).toLowerCase()))
const ignoradas = arquivos.filter((a) => !ACEITAS.has(path.extname(a).toLowerCase()) && !a.startsWith('.'))

for (const nome of fotos) {
  const destino = path.join(SAIDA, path.parse(nome).name + '.webp')
  await sharp(path.join(ENTRADA, nome))
    .rotate() // respeita a orientação do celular
    .resize({ width: LADO_MAXIMO, height: LADO_MAXIMO, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: QUALIDADE })
    .toFile(destino)
  const kb = Math.round((await stat(destino)).size / 1024)
  console.log(`✓ ${nome} -> ${destino} (${kb} KB)`)
}

if (ignoradas.length) {
  console.log(`\nIgnoradas (formato não suportado): ${ignoradas.join(', ')}`)
  console.log('Fotos .HEIC do iPhone: exporte como JPG antes, ou mude a câmera para "Mais compatível".')
}
console.log(`\n${fotos.length} foto(s) prontas em ${SAIDA}/`)
