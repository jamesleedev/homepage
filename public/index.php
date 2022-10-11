<?php
    $title = "Home | jamesl.dev";
    $description = "You've reached the home of James - Junior Software Developer at ACCOINTING.com, coding in WordPress, React and Next.js, and studied some Computer Science at Heriot-Watt University, UK.";
    $fullUrl = "https://www.jamesl.dev";
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
            I'm a front end developer with React/Next.js at <a href="https://www.accointing.com" target="_blank" rel="noreferrer">ACCOINTING.com</a> based near Bristol and currently working full time.
            I am also a backend developer at <a href="https://serpex.co.uk">Serpex Studios</a>. I'm not currently looking for new opportunities but you can drop me a message anytime using my contact details.
        </p>
        <p>
            I've been using Linux and coding recreationally for about 7 years, and I am experienced in Python and PHP, working with WordPress specifically.
            Currently dual booting Fedora and Windows, with my distro history being Ubuntu then straight to Fedora as around 18.04 everything broke for me, and I run KDE at the moment, but was a long time MATE user.
        </p>
        <p>
            In terms of tools, I use Notion/Google Keep for note taking, and Trello/Jira for personal/work task management. I code pretty much exclusively in JetBrains IDEs, with Emacs/VSCode as a text editor when needed.
        </p>
        <p>
            Innis & Gunn and Laphroaig 10 are probably my favourite drinks at the moment.
        </p>
        <p>
            Even though I'm a front end dev, I have literally no design skills. I am somewhat opinionated about front end development in that unnecessary complexity should always be avoided.
        </p>
        <p>
            My PGP key can be found in <a href="https://www.jamesl.dev/pgp.txt">/pgp.txt</a>
        </p>
    </section>
</main>
<?php include "../src/templates/footer.php" ?>
</body>
</html>