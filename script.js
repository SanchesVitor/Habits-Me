const form = document.querySelector('form');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');

button.addEventListener('click', add);
form.addEventListener('change', save);

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0,-5);
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("Dia já incluso")
    return
  }

  nlwSetup.addDay(today);
}

function save() {
  
}

// const data = {
//   run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
//   takePills: ["01-03", "01-09"],
//   journal: ["01-02", "01-04"]
// };

// nlwSetup.setData(data);
// nlwSetup.load()