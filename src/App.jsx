import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { conteudo } from './conteudo.js'
import { useMusica } from './useMusica.js'
import Abertura from './componentes/Abertura.jsx'
import Player from './componentes/Player.jsx'
import Inicio from './componentes/Inicio.jsx'
import LinhaDoTempo from './componentes/LinhaDoTempo.jsx'
import Galeria from './componentes/Galeria.jsx'
import CartaFinal from './componentes/CartaFinal.jsx'

export default function App() {
  const [entrou, setEntrou] = useState(false)
  const musica = useMusica(conteudo.musicas)

  // Trava a rolagem enquanto o envelope está na tela
  useEffect(() => {
    document.body.classList.toggle('travado', !entrou)
  }, [entrou])

  return (
    <>
      <audio {...musica.audioProps} />

      <AnimatePresence>
        {!entrou && (
          <Abertura
            key="abertura"
            onAbrir={musica.tocar}
            onEntrar={() => setEntrou(true)}
          />
        )}
      </AnimatePresence>

      <main inert={!entrou}>
        <Inicio />
        <LinhaDoTempo />
        <Galeria />
        <CartaFinal />
      </main>

      {entrou && <Player {...musica} />}
    </>
  )
}
