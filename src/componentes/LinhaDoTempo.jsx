import { conteudo } from '../conteudo.js'
import { ehDataIso, formatarData, giro } from '../utils.js'
import Polaroid from './Polaroid.jsx'

export default function LinhaDoTempo() {
  return (
    <section className="secao" id="nossa-historia" aria-labelledby="titulo-historia">
      <div className="secao__cabeca">
        <h2 className="secao__titulo" id="titulo-historia">Nossa história</h2>
      </div>

      <ol className="fio">
        {conteudo.momentos.map((m, i) => (
          <li className="momento" key={m.data + m.titulo}>
            <span className="momento__no" aria-hidden="true" />
            <p className="momento__data">
              {ehDataIso(m.data) ? (
                <time dateTime={m.data}>{formatarData(m.data)}</time>
              ) : (
                m.data
              )}
            </p>
            <h3 className="momento__titulo">{m.titulo}</h3>
            {/* "texto" pode ser um texto só ou uma lista de parágrafos */}
            {[m.texto].flat().filter(Boolean).map((paragrafo, j) => (
              <p className="momento__texto" key={j}>{paragrafo}</p>
            ))}

            {m.fotos?.length > 0 && (
              <div className="momento__fotos">
                {m.fotos.map((foto, j) => (
                  <Polaroid
                    key={foto}
                    arquivo={foto}
                    alt={`${m.titulo}, foto ${j + 1}`}
                    inclinacao={giro(i * 3 + j)}
                  />
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
