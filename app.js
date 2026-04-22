/* ──────────────────────────────────────────────────────────
   app.js — Logique de l'interface
   ────────────────────────────────────────────────────────── */

let selected = 0;

/* ── Render week nav ────────────────────────────────────── */
function renderNav() {
  const nav = document.getElementById('weekNav');
  nav.innerHTML = DAYS.map((d, i) => `
    <button
      class="day-btn ${d.type === 'rest' ? 'is-rest' : ''} ${i === selected ? 'is-active' : ''}"
      ${d.type !== 'rest' ? `onclick="selectDay(${i})"` : ''}
      aria-label="${d.label} : ${d.title}"
    >
      <span class="day-label">${d.label}</span>
      <span class="day-name">${d.title}</span>
      <span class="day-tag ${d.tagClass}">${d.tagTxt}</span>
    </button>
  `).join('');
}

/* ── Render detail panel ────────────────────────────────── */
function renderDetail(i) {
  const d = document.getElementById('detail');
  const day = DAYS[i];

  /* Rest day */
  if (day.type === 'rest') {
    const icon = day.title.includes('complet') ? '🛌' : '🚶';
    d.innerHTML = `
      <div class="rest-panel">
        <div class="rest-icon">${icon}</div>
        <div class="rest-title">${day.label} — ${day.title}</div>
        <p class="rest-desc">${day.tip}</p>
      </div>
    `;
    return;
  }

  /* Workout day */
  const sectionsHTML = day.sections.map(s => `
    <div class="section-block">
      <div class="section-label">${s.name}</div>
      ${s.exs.map(e => `
        <div class="ex-row">
          <div>
            <div class="ex-name">${e.name}</div>
            ${e.note ? `<div class="ex-note">${e.note}</div>` : ''}
          </div>
          <div class="ex-right">
            <div class="ex-sets">${e.sets}</div>
            <div class="ex-weight">${e.weight}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');

  d.innerHTML = `
    <div class="detail-head">
      <div class="detail-day-label">${day.label}</div>
      <div class="detail-title">${day.title}</div>
      <div class="detail-meta">
        <span class="day-tag ${day.tagClass}">${day.tagTxt}</span>
        <span class="duration-badge">${day.duration}</span>
      </div>
    </div>
    ${sectionsHTML}
    <div class="tip-box">
      <span class="tip-icon">💡</span>
      <span>${day.tip}</span>
    </div>
  `;
}

/* ── Select a day ───────────────────────────────────────── */
function selectDay(i) {
  selected = i;
  renderNav();
  renderDetail(i);
}

/* ── Init ───────────────────────────────────────────────── */
renderNav();
renderDetail(selected);
