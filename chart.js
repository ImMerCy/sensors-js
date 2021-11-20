const ctx5 = document.getElementById('chart5').getContext('2d');
const myChart5 = new Chart(ctx5, {
  type: 'line',
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [{
      label: 'Caricamento...',
      data: [],
      backgroundColor: 'rgba(233, 30, 99, 1)',
      borderColor: 'rgba(233, 30, 99, 1)',
      borderWidth: 3
    }]
  },
  options: {
    lineTension: 0.5,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx6 = document.getElementById('chart6').getContext('2d');
const myChart6 = new Chart(ctx6, {
  type: 'line',
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [{
      label: 'Caricamento...',
      data: [],
      backgroundColor: 'rgba(241, 196, 15, 1)',
      borderColor: 'rgba(241, 196, 15, 1)',
      borderWidth: 3
    }]
  },
  options: {
    lineTension: 0.5,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx7 = document.getElementById('chart7').getContext('2d');
const myChart7 = new Chart(ctx7, {
  type: 'line',
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [{
      label: 'Caricamento...',
      data: [],
      backgroundColor: 'rgba(46, 204, 113, 1)',
      borderColor: 'rgba(46, 204, 113, 1)',
      borderWidth: 3
    }]
  },
  options: {
    lineTension: 0.5,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx8 = document.getElementById('chart8').getContext('2d');
const myChart8 = new Chart(ctx8, {
  type: 'line',
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [{
      label: 'Caricamento...',
      data: [],
      backgroundColor: 'rgba(230, 126, 34, 1)',
      borderColor: 'rgba(230, 126, 34, 1)',
      borderWidth: 3
    }]
  },
  options: {
    lineTension: 0.5,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});