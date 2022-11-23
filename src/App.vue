<template>
  <Navigation_menu />
  <Main_section />
  <Background_ellipse/>
</template>

<script>
import Background_ellipse from './components/background_ellipse/background_ellipse.vue';
import Main_section from './components/main_section/main_section.vue';
import Navigation_menu from './components/navigation_bar/navigation_menu.vue';

export default {
  name: 'App',
  components:{
    Background_ellipse,
    Navigation_menu,
    Main_section
}
}
</script>

<style lang="sass">
  body
    height: 2688px
    color: white
</style>
