import { getListFilmsData, getFilmData } from "./api.js";

async function render({ moduleName, getDataMethod, param }) {
  const appContainer = document.getElementById('app');
  appContainer.innerHTML = '';
  const loader = document.querySelector('.loader');
  loader.classList.add('show');

  Promise.all([
    import(moduleName),
    getDataMethod(param),
  ])
  .then (([module, data]) => {
    return module.render(data)
  })
  .then((readyTemplate) => {
    loader.classList.remove('show');
    appContainer.append(readyTemplate)
  })
}

export function goToPage() {
  const searchParams = new URLSearchParams(location.search);
  const partFilm = searchParams.get('id');
  
  if(partFilm) {
    render(
      {
        moduleName: './itemInfo.js',
        getDataMethod: getFilmData,
        param: partFilm,
      }
    );
  } else {
    render(
      {
        moduleName: './listItems.js',
        getDataMethod: getListFilmsData,
      }
      );
    }
  }