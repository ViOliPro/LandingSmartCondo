class LayoutHeader extends HTMLElement {
  connectedCallback() {
    const userName = localStorage.getItem("userName") || "Usuário";
    const apartment = localStorage.getItem("userApartment") || "Ap";

    this.innerHTML = `
	<link rel="stylesheet" href="../../components/layoutHeader/layoutHeader.css">
      <header class="header">
        <h2>${this.getAttribute("title") || "Home"}</h2>
        <div class="userIcon">
          <img src="../../assets/icon/profile.svg" alt="Foto do Usuário">
          <span>${userName}, ${apartment}</span>
        </div>

			<button class="logout-mobile" onclick=logout()>
      			<img src="../../assets/icon/log-out.svg" alt="Sair">
    		</button>
      </header>
    `;
  }
}


customElements.define("layout-header", LayoutHeader);
