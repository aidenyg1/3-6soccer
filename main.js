/**
 * Web Components for 3-6 Soccer Hub
 */

// 1. SoccerMatchCard
class SoccerMatchCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const opponent = this.getAttribute('opponent') || 'Unknown';
    const score = this.getAttribute('score') || '0 : 0';
    const date = this.getAttribute('date') || '';
    const result = this.getAttribute('result') || 'upcoming'; // win, draw, loss, upcoming
    const scorers = this.getAttribute('scorers') || '';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .card {
          background: oklch(25% 0.03 250);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          border: 1px solid oklch(100% 0 0 / 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px oklch(0% 0 0 / 0.5);
          border-color: var(--primary-color, oklch(75% 0.18 150));
        }
        .result-badge {
          position: absolute;
          top: 0;
          right: 0;
          padding: 0.2rem 1rem;
          font-size: 0.7rem;
          font-weight: bold;
          text-transform: uppercase;
          border-bottom-left-radius: 12px;
        }
        .win { background: oklch(75% 0.18 150); color: black; }
        .draw { background: oklch(70% 0.05 250); color: white; }
        .loss { background: oklch(60% 0.15 20); color: white; }
        .upcoming { background: oklch(85% 0.2 80); color: black; }

        .date { font-size: 0.8rem; color: oklch(85% 0.02 250 / 0.7); margin-bottom: 0.5rem; }
        .opponent { font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; margin: 0.5rem 0; }
        .score { font-family: 'Bebas Neue', sans-serif; font-size: 3rem; color: var(--primary-color, oklch(75% 0.18 150)); line-height: 1; }
        .scorers { 
          margin-top: 1rem; 
          font-size: 0.85rem; 
          color: var(--text-secondary, oklch(85% 0.02 250)); 
          border-top: 1px solid oklch(100% 0 0 / 0.1);
          padding-top: 0.5rem;
        }
      </style>
      <div class="card">
        <div class="result-badge ${result}">${result}</div>
        <div class="date">${date}</div>
        <div class="opponent">vs ${opponent}</div>
        <div class="score">${score}</div>
        ${scorers ? `<div class="scorers">⚽️ ${scorers}</div>` : ''}
      </div>
    `;
  }
}
customElements.define('soccer-match-card', SoccerMatchCard);

// 2. SoccerHighlight
class SoccerHighlight extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('title') || 'Match Highlight';
    const thumbnail = this.getAttribute('thumbnail') || '';
    const videoId = this.getAttribute('video-id') || '';
    const src = this.getAttribute('src') || ''; // Local video path

    const isLocal = !!src;

    this.shadowRoot.innerHTML = `
      <style>
        .highlight-card {
          background: oklch(25% 0.03 250);
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease;
          border: 1px solid oklch(100% 0 0 / 0.1);
        }
        .highlight-card:hover {
          transform: scale(1.02);
          border-color: var(--secondary-color, oklch(70% 0.2 250));
        }
        .media-container {
          position: relative;
          aspect-ratio: 16/9;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .media-container img, .media-container video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .media-container img { opacity: 0.8; cursor: pointer; }
        
        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: oklch(100% 0 0 / 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(5px);
          border: 2px solid white;
          pointer-events: none;
        }
        .play-btn::after {
          content: "";
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-left: 15px solid white;
          margin-left: 5px;
        }
        .title {
          padding: 1rem;
          font-weight: bold;
          font-size: 1rem;
          color: white;
        }
        video::-webkit-media-controls {
          z-index: 10;
        }
      </style>
      <div class="highlight-card">
        <div class="media-container">
          ${isLocal 
            ? `<video src="${src}" controls poster="${thumbnail}"></video>`
            : `<img src="${thumbnail}" alt="${title}" onclick="window.open('https://www.youtube.com/watch?v=${videoId}', '_blank')">
               <div class="play-btn"></div>`
          }
        </div>
        <div class="title">${title}</div>
      </div>
    `;
  }
}
customElements.define('soccer-highlight', SoccerHighlight);

// 3. SoccerPlayerCard
class SoccerPlayerCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const name = this.getAttribute('name') || 'Player';
    const position = this.getAttribute('position') || 'Position';
    const image = this.getAttribute('image') || '';

    this.shadowRoot.innerHTML = `
      <style>
        .player-card {
          background: oklch(25% 0.03 250);
          border-radius: 12px;
          padding: 1rem;
          text-align: center;
          border: 1px solid oklch(100% 0 0 / 0.1);
          transition: all 0.3s ease;
        }
        .player-card:hover {
          background: var(--surface-color, oklch(25% 0.03 250));
          box-shadow: 0 0 20px oklch(75% 0.18 150 / 0.2);
          transform: translateY(-5px);
        }
        .photo-container {
          width: 120px;
          height: 120px;
          margin: 0 auto 1rem;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--primary-color, oklch(75% 0.18 150));
          padding: 5px;
        }
        .photo-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
        .name { font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; color: white; margin-bottom: 0.2rem; }
        .position { font-size: 0.8rem; color: var(--primary-color, oklch(75% 0.18 150)); font-weight: bold; text-transform: uppercase; }
      </style>
      <div class="player-card">
        <div class="photo-container">
          <img src="${image}" alt="${name}">
        </div>
        <div class="name">${name}</div>
        <div class="position">${position}</div>
      </div>
    `;
  }
}
customElements.define('soccer-player-card', SoccerPlayerCard);