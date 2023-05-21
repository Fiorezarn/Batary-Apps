class battaryherro extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="hero">
        <h1  tabindex="0">Batary Apps</h1>
        <p  tabindex="0">Temukan Restoran Terbaik Anda</p>
      </div>`;
  }
}
customElements.define('battary-hero', battaryherro);
