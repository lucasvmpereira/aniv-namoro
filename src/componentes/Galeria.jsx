import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { conteudo } from '../conteudo.js'
import { giro } from '../utils.js'
import Polaroid from './Polaroid.jsx'

const { galeria } = conteudo

// Aceita o formato novo (albuns) e o antigo (uma lista "fotos" só).
const albuns = (galeria.albuns ?? [{ nome: galeria.titulo, fotos: galeria.fotos ?? [] }])
  .filter((a) => a.fotos?.length > 0)

/* ------------------------------------------------------------
   Trava a rolagem da página enquanto algo estiver aberto.
   Usa um contador para funcionar com álbum + foto abertos juntos.
   ------------------------------------------------------------ */
let travas = 0
function useTravarRolagem() {
  useEffect(() => {
    travas++
    document.body.classList.add('travado')
    return () => {
      travas--
      if (travas === 0) document.body.classList.remove('travado')
    }
  }, [])
}

/* ============================================================
   Galeria: as pilhas de polaroids, uma por álbum
   ============================================================ */
export default function Galeria() {
  const [aberto, setAberto] = useState(null) // índice do álbum aberto

  // O botão "voltar" do celular fecha o álbum em vez de sair do site
  useEffect(() => {
    const aoVoltar = () => setAberto(null)
    window.addEventListener('popstate', aoVoltar)
    return () => window.removeEventListener('popstate', aoVoltar)
  }, [])

  function abrir(i) {
    history.pushState({ album: i }, '')
    setAberto(i)
  }

  const fechar = useCallback(() => history.back(), [])

  return (
    <section className="secao" aria-labelledby="titulo-galeria">
      <div className="secao__cabeca">
        <h2 className="secao__titulo" id="titulo-galeria">{galeria.titulo}</h2>
        {galeria.subtitulo && <p className="secao__sub">{galeria.subtitulo}</p>}
      </div>

      <ul className="pilhas">
        {albuns.map((album, i) => (
          <li key={album.nome + i}>
            <button className="pilha" onClick={() => abrir(i)}>
              <span className="pilha__fotos" aria-hidden="true">
                {/* até 3 fotos empilhadas; a primeira do álbum fica por cima */}
                {album.fotos.slice(0, 3).reverse().map((foto, j, lista) => (
                  <Polaroid
                    key={foto.arquivo + j}
                    className="pilha__polaroid"
                    arquivo={foto.arquivo}
                    alt=""
                    inclinacao={j === lista.length - 1 ? giro(i) : `${(j % 2 ? 7 : -6) - i}deg`}
                  />
                ))}
              </span>
              <span className="pilha__nome">{album.nome}</span>
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {aberto !== null && (
          <Album key="album" album={albuns[aberto]} onFechar={fechar} />
        )}
      </AnimatePresence>
    </section>
  )
}

/* ============================================================
   Álbum aberto: tela com todas as fotos daquele álbum
   ============================================================ */
function Album({ album, onFechar }) {
  const [foto, setFoto] = useState(null) // índice da foto ampliada
  const voltarRef = useRef(null)
  const total = album.fotos.length

  useTravarRolagem()

  useEffect(() => {
    const anterior = document.activeElement
    voltarRef.current?.focus()
    return () => anterior?.focus?.()
  }, [])

  // Esc fecha o álbum (quando não há foto ampliada por cima)
  useEffect(() => {
    if (foto !== null) return
    const tecla = (e) => e.key === 'Escape' && onFechar()
    window.addEventListener('keydown', tecla)
    return () => window.removeEventListener('keydown', tecla)
  }, [foto, onFechar])

  const fecharFoto = useCallback(() => setFoto(null), [])
  const mover = useCallback((passo) => setFoto((i) => (i + passo + total) % total), [total])

  return (
    <motion.div
      className="album"
      role="dialog"
      aria-modal="true"
      aria-labelledby="album-nome"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="album__topo">
        <button ref={voltarRef} className="album__voltar" onClick={onFechar}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          Voltar
        </button>
        <h3 className="album__nome" id="album-nome">{album.nome}</h3>
      </div>

      <ul className="galeria">
        {album.fotos.map((f, i) => (
          <li key={f.arquivo + i}>
            <button
              className="galeria__item"
              onClick={() => setFoto(i)}
              aria-label={`Ampliar foto ${i + 1}${f.legenda ? `: ${f.legenda}` : ''}`}
            >
              <Polaroid arquivo={f.arquivo} legenda={f.legenda} inclinacao={giro(i)} alt="" />
            </button>
          </li>
        ))}
      </ul>

      {/* a foto ampliada vai direto no <body> para ficar por cima do player */}
      {createPortal(
        <AnimatePresence>
          {foto !== null && (
            <Lightbox
              key="lightbox"
              fotos={album.fotos}
              indice={foto}
              onFechar={fecharFoto}
              onMover={mover}
            />
          )}
        </AnimatePresence>,
        document.body,
      )}
    </motion.div>
  )
}

/* ============================================================
   Foto ampliada (passa para o lado arrastando ou pelas setas)
   ============================================================ */
function Lightbox({ fotos, indice, onFechar, onMover }) {
  const foto = fotos[indice]
  const total = fotos.length
  const fecharRef = useRef(null)

  useTravarRolagem()

  useEffect(() => {
    const anterior = document.activeElement
    fecharRef.current?.focus()

    function tecla(e) {
      if (e.key === 'Escape') onFechar()
      if (e.key === 'ArrowRight') onMover(1)
      if (e.key === 'ArrowLeft') onMover(-1)
    }
    window.addEventListener('keydown', tecla)
    return () => {
      window.removeEventListener('keydown', tecla)
      anterior?.focus?.()
    }
  }, [onFechar, onMover])

  return (
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ${indice + 1} de ${total}`}
      onClick={onFechar}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={indice}
          className="lightbox__foto"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          drag={total > 1 ? 'x' : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.6}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) onMover(1)
            else if (info.offset.x > 60) onMover(-1)
          }}
        >
          <Polaroid
            arquivo={foto.arquivo}
            legenda={foto.legenda}
            alt={foto.legenda || `Foto ${indice + 1}`}
            prioridade
          />
        </motion.div>
      </AnimatePresence>

      <button ref={fecharRef} className="lightbox__fechar" onClick={onFechar} aria-label="Fechar">×</button>
      {total > 1 && (
        <>
          <button className="lightbox__seta lightbox__seta--ant" onClick={(e) => { e.stopPropagation(); onMover(-1) }} aria-label="Foto anterior">‹</button>
          <button className="lightbox__seta lightbox__seta--prox" onClick={(e) => { e.stopPropagation(); onMover(1) }} aria-label="Próxima foto">›</button>
        </>
      )}
      <p className="lightbox__contagem" aria-hidden="true">{indice + 1} / {total}</p>
    </motion.div>
  )
}
