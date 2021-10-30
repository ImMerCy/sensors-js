const output = document.getElementById("output")

fetch("https://hf3xzw.deta.dev/")
  .then(response => response.json())
  .then(data => {
    //console.log(data)
    const compliment = JSON.stringify(data, null, 4)
    output.appendChild(document.createElement('pre')).innerText = compliment
  })