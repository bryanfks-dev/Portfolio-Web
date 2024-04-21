class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const defaultNav = `
            <style type="text/css">
                .navbar {
                position: fixed;
                width: 100%;
                padding: 1.7rem 8rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                z-index: 999;
                transition: all 0.3s ease-in-out;
                -webkit-transition: all 0.3s ease-in-out;
                -moz-transition: all 0.3s ease-in-out;
                -ms-transition: all 0.3s ease-in-out;
                -o-transition: all 0.3s ease-in-out;
                }

                /* On scrolled class */
                .navbar.scrolled {
                padding: 0.8rem 5rem;
                background-color: var(--tab-color-primary);
                box-shadow: 0 1px 3px 0 var(--shadow-color-normal),
                    0 1px 2px -1px var(--shadow-color-normal);
                }

                /* Logo */
                .navbar > a {
                cursor: pointer;
                }

                .navbar > a span {
                font-size: 1.7rem;
                font-family: "Titanium-Web";
                color: var(--color-base);
                }

                .navbar > a span::before {
                content: "bry";
                color: var(--color-primary);
                }

                .navbar > a span::after {
                content: "fks.";
                color: var(--color-base);
                }

                /* Main nav */
                .main-nav {
                font-family: "Mukta";
                display: flex;
                gap: 4rem;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                -moz-transform: translateX(-50%);
                -ms-transform: translateX(-50%);
                -o-transform: translateX(-50%);
                margin-top: 0.35rem;
                }

                .main-nav li {
                font-size: 1.25rem;
                color: var(--color-primary);
                }

                .navbar.scrolled .main-nav li {
                color: var(--color-primary);
                }

                .main-nav li .menu {
                color: var(--color-primary);
                position: relative;
                }

                .main-nav li .menu::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: -1px;
                width: 0;
                height: 4px;
                background-color: var(--color-base);
                transition: 0.3s ease-in-out;
                -webkit-transition: 0.3s ease-in-out;
                -moz-transition: 0.3s ease-in-out;
                -ms-transition: 0.3s ease-in-out;
                -o-transition: 0.3s ease-in-out;
                }

                .main-nav li:hover .menu {
                color: var(--color-base);
                }

                .main-nav li:hover .menu::after {
                width: 100%;
                }

                /* Contact */
                .main-nav li {
                position: relative;
                }

                .main-nav li .contact-action {
                display: flex;
                align-items: center;
                cursor: pointer;
                }

                .main-nav li .contact-action:hover {
                color: var(--color-base);
                }

                /* Contact modal */
                .main-nav li .contact-modal {
                position: absolute;
                display: flex;
                flex-direction: column;
                margin-left: -12px;
                margin-top: 10px;
                overflow: hidden;
                height: 0;
                transition: height 0.3s ease-in-out;
                -webkit-transition: height 0.3s ease-in-out;
                -moz-transition: height 0.3s ease-in-out;
                -ms-transition: height 0.3s ease-in-out;
                -o-transition: height 0.3s ease-in-out;
                box-shadow: 0 4px 6px -1px var(--shadow-color-normal),
                    0 2px 4px -2px var(--shadow-color-normal);
                }

                .main-nav li .contact-modal a {
                background-color: var(--tab-color-primary);
                display: flex;
                align-items: center;
                gap: 0.6rem;
                padding: 0.4em 0.5em;
                }

                .main-nav li .contact-modal a:hover {
                background-color: var(--tab-color-hover);
                }

                .main-nav li .contact-modal span {
                color: var(--color-primary);
                }

                /* More */
                .more-action {
                position: relative;
                font-family: "Mukta";
                }

                .navbar .more-action svg {
                cursor: pointer;
                fill: var(--color-primary);
                scale: 1.3;
                }

                .navbar .more-action svg:hover {
                fill: var(--color-base);
                }

                /* More action modal */
                .more-action .more-modal {
                position: absolute;
                right: 0;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                margin-top: 10px;
                box-shadow: 0 4px 6px -1px var(--shadow-color-normal),
                    0 2px 4px -2px var(--shadow-color-normal);
                overflow: hidden;
                height: 0;
                transition: height 0.3s ease-out;
                -webkit-transition: height 0.3s ease-out;
                -moz-transition: height 0.3s ease-out;
                -ms-transition: height 0.3s ease-out;
                -o-transition: height 0.3s ease-out;
                }

                .more-action .more-modal {
                white-space: nowrap;
                }

                .more-action .more-modal a {
                background-color: var(--tab-color-primary);
                padding: 0.25rem 1rem;
                }

                .more-action .more-modal a:hover {
                background-color: var(--tab-color-hover);
                }

                .more-action .more-modal a span {
                color: var(--color-primary);
                text-align: center;
                font-size: 1.1rem;
                }
            </style>

            <!-- Navbar -->
            <div class="navbar">
                <!-- Logo -->
                <a href="/#home">
                    <span>/</span>
                </a>
                <!-- Main actions -->
                <nav class="main-nav" id="menu">
                    <!-- About -->
                    <li>
                        <a href="/#about" class="menu">About</a>
                    </li>
                    <!-- Portfolio -->
                    <li>
                        <a href="/#portfolio" class="menu">Portfolio</a>
                    </li>
                    <!-- Contact -->
                    <li>
                        <!-- Action -->
                        <span class="contact-action">Contacts</span>
                        <!-- Modal -->
                        <div class="contact-modal">
                            <!-- Instagram -->
                            <ol>
                                <a rel="noopener noreferrer" href="https://www.instagram.com/bry.fernando/"
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="hsl(338, 72%, 57%)">
                                        <path
                                            d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z">
                                        </path>
                                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                        <path
                                            d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z">
                                        </path>
                                    </svg>
                                    <span>Instagram</span>
                                </a>
                            </ol>
                            <!-- Github -->
                            <ol>
                                <a rel="noopener noreferrer" href="https://github.com/bryanfks-dev" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="hsl(173, 58%, 39%)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z">
                                        </path>
                                    </svg>
                                    <span>Github</span>
                                </a>
                            </ol>
                            <!-- Linkedin -->
                            <ol>
                                <a rel="noopener noreferrer"
                                    href="https://www.linkedin.com/in/bryan-fernando-2394bb21b/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="hsl(210, 90%, 40%)">
                                        <circle cx="4.983" cy="5.009" r="2.188"></circle>
                                        <path
                                            d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z">
                                        </path>
                                    </svg>
                                    <span>Linkedin</span>
                                </a>
                            </ol>
                        </div>
                    </li>
                </nav>
                <!-- More -->
                <div class="more-action">
                    <!-- More button -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
                    </svg>
                    <!-- More modal -->
                    <div class="more-modal">
                        <li>
                            <a href="/aboutweb">
                                <span>About Web</span>
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        `;

        const mobileNav = `
            <style type="text/css">
                .navbar {
                position: fixed;
                bottom: 0;
                left: 50%;
                display: flex;
                flex-direction: column;
                width: 90%;
                z-index: 999;
                transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                -moz-transform: translateX(-50%);
                -ms-transform: translateX(-50%);
                -o-transform: translateX(-50%);
                transition: all 0.3s ease-in-out;
                -webkit-transition: all 0.3s ease-in-out;
                -moz-transition: all 0.3s ease-in-out;
                -ms-transition: all 0.3s ease-in-out;
                -o-transition: all 0.3s ease-in-out;
                }

                .navbar.scrolled {
                bottom: 0.625rem;
                transform: translate(-50%, -0.625rem);
                -webkit-transform: translate(-50%, -0.625rem);
                -moz-transform: translate(-50%, -0.625rem);
                -ms-transform: translate(-50%, -0.625rem);
                -o-transform: translate(-50%, -0.625rem);
                }

                .navbar nav {
                width: 100%;
                display: flex;
                justify-content: space-around;
                background-color: transparent;
                }

                .navbar.scrolled nav {
                border-radius: 99rem;
                -webkit-border-radius: 99rem;
                -moz-border-radius: 99rem;
                -ms-border-radius: 99rem;
                -o-border-radius: 99rem;
                background-color: var(--tab-color-primary);
                box-shadow: 0 1px 3px 0 var(--shadow-color-normal),
                    0 1px 2px -1px var(--shadow-color-normal);
                }

                .navbar nav li {
                padding: 1rem 0;
                cursor: pointer;
                }

                /* More modal */
                .navbar .more-modal {
                margin-bottom: 0.5rem;
                background-color: var(--tab-color-primary);
                border-radius: 2.05rem;
                -webkit-border-radius: 2.05rem;
                -moz-border-radius: 2.05rem;
                -ms-border-radius: 2.05rem;
                -o-border-radius: 2.05rem;
                box-shadow: 0 1px 3px 0 var(--shadow-color-normal),
                    0 1px 2px -1px var(--shadow-color-normal);
                height: 0;
                overflow: hidden;
                transition: height 0.3s ease-in-out;
                -webkit-transition: height 0.3s ease-in-out;
                -moz-transition: height 0.3s ease-in-out;
                -ms-transition: height 0.3s ease-in-out;
                -o-transition: height 0.3s ease-in-out;
                }

                /* More menu(s) */
                .navbar .more-menu li {
                padding: 1rem 3rem;
                background-color: var(--tab-color-primary);
                }

                .navbar .more-menu li:hover {
                background-color: var(--tab-color-hover);
                }

                .navbar .more-menu li:first-of-type {
                border-radius: 2.05rem 2.05rem 0 0;
                -webkit-border-radius: 2.05rem 2.05rem 0 0;
                -moz-border-radius: 2.05rem 2.05rem 0 0;
                -ms-border-radius: 2.05rem 2.05rem 0 0;
                -o-border-radius: 2.05rem 2.05rem 0 0;
                }

                .navbar .more-menu li span {
                font-family: "Mukta";
                color: var(--color-primary);
                font-size: 1.1rem;
                }

                hr {
                margin: auto;
                width: 90%;
                border-style: solid;
                color: rgb(71 85 105);
                background-color: rgb(71 85 105);
                border-color: rgb(71 85 105);
                }

                /* Contact */
                .navbar .contact {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                padding: 1.5rem 0.5rem;
                justify-content: space-around;
                background-color: var(--tab-color-primary);
                border-radius: 0 0 2.05rem 2.05rem;
                -webkit-border-radius: 0 0 2.05rem 2.05rem;
                -moz-border-radius: 0 0 2.05rem 2.05rem;
                -ms-border-radius: 0 0 2.05rem 2.05rem;
                -o-border-radius: 0 0 2.05rem 2.05rem;
                }
            </style>
            <div class="navbar">
                <!-- More action modal -->
                <div class="more-modal">
                    <!-- More menu(s) -->
                    <a class="more-menu" href="/aboutweb">
                        <li>
                            <span>About Website</span>
                        </li>
                    </a>
                    <hr>
                    <!-- Contact(s) -->
                    <div class="contact">
                        <!-- Instagram -->
                        <li>
                            <a rel="noopener noreferrer" href="https://www.instagram.com/bry.fernando/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="hsl(338, 72%, 57%)">
                                    <path
                                        d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z">
                                    </path>
                                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                    <path
                                        d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <!-- Github -->
                        <li>
                            <a rel="noopener noreferrer" href="https://github.com/bryanfks-dev" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="hsl(173, 58%, 39%)">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <!-- Linkedin -->
                        <li>
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/bryan-fernando-2394bb21b/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="hsl(210, 90%, 40%)">
                                    <circle cx="4.983" cy="5.009" r="2.188"></circle>
                                    <path
                                        d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                    </div>
                </div>
                <!-- Main action(s) -->
                <nav>
                    <!-- Home -->
                    <li>
                        <a href="/#home">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="var(--color-base)">
                                <path
                                    d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z">
                                </path>
                            </svg>
                        </a>
                    </li>
                    <!-- About -->
                    <li>
                        <a href="/#about">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="var(--color-primary)">
                                <path
                                    d="M19 6H5C3.346 6 2 7.346 2 9v5c0 2.206 1.794 4 4 4h1.637c1.166 0 2.28-.557 2.981-1.491.66-.879 2.104-.88 2.764.001A3.744 3.744 0 0 0 16.363 18H18c2.206 0 4-1.794 4-4V9c0-1.654-1.346-3-3-3zM7.5 13C6.119 13 5 12.328 5 11.5S6.119 10 7.5 10s2.5.672 2.5 1.5S8.881 13 7.5 13zm9 0c-1.381 0-2.5-.672-2.5-1.5s1.119-1.5 2.5-1.5 2.5.672 2.5 1.5-1.119 1.5-2.5 1.5z">
                                </path>
                            </svg>
                        </a>
                    </li>
                    <!-- Portfolio -->
                    <li>
                        <a href="/#portfolio">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="var(--color-primary)">
                                <path
                                    d="m3.553 18.895 4 2a1.001 1.001 0 0 0 .894 0L12 19.118l3.553 1.776a.99.99 0 0 0 .894.001l4-2c.339-.17.553-.516.553-.895v-5c0-.379-.214-.725-.553-.895L17 10.382V6c0-.379-.214-.725-.553-.895l-4-2a1 1 0 0 0-.895 0l-4 2C7.214 5.275 7 5.621 7 6v4.382l-3.447 1.724A.998.998 0 0 0 3 13v5c0 .379.214.725.553.895zM8 12.118l2.264 1.132-2.913 1.457-2.264-1.132L8 12.118zm4-2.5 3-1.5v2.264l-3 1.5V9.618zm6.264 3.632-2.882 1.441-2.264-1.132L16 12.118l2.264 1.132zM8 18.882l-.062-.031V16.65L11 15.118v2.264l-3 1.5zm8 0v-2.264l3-1.5v2.264l-3 1.5zM12 5.118l2.264 1.132-2.882 1.441-2.264-1.132L12 5.118z">
                                </path>
                            </svg>
                        </a>
                    </li>
                    <!-- More -->
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="var(--color-primary)">
                            <path
                                d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM4 21h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1z">
                            </path>
                        </svg>
                    </li>
                </nav>
            </div>
        `;

        addEventListener("resize", () => {
            if (matchMedia('(max-width: 800px)').matches) {
                this.innerHTML = mobileNav.trim();
            }
            else {
                this.innerHTML = defaultNav.trim();
            }
        });
    }
}

customElements.define("nav-bar", Navbar);

/* Script(s) */
addEventListener("resize", () => {
    const navbar = document.querySelector(".navbar");

    if (matchMedia('(max-width: 800px)').matches) {
        const more_action = document.querySelector(".navbar nav li:last-of-type");
        const more_action_modal = document.querySelector(".navbar .more-modal");

        /* Scroll listener for navbar */
        addEventListener("scroll", () => {
            if (scrollY > navbar.scrollHeight)
                navbar.classList.add("scrolled");
            else
                navbar.classList.remove("scrolled");
        });

        /* More action listener(s) */
        more_action.addEventListener("click", () => {
            if (more_action_modal.clientHeight === 0)
                more_action_modal.style.height = `${more_action_modal.scrollHeight}px`
            else
                more_action_modal.style.height = "0px";
        });
    }
    // Is desktop
    else {
        const contact_action = document.querySelector(".main-nav li .contact-action");
        const contact_modal = document.querySelector(".main-nav li .contact-modal");

        const more_action = document.querySelector(".more-action svg");
        const more_action_modal = document.querySelector(".more-action .more-modal");

        /* Scroll listener for navbar */
        addEventListener("scroll", () => {
            if (scrollY > innerHeight - navbar.scrollHeight)
                navbar.classList.add("scrolled");
            else
                navbar.classList.remove("scrolled");
        });

        /* Contact modal listener(s) */
        contact_action.addEventListener("click", () => {
            if (contact_modal.clientHeight == 0) {
                contact_action.style.color = "var(--color-base)";

                contact_modal.style.height = `${contact_modal.scrollHeight}px`;
            }
            else {
                contact_action.style.color = "var(--color-primary)";

                contact_modal.style.height = "0px";
            }
        });

        [...contact_modal.children].forEach((child) => {
            child.addEventListener("click", () => {
                // Update contact modal height
                contact_modal.style.height = "0px";
            });
        });

        more_action.addEventListener("click", () => {
            if (more_action_modal.clientHeight == 0)
                more_action.style.fill = "var(--color-base)";
            else
                more_action.style.fill = "var(--color-primary)";
        });

        /* More action listener(s) */
        more_action.addEventListener("click", () => {
            if (more_action_modal.clientHeight === 0)
                more_action_modal.style.height = `${more_action_modal.scrollHeight}px`
            else
                more_action_modal.style.height = "0px";
        });
    }
});

// Trigger resize event
dispatchEvent(new Event("resize"));
