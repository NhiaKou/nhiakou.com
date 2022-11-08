const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="/"><figure>🌳</figure></a>
            <a href="/"><h1>Nhia Kou Orchard</h1></a>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <ul>
            <li>
                <h3>Veggie Seed Bank</h3>
                <nav>
                    <a><button>Free Delivery</button></a>
                    <!--<h4>Learn Horticulture</h4>
                    <menu>
                        <li><a>Smart Recommendations</a></li>
                        <li><a>Zero Waste</a></li>
                    </menu>
                    <h4>Vendors / Sellers</h4>
                    <menu>
                        <li><a>#Grow-a-Thon</a></li>
                        <li><a>Certified Local</a></li>
                    </menu>-->
                </nav>
            </li>
            <li>
                <h3>Fruit Tree Nursury</h3>
                <nav>
                    <a><button>Grow-a-Thon</button></a>
                    <!--<h4>Learn Arboriculture</h4>
                    <menu>
                        <li><a>Smart Recommendations</a></li>
                        <li><a>Zero Waste</a></li>
                    </menu>
                    <h4>Vendors / Sellers</h4>
                    <menu>
                        <li><a>#Grow-a-Thon</a></li>
                        <li><a>Certified Local</a></li>
                    </menu>-->
                </nav>
            </li>
            <li>
                <h3>Homesteads</h3>
                <nav>
                    <a><button>Apply</button></a>
                    <!--<h4>Decentralized Family Farms</h4>
                    <menu>
                        <li><a>Smart Recommendations</a></li>
                        <li><a>Zero Waste</a></li>
                    </menu>
                    <h4>Vendors / Sellers</h4>
                    Learn Agriculture
                    Add SW Campus?
                    <menu>
                        <li><a>#Grow-a-Thon</a></li>
                        <li><a>Certified Local</a></li>
                    </menu>-->
                </nav>
            </li>
        </ul>
        <aside>
            <select onchange="this.getRootNode().host.changeCountry(event)">
                <option value="kh">Cambodia</option>
                <option value="ua" disabled>Ukraine</option>
                <option value="us" disabled>United States</option>
            </select>
        </aside>
    </header>
`;

export default template;