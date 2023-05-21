class battaryfoot extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <!-- Footer Icon -->
    <section class="ft-sosmed">
      <ul class="ft-sosmed-list">
        <li><a href="https://twitter.com/fiorezarn"><i class="fab fa-twitter"></i></a></li>
        <li><a href="https://www.instagram.com/fiorezaa"><i class="fab fa-instagram"></i></a></li>
        <li><a href="https://www.linkedin.com/in/fiorezarn"><i class="fab fa-linkedin"></i></a></li>
      </ul>
      <ul>
        <li class="watermark">Copyright © 2023 - Batary Apps</li>
      </ul>
    </section>
         `;
  }
}
customElements.define('battary-footer', battaryfoot);
