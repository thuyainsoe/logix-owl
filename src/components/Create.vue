<template>
  <section>
    <navigation_menu/>
    <div class="form_container">
      <div>
        <h1>Create Your Account</h1>
      </div>
      <div class="register_form">
        <div class="register_form_img">
          <img src="../assets/images/create_user_gaming.png" alt="">
        </div>
        <div class="register_form_input">
          <form action="">
            <div class="create_form">
              <img class="create_form_icon" src="../assets/images/create_form_inner_icons/email.png" alt="">
              <input type="email" placeholder="Enter your email">
            </div>
            <div class="create_form">
              <img class="create_form_icon" src="../assets/images/create_form_inner_icons/username.png" alt="">
              <input type="text" placeholder="Enter username">
            </div>
            <div class="create_form">
              <img class="create_form_icon" src="../assets/images/create_form_inner_icons/user.png" alt="">
              <input type="text" placeholder="Enter username">
            </div>
            <div class="create_form">
              <img class="create_form_icon" src="../assets/images/create_form_inner_icons/user.png" alt="">
              <input type="password" placeholder="Enter password">
            </div>
          </form>
        </div>
      </div>
    </div>
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
    font-family: 'Outfit'
    font-style: normal
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
    .form_container
      div
        display: flex
        justify-content: center
        margin-top: 105px
        h1
          font-weight: 700
          font-size: 60px
          text-transform: capitalize
          color: #FFFFFF
      .register_form
        display: flex
        margin: 10px 291px 0 240px
        justify-content: space-around
        align-items: center
        .register_form_img
          margin-top: 70px
        .register_form_input
          form
            .create_form
              position: relative
              margin: 12px auto
              text-align: center
              width: 336px           
              input
                &[type="text"],&[type="email"],&[type="password"]
                  color: #fff
                  border: 1px solid #C1C1C1
                  border-radius: 20px
                  height: 60px
                  background-color: transparent
                  border: 1px solid #ccc
                  line-height: 30px
                  padding-left: 55px
                  width: 100%
                  z-index: 1
                  font-size: 16px
                  color: #C1C1C1
              input::placeholder
                font-weight: 400
                font-size: 16px
                color: #C1C1C1
              .create_form_icon
                position: absolute
                top: 22px
                left: 23px
</style>