
const MESES = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
]

/** Caminho de um arquivo dentro de public/, funcionando em qualquer base de deploy. */
export function url(caminho) {
  if (typeof caminho !== 'string') console.log('FOTO COM PROBLEMA:', caminho)
  return import.meta.env.BASE_URL + caminho.replace(/^\//, '')
}

/** A data está num formato que o navegador entende ('AAAA', 'AAAA-MM' ou 'AAAA-MM-DD')? */
export function ehDataIso(texto) {
  return /^\d{4}(-\d{2}(-\d{2})?)?$/.test(texto)
}

/**
 * '2024-09-14' -> '14 de setembro de 2024'
 * '2024-08'    -> 'Agosto de 2024'
 * '2024'       -> '2024'
 * Qualquer outro texto aparece do jeito que foi escrito.
 */
export function formatarData(data) {
  if (!ehDataIso(data)) return data
  const [ano, mes, dia] = data.split('-').map(Number)
  if (dia) return `${dia} de ${MESES[mes - 1]} de ${ano}`
  if (mes) {
    const nome = MESES[mes - 1]
    return `${nome[0].toUpperCase()}${nome.slice(1)} de ${ano}`
  }
  return String(ano)
}

/** Para comparar senhas: ignora maiúsculas, acentos, espaços e pontuação. */
export function normalizar(texto) {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
}

/** Inclinação "aleatória" mas estável para cada item (em graus). */
export function giro(i) {
  return `${(((i * 37) % 7) - 3) * 0.8}deg`
}

/** Tempo decorrido em calendário de verdade (anos, meses, dias...). */
export function tempoJuntos(inicio, agora) {
  if (agora < inicio) return { anos: 0, meses: 0, dias: 0, horas: 0, minutos: 0, segundos: 0 }

  let anos = agora.getFullYear() - inicio.getFullYear()
  let meses = agora.getMonth() - inicio.getMonth()
  let dias = agora.getDate() - inicio.getDate()
  let horas = agora.getHours() - inicio.getHours()
  let minutos = agora.getMinutes() - inicio.getMinutes()
  let segundos = agora.getSeconds() - inicio.getSeconds()

  if (segundos < 0) { segundos += 60; minutos-- }
  if (minutos < 0) { minutos += 60; horas-- }
  if (horas < 0) { horas += 24; dias-- }
  if (dias < 0) {
    dias += new Date(agora.getFullYear(), agora.getMonth(), 0).getDate()
    meses--
  }
  if (meses < 0) { meses += 12; anos-- }

  return { anos, meses, dias, horas, minutos, segundos }
}

function unidade(n, singular, plural) {
  return `${n} ${n === 1 ? singular : plural}`
}

/** ['2 anos', '3 dias'] -> '2 anos e 3 dias' */
export function juntar(partes) {
  if (partes.length <= 1) return partes.join('')
  return partes.slice(0, -1).join(', ') + ' e ' + partes.at(-1)
}

export function textoData({ anos, meses, dias }) {
  const partes = []
  if (anos) partes.push(unidade(anos, 'ano', 'anos'))
  if (meses) partes.push(unidade(meses, 'mês', 'meses'))
  if (dias) partes.push(unidade(dias, 'dia', 'dias'))
  return partes.length ? juntar(partes) : 'Hoje'
}

export function textoRelogio({ horas, minutos, segundos }) {
  return juntar([
    unidade(horas, 'hora', 'horas'),
    unidade(minutos, 'minuto', 'minutos'),
    unidade(segundos, 'segundo', 'segundos'),
  ])
}
