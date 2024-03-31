import{S as f,i as d}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function h(o){const r="https://pixabay.com/api/",s=new URLSearchParams({key:"43152817-de47b6f1b37f4fad093212301",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),n=`${r}?${s}`;return fetch(n).then(e=>e.json())}function p(o,r,s,n,e,t,l){return`    
    <li class="retrieved-search-element">
      <a href="${r}"><img class="img-element" src="${o}" alt="${s}"></a>
      <ul class="menu">
        <li class="menu-item">
          <h4 class="menu-item-text-bold">Likes</h4>
          <p class="menu-item-text">${n}</p>
        </li>
        <li class="menu-item">
          <h4 class="menu-item-text-bold">Views</h4>
          <p class="menu-item-text">${e}</p>
        </li>
        <li class="menu-item">
          <h4 class="menu-item-text-bold">Comments</h4>
          <p class="menu-item-text">${t}</p>
        </li>
        <li class="menu-item">
          <h4 class="menu-item-text-bold">Downloads</h4>
          <p class="menu-item-text">${l}</p>
        </li>
      </ul>
    </li>`}const i={form:document.querySelector(".search-form"),btn:document.querySelector(".btn-submit"),ul:document.querySelector(".flex-container"),load:document.querySelector(".loader")};i.form.addEventListener("submit",y);function y(o){o.preventDefault(),i.load.classList.remove("included");const r=o.target.query.value.trim();if(r!=="")h(r).then(s=>(i.load.classList.add("included"),s.hits.length!==0?(i.ul.innerHTML="",s.hits.forEach(({webformatURL:n,largeImageURL:e,tags:t,likes:l,views:c,comments:u,downloads:m})=>{i.ul.insertAdjacentHTML("beforeend",p(n,e,t,l,c,u,m))}),new f(".flex-container a",{captionsData:"alt",captionDelay:250}).refresh(),i.form.reset()):(a("Sorry, there are no images matching your search query. Please try again!"),i.form.reset()))).catch(s=>console.error(s));else return a("Please enter the text"),i.form.reset()}function a(o){return d.show({backgroundColor:"#ef4040",messageColor:"white",messageSize:"16px",position:"topRight",message:o,close:!1})}
//# sourceMappingURL=commonHelpers.js.map
