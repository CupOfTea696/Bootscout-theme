<?php
/*
The Page Content Loop
=====================
*/
?>

<?php if(have_posts()): while(have_posts()): the_post(); ?>
  <article role="article" id="post_<?php the_ID()?>" <?php post_class('mt-4 mb-4')?>>
    <header>
      <h1><?php the_title()?></h1>
    </header>
    <?php the_content()?>
    <?php wp_link_pages(); ?>
  </article>
<?php endwhile; else: ?>
<?php wp_redirect(get_bloginfo('url').'/404', 404); ?>
<?php exit; ?>
<?php endif; ?>
