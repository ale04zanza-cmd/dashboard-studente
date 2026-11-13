function Frequenza({ frequenza, note }) {
  return (
    <section className="card">
      <h2 className="titolo-card">Ulteriori Informazioni</h2>

      <p className="etichetta">Percentuale frequenza</p>
      <p className="frequenza-valore">
        {frequenza}
        <span>%</span>
      </p>
      <div
        className="barra"
        role="progressbar"
        aria-valuenow={frequenza}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="barra-riempimento" style={{ width: `${frequenza}%` }} />
      </div>

      <p className="etichetta">Note</p>
      <p className="note">{note}</p>
    </section>
  )
}

export default Frequenza
