const factsBtn = document.getElementById('facts');

factsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/api/facts'
});

const createList = (fact) => {
    const listEl = document.createElement('div');
    listEl.classList.add('ul');
    listEl.innerHTML = `<li>${fact.fact}</li>`;
}

const getFacts = () =>
    fetch('/api/facts', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then((response) => response.json())
        .then((data) => data)
        .catch((err) => {
            console.log('Error:', err);
        });

getFacts().then((data) => data.forEach((fact) => createList(fact)));