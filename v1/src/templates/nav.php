<div class="navbar">
    <div class="container">
        <nav class="nav">
            <div class="nav__header"><p>jamesl.dev</p></div>
            <div class="nav__links">
                <?php foreach ($links as $name => $link): ?>
                <a href="<?= $link['url'] ?>" <?= $link['active'] ? "class='active'" : "" ?>><?= $name ?></a>
                <?php endforeach; ?>
            </div>
        </nav>
    </div>
</div>
