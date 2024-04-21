<!-- Your Project Ideas -->
<section class="ideas-section" id="ideas">
    <!-- Top Section -->
    <div class="section-top">
        <div class="section-title">
            <span data-aos="fade-up" data-aos-once="true">&mdash; Your Project Ideas</span>
            <span data-aos="fade-up" data-aos-once="true">Tell Me Your Interesting Project Ideas.</span>
        </div>
    </div>
    <!-- Bottom Section -->
    <div class="section-bottom">
        @if(Auth::user() === null)
            @include('partials.index.ideas.no_auth_comment')
        @else
            @include('partials.index.ideas.auth_comment')
        @endif
    </div>
</section>
