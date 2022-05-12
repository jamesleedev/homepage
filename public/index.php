<?php
    $title = "Home | jamesl.dev";
    $description = "You've reached the home of James - Junior Software Developer at ACCOINTING.com, coding in WordPress, React and Next.js, and studied some Computer Science at Heriot-Watt University, UK.";
    $fullUrl = "https://jamesl.dev";
?>

<!DOCTYPE html>
<html lang="en" prefix="og: https://ogp.me/ns#">
<head>
    <meta charset="utf-8">
    <meta name="description" content="<?= $description ?>">
    <title><?= $title ?></title>
    <meta property="og:url" content="<?= $fullUrl ?>">
    <meta property="og:title" content="<?= $title ?>">
    <meta property="og:description" content="<?= $description ?>">
    <?php include "../src/templates/head.php"; ?>
    <meta property="twitter:title" content="<?= $title ?>">
    <meta property="twitter:description" content="<?= $description ?>">
</head>
<body>
<nav>
    <div class="container">
        <header>jamesl.dev</header>
        <ul>
            <li><a href="#" class="active">ABOUT</a></li>
            <li><a href="/projects">PROJECTS</a></li>
            <li><a href="/contact">CONTACT</a></li>
        </ul>
    </div>
</nav>
<main class="container">
    <section class="content">
        <h1>Who am I?</h1>
        <p>
            I'm a front end developer at <a href="https://www.accointing.com" target="_blank" rel="noreferrer">ACCOINTING.com</a> based in Bristol and currently working full time.
            I've been using Linux and coding recreationally for about 7 years, and I am experienced in Python and PHP, working with WordPress specifically.
        </p>
        <p>
            I am also a backend developer at <a href="https://serpex.co.uk">Serpex Studios</a>.
        </p>
        <p>
            My PGP key can be found in <a href="https://jamesl.dev/pgp.txt">/pgp.txt</a>
        </p>
    </section>
</main>
<?php include "../src/templates/footer.php" ?>
</body>
</html>