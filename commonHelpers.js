import{A as y,S as u,N as v,K as f,M as p,a as k}from"./assets/vendor-2cec5e20.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();var n=document.querySelector(".footer-form .email"),c=document.querySelector(".footer-form .comments"),a=document.querySelector(".message"),C=document.querySelector(".footer-form .send-btn"),b=document.querySelector(".modal-container"),M=document.querySelector(".close-btn");function x(){document.body.style.overflow="hidden"}function O(){document.body.style.overflow=""}n.addEventListener("blur",function(){n.value.trim()===""?(n.classList.remove("error","success"),a.textContent=""):n.checkValidity()?(n.classList.remove("error"),n.classList.add("success"),a.textContent="Success!",a.classList.add("success-message"),a.classList.remove("error-message")):(n.classList.remove("success"),n.classList.add("error"),a.textContent="Invalid email, try again",a.classList.add("error-message"),a.classList.remove("success-message"))});c.addEventListener("input",function(){c.value.length>50?(c.value=c.value.substring(0,50),c.classList.add("error")):c.classList.remove("error")});C.addEventListener("click",function(e){e.preventDefault(),n.value.trim()===""?a.textContent="":n.checkValidity()?(x(),b.style.display="block",a.textContent="",n.value="",c.value="",n.classList.remove("success","error"),c.classList.remove("error")):(n.classList.remove("success"),n.classList.add("error"),a.textContent="Invalid email, try again",a.classList.add("error-message"),a.classList.remove("success-message"))});M.addEventListener("click",function(){O(),b.style.display="none"});document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".footer-form .email"),t=document.querySelector(".footer-form .comments"),s=document.querySelector(".footer-form");function i(){var r={email:e.value,comments:t.value};localStorage.setItem("feedback-form-state",JSON.stringify(r))}var o=localStorage.getItem("feedback-form-state");o&&(o=JSON.parse(o),e.value=o.email,t.value=o.comments),s.addEventListener("input",function(r){r.target.matches(".email, .comments")&&i()}),s.addEventListener("submit",function(r){r.preventDefault(),localStorage.removeItem("feedback-form-state");var l={email:e.value,comments:t.value};console.log(l),e.value="",t.value=""})});const P=Array.from(document.querySelectorAll(".container-about")),N=P.map(e=>e.querySelector(".accordion-list")),I=Array.from(document.querySelectorAll(".ac-text-about-me"));new y(N,{showMultiple:!0,elementClass:"accordion-element",triggerClass:"accordion-title",panelClass:"accordion-description",openOnInit:[],onOpen:function(e){e.querySelector(".accordion-title").classList.add("active")},onClose:function(e){e.querySelector(".accordion-title").classList.remove("active")}});I.forEach(e=>{e.addEventListener("click",function(){const t=this.closest(".accordion-element").querySelector(".accordion-description");t.classList.contains("active")?t.classList.remove("active"):t.classList.add("active")})});new u(".skills-container",{loop:!0,direction:"horizontal",allowSlideNext:!0,setWrapperSize:!0,modules:[v,f,p],simulateTouch:!0,grabCursor:!0,spaceBetween:0,speed:1e3,navigation:{nextEl:".swipe-next-button"},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0},mousewheel:{invert:!0}});const A=Array.from(document.querySelectorAll(".accordion")),B=A.map(e=>e.querySelector(".faq-list"));new y(B,{showMultiple:!0,elementClass:"faq-item",triggerClass:"faq-container",panelClass:"accordion-content",openOnInit:[0],onOpen:function(e){e.querySelector(".faq-container").classList.add("active")},onClose:function(e){e.querySelector(".faq-container").classList.remove("active")}});async function V(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error("Network response was not OK!");return await e.json()}catch(e){throw console.error("Error fetching data:",e),e}}const T=document.querySelector(".swiper-list-container");function D(e){return`<li class="swiper-slide swiper-review-slide">
    <div class="review">
      <img src="${e.avatar_url}" alt="Avatar" class="review-avatar">
      <p class="review-author">${e.author}</p>
      <p class="review-text">${e.review}</p>
    </div>
  </li>`}function $(e){if(e.length===0)alert("Not Found");else{const t=e.map(s=>D(s)).join("");T.insertAdjacentHTML("beforeend",t)}}document.addEventListener("DOMContentLoaded",async function(){try{const t=await V();$(t),j()}catch(t){console.error("Error rendering reviews:",t)}});function j(){const e=new u(".swiper-container",{direction:"horizontal",spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{enabled:!0,sensitivity:1,eventsTarget:".swiper"},navigation:{nextEl:"#next_btn",prevEl:"#before_btn",clickable:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},effect:"slide",slideToClickedSlide:!0,touchRatio:3,allowTouchMove:!0}),t=document.querySelector("#next_btn"),s=document.querySelector("#before_btn");t.addEventListener("click",()=>{e.slideNext(500),i()}),s.addEventListener("click",()=>{e.slidePrev(500),i()});function i(){e.isBeginning?(s.classList.add("swiper-button-dis"),s.disabled=!0):(s.classList.remove("swiper-button-dis"),s.disabled=!1),e.isEnd?(t.classList.add("swiper-button-dis"),t.disabled=!0):(t.classList.remove("swiper-button-dis"),t.disabled=!1)}i()}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".nav-menu"),t=document.querySelector(".nav-list"),s=document.querySelectorAll(".nav-item"),i=document.querySelector(".mobile-menu"),o=document.querySelector(".mobile-menu-button"),r=document.querySelector(".close-button"),l=document.querySelector(".mobile-button-link"),g=document.querySelectorAll(".mobile-nav .nav-item");function w(){t.classList.toggle("active"),s.forEach(d=>{d.classList.toggle("active")})}function h(d){d.stopPropagation(),w()}function S(d){!e.contains(d.target)&&t.classList.contains("active")&&w()}function q(){m()}function E(){i.classList.add("is-open")}function m(){i.classList.remove("is-open")}e.addEventListener("click",h),document.addEventListener("click",S),o.addEventListener("click",E),r.addEventListener("click",m),l.addEventListener("click",m),g.forEach(d=>{d.addEventListener("click",q)})});const z="https://portfolio-js.b.goit.study/api/reviews",L=document.querySelector(".review-list"),H=document.querySelector(".review-buttons-wrapper");async function _(){return(await k.get(z)).data}_().then(e=>{K(e),new u(".reviews-swiper",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,swipeHandler:".reviews-list-item",speed:400,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:18}},navigation:{prevEl:".previous-btn",nextEl:".next-btn"},keyboard:{enabled:!0},mousewheel:{invert:!0},allowSlideNext:!0,modules:[v,f,p],allowTouchMove:!0})}).catch(e=>{L.innerHTML=`<li class="error-item">
       <p class="error-title">Oops, something went wrong 😢</p>
       <p class="error-text-describe">Problems with downloading content from the server. Error: ${e.message}</p>
    </li>`,H.classList.add("hide")});function K(e){const t=e.map(({avatar_url:s,author:i,review:o})=>`
        <li class="review-item swiper-slide">
          <img class="review-avatar" src="${s}" alt="author avatar"/>
          <p class="review-author-name">${i}</p>
          <p class="review-author-text">${o}</p>
        </li>`).join("");L.insertAdjacentHTML("beforeend",t)}u.use([v,f,p]);
//# sourceMappingURL=commonHelpers.js.map