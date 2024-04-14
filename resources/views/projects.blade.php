<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bry/fks</title>

    <!-- Icon -->
    <link rel="shortcut icon" href="assets/favicon.ico" type="image/x-icon">

    <!-- CSS link(s) -->
    <!-- Swiper CSS -->
    <link rel="stylesheet" href="css/swiper-bundle.min.css">

    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/projects.css">

    <!-- AOS CSS -->
    <link rel="stylesheet" href="css/aos.css">
</head>

<body>
    <header>
        <nav-bar/>
    </header>
    <main>
        <!-- Website development -->
        <section id="web-dev">
            <div class="section-title">
                <span data-aos="fade-up" data-aos-once="true">&mdash; Website Development Projects.</span>
                <span data-aos="fade-up" data-aos-once="true">Websites that I made.</span>
            </div>
            <!-- Content -->
            <div class="section-content swiper" data-aos="fade-up" data-aos-delay="50" data-aos-once="true">
                <div class="swiper-wrapper">
                    <!-- File Sharing -->
                    <div class="card swiper-slide">
                        <div class="image">
                            <img src="assets/img/projects/file_sharing.png" alt="File Sharing">
                        </div>
                        <div class="content">
                            <a target="_blank" rel="noopener noreferrer"
                                href="https://github.com/bryanfks-dev/Sharing-File-Web">
                                <span class="title">File Shargin Web.</span>
                            </a>
                            <p>File sharing web based across LAN.</p>
                        </div>
                    </div>
                    <!-- Custom Browser Homepage -->
                    <div class="card swiper-slide">
                        <div class="image">
                            <img src="assets/img/projects/browser_homepage.png" alt="Custom Browser Homepage">
                        </div>
                        <div class="content">
                            <a target="_blank" rel="noopener noreferrer"
                                href="https://github.com/bryanfks-dev/Browser-Homepage">
                                <span class="title">Custom Browser Homepage.</span>
                            </a>
                            <p>A terminal based custom browser homepage.</p>
                        </div>
                    </div>
                    <!-- Joelbid Furniture -->
                    <div class="card swiper-slide">
                        <div class="image">
                            <img src="assets/img/projects/joelbid_furniture.png" alt="Joelbid Furniture E-commerce">
                        </div>
                        <div class="content">
                            <a target="_blank" rel="noopener noreferrer"
                                href="https://github.com/bryanfks-dev/FinProject-BackendDevelopment-2023">
                                <span class="title">Joelbid Furniture.</span>
                            </a>
                            <p>Furniture e-commerce website application, for my Bina Nusantara Computer Club Final
                                Project.</p>
                        </div>
                    </div>
                    <!-- To do -->
                    <div class="card swiper-slide">
                        <div class="image">
                            <img src="assets/img/projects/todo.png" alt="Todo">
                        </div>
                        <div class="content">
                            <a target="_blank" rel="noopener noreferrer"
                                href="https://github.com/bryanfks-dev/MidProject-BackendDevelopment-2022">
                                <span class="title">To do.</span>
                            </a>
                            <p>A simple to-do list website that let you list all your tasks, for my Bina Nusantara
                                Computer Club Mid Project.</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-nav-btn swiper-button-next"></div>
                <div class="swiper-nav-btn swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
        </section>
        <!-- Mobile App development -->
        <section id="mobile-app-dev">
            <div class="section-title">
                <span data-aos="fade-up" data-aos-once="true">&mdash; Mobile Application Development
                    Projects.</span>
                <span data-aos="fade-up" data-aos-once="true">Mobile Applications that I made.</span>
            </div>
            <!-- Content -->
            <div class="section-content swiper" data-aos="fade-up" data-aos-delay="50" data-aos-once="true">
                <div class="swiper-wrapper">
                    <!-- MyHome -->
                    <div class="card swiper-slide">
                        <div class="image">
                            <img src="assets/img/projects/myhome.jpg" alt="MyHome App">
                        </div>
                        <div class="content">
                            <a target="_blank" rel="noopener noreferrer"
                                href="https://github.com/bryanfks-dev/MyHome-AR">
                                <span class="title">MyHome.</span>
                            </a>
                            <p>View and explore your dream home using Augmented Reality, for Multimedia
                                Systems Course.</p>
                        </div>
                    </div>
                    <!-- Notify -->
                    <div class="card swiper-slide">
                        <div class="image">
                            <img src="assets/img/projects/notify.jpg" alt="Notify App">
                        </div>
                        <div class="content">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bryanfks-dev/Notify">
                                <span class="title">Notify.</span>
                            </a>
                            <p>An app that always moderates your dormitory or apartement fees and eat cost.</p>
                        </div>
                    </div>
                    <!-- Spectrum Quiz -->
                    <div class="card swiper-slide">
                        <div class="image">
                            <img src="assets/img/projects/spectrum_quiz.jpg" alt="Spectrum Quiz App">
                        </div>
                        <div class="content">
                            <a target="_blank" rel="noopener noreferrer"
                                href="https://github.com/bryanfks-dev/Spectrum-QUIZ">
                                <span class="title">Spectrum Quiz.</span>
                            </a>
                            <p>Quiz based app for Autism Spectrum Disorder Rehabilitation, for Human Computer
                                Interaction Course.</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-nav-btn swiper-button-next"></div>
                <div class="swiper-nav-btn swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
        </section>
    </main>
    <footer>
        <custom-footer/>
    </footer>

    <!-- JS script link(s) -->
    <script type="text/javascript" src="js/navbar.js"></script>
    <script type="text/javascript" src="js/footer.js"></script>

    <!-- Swiper JS -->
    <script type="text/javascript" src="js/swiper-bundle.min.js"></script>
    <!-- AOS Script -->
    <script type="text/javascript" src="js/aos.js"></script>
    <script type="text/javascript">
        AOS.init(); // Initialize AOS script
    </script>

    <!-- Main Padding Top Script -->
    <script type="text/javascript">
        const main_section = document.querySelector("main");

        // Wait untill document fully loaded
        document.addEventListener("DOMContentLoaded", () => {
            const navbar = document.querySelector(".navbar");

            main_section.style.paddingTop = `${navbar.scrollHeight}px`;
        });
    </script>

    <!-- Swiper Script -->
    <script type="text/javascript">
        const global_swiper = new Swiper(
            ".swiper", {
                slidesPerView: 3,
                spaceBetween: 24,
                slidesPerGroup: 1,
                centerSlide: "true",
                fade: "true",
                pagination: {
                    el: ".swiper-pagination",
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1016: {
                        slidesPerView: 3
                    }
                }
            }
        )
    </script>
</body>

</html>
