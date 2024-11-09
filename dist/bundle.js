(()=>{"use strict";let e,t,n,o=!1;function l(o){!function(o){clearTimeout(e),clearTimeout(t),clearTimeout(n),subtitle.textContent="";const l=o;let c=0;const s=document.createElement("span");function d(){const t=l[c];let o=0;!function l(){o<t.length?(subtitle.textContent=t.substring(0,o+1),subtitle.appendChild(s),o++,e=setTimeout(l,100)):n=setTimeout(a,2e3)}()}function a(){const e=l[c];let o=e.length-1;!function a(){o>=0?(subtitle.textContent=e.substring(0,o),subtitle.appendChild(s),o--,t=setTimeout(a,50)):(c=(c+1)%l.length,n=setTimeout(d,1e3))}()}s.classList.add("typing-cursor"),subtitle.appendChild(s),d()}(window.innerWidth<768?o.phrasesMobile:o.phrases)}document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".appear"),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.classList.add("in-view")}))}),{threshold:.1});e.forEach((e=>{t.observe(e)}));const n=document.querySelector("html"),l=document.getElementById("logo-img"),c=document.getElementById("logo-img-footer"),s=document.getElementById("logo"),d=document.getElementById("select-language"),a=document.getElementById("language-selector"),m=document.getElementsByClassName("section"),i=document.getElementsByClassName("text"),r=document.getElementsByClassName("icon"),g=document.getElementsByClassName("modal-content"),u=document.getElementsByClassName("nav-link"),h=document.getElementById("navbar"),y=document.getElementById("btn-bars"),E=document.querySelector("#btn-bars span"),b=document.getElementsByClassName("dark-section"),p=document.getElementById("show-mode"),C=(document.getElementsByClassName("btn"),document.getElementsByClassName("line-project")),B=document.getElementsByClassName("form-label"),f=document.querySelector("#btn-toggle i"),v=document.getElementById("btn-toggle"),x=document.getElementsByClassName("overlay"),I=(document.getElementById("about-me-description"),document.getElementById("hero-inferior-image-container"),document.getElementsByClassName("section-subtitle"));let k=0;s.addEventListener("click",(()=>{fetch("/src/languages/programming-phrases.json").then((e=>e.json())).then((e=>{console.log(e);const t=e.phrases[n.lang];k<t.length?(Swal.fire({title:t[k],confirmButtonColor:"rgb(13,202,240)",confirmButtonColorText:"red",customClass:o?"dark-mode-alert":null}),k++):k=0})).catch((e=>console.log("Error fetching the JSON:",e)))})),d.addEventListener("click",(function(){const e=document.getElementById("language-selector");e.focus(),setTimeout((()=>{const t=new MouseEvent("mousedown",{view:window,bubbles:!0,cancelable:!0});e.dispatchEvent(t)}),0)})),document.getElementById("btn-toggle").addEventListener("click",(()=>{o=!o,p.textContent=o?"Theme: Dark":"Theme: Light",l.src=o?"/src/assets/img/icons/codigo3.png":"/src/assets/img/icons/codigo2.png",o&&(c.src="/src/assets/img/icons/codigo3.png"),o&&(c.src="/src/assets/img/icons/codigo3.png"),a.style.backgroundImage=o?"url(/src/assets/img/icons/globe-white.svg)":"url(/src/assets/img/icons/globe.svg)",document.getElementsByClassName("active")[0].classList.toggle("dark-mode-active"),h.classList.toggle("dark-nav-bar"),y.classList.toggle("dark-btn-bars"),E.classList.toggle("dark-btn-bars"),document.getElementById("contactModalLabel").classList.toggle("dark-mode-white-text"),document.getElementById("btn-download-cv").classList.toggle("btn-light"),document.getElementById("language-selector").classList.toggle("dark-mode-select");for(let e=0;e<b.length;e++)b[e].classList.toggle("dark-sections-mode");for(let e=0;e<m.length;e++)m[e].classList.toggle("dark-mode");for(let e=0;e<i.length;e++)i[e].classList.toggle("dark-mode-text");for(let e=0;e<r.length;e++)r[e].classList.toggle("dark-icon-hover");for(let e=0;e<u.length;e++)u[e].classList.toggle("dark-nav-link");for(let e=0;e<C.length;e++)C[e].classList.toggle("dark-color-line-cv");for(let e=0;e<g.length;e++)g[e].classList.toggle("dark-mode");document.getElementById("btn-download-cv-i").classList.toggle("dark-mode-text"),document.getElementById("btn-view-cv-i").classList.toggle("dark-mode-text");for(let e=0;e<x.length;e++)x[e].classList.toggle("dark-mode-white-text");for(let e=0;e<B.length;e++)B[e].classList.toggle("dark-mode-white-text");for(let e=0;e<I.length;e++)I[e].classList.toggle("dark-mode-white-text");for(let e=0;e<I.length;e++)I[e].classList.toggle("dark-mode-black-background");f.classList.contains("bi-moon-stars-fill")?(f.classList.remove("bi-moon-stars-fill"),f.classList.add("bi-brightness-high-fill"),v.classList.remove("icon-left"),v.classList.add("icon-right")):(f.classList.remove("bi-brightness-high-fill"),f.classList.add("bi-moon-stars-fill"),v.classList.remove("icon-right"),v.classList.add("icon-left"))}))})),window.addEventListener("resize",(()=>{S&&l(S)}));const c=document.getElementById("btn-toggle"),s=document.querySelectorAll("#about-me-description p"),d=document.getElementById("btn-projects-icon"),a=document.getElementById("contact-icon"),m=document.querySelectorAll(".footer-links-a li a"),i=document.querySelectorAll("#cv-smahh-tasks li"),r=document.querySelectorAll("#cv-rym-tasks li"),g=document.querySelectorAll("#cv-mpc-tasks li"),u=document.querySelectorAll("#cv-simpsons-tasks li"),h=document.getElementsByClassName("cv-techs-used"),y=document.querySelectorAll(".cv-project-links a"),E=document.getElementsByClassName("section-subtitle"),b=document.getElementById("download-cv-ico"),p=document.getElementById("view-cv-ico"),C=document.getElementById("close-cv-ico"),B=document.getElementsByClassName("technology-text"),f=document.getElementById("btn-submit-ico"),v=document.getElementById("btn-submit-form"),x=document.getElementById("resume-ico"),I=document.getElementsByClassName("database-text"),k=document.querySelectorAll("#cv-languages li"),L=document.getElementById("language");async function w(e){const t=await fetch(e);return await t.json()}let S;async function j(e){const t=await w(`/src/languages/site-${e}.json`),n=await w(`/src/languages/cv-${e}.json`);S=t,L.textContent=document.querySelector("html").lang.toUpperCase(),l(t),c.title=t.nav.switchTheme,document.getElementById("title").textContent=t.hi,document.getElementById("about-me-title").textContent=t.aboutMe;for(let e=0;e<s.length;e++)s[e].textContent=t.presentation[e];document.getElementById("experience-description").textContent=t.experience,document.getElementById("web-development-title").textContent=t.webDevelopment,document.getElementById("web-development-description").textContent=t.webDevelopmentDescription,document.getElementById("education-title").textContent=t.education,document.getElementById("education-description").textContent=t.educationDescription,document.getElementById("btn-experience").textContent=t.btnExperience,document.getElementById("btn-experience").appendChild(x),document.getElementById("projects-title").textContent=t.projects,document.getElementById("projects-description").textContent=t.projectsInfo,document.getElementById("lets-talk").textContent=t.letsTalk,document.getElementById("contact-me").textContent=t.contactPhrase,document.getElementById("contact-btn").textContent=t.contactBtn;const o=document.querySelectorAll("#footer-text span");for(let e=0;e<o.length;e++)o[e].textContent=t.footerPhrase[e];document.getElementById("btn-projects").textContent=t.btnProjects,document.getElementById("btn-projects").appendChild(d),document.getElementById("contact-btn").appendChild(a),document.getElementById("about-me-link").textContent=t.nav.aboutMeLink,document.getElementById("experience-link").textContent=t.nav.experienceLink,document.getElementById("projects-link").textContent=t.nav.projectsLink,document.getElementById("contact-link").textContent=t.nav.contactLink;for(let e=0;e<m.length;e++)m[e].textContent=t.footerLinks[e];const j=document.querySelectorAll(".form-label"),q=document.querySelectorAll(".form-control[placeholder]");document.getElementById("contactModalLabel").textContent=t.contactFormTitle;for(let e=0;e<j.length;e++)j[e].textContent=t.contactForm[e];for(let e=0;e<q.length;e++)q[e].placeholder=t.formPlaceHolders[e];v.textContent=t.btnForm,console.log(f),v.appendChild(f),document.getElementById("cv-info").textContent=n.cvInfo;for(let e=0;e<E.length;e++)E[e].textContent=n.sectionTitle[e];document.getElementById("cv-smahh-description").textContent=n.smahh;for(let e=0;e<i.length;e++)i[e].textContent=n.smahhTasks[e];for(let e=0;e<h.length;e++)h[e].textContent=n.techs,document.getElementById("cv-rym-description").textContent=n.rym;for(let e=0;e<r.length;e++)r[e].textContent=n.rymTasks[e];document.getElementById("cv-mpc-description").textContent=n.mpc;for(let e=0;e<h.length;e++)h[e].textContent=n.techsUsed;for(let e=0;e<g.length;e++)g[e].textContent=n.mpcTasks[e];document.getElementById("cv-simpsons-description").textContent=n.theSimpsonsApp;for(let e=0;e<u.length;e++)u[e].textContent=n.theSimpsonsAppTasks[e];for(let e=0;e<y.length;e++)"W"===y[e].textContent.charAt(0)||"S"===y[e].textContent.charAt(0)?y[e].textContent=n.cvProjectLinks[0]:y[e].textContent=n.cvProjectLinks[1];for(let e=0;e<B.length;e++)B[e].textContent=n.technologies[e]+":";const A=document.querySelectorAll("#cv-education-skills li"),T=document.querySelectorAll("#cv-complementary-education li");for(let e=0;e<A.length;e++)A[e].textContent=n.professionalEducation[e];for(let e=0;e<T.length;e++)T[e].textContent=n.complementaryEducation[e];document.getElementById("btn-download-cv").textContent=n.btnDownload,document.getElementById("btn-view-cv").textContent=n.btnView,document.getElementById("btn-download-cv").appendChild(b),document.getElementById("btn-view-cv").appendChild(p),document.getElementById("btn-close-cv").textContent=n.btnClose,document.getElementById("btn-close-cv").appendChild(C);for(let e=0;e<I.length;e++)I[e].textContent=n.textDatabase+":";for(let e=0;e<k.length;e++)k[e].textContent=n.languages[e];const N=document.getElementById("link-download-cv");N.href=`../../docs/CV-fabian-blanco-wuest-${e}.pdf`,N.download=`CV-fabian-blanco-wuest-${e}.pdf`,document.getElementById("link-view-cv").href=`../../docs/CV-fabian-blanco-wuest-${e}.pdf`}emailjs.init({publicKey:"9JCn0c1qVcEraVknh"}),window.onload=function(){document.getElementById("contact-form").addEventListener("submit",(function(e){e.preventDefault(),emailjs.sendForm("service_hre43nq","template_it5kkwt",this).then((e=>{console.log("SUCCESS!",e.status,e.text),document.getElementById("contact-form").reset();var t=document.getElementById("contactModal");bootstrap.Modal.getInstance(t).hide()}),(e=>{console.log("FAILED...",e)}))}))},document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("language-selector"),t=document.querySelector("html");e.addEventListener("change",(n=>{const o=n.target.value;j(o),t.lang=o,console.log(t.lang),"en"===t.lang?e.title="Change language":e.title="Cambiar idioma"})),j(e.value),console.log("select language")}))})();