<?php
/*
Template Name: Mentions légales
*/
?>
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
        <style>
        .ml-container {
            width: 100%;
            text-align: center;
        }
        .ml-logo {
            display: inline-block;
            width: 33%;
            margin: 2.5em 0 1.5em;
        }
        .page {
            margin-bottom: 5em;
        }
        h1 {
            margin: 2em 0 1em;
            text-align: center;
        }
        p {
            margin: 1em 0;
            font-size: 18px;
            text-align: justify;
        
        }
        </style>
	</head>
        <body>


<?php
echo '<div class="ml-container"><img class="ml-logo" src="' . get_template_directory_uri() . '/media/titleVec/logo-resonne.svg" alt="Résonne"></div>';

echo '<main class="page">';

if( have_posts() ):



    

	while( have_posts() ): the_post();
		echo '<div class="content">';
		if (has_post_thumbnail($_post->ID)) {
			echo '<img src="' . get_the_post_thumbnail_url( $_post->ID, 'post-thumbnail' ) . '" alt="" />';
        }
        echo '<h1>' . get_the_title() . '</h1>';
		the_content();
		echo '</div>';
	endwhile;
	
endif;

echo '</main>';



?>

    </body>
</html>
