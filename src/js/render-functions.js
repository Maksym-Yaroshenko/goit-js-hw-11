export default function renderInput(
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads
) {
  return `    
    <li class="retrieved-search-element">
      <a href="${largeImageURL}"><img class="img-element" src="${webformatURL}" alt="${tags}"></a>
      <ul class="menu">
        <li class="menu-item">
          <h4 class="menu-item-text-bold">Likes</h4>
          <p class="menu-item-text">${likes}</p>
        </li>
        <li class="menu-item">
          <h4 class="menu-item-text-bold">Views</h4>
          <p class="menu-item-text">${views}</p>
        </li>
        <li class="menu-item">
          <h4 class="menu-item-text-bold">Comments</h4>
          <p class="menu-item-text">${comments}</p>
        </li>
        <li class="menu-item">
          <h4 class="menu-item-text-bold">Downloads</h4>
          <p class="menu-item-text">${downloads}</p>
        </li>
      </ul>
    </li>`;
}
