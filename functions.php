<?php

/*
	=====================
	   INCLUDE SCRIPTS
	=====================
*/

function resonne_script_enqueue() {
	wp_enqueue_script('jquery-3.4.1', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', array(), '3.3.1', true);
	wp_enqueue_style('resonne-css', get_template_directory_uri().'/css/resonne.min.css', array(), '0.0.1', 'all' );
	wp_enqueue_script('resonne-js', get_template_directory_uri().'/js/resonne.js', array(), '0.0.1', true );
	// wp_enqueue_style( 'google_web_fonts', 'https://fonts.googleapis.com/css?family=Anton|Fjalla+One|Catamaran' );
}
add_action('wp_enqueue_scripts', 'resonne_script_enqueue');


// function resonne_admin_style() {
// 	wp_enqueue_style('admin-styles', get_template_directory_uri().'/css/admin.css');
//   }

// add_action('admin_enqueue_scripts', 'resonne_admin_style');


function resonne_theme_setup() {
	add_theme_support('menus');
	add_theme_support('custom-logo');
	add_theme_support('post-thumbnails', array('post', 'page'));
	register_nav_menu('primary', 'Menu principal');
	// register_nav_menu('secondary', 'Menu Espace Clients');
}
add_action('init', 'resonne_theme_setup');



/*
	=======================
	   SIDEBAR functions
	=======================
*/

// function resonne_widget_setup() {
// 	register_sidebar(
// 		array(
// 			'name'			=> 'sidebar',
// 			'id'			=> 'sidebar-0',
// 			'class'			=> 'cls-sidebar-0',
// 			'description'	=> 'Sidebar',
// 			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
// 			'after_widget'  => '</aside>',
// 			'before_title'  => '<h2 class="widgettitle">',
// 			'after_title'   => '</h2>',
// 		)
// 	);
// }
// add_action('widgets_init', 'resonne_widget_setup');


/*
	==========================
	   CUSTOM WYSIWYG STLES
	==========================
*/

// add_editor_style();
// add_editor_style( get_template_directory_uri().'/css/resonne-custom-editor-style.css' );


// function my_mce_buttons_1( $buttons ) {
// 	array_unshift( $buttons, 'styleselect' );
// 	return $buttons;
// }
// add_filter( 'mce_buttons_2', 'my_mce_buttons_1' );

// function my_mce_before_init_insert_formats( $init_array ) {
// 	$style_formats = array(
// 		array(
//             'title' => 'Menu à ancres',
//             'block' => 'div',
//             'classes' => 'anchor-menu',
//             'wrapper' => true,
// 		),
// 		// array(
//         //     'title' => 'Bloc Citation',
//         //     'block' => 'div',
//         //     'classes' => 'custom-quote',
//         //     'wrapper' => true,
// 		// ),
	
// 	);
// 	$init_array['style_formats'] = json_encode( $style_formats );
// 	return $init_array;
// }
// add_filter( 'tiny_mce_before_init', 'my_mce_before_init_insert_formats' );




/*
	================
	   PAGINATION
	================
*/

// function pagination($pages = '', $range = 4) {

// 	$showitems = ($range * 2)+1;
// 	global $paged;

// 	if(empty($paged)) $paged = 1;

// 	if($pages == '') {
// 		global $wp_query;
// 		$pages = $wp_query->max_num_pages;
// 		if(!$pages) {
// 			$pages = 1;
// 		}
// 	}

// 	if(1 != $pages)	{
// 		echo '
// 		<div id="pagination">
// 		<div class="pages">Page <span class="current">'.$paged.'</span> / '.$pages.'</div>
// 		<ul>';

// 		if($paged > 2 && $paged > $range+1 && $showitems < $pages) echo "<a href='".get_pagenum_link(1)."'>&laquo; les + anciens</a>";
// 		if($paged > 1 && $showitems < $pages) echo "<a href='".get_pagenum_link($paged - 1)."'>&lsaquo; précédent</a>";

// 		for ($i=1; $i <= $pages; $i++) {
// 			if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems ))
// 			{
// 				echo ($paged == $i)? "<li class='active'><a>".$i."</a></li>":"<li><a href='".get_pagenum_link($i)."'>".$i."</a></li>";
// 			}
// 		}

// 		if ($paged < $pages && $showitems < $pages) echo " <li><a href=\"".get_pagenum_link($paged + 1)."\"> << </a></li>";

// 		if ($paged < $pages-1 &&  $paged+$range-1 < $pages && $showitems < $pages) echo " <li class='page-item'><a class='page-link' href='".get_pagenum_link($pages)."'> >> </a></li>";
// 		echo "</ul></div>\n";
// 	}
// }

?>
