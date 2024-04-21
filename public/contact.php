<?php
    $title = "Contact Info | jamesl.dev";
    $description = "How to get in touch with me.";
    $fullUrl = "https://www.jamesl.dev/contact";

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
    'PROJECTS' => ['url'=>'/projects', 'active'=>false],
    'CONTACT' => ['url'=>'#', 'active'=>true],
]]); ?>
<main class="container">
    <section class="content">
        <h1>Contact Information</h1>
        <p>
            <b>Email: </b>james [at] jamesl [dot] dev
        </p>
        <p>
            <b>GitHub: </b><a href="https://github.com/jamesleedev">jamesleedev</a>
        </p>
        <p>
            <b>LinkedIn: </b><a href="https://www.linkedin.com/in/james-lee-54106b101/">https://www.linkedin.com/in/jamesl-dev/</a>
        </p>
    </section>
</main>
<?php include "../src/templates/footer.php" ?>
</body>
</html>