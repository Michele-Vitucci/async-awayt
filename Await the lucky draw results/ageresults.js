async function getResults() {
    // Array con i nomi dei giocatori
    const players = ['Tina', 'Jorge', 'Julien'];
  
    // Ciclo attraverso i giocatori e uso await per ottenere i risultati
    for (let player of players) {
      try {
        // Aspetto che la funzione luckyDraw si risolva per ciascun giocatore
        const result = await luckyDraw(player);
        console.log(result);  // Se vince, logga il risultato
      } catch (error) {
        // Se la Promise viene rifiutata, logga l'errore
        console.log(error.message);
      }
    }
  }
  