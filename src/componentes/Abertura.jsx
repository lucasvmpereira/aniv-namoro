import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { conteudo } from '../conteudo.js'
import { normalizar } from '../utils.js'

const { abertura, nomes } = conteudo
const iniciais = `${nomes.eu[0]}${nomes.ela[0]}`
const temSenha = normalizar(abertura.senha).length > 0

// fechado -> (senha) -> aberto
export default function Abertura({ onAbrir, onEntrar }) {
  const [estado, setEstado] = useState('fechado')
  const [tentativa, setTentativa] = useState('')
  const [erro, setErro] = useState('')
  const campoRef = useRef(null)
  const entrarRef = useRef(null)

  const aberto = estado === 'aberto'

  function abrir() {
    onAbrir() // começa a música: precisa ser dentro do clique
    setEstado('aberto')
  }

  function clicarSelo() {
    if (temSenha) setEstado('senha')
    else abrir()
  }

  function conferir(e) {
    e.preventDefault()
    if (normalizar(tentativa) === normalizar(abertura.senha)) {
      setErro('')
      abrir()
    } else {
      setErro('Senha incorreta')
    }
  }

  useEffect(() => {
    if (estado === 'senha') campoRef.current?.focus()
    if (estado === 'aberto') {
      const t = setTimeout(() => entrarRef.current?.focus(), 1600)
      return () => clearTimeout(t)
    }
  }, [estado])

  return (
    <motion.div
      className="abertura"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      <div className="abertura__palco">
        {/* espaço para a carta subir */}
        <div style={{ height: 'min(22vw, 7rem)' }} aria-hidden="true" />

        <div className="envelope">
          <div className="envelope__fundo" />

          <motion.div
            className="envelope__carta"
            initial={false}
            animate={aberto ? { y: '-58%' } : { y: 0 }}
            transition={{ delay: aberto ? 0.55 : 0, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden={!aberto}
          >
            <p className="envelope__bilhete">{abertura.bilhete}</p>
          </motion.div>

          <div className="envelope__frente">
            <p className="envelope__destinatario">{abertura.destinatario}</p>
          </div>

          <motion.div
            className="envelope__aba"
            initial={false}
            animate={aberto ? { rotateX: 180, zIndex: -1 } : { rotateX: 0, zIndex: 3 }}
            transition={{ duration: 0.6, ease: 'easeInOut', zIndex: { delay: 0.3 } }}
          />

          <AnimatePresence>
            {!aberto && (
              <motion.button
                className="selo"
                style={{ zIndex: 4 }}
                onClick={clicarSelo}
                aria-label="Abrir o envelope"
                exit={{ scale: 1.3, opacity: 0, rotate: 12 }}
                transition={{ duration: 0.35 }}
                whileTap={{ scale: 0.94 }}
              >
                <span className="selo__iniciais" aria-hidden="true">{iniciais}</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          {estado === 'fechado' && (
            <motion.p
              key="instrucao"
              className="abertura__instrucao"
              exit={{ opacity: 0 }}
            >
              Toque no selo para abrir
            </motion.p>
          )}

          {estado === 'senha' && (
            <motion.form
              key="senha"
              className="senha"
              onSubmit={conferir}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <label htmlFor="senha" className="senha__pergunta">{abertura.pergunta}</label>
              {abertura.dica && <p className="senha__dica">{abertura.dica}</p>}
              <div className="senha__linha">
                <input
                  id="senha"
                  ref={campoRef}
                  className="senha__campo"
                  value={tentativa}
                  onChange={(e) => setTentativa(e.target.value)}
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck="false"
                />
                <button className="botao" type="submit">Abrir</button>
              </div>
              <p className="senha__erro" role="alert">{erro}</p>
            </motion.form>
          )}

          {aberto && (
            <motion.button
              key="entrar"
              ref={entrarRef}
              className="botao"
              onClick={onEntrar}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              Continuar
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
