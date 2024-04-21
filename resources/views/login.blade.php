<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bry/fks - Login</title>

    <!-- Icon -->
    <link rel="shortcut icon" href="assets/favicon.ico" type="image/x-icon">

    <!-- CSS link(s) -->
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/loginregist.css">
</head>
<body>
    <main>
        <section>
            <div class="modal">
                <span class="title">Login to Your Account.</span>
                <form method="post">
                    @csrf
                    <!-- Username -->
                    <div>
                        <label for="username">Username</label>
                        <input type="text" name="username" required>
                    </div>
                    <!-- Password -->
                    <div>
                        <label for="password">Password</label>
                        <input type="password" name="password" minlength="8" maxlength="16" required>
                    </div>
                    <!-- Login Button -->
                    <button type="submit">
                        <span>Login</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z">
                            </path>
                        </svg>
                    </button>
                </form>
            </div>
            <p>
                Doesn't have account? Register <a href="/register">here</a>
            </p>
        </section>
    </main>

    {{-- Registration success indicator --}}
    @if(session()->has('regist_success'))
        <script type="text/javascript">
            alert("Registration success! You can login now.");
        </script>
    @endif

    {{-- Login error indicator --}}
    @if(session()->has('login_error'))
        <script type="text/javascript">
            alert('Login failed! please check your username/password and try again!');
        </script>
    @endif
</body>
</html>
