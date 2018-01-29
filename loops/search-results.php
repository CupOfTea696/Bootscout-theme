<?php
/*
The Search Results Loop
=======================
*/
?>

<?php if(have_posts()): while(have_posts()): the_post(); ?>
  <article role="article" id="post_<?php the_ID()?>" <?php post_class('mt-4 mb-4')?>>
    <header>
      <h4><a href="<?php the_permalink(); ?>"><?php the_title()?></a></h4>
    </header>
    <?php the_excerpt(); ?>
  </article>
<?php endwhile; else: ?>
  <div class="alert alert-warning">
    <i class="fas fa-exclamation-triangle"></i> <?php _e('Sorry, your search yielded no results.', 'b4st'); ?>
  </div>
<?php endif; ?>
