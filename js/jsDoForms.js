document.querySelector('.form').addEventListener('submit', function(e) {
    e.preventDefault();
    fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
    })
    .then(() => window.location.href = 'obrigadoforms.html')
    .catch(() => alert('Erro ao enviar!'));
});