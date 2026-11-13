import './App.css'
import { datiStudente } from './data'
import ProfiloHeader from './components/ProfiloHeader'
import InfoStudente from './components/InfoStudente'
import Valutazioni from './components/Valutazioni'
import Frequenza from './components/Frequenza'
import Colloquio from './components/Colloquio'
import Footer from './components/Footer'

// Componente principale: riceve tutti i dati dalla variabile datiStudente
// e li distribuisce ai componenti figli tramite props.
function App({ studente = datiStudente }) {
  const { nome, cognome, eta, corso, codiceClasse, frequenza, note, valutazioni } = studente

  return (
    <div className="app">
      <ProfiloHeader nome={nome} cognome={cognome} />

      <main className="layout">
        <div className="colonna colonna-principale">
          <InfoStudente eta={eta} corso={corso} codiceClasse={codiceClasse} />
          <Valutazioni valutazioni={valutazioni} />
        </div>

        <aside className="colonna colonna-laterale">
          <Frequenza frequenza={frequenza} note={note} />
          <Colloquio />
        </aside>
      </main>

      <Footer />
    </div>
  )
}

export default App
