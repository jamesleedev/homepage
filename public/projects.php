<?php
    $title = "Projects | jamesl.dev";
    $description = "My current and upcoming projects. Upcoming projects outside of ACCOINTING.com are websites for Serpex Limited, and my personal UK train review blog.";
    $fullUrl = "https://www.jamesl.dev/projects";
?>

<!DOCTYPE html>
<html lang="en-GB" prefix="og: https://ogp.me/ns#">
<head>
    <meta charset="utf-8">
    <meta name="description" content="<?= $description ?>">
    <title><?= $title ?></title>
    <meta property="og:url" content="<?= $fullUrl ?>">
    <meta property="og:title" content="<?= $title ?>">
    <meta property="og:description" content="<?= $description ?>">
    <?php include "../src/templates/head.php"; ?>
    <meta name="twitter:title" content="<?= $title ?>">
    <meta name="twitter:description" content="<?= $description ?>">
</head>
<body>
<nav>
    <div class="container">
        <header>jamesl.dev</header>
        <ul>
            <li><a href="/">ABOUT</a></li>
            <li><a href="#" class="active">PROJECTS</a></li>
            <li><a href="/contact">CONTACT</a></li>
        </ul>
    </div>
</nav>
<main class="container">
    <section class="content">
        <h1>Current and future side projects</h1>
        <p>
            I am currently working on the company website for <a href="https://serpex.co.uk" target="_blank" rel="noreferrer noopener">Serpex</a>, as well as Twitch Lancer, a freelance service for streamers and content creators.
        </p>
        <p>
            I will also be starting a train blog shortly.
        </p>
    </section>
</main>
<?php include "../src/templates/footer.php" ?>
</body>
</html>
