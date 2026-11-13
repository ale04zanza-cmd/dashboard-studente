function RigaValutazione({ argomento, voto, percentuale }) {
  const colore =
    voto < 6 || percentuale < 60
      ? 'rosso'
      : voto >= 8 && percentuale >= 80
        ? 'verde'
        : 'arancione'

  return (
    <li className={`valutazione valutazione--${colore}`}>
      <span className="valutazione-argomento">{argomento}</span>
      <span className="valutazione-percentuale">{percentuale}%</span>
      <span className="valutazione-voto">{voto}/10</span>
    </li>
  )
}

export default RigaValutazione
