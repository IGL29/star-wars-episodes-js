export function getListFilmsData() {
  return fetch('https://swapi.dev/api/films')
    .then((response) => response.json())
    .then((result) => result.results);
}

export async function getFilmData(part) {
  const description = await getDescriptionFilm(part);
  return Promise.all([
    getListData({ listUrl: description.planets }),
    getListData({ listUrl: description.species }),
    getListData({ listUrl: description.starships }),
    getListData({ listUrl: description.characters }),
  ]).then(([listPlanets, listSpecies, listStarships, listСharacters]) => {
    return { listPlanets, listSpecies, listStarships, listСharacters, description }
  })
}

function getDescriptionFilm(part) {
  return fetch(`https://swapi.dev/api/films/${part}`)
    .then((response) => response.json())
    .then((result) => result);
}

function getListData({ listUrl }) {
  const responses = listUrl.map((url) => fetch(url));
  return Promise.all(responses)
    .then((responses) => Promise.all(responses.map((response) => response.json())))
    .then((result) => result);
}
