export function createTemplateInfoList (listPropertiesData) {
  return listPropertiesData.reduce((sumItemsProperties, itemProperty ) => {
    return sumItemsProperties + `<li class="list-info__item">${itemProperty.name}</li>`
  }, '');
}

export function createTemplateContainerInfo (templatelist, titleList) {
  return `<div class="episode__card-info card-info">
            <h2 class="card-info__title">${titleList}</h2>
            <ul class="card-info__list-info">
              ${templatelist}
            </ul>
          </div>`;
}

export function createTemplateDescription (description) {
  return  `<div class="episode__description description">
    <p class="description__part">Episode ${description.episode_id}</p>
    <h1 class="description__title">${description.title}</h1>
    <p class="description__text">${description.opening_crawl}</p>
  </div>`;
}