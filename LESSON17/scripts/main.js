const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos?albumId={{id}}';

const albumsEl = document.querySelector('#albums');
const photosEl = document.querySelector('#photos');

const albumItemTemplate = document.querySelector('#albumItemTemplate').innerHTML;
const photoItemTemplate = document.querySelector('#photoItemTemplate').innerHTML;

albumsEl.addEventListener('click', onAlbumsItemClick);

init();

function init() {
    getAlbums().then(getFirstAlbumPhotos);
}

//
function onAlbumsItemClick(e) {
  if (e.target.classList.contains('album-item')) {
    getPhotosById(e.target.dataset.id);
  }
}

//получение названия альбомов
function getAlbums() {
    return fetch(ALBUMS_URL)
        .then((resp) => resp.json())
        .then((data) => {
            renderAlbums(data);
            return data;
        });
}

//получение фотографий по ид альбома
function getPhotosById(albumId) {
  return fetch(PHOTOS_URL.replace('{{id}}', albumId))
      .then((resp) => resp.json())
      .then(renderPhotos);
}

// получение альбома по умолчанию
function getFirstAlbumPhotos(data) {
  if (data.length > 0) {
    getPhotosById(data[0].id);
  } else {
    new Error('Длина массива фото меньше 0')
  }
}

function renderAlbums(data) {
    albumsEl.innerHTML = data
        .map((album) => setAlbumsParamsInHTML(album))
        .join('\n');
}

// обновляем шаблон для альбомов: id + title
function setAlbumsParamsInHTML(album) {
    return albumItemTemplate
        .replace('{{id}}', album.id)
        .replace('{{title}}', album.title);
}

function renderPhotos(data) {
    photosEl.innerHTML = data
        .map((photo) => setPhotosParamsInHTML(photo))
        .join('\n');
}

//обновляем шаблон для изображений: фото
function setPhotosParamsInHTML(photo) {
    return photoItemTemplate
        .replace('{{url}}', photo.thumbnailUrl)
}
