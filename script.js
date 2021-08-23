function makeHeader(){
    const header = document.createElement("Header")
    header.id = "header"
    var innerHeader = `
                    <div class="upperHeader">
                    </div>
                    <div class="innerHeader">
                        <div class="headerLogo innerHeaderContent">
                            <img src="./images/logo.png" alt="" srcset="">
                        </div>
                        <div class="navItems innerHeaderContent">
                            <nav>
                                <ul>
                                    <a>Home</a>
                                    <a>About</a>
                                    <a>Services</a>
                                    <a>Contacts</a>
                                </ul>
                            </nav>
                        </div>
                    </div>
                `
    header.innerHTML = innerHeader;
    document.querySelector("Header").appendChild(header);
}

makeHeader();