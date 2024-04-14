<!-- Mail me -->
<section class="mail-section" id="mail">
    <!-- Section left -->
    <div class="section-left">
        <div>
            <!-- Section title -->
            <div class="section-title">
                <div>
                    <span data-aos="fade-up" data-aos-once="true">Let's</span>
                    <svg data-aos="fade-up" data-aos-once="true" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z">
                        </path>
                    </svg>
                </div>
                <span data-aos="fade-up" data-aos-once="true">Connect.</span>
            </div>
            <p data-aos="fade-up" data-aos-delay="50" data-aos-once="true">Have a chat or ask me something,
                like your project, feedback, questions, interest, or
                hobbies.
            </p>
        </div>
        <!-- Pursue see resume -->
        <a class="persue-see" href="/resume" data-aos="fade-up" data-aos-delay="150" data-aos-once="true">
            <span>See my resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                    d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z">
                </path>
            </svg>
        </a>
    </div>
    <!-- Section right -->
    <!-- Form -->
    <form action="/send" method="get">
        <!-- Name -->
        <div data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
            <label for="name">Whats's your name?</label>
            <input type="text" name="name" pattern="^[a-zA-Z]*$" autocomplete="off" required>
        </div>
        <!-- Email address -->
        <div data-aos="fade-up" data-aos-delay="250" data-aos-once="true">
            <label for="email">Your email</label>
            <input type="email" name="email" pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                autocomplete="off" required>
        </div>
        <!-- Mail Body -->
        <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
            <label for="message">Tell me something</label>
            <textarea name="message" cols="30" rows="10" autocomplete="off" required></textarea>
        </div>
        <!-- Send button -->
        <button type="submit" data-aos="fade-up" data-aos-delay="350" data-aos-once="true">
            <span>Send</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                    d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z">
                </path>
            </svg>
        </button>
    </form>
</section>
