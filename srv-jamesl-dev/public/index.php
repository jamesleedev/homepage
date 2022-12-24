<?php
    $title = "Server Related Index | jamesl.dev";
    $description = "This is where I host some server related stuff.";
    $fullUrl = "https://srv.jamesl.dev";

    function getLastModified()
    {
        return "Last updated " . date("d F Y", filemtime(__FILE__));
    }
?>

<!DOCTYPE html>
<html lang="en-GB" prefix="og: https://ogp.me/ns#">
<head>
    <meta charset="utf-8">
    <meta name="description" content="<?= $description ?>">
    <title><?= $title ?></title>
    <meta name="robots" content="noindex, nofollow">
    <meta property="og:url" content="<?= $fullUrl ?>">
    <meta property="og:title" content="<?= $title ?>">
    <meta property="og:description" content="<?= $description ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
    <link rel="stylesheet" href="https://www.jamesl.dev/css/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="en_GB">
    <meta property="og:image" content="https://www.jamesl.dev/assets/img/og-image.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="jamesl.dev">
    <meta property="og:image" content="https://www.jamesl.dev/assets/img/og-square.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="1200">
    <meta property="og:image:alt" content="jamesl.dev">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@jamesldev">
    <meta name="twitter:creator" content="@jamesldev">
    <meta name="twitter:image" content="https://www.jamesl.dev/assets/img/og-image.png">
    <meta name="twitter:image:alt" content="jamesl.dev">
    <meta name="twitter:title" content="<?= $title ?>">
    <meta name="twitter:description" content="<?= $description ?>">
</head>
<body>
<nav>
    <div class="container">
        <header>jamesl.dev</header>
        <ul>
            <li><a href="https://www.jamesl.dev/">ABOUT</a></li>
            <li><a href="https://www.jamesl.dev/projects">PROJECTS</a></li>
            <li><a href="https://www.jamesl.dev/contact">CONTACT</a></li>
            <li><a href="#" class="active">SRV</a></li>
        </ul>
    </div>
</nav>
<main class="container">
    <section class="content">
        <h1>srv.jamesl.dev</h1>
        <p>This subdomain is an index of server related media/assets/installers for personal use. This page is here solely for verifying access over HTTP. Most of these files are not really useful if you stumbled across these - if you're looking for live USB images then I would suggest going directly to the distro homepages.</p>
    </section>
</main>
<footer class="container">
    <div class="content">
        <p>&copy; James Lee <?php echo date("Y"); ?></p>
        <p><?= getLastModified(); ?></p>
    </div>
</footer>
</body>
</html>