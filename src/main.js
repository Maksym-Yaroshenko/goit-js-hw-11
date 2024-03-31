import getPixabay from './js/pixabay-api';
import renderInput from './js/render-functions';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// console.log(getPixabay());

const searchForm = {
  form: document.querySelector('.search-form'),
  btn: document.querySelector('.btn-submit'),
  ul: document.querySelector('.flex-container'),
};

searchForm.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const user = event.target.query.value.trim();
  if (user !== '') {
    getPixabay(user)
      .then(data => {
        if (data.hits.length !== 0) {
          // console.log(data.hits);
          // for (let i = 0; i < data.hits.length; i += 1) {
          //   console.log();
          // }
          searchForm.ul.innerHTML = '';
          data.hits.map(
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

new SimpleLightbox('.flex-container .retrieved-search-element a', {
  captionsData: 'alt',
  captionDelay: 250,
});
