<template>
  <div id="app" class="main-layout">
    <div class="main-box">
      <div>
        <b-navbar toggleable="lg" class="navbar-white pb-0 px-3">
          <b-navbar-brand to="/" class="mr-auto">
            <img src="@/assets/images/cat-logo-white.png" alt="verite-logo" class="logo" />
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav class="mt-3">
            <b-navbar-nav>
              <b-nav-item class="nav-menu main-item-menu pr-lg-5" href="/">Home</b-nav-item>
              <b-nav-item class="nav-menu main-item-menu pr-lg-5" href="/product">Product</b-nav-item>
              <b-nav-item class="nav-menu main-item-menu pr-lg-5" href="/aboutus">About Us</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>

        <router-view></router-view>

        <hr class="mt-5 mb-0" />

        <b-row class="py-5 px-4 no-gutters footer">
          <b-col md="2">
            <img src="@/assets/images/cat-logo-white.png" alt="verite-logo" class="logo mb-4" />
          </b-col>
          <b-col sm="6" md="4">
            <div class="form-inline mb-3 footer-txt">
              <font-awesome-icon icon="phone-alt" class="icon-social fb align-middle mr-3" />
              <p class="m-0">Tel. 02-123-4567</p>
            </div>
            <div class="form-inline mb-3 footer-txt">
              <font-awesome-icon icon="envelope" class="icon-social fb align-middle mr-3" />
              <p class="m-0">Email : example@gmail.com</p>
            </div>
          </b-col>
          <b-col sm="6" md="2">
            <p class="title mb-2">Follow Us</p>
            <div>
              <a href="#" target="_blank">
                <font-awesome-icon
                  :icon="['fab', 'facebook-f']"
                  class="icon-social fb align-middle mr-4"
                />
              </a>
              <a href="#" target="_blank">
                <font-awesome-icon :icon="['fab', 'line']" class="icon-social align-middle" />
              </a>
            </div>
          </b-col>
          <b-col md="4" class="text-center mt-5 mt-md-0">
            <div
              class="fb-page"
              data-href="https://www.facebook.com/cat1811/"
              data-tabs="timeline"
              data-width
              data-height="275"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote cite="https://www.facebook.com/cat1811/" class="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/cat1811/">หน้ากาก ผ้าปิดจมูก by cat</a>
              </blockquote>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-layout {
  background: #f1f0eb;
}

.main-box {
  background: #fff;
  /* height: 100vh; */
  max-width: 1300px !important;
  margin: auto;
}

.navbar-white {
  background: #fff;
  color: #000;
  max-width: 1200px !important;
  margin: auto;
}

.footer {
  max-width: 1200px !important;
  margin: auto;
}

.logo {
  width: 75px;
  margin-right: 100px;
}

.nav-menu a,
.icon-social {
  color: #000 !important;
}

.nav-menu a:hover {
  text-decoration: underline;
}

.footer-txt {
  font-size: 18px;
}

.navbar-toggler {
  border: none;
}
</style>