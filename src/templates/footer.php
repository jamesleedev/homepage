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
    }
?>

<footer class="container">
    <div class="content">
        <p>&copy; James Lee <?php echo date("Y"); ?></p>
        <p><?= getLastModified(); ?></p>
    </div>
</footer>