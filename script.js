const output = document.getElementById("output")
const source = document.getElementById("source")

fetch("https://hf3xzw.deta.dev/")
  .then(response => response.json())
  .then(body => {
    //console.log(data)
    //console.log(body["sensors"].length)
    var dataArray = body["sensors"];
    for (var i = 0; i < dataArray.length; i++) {
      output.appendChild(document.createElement('h3')).innerHTML = "Sensore " + (i+1)
      output.appendChild(document.createElement('pre')).innerText = JSON.stringify(dataArray[i], null, 2)
    }

    const allData = JSON.stringify(body, null, 4)
    /*var temp = data.split("{")
    const dataArray = data.split("}")
    dataArray.forEach(element => output.appendChild(document.createElement('pre')).innerText = element)*/
    source.appendChild(document.createElement('pre')).innerText = allData
  })