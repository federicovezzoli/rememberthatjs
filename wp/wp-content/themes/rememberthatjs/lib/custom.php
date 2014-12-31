<?php
/**
 * Custom functions
 */
 
 // Register Custom Post Type
function custom_post_type() {

	$labels = array(
		'name'                => 'Library elements',
		'singular_name'       => 'Library element',
		'menu_name'           => 'Library',
		'parent_item_colon'   => 'Parent element',
		'all_items'           => 'All elements',
		'view_item'           => 'View element',
		'add_new_item'        => 'Add New element',
		'add_new'             => 'New element',
		'edit_item'           => 'Edit element',
		'update_item'         => 'Update element',
		'search_items'        => 'Search element',
		'not_found'           => 'No element found',
		'not_found_in_trash'  => 'No elements found in Trash',
	);
	$rewrite = array(
		'slug'                => 'element',
		'with_front'          => true,
		'pages'               => true,
		'feeds'               => true,
	);
	$args = array(
		'label'               => 'library',
		'description'         => 'Library element',
		'labels'              => $labels,
		'supports'            => array( 'title', 'editor', 'author', 'trackbacks', 'custom-fields'),
		'taxonomies'          => array( 'category' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		//'menu_icon'           => '',
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'rewrite'             => $rewrite,
		'capability_type'     => 'page',
	);
	register_post_type( 'library', $args );

}

// Hook into the 'init' action
add_action( 'init', 'custom_post_type', 0 );
