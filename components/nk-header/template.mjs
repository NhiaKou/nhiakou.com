import { THONLY } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-header/shadow.css">
    <link rel="stylesheet" href="components/nk-header/shadow.css">
    <header>
        <section>
            <a href="#"><figure>🌳</figure></a>
            <h1>Nhia Kou Vendors</h1>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <div>
            <ul>
                <li>
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
                </li>
            </ul>
        </div>
        <aside>
            <select onchange="this.getRootNode().host.changeCountry(event)">
                <option value="kh" selected>Cambodia</option>
                <option value="ua" disabled>Ukraine</option>
                <option value="us" disabled>United States</option>
            </select>
        </aside>
    </header>
`;

export default template;