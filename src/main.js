import getPixabay from './js/pixabay-api';
import renderInput from './js/render-functions';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// console.log(getPixabay());

const searchForm = {
  form: document.querySelector('.search-form'),
  btn: document.querySelector('.btn-submit'),
  ul: document.querySelector('.flex-container'),
  load: document.querySelector('.loader'),
};

searchForm.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  searchForm.load.classList.remove('included');

  const user = event.target.query.value.trim();
  if (user !== '') {
    getPixabay(user)
      .then(data => {
        searchForm.load.classList.add('included');

        if (data.hits.length !== 0) {
          searchForm.ul.innerHTML = '';
          data.hits.forEach(
            ({
              webformatURL,
              largeImageURL,
              tags,
              likes,
              views,
              comments,
              downloads,
            }) => {
              searchForm.ul.insertAdjacentHTML(
                'beforeend',
                renderInput(
                  webformatURL,
                  largeImageURL,
                  tags,
                  likes,
                  views,
                  comments,
                  downloads
                )
              );
            }
          );
          new SimpleLightbox('.flex-container a', {
            captionsData: 'alt',
            captionDelay: 250,
          }).refresh();
          return searchForm.form.reset();
        } else {
          iziToastIcon(
            'Sorry, there are no images matching your search query. Please try again!'
          );
          return searchForm.form.reset();
        }
      })
      .catch(error => console.error(error));
  } else {
    iziToastIcon('Please enter the text');
    return searchForm.form.reset();
  }
}

// Винесення в окрему функцію виїджаючого попередження
function iziToastIcon(text) {
  return iziToast.show({
    backgroundColor: '#ef4040',
    messageColor: 'white',
    messageSize: '16px',
    position: 'topRight',
    message: text,
    close: false,
  });
}
