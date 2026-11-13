import RigaValutazione from './RigaValutazione'

function Valutazioni({ valutazioni }) {
  return (
    <section className="card">
      <h2 className="titolo-card">Valutazioni</h2>
      <ul className="lista-valutazioni">
        {valutazioni.map((v) => (
          <RigaValutazione
            key={v.id}
            argomento={v.argomento}
            voto={v.voto}
            percentuale={v.percentuale}
          />
        ))}
      </ul>
    </section>
  )
}

export default Valutazioni
