$(() => {
  const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos?";
  const $photosEl = $("#photos");
  const $photoItemTemplate = $("#photoItemTemplate").html();

  init();

  function init() {
    getPhotos();
  }

  function getPhotos() {
    return fetch(PHOTOS_URL)
      .then((resp) => resp.json())
      .then(renderPhotos);
  }

  function initGallary(){
    $photosEl.justifiedGallery({
      rowHeight: 70,
      margins: 3,
    });
  }

  function renderPhotos(data) {
    const html = data.map(setPhotosParamsInHTML).join("\n");
    $photosEl.html(html);
    initGallary();
  }

  function setPhotosParamsInHTML(photo) {
    return $photoItemTemplate
      .replace("{{url}}", photo.url)
      .replace("{{thumbnailUrl}}", photo.thumbnailUrl);
  }
});
