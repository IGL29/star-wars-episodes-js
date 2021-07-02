import { createTemplateInfoList, createTemplateContainerInfo, createTemplateDescription } from './templates.js'
import { goToPage as renderApp } from './renderApp.js';

export function render({ description, listPlanets, listSpecies, listStarships, listСharacters }) {

  const container = document.createElement('div');
  const containerListInfo = document.createElement('div');
  container.classList.add('episode')
  containerListInfo.classList.add('episode__list-info', 'd-flex', 'flex-wrap', 'justify-content-between')

  const templatelistPlanet = createTemplateInfoList(listPlanets);
  const templatelistSpecies = createTemplateInfoList(listSpecies);
  const templatelistStarships = createTemplateInfoList(listStarships);
  const templatelistСharacters = createTemplateInfoList(listСharacters);

  const linkToMain = document.createElement('a');
  linkToMain.textContent = 'Back to episodes';
  linkToMain.setAttribute('href', '/sw');
  linkToMain.classList.add('episode__link-back');
  linkToMain.addEventListener('click', (e) => {
    e.preventDefault();
    const hrefValue = e.currentTarget.getAttribute('href');
    history.pushState( null, '', `${hrefValue}`);
    renderApp();
  })

  const templateDescription = createTemplateDescription(description);

  container.append(linkToMain);
  container.insertAdjacentHTML('beforeend', templateDescription);
  containerListInfo.insertAdjacentHTML('beforeend', createTemplateContainerInfo(templatelistPlanet, 'Planets'));
  containerListInfo.insertAdjacentHTML('beforeend', createTemplateContainerInfo(templatelistSpecies, 'Species'));
  containerListInfo.insertAdjacentHTML('beforeend', createTemplateContainerInfo(templatelistStarships, 'Starships'));
  containerListInfo.insertAdjacentHTML('beforeend', createTemplateContainerInfo(templatelistСharacters, 'Сharacters'));
  container.append(containerListInfo);
  return container;
}
