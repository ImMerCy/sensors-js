# 2021 progetto "sensors-js"

## Scopo del progetto
Lo scopo del progetto è quello di recuperare dei dati da un'API esterna tramite una fetch, per poi gestirli e stamparli in una propria pagina HTML.
La fonte dei dati si trova a questo indirizzo: https://hf3xzw.deta.dev/.

## Linguaggi utilizzati
- HTML
- JavaScript
- CSS

## User stories
Illustrate nella sezione [Projects](https://github.com/ImMerCy/sensors-js/projects) del progetto.

## Funzionalità implementate
Illustrate nel file `ROADMAP.md`.

## Dipendenze
- Base del progetto ereditata dal repository [python-iot-sim](https://github.com/ProfAndreaPollini/python-iot-sim).
- Librerie utilizzate:
  - [Chart.js](https://chartjs.org) (per l'implementazione dei grafici)
  - [jQuery](https://jquery.com/) (per utilizzare il plugin parallax.js)

> **Attenzione!** <br/>
Per il corretto funzionamento della fetch, quindi per stampare i dati a schermo, è necessario installare e attivare un'estensione di Chrome chiamata "[CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino)". Se questa estensione non viene impementata i dati dei sensori non potranno essere né recuperati né aggiornati, quindi le card nel sito rimarranno vuote.