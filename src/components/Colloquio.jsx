import { useState } from 'react'

const CHIAVE_STORAGE = 'motivazione'

function Colloquio() {
  const [proposta, setProposta] = useState('Sì')
  const [motivazione, setMotivazione] = useState(
    () => localStorage.getItem(CHIAVE_STORAGE) ?? '',
  )

  const salva = () => {
    localStorage.setItem(CHIAVE_STORAGE, motivazione)
    console.log(`localStorage -> ${CHIAVE_STORAGE}:`, localStorage.getItem(CHIAVE_STORAGE))
    alert(`Motivazione salvata: ${motivazione}`)
  }

  return (
    <section className="card">
      <h2 className="titolo-card">Colloquio</h2>

      <div className="riga">
        <span>Proporre a colloquio?</span>
        <div className="radio-gruppo">
          <label>
            <input
              type="radio"
              name="colloquio"
              value="Sì"
              checked={proposta === 'Sì'}
              onChange={(e) => setProposta(e.target.value)}
            />
            Sì
          </label>
          <label>
            <input
              type="radio"
              name="colloquio"
              value="No"
              checked={proposta === 'No'}
              onChange={(e) => setProposta(e.target.value)}
            />
            No
          </label>
        </div>
      </div>

      {proposta === 'Sì' && (
        <div className="motivazione">
          <label htmlFor="motivazione">Motivazione</label>
          <textarea
            id="motivazione"
            rows={3}
            value={motivazione}
            onChange={(e) => setMotivazione(e.target.value)}
            placeholder="Scrivi la motivazione..."
          />
          <button type="button" className="btn-salva" onClick={salva}>
            Salva
          </button>
        </div>
      )}
    </section>
  )
}

export default Colloquio
