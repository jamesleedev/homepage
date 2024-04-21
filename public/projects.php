<?php
    $title = "Projects | jamesl.dev";
    $description = "My current and upcoming projects.";
    $fullUrl = "https://www.jamesl.dev/projects";

    require '../src/utils/include_args.php';
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
<?php include_args('../src/templates/nav.php', ['links'=>[
    'ABOUT' => ['url'=>'/', 'active'=>false],
    'PROJECTS' => ['url'=>'#', 'active'=>true],
    'CONTACT' => ['url'=>'/contact', 'active'=>false],
]]); ?>
<main class="container">
    <section class="content">
        <h1>Current and future side projects</h1>
        <p>
        I made a small patch for two mods in Starbound. You can find this in my GitHub.
        </p>
    </section>
</main>
<?php include "../src/templates/footer.php" ?>
</body>
</html>
