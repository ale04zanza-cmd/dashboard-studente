function ProfiloHeader({ nome, cognome }) {
  const iniziali = `${nome[0]}${cognome[0]}`.toUpperCase()

  return (
    <header className="card profilo">
      <div className="avatar">{iniziali}</div>
      <div>
        <p className="etichetta">Profilo studente</p>
        <h1 className="nome">{nome} {cognome}</h1>
      </div>
    </header>
  )
}

export default ProfiloHeader
