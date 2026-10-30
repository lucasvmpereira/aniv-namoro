export default function Player({ atual, tocando, alternar, proxima, temVarias }) {
  if (!atual) return null

  return (
    <div className={`player${tocando ? ' player--tocando' : ''}`} role="region" aria-label="Música">
      <span className="player__disco" aria-hidden="true" />
      <span className="player__info">
        <span className="player__titulo">{atual.titulo}</span>
        <span className="player__artista">{atual.artista}</span>
      </span>

      <button className="player__botao" onClick={alternar} aria-label={tocando ? 'Pausar' : 'Tocar'}>
        {tocando ? (
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" /></svg>
        )}
      </button>

      {temVarias && (
        <button className="player__botao" onClick={proxima} aria-label="Próxima música">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6v12l8.5-6zM16 6h2.5v12H16z" /></svg>
        </button>
      )}
    </div>
  )
}
