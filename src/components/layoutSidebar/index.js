class LayoutSidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // 🔹 Define menus de acordo com o papel (role)
    this.menus = {
      resident: [
        { href: "index.html", icon: "home.svg", label: "Início" },
        { href: "mural.html", icon: "mail.svg", label: "Notificações" },
        { href: "reservations.html", icon: "flag.svg", label: "Reservas" },
        { href: "occurrence.html", icon: "list.svg", label: "Ocorrências" },
      ],
      syndic: [
        { href: "dashboard.html", icon: "home.svg", label: "Painel" },
        { href: "residents.html", icon: "user.svg", label: "Moradores" },
        { href: "employee.html", icon: "user.svg", label: "Funcionários" },
        { href: "occurrences.html", icon: "file-text.svg", label: "Ocorrências" },
        { href: "serviceOrder.html", icon: "vector.svg", label: "Ordem de serviço" },
        { href: "resetManagement.html", icon: "trello.svg", label: "Gestão de reservas" },
        { href: "reservationOfCommonAreas.html", icon: "flag.svg", label: "Reserva de áreas comuns" },
      ],
      employee: [
        { href: "occurrences.html", icon: "file-text.svg", label: "Ocorrências" },
        { href: "serviceOrder.html", icon: "vector.svg", label: "Ordem de serviço" },
      ],
    };
  }

  connectedCallback() {
    const role = this.getAttribute("role") || "resident";
    this.render(role);
    this.highlightActiveLink();
  }

  render(role) {
    const items = this.menus[role] || this.menus["resident"];
	const ASSET_PATH = "../../../assets/icon/"

    const navItems = items.map(
      item => `
        <li>
          <a href="${item.href}">
            <img src="${ASSET_PATH}${item.icon}" alt="">
            ${item.label}
          </a>
        </li>
      `
    ).join("");

    const template = `
      <link rel="stylesheet" href="../../../components/layoutSidebar/layoutSidebar.css">
      <aside class="sidebar">
        <div class="logo">
          <img src="../../../assets/img/logo_img.png" alt="Logo SmartCondo">
        </div>
        <nav>
          <ul>
            ${navItems}
            <li class="logout-desk">
              <a href="#" onclick="logout()">
                <img src="../../../assets/icon/log-out.svg" alt="">Sair
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    `;

    this.shadowRoot.innerHTML = template;
  }

    highlightActiveLink() {
    const links = this.shadowRoot.querySelectorAll(".sidebar a");
    const currentPath = window.location.pathname.split("/").pop();
	console.log(links[currentPath])
	console.log(currentPath)

    links.forEach(link => {
      const linkPath = link.getAttribute("href");
      if (linkPath === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }


}

customElements.define("layout-sidebar", LayoutSidebar);