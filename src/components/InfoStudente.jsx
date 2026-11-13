function InfoStudente({ eta, corso, codiceClasse }) {
  return (
    <section className="card">
      <h2 className="titolo-card">Informazioni Studente</h2>
      <dl className="lista-info">
        <div className="riga">
          <dt>Età</dt>
          <dd>{eta} anni</dd>
        </div>
        <div className="riga">
          <dt>Corso di studi</dt>
          <dd>{corso}</dd>
        </div>
        <div className="riga">
          <dt>Codice classe</dt>
          <dd>{codiceClasse}</dd>
        </div>
      </dl>
    </section>
  )
}

export default InfoStudente
