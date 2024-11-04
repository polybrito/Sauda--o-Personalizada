function saudar() {
    const name = document.getElementById('name').value;
    if (name) {
        alert(`Olá, ${name}! Bem-vindo(a)!`);
    } else {
        alert('Por favor, digite seu nome.');
    }
}
