<template>
  <section>
    <div class="nav_container">
        <div class="logo">
            <a href="#">LOGIXOWL</a>
        </div>
        <ul class="nav_items">
            <li><a href="#">Contact</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Register Now</a></li>
        </ul>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="sass">
    .nav_container
        display: flex
        padding: 75px 205px 0 204px
        width: 100%
        justify-content: space-between
        .logo
            a 
                color: #fff
                font-family: 'Outfit'
                font-style: normal
                font-weight: 700
                font-size: 20px
                line-height: 25px
                text-transform: uppercase
        .nav_items
            display: flex
            gap: 72px
            li
                a
                    color: #fff
                    font-family: 'Outfit'
                    font-style: normal
                    font-weight: 400
                    font-size: 20px
                    line-height: 25px
                    text-transform: capitalize
</style>