const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos?";
const API = {
    getPhotos: () => {
        return fetch(PHOTOS_URL).then((resp) => resp.json());
    }
}