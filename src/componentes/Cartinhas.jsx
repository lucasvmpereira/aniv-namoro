import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { conteudo } from '../conteudo.js'
import { giro } from '../utils.js'

const { cartinhas } = conteudo
const CHAVE = 'cartinhas-abertas'

function lerAbertas() {
  try {
    return new Set(JSON.parse(localStorage.getItem(CHAVE)) ?? [])
  } catch {
    return new Set()
  }
}

export default function Cartinhas() {
  const [abertas, setAbertas] = useState(lerAbertas)
  const [atual, setAtual] = useState(null)

  function abrir(i) {
    setAtual(i)
    setAbertas((antes) => {
      const novo = new Set(antes).add(i)
      try {
        localStorage.setItem(CHAVE, JSON.stringify([...novo]))
      } catch {
        /* sem armazenamento: tudo bem */
      }
      return novo
    })
  }

  return (
    <section className="secao" aria-labelledby="titulo-cartinhas">
      <div className="secao__cabeca">
        <h2 className="secao__titulo" id="titulo-cartinhas">{cartinhas.titulo}</h2>
        <p className="secao__sub">{cartinhas.subtitulo}</p>
      </div>

      <ul className="cartinhas">
        {cartinhas.lista.map((c, i) => (
          <li key={i}>
            <button
              className={`envelopinho${abertas.has(i) ? ' envelopinho--aberto' : ''}`}
              style={{ '--giro': giro(i + 2) }}
              onClick={() => abrir(i)}
            >
              <span className="envelopinho__selo" aria-hidden="true" />
              <span className="envelopinho__frente">{c.frente}</span>
              {abertas.has(i) && <span className="so-leitor"> (já aberta)</span>}
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {atual !== null && (
          <Bilhete key="bilhete" carta={cartinhas.lista[atual]} onFechar={() => setAtual(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

function Bilhete({ carta, onFechar }) {
  const fecharRef = useRef(null)

  useEffect(() => {
    const anterior = document.activeElement
    fecharRef.current?.focus()
    document.body.classList.add('travado')
    const tecla = (e) => e.key === 'Escape' && onFechar()
    window.addEventListener('keydown', tecla)
    return () => {
      window.removeEventListener('keydown', tecla)
      document.body.classList.remove('travado')
      anterior?.focus?.()
    }
  }, [onFechar])

  return (
    <motion.div
      className="modal"
      onClick={onFechar}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.article
        className="bilhete"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bilhete-frente"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 60, scale: 0.9, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ type: 'spring', damping: 22, stiffness: 220 }}
      >
        <p className="bilhete__frente" id="bilhete-frente">{carta.frente}</p>
        <p className="bilhete__texto">{carta.texto}</p>
        <button ref={fecharRef} className="botao bilhete__fechar" onClick={onFechar}>
          Guardar
        </button>
      </motion.article>
    </motion.div>
  )
}
