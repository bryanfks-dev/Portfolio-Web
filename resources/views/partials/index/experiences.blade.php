<!-- Experiences -->
<div class="experiences" id="experiences">
    <div class="section-left">
        <!-- Title -->
        <div class="section-title">
            <span data-aos="fade-up" data-aos-once="true">My Experiences.</span>
            <p data-aos="fade-up" data-aos-delay="50" data-aos-once="true">My recent organization,
                work experiences over <span class="exp-year"></span> years.
            </p>
        </div>
    </div>
    <!-- Content -->
    <div class="section-right">
        <!-- Keep in mind only 3 latest experiences!! -->
        <!-- Banner 1 -->
        <div class="banner" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
            <span>Member <span>&mdash;</span> Bina Nusantara @Malang Google Student Development
                Club</span>
            <span>October 2023 - Now</span>
        </div>
        <!-- Banner 2 -->
        <div class="banner" data-aos="fade-up" data-aos-delay="150" data-aos-once="true">
            <span>Member <span>&mdash;</span> Bina Nusantara @Malang Computer Club</span>
            <span>August 2022 - July 2023</span>
        </div>
        <!-- Banner 3 -->
        <!-- Continue -->
        <div class="cont" data-aos="fade-up" data-aos-delay="170" data-aos-once="true">|</div>
    </div>
</div>

<!-- Experiences Year Script -->
<script type="text/javascript">
    const exp_year = document.querySelector(".experiences .exp-year");

    exp_year.innerText = `${new Date().getFullYear() - 2022}`;
</script>
