// Tutti i dati dell'applicazione sono contenuti in questa variabile
// e vengono passati al componente principale (App) tramite props.
export const datiStudente = {
  nome: 'Alessandro',
  cognome: 'Zanza',
  eta: 22,
  corso: 'Ingegneria Informatica',
  codiceClasse: 'LS-8001',
  frequenza: 83,
  note: 'Ottima partecipazione durante le discussioni di classe. Progetti ben strutturati e con logica riutilizzabile. Webcam sempre attiva quando richiesto.',
  valutazioni: [
    { id: 1, argomento: 'Strutture dati', voto: 6, percentuale: 60 },
    { id: 2, argomento: 'Algoritmi', voto: 7, percentuale: 70 },
    { id: 3, argomento: 'User Interface', voto: 8, percentuale: 80 },
    { id: 4, argomento: 'Sviluppo Web', voto: 10, percentuale: 100 },
    { id: 5, argomento: 'Sicurezza', voto: 5, percentuale: 50 },
  ],
}
