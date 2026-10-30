
import { useEffect, useState } from 'react'

import { conteudo } from '../conteudo.js'
import { tempoJuntos, textoData, textoRelogio, url} from '../utils.js'
import Polaroid from './Polaroid.jsx'

const inicio = new Date(conteudo.inicio)

export default function Inicio() {
  const [agora, setAgora] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setAgora(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const tempo = tempoJuntos(inicio, agora)

  return (
    <header className="inicio">
      {conteudo.stickers?.map((s, i) => (
        <img
          key={i}
            className={`sticker sticker--${s.lado}${s.celular === false ? ' sticker--so-pc' : ''}${s.frente ? ' sticker--frente' : ''}`}
          src={url(s.arquivo)}
          alt=""
          style={{
            '--topo': s.topo,
            '--topo-cel': s.topoCelular,
            '--distancia': s.distancia,
            '--tamanho': s.tamanho,
            '--giro': s.giro,
          }}
        />
      ))}
      <div>
        <h1 className="inicio__nomes">
          {conteudo.nomes.eu}
          <span className="inicio__e">&amp;</span>
          {conteudo.nomes.ela}
        </h1>
        {conteudo.subtitulo && (
        <p className="inicio__subtitulo">{conteudo.subtitulo}</p>
      )}

        <div className="contador">
          <p className="contador__titulo">{conteudo.contador.titulo}</p>
          <p className="contador__tempo">
            {textoData(tempo)},
            <span className="contador__relogio" aria-live="off">
              {textoRelogio(tempo)}
            </span>
          </p>
          <p className="contador__frase">{conteudo.contador.frase}</p>
          {conteudo.contador.foto?.arquivo && (
          <div className="inicio__foto">
            <Polaroid
              arquivo={conteudo.contador.foto.arquivo}
              legenda={conteudo.contador.foto.legenda || undefined}
              inclinacao="-2deg"
              alt="Nós dois"
            />
          </div>
        )}
        </div>
      </div>
    </header>
  )
}
