import "./nk-donors/element.mjs";
import { THONLY } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-footer/shadow.css">
    <link rel="stylesheet" href="components/nk-footer/shadow.css">
    <nav>
        <main>
            <section>
                <nk-donors></nk-donors>
            </section>
            <section>
                <div>
                    <h5>Thank</h5>
                    <ul>
                        <li><a href="https://dear.kiitos.earth/#NhiaKou">Kiitos</a></li>
                    </ul> 
                </div>
                <div>
                    <h5>Donate</h5>
                    <ul>
                        <li><a href="https://heartbank.fund/#NhiaKou">HeartBank</a></li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h5>Follow</h5>
                    <ul>
                        <li><a href="https://me.thonly.net/#NhiaKou">THonly</a></li>
                        <li><a href="https://www.facebook.com/NhiaKou-101382402038310">Facebook</a></li>
                        <li><a href="https://medium.com/@nhiakou">Medium</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Contact</h5>
                    <ul>
                        <li><a href="mailto:orchard@nhiakou.org">orchard@nhiakou.org</a></li>
                    </ul> 
                </div>
            </section>
        </main>
        <footer>
            <small><a href="https://nhiakou.com">Nhia Kou Market</a> &copy; 2023</small>
        </footer>
    </nav>
`;

export default template;