<?php
    function getLastModified() {
        $filemap = [
            '/' => '../public/index.php',
            '/contact' => '../public/contact.php',
            '/projects' => '../public/projects.php'
        ];
        $request = $_SERVER['REQUEST_URI'];
        if (array_key_exists($request, $filemap) ) {
            return "Last updated " . date("d F Y", filemtime($filemap[$request]));
        }
        else {
            return null;
        }
    }

    $lastModified = getLastModified();
?>

<footer class="container">
    <div class="content">
        <span>&copy; James Lee <?php echo date("Y"); ?></span>
        <?php if ($lastModified !== null): ?>
            <span><?= $lastModified; ?></span>
        <?php endif; ?>
    </div>
</footer>