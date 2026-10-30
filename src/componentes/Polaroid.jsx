import { url } from '../utils.js'

export default function Polaroid({ arquivo, legenda, inclinacao, alt }) {
  return (
    <figure className="polaroid" style={inclinacao ? { '--giro': inclinacao } : undefined}>
      <img src={url(arquivo)} alt={alt ?? legenda ?? ''} loading="lazy" decoding="async" />
      {legenda !== undefined && <figcaption>{legenda}</figcaption>}
    </figure>
  )
}
