import { conteudo } from '../conteudo.js'

const { cartaFinal } = conteudo

export default function CartaFinal() {
  return (
    <>
      <section className="secao" aria-labelledby="titulo-carta">
        <div className="secao__cabeca">
          <h2 className="secao__titulo" id="titulo-carta">Carta para minha Nan</h2>
        </div>

        <article className="carta">
          <p className="carta__saudacao">{cartaFinal.saudacao}</p>
          {cartaFinal.paragrafos.map((p, i) => (
            <p className="carta__paragrafo" key={i}>{p}</p>
          ))}
          <p className="carta__despedida">{cartaFinal.despedida}</p>
          <p className="carta__assinatura">{cartaFinal.assinatura}</p>
        </article>

        <Ramo />
      </section>

      <footer className="rodape">{conteudo.rodape}</footer>
    </>
  )
}

/* raminho de flor prensada */
function Ramo() {
  return (
    <svg className="ramo" viewBox="0 0 80 60" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" aria-hidden="true">
      <path d="M8 52 C 28 40, 46 30, 72 8" />
      <path d="M22 44 c -4 -8 -2 -14 4 -18 c 2 8 0 14 -4 18z" fill="currentColor" fillOpacity=".35" />
      <path d="M34 36 c 6 4 12 4 18 0 c -6 -5 -12 -5 -18 0z" fill="currentColor" fillOpacity=".35" />
      <path d="M42 30 c -3 -8 0 -14 6 -17 c 1 8 -1 13 -6 17z" fill="currentColor" fillOpacity=".35" />
      <path d="M54 22 c 6 3 11 2 15 -2 c -5 -4 -10 -4 -15 2z" fill="currentColor" fillOpacity=".35" />
      <circle cx="72" cy="8" r="3" fill="#8c2236" stroke="none" />
    </svg>
  )
}
