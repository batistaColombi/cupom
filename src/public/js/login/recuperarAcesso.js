document.getElementById('formularioRec').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById("emailRec").value;

  fetch('/api/recover-password', {
    method: "POST",
    headers: { 'Content-type': 'application.json' },
    body: JSON.stringify({ email })
  })

    .then((response => response.json()))
    .then(data => {
      if (data.success) {
        alert('Instruções enviadas');
      } else {
        alert('Erro: ' + data.message);
      }
    })
    .catch(err => {
      console.log(err);
      alert("Algo deu errado.");
    })
})