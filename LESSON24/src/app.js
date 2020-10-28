$(() => {
    const $photosEl = $("#photos");
    const $photoItemTemplate = $("#photoItemTemplate").html();
  
    init();
  
    function init() {
      getPhotos();
    }
  
    function getPhotos() {
      return API.getPhotos.then(renderPhotos);
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
  