<template>
  <section>
    <div class="contact_small_title">
        Contact Us
    </div>
    <div class="contact_main_title">
        <h1>You Can Freely <br /> Contact Us <br /> What's in Your Mind?</h1>
    </div>
    <div class="img_and_contact_form">
        <div class="contact_form_left_img">
            <img src="../../assets/images/contact_form_left_img.png" alt="">
        </div>
        <div class="contact_form_right">
            <form action="/">
                <input type="text" placeholder="Enter Your Email"> <br/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Drop your message"></textarea><br/>
                <button class="contact_button">SEND</button>
            </form>
            <div class="social_icons">
                <div class="social_youtube">
                    <img style="cursor: pointer;" src="../../assets/images/social_icons/youtube.png" alt="">
                </div>
                <div class="social_facebook">
                    <img style="cursor: pointer;" src="../../assets/images/social_icons/facebook.png" alt="">
                </div>
                <div class="social_github">
                    <img style="cursor: pointer;" src="../../assets/images/social_icons/github.png" alt="">
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
    section
        padding: 164px 291px 0px 220px
        .contact_small_title
            display: flex
            justify-content: center
            font-family: 'Outfit'
            font-style: normal
            font-weight: 600
            font-size: 20px
            line-height: 25px
            text-transform: uppercase
            color: #ABE4ED
            margin-left: 70px
        .contact_main_title
            display: flex
            justify-content: center
            font-family: 'Outfit'
            font-style: normal
            font-weight: 700
            font-size: 40px
            text-align: center
            text-transform: capitalize
            color: #FFFFFF
            margin-left: 45px
            margin-top: 20px
        .img_and_contact_form
            margin-top: 60px
            display: flex
            justify-content: space-between
            .contact_form_right
                .social_icons
                    display: flex
                    justify-content: center
                    align-items: center
                    margin-right: 65px
                    margin-top: 27px
                    gap: 25px
                form
                    margin-right: 80px
                    margin-top: 50px
                    input
                        &[type="text"]
                            width: 336px
                            height: 60px
                            background-color: transparent
                            border: 1px solid #C1C1C1
                            border-radius: 20px
                            padding: 20px 0 20px 27px
                            font-size: 16px
                            color: #fff
                        &[type="text"]::placeholder
                            font-family: 'Outfit'
                            font-style: normal
                            font-weight: 400
                            font-size: 16px
                            color: #C1C1C1
                    textarea
                        width: 336px
                        height: 165px
                        border: 1px solid #C1C1C1
                        padding-top: 16px
                        padding-left: 27px
                        border-radius: 20px
                        background-color: transparent
                        margin-top: 14px
                        font-size: 16px
                        color: #fff
                    textarea::placeholder
                        font-family: 'Outfit'
                        font-style: normal
                        font-weight: 400
                        font-weight: 400
                        font-size: 16px
                        color: #C1C1C1
                    .contact_button
                        margin-top: 14px
                        font-family: 'Outfit'
                        font-style: normal
                        font-weight: 600
                        font-size: 20px
                        line-height: 25px
                        text-transform: uppercase
                        color: #fff
                        width: 336px
                        height: 60px
                        background-color: transparent
                        border: 1px solid #005EF2
                        border-radius: 20px
                        cursor: pointer
    
            
</style>