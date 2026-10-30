import { useCallback, useEffect, useRef, useState } from 'react'
import { url } from './utils.js'

/**
 * Controla a playlist. Navegadores só deixam tocar som depois de um
 * toque da pessoa, por isso `tocar()` é chamado no clique do selo.
 */
export function useMusica(musicas) {
  const audioRef = useRef(null)
  const querTocar = useRef(false)
  const [indice, setIndice] = useState(0)
  const [tocando, setTocando] = useState(false)

  const atual = musicas[indice]

  const tocar = useCallback(() => {
    querTocar.current = true
    audioRef.current?.play().catch(() => {
      // bloqueado pelo navegador: ela pode tocar no player
      querTocar.current = false
    })
  }, [])

  const pausar = useCallback(() => {
    querTocar.current = false
    audioRef.current?.pause()
  }, [])

  const alternar = useCallback(() => {
    if (audioRef.current?.paused) tocar()
    else pausar()
  }, [tocar, pausar])

  const proxima = useCallback(() => {
    setIndice((i) => (i + 1) % musicas.length)
  }, [musicas.length])

  // Ao trocar de faixa, continua tocando se já estava tocando
  useEffect(() => {
    if (querTocar.current) audioRef.current?.play().catch(() => {})
  }, [indice])

  return {
    atual,
    tocando,
    tocar,
    alternar,
    proxima,
    temVarias: musicas.length > 1,
    audioProps: {
      ref: audioRef,
      src: atual ? url(atual.arquivo) : undefined,
      preload: 'auto',
      onPlay: () => setTocando(true),
      onPause: () => setTocando(false),
      onEnded: () => {
        if (musicas.length === 1) audioRef.current?.play()
        else proxima()
      },
    },
  }
}
