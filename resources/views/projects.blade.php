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
                <!-- Cards -->
                <div class="swiper-wrapper"></div>
                <!-- Navigations -->
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
                <!-- Cards -->
                <div class="swiper-wrapper"></div>
                <!-- Navigations -->
                <div class="swiper-nav-btn swiper-button-next"></div>
                <div class="swiper-nav-btn swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
        </section>
        @include('partials.projects.image_viewer')
    </main>
    <footer>
        <custom-footer/>
    </footer>

    <!-- JS script link(s) -->
    <script type="module" src="js/partials/navbar.js"></script>
    <script type="module" src="js/partials/footer.js"></script>

    <!-- Swiper JS -->
    <script type="text/javascript" src="js/swiper-bundle.min.js"></script>
    <!-- AOS Script -->
    <script type="text/javascript" src="js/aos.js"></script>
    <script type="text/javascript">
        AOS.init(); // Initialize AOS script
    </script>

    <script type="text/javascript" src="js/projectHandler.js"></script>

    <!-- Initialize project cards -->
    <script type="text/javascript">
        initProjectCards();
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
