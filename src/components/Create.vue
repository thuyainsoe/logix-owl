<template>
  <section>
    <navigation_menu/>
    <div class="background_ellipse">
        <img class="bg_ellipse_1" src="../assets/images/main_background/Ellipse_top.png" alt="">
        <img class="bg_ellipse_2" src="../assets/images/main_background/Ellipse_right.png" alt="">
    </div>
  </section>
</template>

<script>
import navigation_menu from './navigation_bar/navigation_menu.vue'
export default {
  components: { navigation_menu},

}
</script>

<style lang="sass" scoped>
  section
    .background_ellipse
      .bg_ellipse_1
        position: absolute
        left: -24px
        top: 0
      .bg_ellipse_2
        position: absolute
        top: -20px
        height: 1059px
        right: 0 
</style>