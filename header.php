<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="web-author" content="Blink group">
		<meta name="designer" content="Blink group, Camille Boutier">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title><?php the_title_attribute() ?></title>
        <?php wp_head(); ?>
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web:400,700&display=swap" rel="stylesheet">
	</head>

    <body class="home">
        <header class="header-principal-container">
			<div id="burger" class="menu-off">
				<a href="#openmenu" class="openMe hidetxt menu-open menu-close">Ouvrir ou fermer le menu</a>
			</div>
            <input type="checkbox" name="sound" id="sound" value="mute" hidden>
            <label class="hidetxt speaker" for="sound">
                <span class="speaker-icon"></span>
                Activer ou desactiver le son
            </label>
            <h1 class="hidetxt"><?php bloginfo('name'); ?></h1>
            <a class="box" id="scrollbox" href="#scrollbox">
                <span class="scrolldown">Scroll</span>
                <span class="scroll-icon"></span>
            </a>
            <div id="background-video" class="stealth"></div>
        </header>

        <?php wp_nav_menu(array('theme_location'=>'primary')); ?>
