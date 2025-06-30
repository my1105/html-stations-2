function displayList() {
  const fruitsDiv = document.getElementById('fruits');

  const fruitItems = fruitsDiv.querySelectorAll('p');

  const ul = document.createElement('ul');


  fruitItems.forEach(p => {
    const li = document.createElement('li');
    li.textContent = p.textContent;
    ul.appendChild(li);
  });

  fruitsDiv.innerHTML = '';
  fruitsDiv.appendChild(ul);
}
