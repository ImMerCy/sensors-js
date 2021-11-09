const output = document.getElementById("output")
const source = document.getElementById("source")
const btn1 = document.getElementsByClassName("uk-button uk-button-primary")[0]
const btn2 = document.getElementsByClassName("uk-button uk-button-primary")[1]
const btn3 = document.getElementsByClassName("uk-button uk-button-primary")[2]
const btn4 = document.getElementsByClassName("uk-button uk-button-primary")[3]

/*fetch('https://hf3xzw.deta.dev/s-04/toggle', {method: 'PUT'})
  .then(response => response.json())
  .then(result => {
    console.log('Success:', result)
  })
  .catch(error => {
    console.error('Error:', error)
  }
  )*/

fetch("https://hf3xzw.deta.dev/")
  .then(response => response.json())
  .then(body => {
    var dataArray = body["sensors"];
    for (var i = 0; i < dataArray.length; i++) {
      document.getElementsByClassName("uk-card-title")[i].innerHTML = "Sensore " + (i+1)
      document.getElementsByClassName("uk-card-description")[i].innerHTML = JSON.stringify(dataArray[i], null, 2)
    }

    const allData = JSON.stringify(body, null, 4)
    source.appendChild(document.createElement('pre')).innerText = allData
  }
)