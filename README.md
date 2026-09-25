# Beatwave

Beatwave è una web app per cercare brani musicali e ascoltarne un'anteprima direttamente dal browser. L'applicazione utilizza le API di Deezer per recuperare titoli, artisti, album, copertine e preview audio.

## Funzionalità

- Ricerca di brani per titolo o artista
- Visualizzazione di copertina, titolo, artista e album
- Riproduzione dell'anteprima audio dei brani
- Interfaccia responsive con supporto automatico al tema chiaro e scuro
- Backend proxy dedicato per comunicare con le API di Deezer

## Tecnologie utilizzate

### Frontend

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

### Backend

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Deezer API](https://developers.deezer.com/api)

## Requisiti

Prima di iniziare, assicurati di avere installato:

- Node.js 18 o versione successiva
- npm

## Installazione

Clona il repository:

```bash
git clone https://github.com/Aresinger/Beatwave-v2.git
cd Beatwave-v2
```

Installa le dipendenze del frontend e del backend:

```bash
npm install
npm install --prefix backend
```

## Avvio in locale

L'applicazione richiede due processi attivi. Apri due terminali nella cartella del progetto.

Nel primo terminale avvia il backend:

```bash
npm run dev:server
```

Nel secondo terminale avvia il frontend:

```bash
npm run dev
```

Apri quindi [http://localhost:5173](http://localhost:5173) nel browser. Il backend sarà disponibile su `http://localhost:3000`.

## Script disponibili

| Comando | Descrizione |
| --- | --- |
| `npm run dev` | Avvia il frontend in modalità sviluppo |
| `npm run dev:server` | Avvia il backend Express |
| `npm run build` | Genera la build di produzione del frontend |
| `npm run preview` | Mostra in locale la build di produzione |
| `npm run lint` | Esegue ESLint sul progetto |

## Struttura del progetto

```text
Beatwave-v2/
├── backend/
│   └── server.js          # Server Express e proxy per Deezer
├── public/                # File statici
├── src/
│   ├── components/        # Componenti React dell'interfaccia
│   ├── services/          # Chiamate al backend
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Come funziona

Il frontend invia la ricerca all'endpoint locale:

```text
GET /api/deezer/track?q=<termine-di-ricerca>
```

Il server Express inoltra la richiesta alle API di Deezer e restituisce i risultati al client. Selezionando il pulsante di riproduzione di un brano, Beatwave carica la preview audio fornita da Deezer.

## Build di produzione

Per creare una build ottimizzata del frontend:

```bash
npm run build
```

I file generati saranno disponibili nella cartella `dist/`.


Realizzato con React, Express e Deezer API.
