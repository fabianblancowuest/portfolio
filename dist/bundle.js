(()=>{"use strict";let e,t,n;function o(o){!function(o){clearTimeout(e),clearTimeout(t),clearTimeout(n),subtitle.textContent="";const l=o;let s=0;const c=document.createElement("span");function d(){const t=l[s];let o=0;!function l(){o<t.length?(subtitle.textContent=t.substring(0,o+1),subtitle.appendChild(c),o++,e=setTimeout(l,100)):n=setTimeout(a,2e3)}()}function a(){const e=l[s];let o=e.length-1;!function a(){o>=0?(subtitle.textContent=e.substring(0,o),subtitle.appendChild(c),o--,t=setTimeout(a,50)):(s=(s+1)%l.length,n=setTimeout(d,1e3))}()}c.classList.add("typing-cursor"),subtitle.appendChild(c),d()}(window.innerWidth<768?o.phrasesMobile:o.phrases)}document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".appear"),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.classList.add("in-view")}))}),{threshold:.1});e.forEach((e=>{t.observe(e)}));let n=!1;const o=document.querySelector("html"),l=document.getElementById("logo-img"),s=document.getElementById("logo-img-footer"),c=document.getElementById("logo"),d=document.getElementById("select-language"),a=document.getElementById("language-selector"),m=document.getElementsByClassName("section"),i=document.getElementsByClassName("text"),r=document.getElementsByClassName("icon"),g=document.getElementsByClassName("modal-content"),u=document.getElementsByClassName("nav-link"),y=document.getElementById("navbar"),h=document.getElementById("btn-bars"),p=document.querySelector("#btn-bars span"),E=document.getElementsByClassName("dark-section"),b=document.getElementById("show-mode"),C=(document.getElementsByClassName("btn"),document.getElementsByClassName("line-project")),B=document.getElementById("img-in-progress"),f=document.getElementsByClassName("form-label"),v=document.querySelector("#btn-toggle i"),x=document.getElementById("btn-toggle"),I=document.getElementsByClassName("overlay"),k=(document.getElementById("about-me-description"),document.getElementById("hero-inferior-image-container"),document.getElementsByClassName("section-subtitle"));let L=0;c.addEventListener("click",(()=>{fetch("/src/languages/programming-phrases.json").then((e=>e.json())).then((e=>{console.log(e);const t=e.phrases[o.lang];L<t.length?(Swal.fire({title:t[L],confirmButtonColor:"rgb(13,202,240)",confirmButtonColorText:"red",customClass:n?"dark-mode-alert":null}),L++):L=0})).catch((e=>console.log("Error fetching the JSON:",e)))})),d.addEventListener("click",(function(){const e=document.getElementById("language-selector");e.focus(),setTimeout((()=>{const t=new MouseEvent("mousedown",{view:window,bubbles:!0,cancelable:!0});e.dispatchEvent(t)}),0)})),document.getElementById("btn-toggle").addEventListener("click",(()=>{n=!n,b.textContent=n?"Theme: Dark":"Theme: Light",l.src=n?"/src/assets/img/icons/codigo3.png":"/src/assets/img/icons/codigo2.png",n&&(s.src="/src/assets/img/icons/codigo3.png"),n&&(s.src="/src/assets/img/icons/codigo3.png"),a.style.backgroundImage=n?"url(/src/assets/img/icons/globe-white.svg)":"url(/src/assets/img/icons/globe.svg)",document.getElementsByClassName("active")[0].classList.toggle("dark-mode-active"),y.classList.toggle("dark-nav-bar"),h.classList.toggle("dark-btn-bars"),p.classList.toggle("dark-btn-bars"),m[0].classList.contains("dark-mode")?B.src="/src/assets/img/folder/work-in-progress.png":B.src="/src/assets/img/projects/work-in-progress.png",document.getElementById("contactModalLabel").classList.toggle("dark-mode-white-text"),document.getElementById("btn-download-cv").classList.toggle("btn-light"),document.getElementById("language-selector").classList.toggle("dark-mode-select");for(let e=0;e<E.length;e++)E[e].classList.toggle("dark-sections-mode");for(let e=0;e<m.length;e++)m[e].classList.toggle("dark-mode");for(let e=0;e<i.length;e++)i[e].classList.toggle("dark-mode-text");for(let e=0;e<r.length;e++)r[e].classList.toggle("dark-icon-hover");for(let e=0;e<u.length;e++)u[e].classList.toggle("dark-nav-link");for(let e=0;e<C.length;e++)C[e].classList.toggle("dark-color-line-cv");for(let e=0;e<g.length;e++)g[e].classList.toggle("dark-mode");document.getElementById("btn-download-cv-i").classList.toggle("dark-mode-text"),document.getElementById("btn-view-cv-i").classList.toggle("dark-mode-text");for(let e=0;e<I.length;e++)I[e].classList.toggle("dark-mode-white-text");for(let e=0;e<f.length;e++)f[e].classList.toggle("dark-mode-white-text");for(let e=0;e<k.length;e++)k[e].classList.toggle("dark-mode-white-text");for(let e=0;e<k.length;e++)k[e].classList.toggle("dark-mode-black-background");v.classList.contains("bi-moon-stars-fill")?(v.classList.remove("bi-moon-stars-fill"),v.classList.add("bi-brightness-high-fill"),x.classList.remove("icon-left"),x.classList.add("icon-right")):(v.classList.remove("bi-brightness-high-fill"),v.classList.add("bi-moon-stars-fill"),x.classList.remove("icon-right"),x.classList.add("icon-left"))}))})),window.addEventListener("resize",(()=>{L&&o(L)}));const l=document.querySelectorAll("#about-me-description p"),s=document.getElementById("btn-projects-icon"),c=document.getElementById("contact-icon"),d=document.querySelectorAll(".footer-links-a li a"),a=document.querySelectorAll("#cv-smahh-tasks li"),m=document.querySelectorAll("#cv-rym-tasks li"),i=document.querySelectorAll("#cv-mpc-tasks li"),r=document.querySelectorAll("#cv-simpsons-tasks li"),g=document.getElementsByClassName("cv-techs-used"),u=document.querySelectorAll(".cv-project-links a"),y=document.getElementsByClassName("section-subtitle"),h=document.getElementById("download-cv-ico"),p=document.getElementById("view-cv-ico"),E=document.getElementById("close-cv-ico"),b=document.getElementsByClassName("technology-text"),C=document.getElementById("btn-submit-ico"),B=document.getElementById("btn-submit-form"),f=document.getElementById("resume-ico"),v=document.getElementsByClassName("database-text"),x=document.querySelectorAll("#cv-languages li"),I=document.getElementById("language");async function k(e){const t=await fetch(e);return await t.json()}let L;async function w(e){const t=await k(`/src/languages/site-${e}.json`),n=await k(`/src/languages/cv-${e}.json`);L=t,I.textContent=document.querySelector("html").lang.toUpperCase(),o(t),document.getElementById("title").textContent=t.hi,document.getElementById("about-me-title").textContent=t.aboutMe;for(let e=0;e<l.length;e++)l[e].textContent=t.presentation[e];document.getElementById("experience-description").textContent=t.experience,document.getElementById("web-development-title").textContent=t.webDevelopment,document.getElementById("web-development-description").textContent=t.webDevelopmentDescription,document.getElementById("education-title").textContent=t.education,document.getElementById("education-description").textContent=t.educationDescription,document.getElementById("btn-experience").textContent=t.btnExperience,document.getElementById("btn-experience").appendChild(f),document.getElementById("projects-title").textContent=t.projects,document.getElementById("projects-description").textContent=t.projectsInfo,document.getElementById("lets-talk").textContent=t.letsTalk,document.getElementById("contact-me").textContent=t.contactPhrase,document.getElementById("contact-btn").textContent=t.contactBtn;const w=document.querySelectorAll("#footer-text span");for(let e=0;e<w.length;e++)w[e].textContent=t.footerPhrase[e];document.getElementById("btn-projects").textContent=t.btnProjects,document.getElementById("btn-projects").appendChild(s),document.getElementById("contact-btn").appendChild(c),document.getElementById("about-me-link").textContent=t.nav.aboutMeLink,document.getElementById("experience-link").textContent=t.nav.experienceLink,document.getElementById("projects-link").textContent=t.nav.projectsLink,document.getElementById("contact-link").textContent=t.nav.contactLink;for(let e=0;e<d.length;e++)d[e].textContent=t.footerLinks[e];const S=document.querySelectorAll(".form-label"),j=document.querySelectorAll(".form-control[placeholder]");document.getElementById("contactModalLabel").textContent=t.contactFormTitle;for(let e=0;e<S.length;e++)S[e].textContent=t.contactForm[e];for(let e=0;e<j.length;e++)j[e].placeholder=t.formPlaceHolders[e];B.textContent=t.btnForm,console.log(C),B.appendChild(C),document.getElementById("cv-info").textContent=n.cvInfo;for(let e=0;e<y.length;e++)y[e].textContent=n.sectionTitle[e];document.getElementById("cv-smahh-description").textContent=n.smahh;for(let e=0;e<a.length;e++)a[e].textContent=n.smahhTasks[e];for(let e=0;e<g.length;e++)g[e].textContent=n.techs,document.getElementById("cv-rym-description").textContent=n.rym;for(let e=0;e<m.length;e++)m[e].textContent=n.rymTasks[e];document.getElementById("cv-mpc-description").textContent=n.mpc;for(let e=0;e<g.length;e++)g[e].textContent=n.techsUsed;for(let e=0;e<i.length;e++)i[e].textContent=n.mpcTasks[e];document.getElementById("cv-simpsons-description").textContent=n.theSimpsonsApp;for(let e=0;e<r.length;e++)r[e].textContent=n.theSimpsonsAppTasks[e];for(let e=0;e<u.length;e++)"W"===u[e].textContent.charAt(0)||"S"===u[e].textContent.charAt(0)?u[e].textContent=n.cvProjectLinks[0]:u[e].textContent=n.cvProjectLinks[1];for(let e=0;e<b.length;e++)b[e].textContent=n.technologies[e]+":";const q=document.querySelectorAll("#cv-education-skills li"),A=document.querySelectorAll("#cv-complementary-education li");for(let e=0;e<q.length;e++)q[e].textContent=n.professionalEducation[e];for(let e=0;e<A.length;e++)A[e].textContent=n.complementaryEducation[e];document.getElementById("btn-download-cv").textContent=n.btnDownload,document.getElementById("btn-view-cv").textContent=n.btnView,document.getElementById("btn-download-cv").appendChild(h),document.getElementById("btn-view-cv").appendChild(p),document.getElementById("btn-close-cv").textContent=n.btnClose,document.getElementById("btn-close-cv").appendChild(E);for(let e=0;e<v.length;e++)v[e].textContent=n.textDatabase+":";for(let e=0;e<x.length;e++)x[e].textContent=n.languages[e];const T=document.getElementById("link-download-cv");T.href=`../docs/CV-fabian-blanco-wuest-${e}.pdf`,T.download=`CV-fabian-blanco-wuest-${e}.pdf`}emailjs.init({publicKey:"Qj-2BHcvaJJZlfg9O"}),window.onload=function(){document.getElementById("contact-form").addEventListener("submit",(function(e){e.preventDefault(),emailjs.sendForm("service_hre43nq","template_it5kkwt",this).then((e=>{console.log("SUCCESS!",e.status,e.text),document.getElementById("contact-form").reset();var t=document.getElementById("contactModal");bootstrap.Modal.getInstance(t).hide()}),(e=>{console.log("FAILED...",e)}))}))},document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("language-selector"),t=document.querySelector("html");e.addEventListener("change",(e=>{const n=e.target.value;w(n),t.lang=n,console.log(t.lang)})),w(e.value),console.log("select language")}))})();