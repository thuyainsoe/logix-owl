<template>
  <Navigation_menu />
  <Main_section />
  <Background_ellipse/>
  <Course_section/>
  <Contact_us/>
</template>

<script>
import Background_ellipse from './components/background_ellipse/background_ellipse.vue';
import Contact_us from './components/contact_us_section/contact_us.vue';
import Course_section from './components/course_section/course_section.vue';
import Main_section from './components/main_section/main_section.vue';
import Navigation_menu from './components/navigation_bar/navigation_menu.vue';

export default {
  name: 'App',
  components:{
    Background_ellipse,
    Navigation_menu,
    Main_section,
    Course_section,
    Contact_us
}
}
</script>

<style lang="sass">
  body
    height: 2688px
    color: white
</style>
