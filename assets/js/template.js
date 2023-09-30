// Sidebar Template
class siteSidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="sidebar-outer">
                <div class="holder">
                    <!-- logo -->
                    <div class="logo-holder d-flex align-items-center justify-content-between">
                        <div class="logo">
                            <img src="assets/images/site-logo.png" alt="">
                        </div>
                        <div class="sidebar-toggle-btn">
                            <img src="assets/images/sidebar-toggle-btn.svg" alt="">
                        </div>
                    </div>
                    <!-- logo -->
                    <!-- wallet-balance -->
                    <div class="wallet-balance-info">
                        <div class="d-flex">
                            <figure>
                                <img src="assets/images/wallet-icon.svg" alt="">
                            </figure>
                            <p>Available Credits <span>15.7</span></p>
                        </div>
                    </div>
                    <!-- wallet-balance -->
                    <!-- navigation -->
                    <div class="sidebar-menu-outer">
                        <nav class="navbar">
                            <div class="navbar-holder">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="javascript:void(0);">
                                            <span class="icon">
                                                <img src="assets/images/nav-icon-01.svg" alt="">
                                            </span>
                                            Home
                                        </a>
                                    </li>
                                    <li class="nav-item menu-item-has-children">
                                        <a class="nav-link" href="javascript:void(0);">
                                            <span class="icon">
                                                <img src="assets/images/nav-icon-02.svg" alt="">
                                            </span>
                                            Orders
                                        </a>
                                        <div class="sub-menu">
                                            <ul>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="javascript:void(0);">
                                                        All orders <span class="count">(123)</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="javascript:void(0);">
                                                        Abandoned carts <span class="count">(86)</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="nav-item menu-item-has-children">
                                        <a class="nav-link" href="javascript:void(0);">
                                            <span class="icon">
                                                <img src="assets/images/nav-icon-03.svg" alt="">
                                            </span>
                                            Products
                                        </a>
                                        <div class="sub-menu">
                                            <ul>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="javascript:void(0);">
                                                        All orders <span class="count">(123)</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="javascript:void(0);">
                                                        Abandoned carts <span class="count">(86)</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="nav-item menu-item-has-children">
                                        <a class="nav-link" href="javascript:void(0);">
                                            <span class="icon">
                                                <img src="assets/images/nav-icon-04.svg" alt="">
                                            </span>
                                            Analytics
                                        </a>
                                        <div class="sub-menu">
                                            <ul>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="javascript:void(0);">
                                                        All orders <span class="count">(123)</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="javascript:void(0);">
                                                        Abandoned carts <span class="count">(86)</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            <span class="icon">
                                                <img src="assets/images/nav-icon-05.svg" alt="">
                                            </span>
                                            Payouts
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            <span class="icon">
                                                <img src="assets/images/nav-icon-06.svg" alt="">
                                            </span>
                                            Discounts
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            <span class="icon">
                                                <img src="assets/images/nav-icon-07.svg" alt="">
                                            </span>
                                            Audience
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            <span class="icon">
                                                <i class="las la-palette"></i>
                                            </span>
                                            Appearance
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            <span class="icon">
                                                <img src="assets/images/nav-icon-09.svg" alt="">
                                            </span>
                                            Plugins
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <!-- navigation -->
            </div>
        </div>
      `;
    }
}

customElements.define("site-sidebar", siteSidebar);