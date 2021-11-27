const output = document.getElementById("output")
const source = document.getElementById("source")
const toggle1 = document.getElementById("toggle1")
const toggle2 = document.getElementById("toggle2")
const toggle3 = document.getElementById("toggle3")
const toggle4 = document.getElementById("toggle4")

setInterval(
  function() {
    fetch("https://hf3xzw.deta.dev/")
      .then(response => response.json())
      .then(body => {
        // Aggiornamento descrizioni card
        let dataArray = body["sensors"];
        for (let i = 0; i < dataArray.length; i++) {
          document.getElementsByClassName("box-title")[i].innerHTML = String(dataArray[i].description).toUpperCase();
          let text = "<b>ID</b>: " +  String(dataArray[i].id) + "<br>" +
                      "<b>Latitudine</b>: " + String(dataArray[i].lat) + "<br>" +
                      "<b>Longitudine</b>: " + String(dataArray[i].lng) + "<br>" +
                      "<b>Luogo</b>: " + String(dataArray[i].place) + "<br>" +
                      "<b>Solo lettura</b>: " + String(dataArray[i].readonly) + "<br>" +
                      "<b>Codice dello stato</b>: " + String(dataArray[i].state_code) +  "<br>" +
                      "<b>Valore</b>: " + String(dataArray[i].value);
          document.getElementsByClassName("box-description")[i].innerHTML = text;
        }
        // Aggiornamento grafici
        myChart5.data.datasets[0].data.push(body['sensors'][4]['value']);
        myChart5.update();
        if (myChart5.data.datasets[0].data.length == 10)
          myChart5.data.datasets[0].data.shift();
        myChart6.data.datasets[0].data.push(body['sensors'][5]['value']);
        myChart6.update();
        if (myChart6.data.datasets[0].data.length == 10)
          myChart6.data.datasets[0].data.shift();
        myChart7.data.datasets[0].data.push(body['sensors'][6]['value']);
        myChart7.update();
        if (myChart7.data.datasets[0].data.length == 10)
          myChart7.data.datasets[0].data.shift();
        myChart8.data.datasets[0].data.push(body['sensors'][7]['value']);
        myChart8.update();
        if (myChart8.data.datasets[0].data.length == 10)
          myChart8.data.datasets[0].data.shift();
        /* Aggiornamento dati raw
        let rawData = JSON.stringify(body, null, 4);
        source.innerHTML = rawData; */
      })
  }, 2000);


toggle1.onclick = () => {
  fetch('https://hf3xzw.deta.dev/s-01/toggle', { method: 'PUT' })
    .then(response => response.json())
    .then(result => {
      alert("Stato del sensore cambiato! Attendi per visualizzare il cambiamento.");
    })
}
toggle2.onclick = () => {
  fetch('https://hf3xzw.deta.dev/s-02/toggle', { method: 'PUT' })
    .then(response => response.json())
    .then(result => {
      alert("Stato del sensore cambiato! Attendi per visualizzare il cambiamento.");
    })
}
toggle3.onclick = () => {
  fetch('https://hf3xzw.deta.dev/s-03/toggle', { method: 'PUT' })
    .then(response => response.json())
    .then(result => {
      alert("Stato del sensore cambiato! Attendi per visualizzare il cambiamento.");
    })
}
toggle4.onclick = () => {
  fetch('https://hf3xzw.deta.dev/s-04/toggle', { method: 'PUT' })
    .then(response => response.json())
    .then(result => {
      alert("Stato del sensore cambiato! Attendi per visualizzare il cambiamento.");
    })
}