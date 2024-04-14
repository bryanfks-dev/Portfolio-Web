<!-- Projects -->
<!-- Project file frame -->
<iframe src="projects" frameborder="0" style="display: none;"></iframe>
<div class="projects" id="projects">
    <div class="section-left">
        <!-- Title -->
        <div class="section-title">
            <span data-aos="fade-up" data-aos-once="true">My Works.</span>
            <p data-aos="fade-up" data-aos-once="true">My recent works through my career.</p>
        </div>
        <!-- Content -->
        <div class="section-content">
            <!-- Explore more -->
            <a class="persue-explore" href="/projects" data-aos="fade-up" data-aos-delay="50"
                data-aos-once="true">
                <span>Explore more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z">
                    </path>
                </svg>
            </a>
            <!-- Img 1 -->
            <img data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
        </div>
    </div>
    <!-- Right Section -->
    <div class="section-right">
        <!-- Img 2 -->
        <img data-aos="fade-up" data-aos-delay="150" data-aos-once="true">
        <!-- Img 3 -->
        <img data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
    </div>
</div>

<!-- Projects Script -->
<script type="text/javascript">
    // Script to set projects images into the newest project images
    const latest_app = document.querySelector(".projects .section-content img");
    const latest_web = document.querySelectorAll(".projects .section-right img");

    const frame = document.querySelector("iframe");

    // Wait for frame load
    frame.addEventListener("load", () => {
        const frame_content = frame.contentWindow.document.getElementsByTagName('main')[0];

        const web_img = frame_content.querySelectorAll("#web-dev > .swiper > .swiper-wrapper img");
        const app_img = frame_content.querySelector("#mobile-app-dev > .swiper > .swiper-wrapper img");

        // Set latest app project
        latest_app.src = app_img.src;
        latest_app.alt = app_img.alt;

        // Set latest web project
        [latest_web[0].src, latest_web[1].src] = [web_img[0].src, web_img[1].src];
        [latest_web[0].alt, latest_web[1].alt] = [web_img[0].alt, web_img[1].alt];
    })
</script>
