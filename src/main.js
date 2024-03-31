import getPixabay from './js/pixabay-api';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

console.log(getPixabay());

const searchForm = {
  form: document.querySelector('.search-form'),
  btn: document.querySelector('.btn-submit'),
};

searchForm.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const user = event.target.query.value.trim();
  if (user !== '') {
    getPixabay(user).then(data => {
      if (data.hits.length !== 0) {
        console.log(data);
      } else {
        iziToastIcon(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return searchForm.form.reset();
      }
    });
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
