<template>
  <section>
    <div class="main_intro_left">
        <div class="main_header">
            <h1>Grow Your <br /> Carrer With <br /> LogixOwl</h1>
        </div>
        <div class="sub_intro">
            We do knowledge sharing about Python, Shell Script, <br /> Google Sheets, Android Development, ..
        </div>
        <div class="get_course_button">
            <a href="#">GET COURSES</a>
        </div>
    </div>
    <div class="main_cover_right">
        <img src="../../assets/images/main_cover_right.png" alt="">
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
    section
        padding: 157px 222px 0 204px
        display: flex
        justify-content: space-between
        background-color: yellow
        .main_intro_left
            .main_header
                font-family: 'Outfit'
                font-style: normal
                font-weight: 700
                font-size: 70px
                line-height: 115px
                text-transform: capitalize
            .sub_intro
                margin-top: 30px
                font-family: 'Outfit'
                font-style: normal
                font-weight: 400
                font-size: 20px
                line-height: 25px
            .get_course_button
                display: flex
                justify-content: center
                align-items: center
                margin-top: 40px
                background-color: #005EF2
                padding: 23px 48px
                width: 229px
                height: 71px
                border-radius: 100px
                a
                    color: #fff
                    font-family: 'Outfit'
                    font-style: normal
                    font-weight: 600
                    font-size: 20px
                    line-height: 25px
                    text-transform: uppercase
        .main_cover_right
            margin-top: -20px
            img
                width: 620px
                height: 620px
</style>