(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/vishnurepo/couple-photo.png`;document.querySelector(`#app`).innerHTML=`
  <div class="petals" aria-hidden="true"></div>
  <main class="invitation">
    <div class="ambient-photo" style="background-image: url('${e}');" aria-hidden="true"></div>
    <div class="paper-card">
      <header class="topbar">
        <p class="monogram">V <span>&amp;</span> D</p>
        <p>Our wedding invitation</p>
        <p>30 · 08 · 2026</p>
      </header>
      <section class="hero reveal" aria-labelledby="invitation-title">
        <div class="floral-corner floral-corner-left" aria-hidden="true">✽</div>
        <div class="floral-corner floral-corner-right" aria-hidden="true">✽</div>
        <p class="eyebrow">Together with our families</p>
        <p class="invitation-line">We joyfully invite you to celebrate</p>
        <div class="photo-stage">
          <img src="${e}" alt="Vishnu and Divyadharshni walking together on a beach" />
          <div class="photo-wash" aria-hidden="true"></div>
          <button class="name-seal" id="celebrate" type="button" aria-label="Celebrate Vishnu and Divyadharshni">
            <span id="invitation-title" class="name-line">Vishnu</span><i>&amp;</i><span class="name-line">Divyadharshni</span>
          </button>
        </div>
        <p class="hero-copy">As we begin our happily ever after, your presence and blessings would mean the world to us.</p>
        <p class="tamil-line">அவளும் நானும்</p>
        <div class="scroll-mark" aria-hidden="true"><span></span></div>
      </section>
      <section class="countdown-line reveal" aria-label="Countdown to the wedding"><span class="countdown-heading"><span class="eyebrow">Counting the moments</span><strong>Until forever</strong></span><span class="countdown" id="countdown"><span class="countdown-unit"><strong data-unit="days">00</strong><small>days</small></span><b>:</b><span class="countdown-unit"><strong data-unit="hours">00</strong><small>hours</small></span><b>:</b><span class="countdown-unit"><strong data-unit="minutes">00</strong><small>min</small></span><b>:</b><span class="countdown-unit"><strong data-unit="seconds">00</strong><small>sec</small></span></span></section>
      <section class="events reveal" aria-label="Wedding events">
        <article class="event event--haldi"><span class="event-number">01</span><span class="event-icon" aria-hidden="true">✦</span><p class="event-label">Haldi ceremony</p><h2>29.08.2026</h2><p class="event-date">Saturday morning</p><p class="event-time">10:00 - 11:30 AM</p></article>
        <article class="event event--betrothal"><span class="event-number">02</span><span class="event-icon" aria-hidden="true">◇</span><p class="event-label">Betrothal</p><h2>29.08.2026</h2><p class="event-date">Saturday</p><p class="event-time">4:30 - 6:00 PM</p></article>
        <article class="event event--reception"><span class="event-number">03</span><span class="event-icon" aria-hidden="true">◌</span><p class="event-label">Reception</p><h2>29.08.2026</h2><p class="event-date">Saturday</p><p class="event-time">6:00 PM onwards</p></article>
        <article class="event event--wedding"><span class="event-number">04</span><span class="event-icon" aria-hidden="true">✧</span><p class="event-label">Wedding</p><h2>30.08.2026</h2><p class="event-date">Sunday</p><p class="event-time">8:00 - 9:00 AM</p></article>
      </section>
      <section class="venue reveal" aria-labelledby="venue-title">
        <p class="eyebrow">The celebration will be held at</p>
        <h2 id="venue-title">Town Panchayat<br />Marriage Hall</h2>
        <p class="venue-place">Kallidaikurchi, Tirunelveli</p>
        <a class="map-link" href="https://www.google.com/maps/search/?api=1&amp;query=Town+Panchayat+Marriage+Hall%2C+Kallidaikurchi%2C+Tirunelveli" target="_blank" rel="noreferrer">View location <span aria-hidden="true">↗</span></a>
      </section>
      <footer><p>We cannot wait to celebrate with you.</p><p>With love, Vishnu &amp; Divyadharshni</p></footer>
    </div>
  </main>
`;var t=document.querySelector(`.petals`);for(let e=0;e<14;e+=1){let e=document.createElement(`span`);e.style.setProperty(`--left`,`${Math.random()*100}%`),e.style.setProperty(`--delay`,`${Math.random()*8}s`),e.style.setProperty(`--duration`,`${9+Math.random()*7}s`),t.append(e)}var n=new Date(`2026-08-30T08:00:00+05:30`).getTime(),r=()=>{let e=Math.max(0,n-Date.now());Object.entries({days:864e5,hours:36e5,minutes:6e4,seconds:1e3}).forEach(([t,n])=>{let r=Math.floor(e/n);document.querySelector(`[data-unit="${t}"]`).textContent=String(r).padStart(2,`0`),e-=r*n})};r(),window.setInterval(r,1e3);var i=new IntersectionObserver(e=>e.forEach(e=>e.isIntersecting&&e.target.classList.add(`is-visible`)),{threshold:.14});document.querySelectorAll(`.reveal`).forEach(e=>i.observe(e));var a=document.querySelector(`#celebrate`);a.addEventListener(`click`,()=>{let e=[`#29483f`,`#397c78`,`#77a9a0`,`#b99152`],t=document.createDocumentFragment();for(let n=0;n<42;n+=1){let r=document.createElement(`span`);r.className=`confetti`,r.style.setProperty(`--x`,`${(Math.random()-.5)*110}vw`),r.style.setProperty(`--y`,`${70+Math.random()*40}vh`),r.style.setProperty(`--r`,`${Math.random()*720-360}deg`),r.style.setProperty(`--delay`,`${Math.random()*180}ms`),r.style.backgroundColor=e[n%e.length],t.append(r)}document.body.append(t),a.classList.remove(`celebrating`),requestAnimationFrame(()=>a.classList.add(`celebrating`)),window.setTimeout(()=>document.querySelectorAll(`.confetti`).forEach(e=>e.remove()),2200)});