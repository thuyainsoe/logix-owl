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
              <img class="create_form_icon" src="../assets/images/create_form_inner_icons/key.png" alt="">
              <input type="password" placeholder="Enter password">
            </div>
            <div class="create_button">
              <button>Register Now</button>
            </div>
          </form>
          <p>Already have an account? <span><a href="#">Sign In</a></span></p>
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

<style>
  /* assets/css/csform.sass */
</style>