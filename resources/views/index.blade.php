<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bry/fks</title>

    <!-- Icon -->
    <link rel="shortcut icon" href="assets/favicon.ico" type="image/x-icon">

    <!-- CSS link(s) -->
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/home.css">

    <!-- AOS CSS -->
    <link rel="stylesheet" href="css/aos.css">
</head>

<body>
    <header>
        <nav-bar/>
    </header>
    <main>
        @include('partials.index.home')
        @include('partials.index.about')
        <!-- Portfolio -->
        <section class="portfolio-section" id="portfolio">
            <!-- Top section -->
            <div class="section-top">
                <div class="section-title">
                    <span data-aos="fade-up" data-aos-once="true">&mdash; Portfolio</span>
                    <span data-aos="fade-up" data-aos-once="true">All Skills, Experiences, Wonderful
                        Projects.</span>
                </div>
                <p data-aos="fade-up" data-aos-delay="50" data-aos-once="true">&ldquo;Everything you can imagine is
                    real.&rdquo;<br><span style="color: var(--color-base);">&mdash;Pablo Picasso</span></p>
            </div>
            <!-- Bottom Section -->
            <div class="section-bottom">
                @include('partials.index.skills')
                @include('partials.index.techs')
                @include('partials.index.experiences')
                @include('partials.index.projects')
            </div>
        </section>
        @include('partials.index.mail')
    </main>
    <footer>
        <custom-footer/>
    </footer>

    <!-- JS script link(s) -->
    <script type="text/javascript" src="js/navbar.js"></script>
    <script type="text/javascript" src="js/footer.js"></script>

    <!-- AOS Script -->
    <script type="text/javascript" src="js/aos.js"></script>
    <script type="text/javascript">
        AOS.init(); // Initialize AOS script
    </script>

    <!-- Remove this script when resume is available -->
    <script type="text/javascript">
        const resume_btn = document.querySelector(".mail-section .section-left .persue-see");

        resume_btn.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent changing page

            alert("Sorry, resume is not available for now");
        });
    </script>
</body>

</html>
