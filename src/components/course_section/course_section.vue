<template>
    <section>
        <h3 class="courses_section_title">Featured Courses</h3>
        <div class="courses_cards">
            <single_course_card/>
            <single_course_card/>
            <single_course_card/>
            <single_course_card/>
        </div>
        <div class="to_all_courses">
            <a href="#">See All Courses</a>
        </div>
    </section>
</template>

<script>
import single_course_card from './single_course_card.vue'
export default {
  components: { single_course_card },

}
</script>

<style lang="sass" scoped>
    section
        margin-top: 110px
        padding: 0 202px 0 204px
        .courses_section_title
            font-family: 'Outfit'
            font-style: normal
            font-weight: 600
            font-size: 20px
            line-height: 25px
            text-transform: uppercase
            color: #CEF5F5
            margin-bottom: 51px
        .courses_cards
            display: flex
            gap: 12px
            justify-content: space-around
        .to_all_courses
            display: flex
            justify-content: center
            align-items: center
            margin-top: 44px
            a
                padding: 23px 48px    
                font-family: 'Outfit'
                font-style: normal
                font-weight: 600
                font-size: 20px
                line-height: 25px
                text-transform: uppercase
                color: #FFFFFF
                border: 1px solid #005EF2
                border-radius: 100px
</style>