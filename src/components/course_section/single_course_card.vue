<template>
  <div class="course_card">
    <div class="course_card_image">
        <img src="../../assets/images/single_course_card/course_card_img.png" alt="">
    </div>
    <div class="course_card_detail">
        <h1 class="course_card_header">Kotlin for Pure Programming (Batch-1)</h1>
        <p class="course_card_author">by LogixOwl</p>
        <div class="course_card_info">The Kotlin programming language is a modern language that gives you more power for your everyday tasks. It can be used almost everywhere Java is used today: for server-side development, Android apps, and much more.</div>
        <div class="course_rating">
            <span class="course_star_logo"><img src="../../assets/images/single_course_card/star.png" alt=""></span>
            <span class="course_rate_point">4.8</span>
            <span class="course_total_review">(200 reviews)</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
    .course_card
        width: 360px
        background: #0A1220
        border-radius: 30px
        .course_card_image
            img
                border-top-right-radius: 30px
                border-top-left-radius: 30px
                width: 100%
        .course_card_detail
            padding: 20px
            font-family: 'Outfit'
            font-style: normal
            color: #FFFFFF
            .course_card_header
                font-weight: 600
                font-size: 22px
                line-height: 28px
            .course_card_author
                font-weight: 300
                font-size: 12px
                line-height: 15px
                margin-top: 12px
            .course_card_info
                font-weight: 400
                font-size: 16px
                line-height: 20px
                color: #BFCCD6
                margin-top: 15px
            .course_rating
                display: flex
                align-items: center
                margin-top: 17px
                .course_star_logo
                    margin-right: 10px
                .course_rate_point
                    font-weight: 400
                    font-size: 10px
                    color: #50E7E4
                    margin-right: 10px
                .course_total_review
                    font-weight: 300
                    font-size: 10px
                    line-height: 13px
                    color: #BFCCD6
            
</style>