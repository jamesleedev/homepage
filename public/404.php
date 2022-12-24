<?php
require '../src/utils/include_args.php';
?>

<!DOCTYPE html>
<html lang="en-GB">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="404 Page not found.">
    <meta name="robots" content="noindex">
    <title>404 | jamesl.dev</title>
    <?php include "../src/templates/head.php"; ?>
</head>
<body>
<?php include_args('../src/templates/nav.php', ['links'=>[
    'ABOUT' => ['url'=>'/', 'active'=>false],
    'PROJECTS' => ['url'=>'/projects', 'active'=>false],
    'CONTACT' => ['url'=>'#', 'active'=>false],
]]); ?>
<main class="container">
    <section class="content">
        <h1>404 Page Not Found.</h1>
        <p>Please try another page using the navigation above.</p>
    </section>
</main>
<?php include "../src/templates/footer.php" ?>
</body>
</html>