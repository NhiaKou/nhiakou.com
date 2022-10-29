const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-footer/shadow.css">
    <nav>
        <main>
            <section>
                <h5>Donors</h5>
                <ul class="donors">
                    <li><a href="https://github.com/thonly"><img src="https://github.com/thonly.png?size=100"></a></li>
                    <li><a href="https://github.com/panhiathao"><img src="https://github.com/panhiathao.png?size=100"></a></li>
                    <li><a href="https://github.com/chengsieuly"><img src="https://github.com/chengsieuly.png?size=100"></a></li>
                    <li><a href="https://github.com/lykimche"><img src="https://github.com/lykimche.png?size=100"></a></li>
                </ul>
            </section>
            <section>
                <h5>Donate</h5>
                <ul>
                    <li><a href="https://heartbank.fund">HeartBank</a></li>
                </ul>
                <h5>Contact</h5>
                <ul>
                    <li><a href="mailto:market@nhiakou.org">market@nhiakou.org</a></li>
                </ul>
            </section>
            <section>
                <h5>Connect</h5>
                <ul>
                    <li><a href="https://talk.siliconwat.org">Silicon Wat</a></li>
                    <li><a href="https://www.facebook.com/NhiaKou-101382402038310">Facebook</a></li>
                    <li><a href="https://medium.com/@nhiakou">Medium</a></li>
                </ul>
            </section>
        </main>
        <footer>
            <small><a href="https://nhiakou.com">Nhia Kou</a> &copy; 2023</small>
        </footer>
    </nav>
`;

export default template;