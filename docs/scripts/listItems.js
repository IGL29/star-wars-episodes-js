import { goToPage as renderApp } from './renderApp.js';

export function render(listItems) {
  const container = document.createElement('ul');
  container.classList.add('container', 'd-flex', 'justify-content-between', 'flex-wrap')
  
  listItems.forEach((item, index) => {
    const containerItem = document.createElement('li');
    containerItem.classList.add('card');
    containerItem.style.width = '18rem';

    const serialNumber = index + 1;
    const linkElement = document.createElement('a');
    linkElement.classList.add('card__link');
    linkElement.setAttribute('href', `?id=${serialNumber}`);

    linkElement.addEventListener('click', (ev) => {
      ev.preventDefault();
      const hrefValue = ev.currentTarget.getAttribute('href');
      history.pushState( null, '', `${hrefValue}`);
      renderApp();
    })

    const templateCard = `
      <div class="card-body">
      <p class="card-text">Episode ${item.episode_id}</p>
      <h5 class="card-title">${item.title}</h5>
      </div>`;
    
    linkElement.insertAdjacentHTML('beforeend', templateCard)
    containerItem.append(linkElement)
    container.append(containerItem);
  });
  return container;
}