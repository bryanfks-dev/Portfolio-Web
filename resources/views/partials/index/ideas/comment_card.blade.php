<div class="card">
    <div class="content">
        <span class="username">{{ $comment->username }}</span>
        <form action="/update" method="post" @if($comment->userId === Auth::user()->id) data-form="user" @endif>
            @csrf
            @if($comment->userId === Auth::user()->id) <input type="hidden" name="id" value="{{ $comment->id }}"> @endif
            <input class="comment" name="comment" value="{{ $comment->comment }}" required disabled>
        </form>
    </div>
    @if($comment->userId === Auth::user()->id)
        <div class="actions">
            <!-- Delete Button -->
            <a href="/delete/{{ $comment->id }}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z">
                    </path>
                    <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                </svg>
            </a>
            <!-- Update Button -->
            <svg class="edit-btn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                    d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z">
                </path>
            </svg>
        </div>
    @endif
</div>
