const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="/"><figure>🏪</figure></a>
            <a href="/"><h1>Nhia Kou Market</h1></a>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <nav>
            <ul>
                <li>
                    <h3>Stores</h3>
                    <div>
                        <a><button>Find</button></a>
                        <!--<h4>Shoppers / Buyers</h4>
                        <menu>
                            <li><a>Watch Videos on Udemy</a></li>
                            <li><a>Read Textbook on Medium</a></li>
                            <li><a href="#backend-quiz">Take Quizzes to Check Understanding</a></li>
                        </menu>
                        <h4>Pro Data Entry</h4>
                        <menu>
                            <li><a>Data on what to grow</a></li>
                            <li><a>Read Textbook on Medium</a></li>
                            <li><a href="#ios-quiz">Take Quizzes to Check Understanding</a></li>
                        </menu>
                        <h4>Jobs</h4>
                        <menu>
                            <li><a href="#ios-podcast">Podcast: Motivation & Coding Music</a></li>
                            <li><a href="#ios-code">Interactive Coding Exercises</a></li>
                            <li><a>Remote Pair Programming on Discord</a></li>
                            <li><a>Students' Solo Projects on GitHub</a></li>
                        </menu>-->
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Orchards</h3>
                    <div>
                        <a><button>Grow</button></a>
                        <!--<h4>Decentralized Family Farms</h4>
                        <menu>
                            <li><a>Smart Recommendations</a></li>
                            <li><a>Zero Waste</a></li>
                        </menu>
                        <h4>Vendors / Sellers</h4>
                        <menu>
                            <li><a>#Grow-a-Thon</a></li>
                            <li><a>Certified Local</a></li>
                        </menu>-->
                    </div>
                </li>
            </ul>
        </nav>
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