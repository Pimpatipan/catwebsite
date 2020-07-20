<template>
  <CContainer class="m-auto box">
    <!-- <CRow>
      <CCol class="p-0">
        <div>
          <div class="text-center">
            <div class="mt-3">
              <slick ref="slick" :options="slickOptions" class>
                <a href="#">
                  <img src="@/assets/images/sample-banner.jpg" alt />
                </a>
                <a href="#">
                  <img src="@/assets/images/sample-banner.jpg" alt />
                </a>
                <a href="#">
                  <img src="@/assets/images/sample-banner.jpg" alt />
                </a>
                <a href="#">
                  <img src="@/assets/images/sample-banner.jpg" alt />
                </a>
                <a href="#">
                  <img src="@/assets/images/sample-banner.jpg" alt />
                </a>
              </slick>
            </div>
          </div>
        </div>
      </CCol>
    </CRow>-->

    <b-row>
      <b-col class="mt-5">
        <h1 class="font-weight-bold mb-5 text-center">{{name}}</h1>
        <hr />
        <b-row class="mt-4">
          <b-col md="3" class="mb-2 mb-md-0">
            <router-link to="/product">
              <div class="pointer position-relative">
                <div
                  :style="{ backgroundImage: 'url(' + require('@/assets/images/673272.jpg') + ')' }"
                  class="product-img product-cat"
                >
                  <!-- <p>SHOP NOW</p> -->
                </div>
                <div class="card-text">
                  <p class="font-weight-bold mt-3 mb-1">สีฟ้า</p>
                </div>
              </div>
            </router-link>
          </b-col>
          <b-col md="3" class="mb-2 mb-md-0">
            <router-link to="/product">
              <div class="pointer position-relative">
                <div
                  :style="{ backgroundImage: 'url(' + require('@/assets/images/673273.jpg') + ')' }"
                  class="product-img product-cat"
                ></div>
                <div class="card-text">
                  <p class="font-weight-bold mt-3 mb-1">สีดำ</p>
                </div>
              </div>
            </router-link>
          </b-col>
          <b-col md="3" class="mb-2 mb-md-0">
            <router-link to="/product">
              <div class="pointer position-relative">
                <div
                  :style="{ backgroundImage: 'url(' + require('@/assets/images/673274.jpg') + ')' }"
                  class="product-img product-cat"
                ></div>
                <div class="card-text">
                  <p class="font-weight-bold mt-3 mb-1">สีแดง</p>
                </div>
              </div>
            </router-link>
          </b-col>
          <b-col md="3" class="mb-2 mb-md-0">
            <router-link to="/product">
              <div class="pointer position-relative">
                <div
                  :style="{ backgroundImage: 'url(' + require('@/assets/images/673275.jpg') + ')' }"
                  class="product-img product-cat"
                ></div>
                <div class="card-text">
                  <p class="font-weight-bold mt-3 mb-1">สีขาว</p>
                </div>
              </div>
            </router-link>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <ModalProduct ref="modalProduct" />
  </CContainer>
</template>

<script>
import Slick from "vue-slick";
import ModalProduct from "@/components/Modal/ModalProduct";
import VueCookies from "vue-cookies";

export default {
  name: "Home",
  components: {
    Slick,
    ModalProduct
  },
  data() {
    return {
      slickOptions: {
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        dots: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000
      },
      name: ""
    };
  },
  created() {
    this.name = VueCookies.get("name");
  },
  methods: {
    showProduct(img, name) {
      this.$refs.modalProduct.show(img, name);
    }
  }
};
</script>

<style scpoed>
.slick-slide img {
  width: 100%;
}

.box {
  max-width: 1200px !important;
}

.product-img {
  width: 100%;
  padding-bottom: 100%;
  background-size: contain;
  background-position: 50% center;
  background-repeat: no-repeat;
}

.two-lines {
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  font-size: 16px;
}

.product-price {
  font-size: 16px;
  color: #707070;
}
</style>
