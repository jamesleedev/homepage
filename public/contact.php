<?php
    $title = "Contact Info | jamesl.dev";
    $description = "How to get in touch with me.";
    $fullUrl = "https://www.jamesl.dev/contact";
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
            <li><a href="/projects">PROJECTS</a></li>
            <li><a href="#" class="active">CONTACT</a></li>
        </ul>
    </div>
</nav>
<main class="container">
    <section class="content">
        <h1>Contact Information</h1>
        <p>
            <b>Email: </b>james [at] jamesl [dot] dev
        </p>
        <p>
            <b>GitHub: </b><a href="https://github.com/jamesldotdev">jamesldotdev</a>
        </p>
        <p>
            <b>LinkedIn: </b><a href="https://www.linkedin.com/in/james-lee-54106b101/">https://www.linkedin.com/in/james-lee-54106b101/</a>
        </p>
    </section>
</main>
<?php include "../src/templates/footer.php" ?>
</body>
</html>