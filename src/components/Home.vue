<template>
  <section>
    <Navigation_menu />
    <Main_section />
    <Background_ellipse/>
    <Course_section/>
    <Contact_us/>
  </section>
</template>

<script>
import Background_ellipse from './background_ellipse/background_ellipse.vue';
import Contact_us from './contact_us_section/contact_us.vue';
import Course_section from './course_section/course_section.vue';
import Main_section from './main_section/main_section.vue';
import Navigation_menu from './navigation_bar/navigation_menu.vue';
export default {
    components:{
        Background_ellipse,
        Navigation_menu,
        Main_section,
        Course_section,
        Contact_us
  }
}
</script>

<style>

</style>