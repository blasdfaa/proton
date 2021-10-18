const e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,t="failure",r="success",o=(e,t="success",r=Function.prototype,o=Function.prototype)=>{const a=document.createElement("div"),n=document.createElement("p"),s=document.createElement("button");switch(a.classList.add("feedback-form__alert"),n.classList.add("feedback-form__alert-message"),s.classList.add("btn-blue","feedback-form__alert-button"),n.textContent=e,t){case"success":s.textContent="ОК",s.addEventListener("click",r);break;case"failure":s.textContent="Попробовать еще раз",s.addEventListener("click",o)}return a.appendChild(n),a.appendChild(s),a};window.innerWidth<1200&&(()=>{const e=document.querySelector("html"),t=document.querySelector(".header-menu__toggle");t.addEventListener("click",(()=>{e.classList.toggle("js-menu-open");e.classList.contains("js-menu-open")?t.setAttribute("aria-expanded","true"):t.setAttribute("aria-expanded","false")}))})(),document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const r=e.getAttribute("href");document.querySelector(r).scrollIntoView({behavior:"smooth",block:"start"}),history.pushState(null,null,r)}))})),(()=>{const a=document.querySelector(".feedback-form"),n=document.querySelector(".feedback-form .container"),s=document.querySelector(".feedback-form__field--message"),d=document.querySelector(".feedback-form__field--email"),c=document.querySelector(".feedback-form__message-counter"),l=document.querySelector(".feedback-form__form");let i=[];d.addEventListener("input",(t=>{var r;const o=null==t||null===(r=t.target)||void 0===r?void 0:r.value;var a;o&&(a=o,!e.test(String(a).toLowerCase()))?d.setCustomValidity("Введите правильный Email"):o?d.setCustomValidity(""):d.setCustomValidity("Поле не должно быть пустым"),d.reportValidity()})),s.addEventListener("input",(e=>{var t;const r=null==e||null===(t=e.target)||void 0===t?void 0:t.value;r.length>500?s.setCustomValidity("Количество символов не должно превышать 500"):r?s.setCustomValidity(""):s.setCustomValidity("Поле не должно быть пустым"),c.textContent=+s.value.length+"/500",s.reportValidity()}));const u=o("Ваше сообщение успешно отправлено",r,(()=>(a.querySelector(".feedback-form__alert").remove(),a.classList.remove("feedback-form--sent"),i.forEach((e=>{n.appendChild(e)})),void l.reset()))),m=o("Не удалось отправить сообщение",t);l.addEventListener("submit",(e=>{e.preventDefault(),(()=>{for(;n.firstChild;)i.push(n.firstChild),n.removeChild(n.firstChild)})(),a.classList.add("feedback-form--sent");try{n.appendChild(u)}catch(e){n.appendChild(m)}}))})();
//# sourceMappingURL=index.84e86483.js.map