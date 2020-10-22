$(() => {
  const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos?";
  const photosEl = document.querySelector("#photos");
  const photoItemTemplate = document.querySelector("#photoItemTemplate").innerHTML;

  init();

  function init() {
    getPhotos();
  }

  function getPhotos() {
    return fetch(PHOTOS_URL)
      .then((resp) => resp.json())
      .then(renderPhotos);
  }

  function renderPhotos(data) {
    photosEl.innerHTML = data
      .map((photo) => setPhotosParamsInHTML(photo))
      .join("\n");
      $("#photos").justifiedGallery({
        rowHeight: 70,
        margins: 3,
      });
  }

  function setPhotosParamsInHTML(photo) {
    return photoItemTemplate
      .replace("{{url}}", photo.url)
      .replace("{{thumbnailUrl}}", photo.thumbnailUrl);
  }
});
