<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bry/fks - Register</title>

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
                <span class="title">Create Your Account.</span>
                <form action="" method="post">
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
                    <!-- Re-Password -->
                    <div>
                        <label for="re-password">Re-enter Password</label>
                        <input type="password" name="re-password" minlength="8" maxlength="16" required>
                    </div>
                    <!-- Register Button -->
                    <button type="submit">
                        <span>Register</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z">
                            </path>
                        </svg>
                    </button>
                </form>
            </div>
            <p>
                Already have account? Login <a href="/login">here</a>
            </p>
        </section>
    </main>

    {{-- Check if username is already exist --}}
    @error('username')
        <script type="text/javascript">
            alert("Username already exist! Please use a new one.");
        </script>
    @enderror

    {{-- Check if password is error --}}
    @error('password')
        <script type="text/javascript">
            alert("Your password doesn't meet the requirements.");
        </script>
    @enderror

    {{-- Check if re-password is error --}}
    @error('re-password')
        <script type="text/javascript">
            alert("Your password confirmation doesn't match or not meet the requirements.");
        </script>
    @enderror
</body>
</html>
