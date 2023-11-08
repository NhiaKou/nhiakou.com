import { THONLY } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-header/shadow.css">
    <link rel="stylesheet" href="components/nk-header/shadow.css">
    <header>
        <section>
            <a href="#"><figure>🌳</figure></a>
            <h1>Nhia Kou Real Estate</h1>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <div>
            <ul>
                <li>
                    <h3>Company Creation</h3>
                    <nav>
                        <menu>
                            <li><a>LLC Formation</a></li>
                            <li><a>S-Corp Tax Election</a></li>
                            <li><a>Business Bank Account</a></li>
                        </menu>
                    </nav>
                </li>
                <li>
                    <h3>Property Management</h3>
                    <nav>
                        <menu>
                            <li><a>Airbnb</a></li>
                            <li><a>Rental</a></li>
                        </menu>
                    </nav>
                </li>
                <li>
                    <h3>Agent Services</h3>
                    <nav>
                        <menu>
                            <li><a>Property Taxes</a></li>
                            <li><a>Corporate Taxes</a></li>
                            <li><a>Business Filings</a></li>
                        </menu>
                    </nav>
                </li>
                <li>
                    <h3>Trustee Services</h3>
                    <nav>
                        <menu>
                            <li><a>Company Estates</a></li>
                            <li><a>Personal Properties</a></li>
                            <li><a>Life Insurance</a></li>
                        </menu>
                    </nav>
                </li>
                <!--<li>
                    <h3>Mobile Food Vendors</h3>
                    <nav>
                        <a><button>Cyclo Taxi</button></a>
                        <h4>By Cart</h4>
                        <menu>
                            <li><a>Profitable Recipes</a></li>
                        </menu>
                        <h4>By Boat</h4>
                        <menu>
                            <li><a>Profitable Recipes</a></li>
                        </menu>
                    </nav>
                </li>
                <li>
                    <h3>App</h3>
                    <nav>
                        <a><button>Download</button></a>
                    </nav>
                </li>-->
            </ul>
        </div>
        <aside>
            <select onchange="this.getRootNode().host.changeCountry(event)">
                <option value="us" selected>United States</option>
                <option value="ua" disabled>Laos</option>
                <option value="kh" disabled>Cambodia</option>
            </select>
        </aside>
    </header>
`;

export default template;