(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/projectrepo/couple-photo.png`;document.querySelector(`#app`).innerHTML=`
  <div class="petals" aria-hidden="true"></div>
  <main class="invitation">
    <div class="ambient-photo" style="background-image: url('${e}');" aria-hidden="true"></div>
    <div class="paper-card">
      <header class="topbar reveal reveal--fade">
        <p class="monogram">V <span>&amp;</span> D</p>
        <p>Our wedding invitation</p>
        <p>30 · 08 · 2026</p>
      </header>
      
      <section class="hero reveal reveal--up" aria-labelledby="invitation-title">
        <div class="floral-corner floral-corner-left" aria-hidden="true">✽</div>
        <div class="floral-corner floral-corner-right" aria-hidden="true">✽</div>
        <div class="duo-seal-container reveal reveal--up">
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
<section class="countdown-line reveal reveal--up" aria-label="Countdown to the wedding">
  <!-- Top Row: Compact Heading & Dr./Er. Badge -->
  <div class="countdown-header-row">
    <div class="countdown-heading">
      <span class="eyebrow">Counting the moments</span>
      <strong>Until forever</strong>
    </div>

    <!-- Profession Fusion Badge -->
    <div class="fusion-badge-line" aria-label="Doctor and Engineer partnership">
      <div class="fusion-item doctor-item">
        <span class="rx-symbol">R<sub>x</sub></span>
        <svg class="mini-ecg" viewBox="0 0 40 20" width="22" height="11" aria-hidden="true">
          <path d="M0,10 L8,10 L11,2 L15,18 L19,5 L22,14 L25,10 L40,10" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
        <span class="title">Dr.</span>
      </div>

      <span class="fusion-spark" aria-hidden="true">⚡</span>

      <div class="fusion-item engineer-item">
        <div class="git-box">
          <span class="git-label">git</span>
          <span class="commit-hash">#2026</span>
        </div>
        <span class="title">Er.</span>
      </div>
    </div>
  </div>

  <!-- Bottom Row: Compact Horizontal Timer -->
  <div class="countdown" id="countdown">
    <div class="countdown-unit"><strong data-unit="days">00</strong><small>days</small></div><b>:</b>
    <div class="countdown-unit"><strong data-unit="hours">00</strong><small>hours</small></div><b>:</b>
    <div class="countdown-unit"><strong data-unit="minutes">00</strong><small>min</small></div><b>:</b>
    <div class="countdown-unit"><strong data-unit="seconds">00</strong><small>sec</small></div>
  </div>
</section>

      <section class="events" aria-label="Wedding events">
        <article class="event event--haldi reveal reveal--up">
          <div class="event-content">
            <span class="event-label">Haldi ceremony</span>
            <h2>29.08.2026</h2>
            <div class="event-details">
              <span class="event-day">Saturday</span>
              <span class="event-time">10:00 - 11:30 AM</span>
            </div>
          </div>
        </article>

        <article class="event event--betrothal reveal reveal--up">
          <div class="event-content">
            <span class="event-label">Betrothal</span>
            <h2>29.08.2026</h2>
            <div class="event-details">
              <span class="event-day">Saturday</span>
              <span class="event-time">4:30 - 6:00 PM</span>
            </div>
          </div>
        </article>

        <article class="event event--reception reveal reveal--up">
          <div class="event-content">
            <span class="event-label">Reception</span>
            <h2>29.08.2026</h2>
            <div class="event-details">
              <span class="event-day">Saturday</span>
              <span class="event-time">6:00 PM onwards</span>
            </div>
          </div>
        </article>

        <article class="event event--wedding reveal reveal--up">
          <div class="event-content">
            <span class="event-label">Wedding</span>
            <h2>30.08.2026</h2>
            <div class="event-details">
              <span class="event-day">Sunday</span>
              <span class="event-time">8:00 - 9:00 AM</span>
            </div>
          </div>
        </article>
      </section>

      <section class="venue reveal reveal--up" aria-labelledby="venue-title">
        <p class="eyebrow">The celebration will be held at</p>
        <h2 id="venue-title">Town Panchayat<br />Marriage Hall</h2>
        <p class="venue-place">Kallidaikurchi, Tirunelveli</p>
        <a class="venue-map-btn" href="https://www.google.com/maps/search/?api=1&amp;query=Town+Panchayat+Marriage+Hall%2C+Kallidaikurchi%2C+Tirunelveli" target="_blank" rel="noreferrer">
          <span class="gmap-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5-2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </span>
          <span class="btn-text">Open in Google Maps</span>
        </a>
      </section>

      <footer class="reveal reveal--fade">
        <p>We eagerly wait to celebrate with you.</p>
        <p>With love, Vishnu &amp; Divyadharshni</p>
      </footer>
    </div>
  </main>
`;var t=document.querySelector(`.petals`);for(let e=0;e<14;e+=1){let e=document.createElement(`span`);e.style.setProperty(`--left`,`${Math.random()*100}%`),e.style.setProperty(`--delay`,`${Math.random()*8}s`),e.style.setProperty(`--duration`,`${9+Math.random()*7}s`),t.append(e)}var n=new Date(`2026-08-30T08:00:00+05:30`).getTime(),r=()=>{let e=Math.max(0,n-Date.now());Object.entries({days:864e5,hours:36e5,minutes:6e4,seconds:1e3}).forEach(([t,n])=>{let r=Math.floor(e/n);document.querySelector(`[data-unit="${t}"]`).textContent=String(r).padStart(2,`0`),e-=r*n})};r(),window.setInterval(r,1e3);var i=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`is-visible`)})},{threshold:.12,rootMargin:`0px 0px -40px 0px`});document.querySelectorAll(`.reveal`).forEach(e=>i.observe(e));var a=document.querySelector(`#celebrate`);a.addEventListener(`click`,()=>{let e=[`#29483f`,`#397c78`,`#77a9a0`,`#b99152`],t=document.createDocumentFragment();for(let n=0;n<42;n+=1){let r=document.createElement(`span`);r.className=`confetti`,r.style.setProperty(`--x`,`${(Math.random()-.5)*110}vw`),r.style.setProperty(`--y`,`${70+Math.random()*40}vh`),r.style.setProperty(`--r`,`${Math.random()*720-360}deg`),r.style.setProperty(`--delay`,`${Math.random()*180}ms`),r.style.backgroundColor=e[n%e.length],t.append(r)}document.body.append(t),a.classList.remove(`celebrating`),requestAnimationFrame(()=>a.classList.add(`celebrating`)),window.setTimeout(()=>document.querySelectorAll(`.confetti`).forEach(e=>e.remove()),2200)});