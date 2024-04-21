<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bry/fks</title>

    <meta name="description" content="Explore bryanfks' finest works, presenting a combination of passion and skill.">

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
        @include('partials.index.portfolio')
        @include('partials.index.ideas')
    </main>
    <footer>
        <custom-footer/>
    </footer>

    <!-- JS script link(s) -->
    <script type="module" src="js/partials/navbar.js"></script>
    <script type="module" src="js/partials/footer.js"></script>

    <!-- AOS Script -->
    <script type="text/javascript" src="js/aos.js"></script>
    <script type="text/javascript">
        AOS.init(); // Initialize AOS script
    </script>
</body>

</html>
