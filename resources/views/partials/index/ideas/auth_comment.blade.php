<div class="auth-com">
    <form action="" method="POST">
        @csrf
        <span data-aos="fade-up" data-aos-once="true">Comment as <p class="username">{{ $username }}</p></span>

        <div data-aos="fade-up" data-aos-once="true" data-aos-delay="50">
            <input type="text" name="comment" placeholder="Type here.." required>
            <!-- Send button -->
            <button type="submit">
                <span>Send</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z">
                    </path>
                </svg>
            </button>
        </div>
    </form>
    <span data-aos="fade-up" data-aos-once="true" data-aos-delay="100">&mdash;Comments(<p>{{ $commentCount }}</p>)</span>

    <div class="comment-box" data-aos="fade-up" data-aos-once="true" data-aos-delay="150">
        <!-- Comments -->
        @forelse ($comments as $comment)
            @include('partials.index.ideas.comment_card')
        @empty
            <p class="is-empty">Be first to comment here!</p>
        @endforelse
    </div>
</div>

<!-- Update Comment Handler -->
<script type="text/javascript">
    const editBtns = document.querySelectorAll('.edit-btn');
    const forms = document.querySelectorAll("form[data-form='user']");

    for (let i = 0; i < editBtns.length; i++) {
        const editBtn = editBtns[i];
        const form = forms[i];
        const commentInput = form.querySelector("input.comment");

        editBtn.addEventListener('click', () => {
            // Set editing attribute
            const editStatus = editBtn.getAttribute('data-status');

            if (editStatus !== 'editing') {
                editBtn.setAttribute('data-status', 'editing');
                commentInput.disabled = false;
                commentInput.classList.add('enabled');

                // Focus to current comment input
                commentInput.focus();
            }
            else {
                // Submit form
                form.submit();
            }
        });
    }
</script>
