<template>
  <CContainer class="m-auto box">
    <CRow>
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
    </CRow>

    <b-row>
      <b-col class="mt-5">
        <h1 class="font-weight-bold mb-5 text-center">CATEGORY</h1>

        <b-row class="mt-4">
          <b-col md="3" class="mb-2 mb-md-0">
            <router-link to="/categorys">
              <div class="pointer position-relative" @click="setCategoryName('คล้องหูผู้ใหญ่')">
                <div
                  :style="{ backgroundImage: 'url(' + require('@/assets/images/คล้องหูผู้ใหญ่.jpg') + ')' }"
                  class="product-img product-cat product"
                >
                  <!-- <p>SHOP NOW</p> -->
                </div>
                <div class="card-text">
                  <p class="font-weight-bold mt-3 mb-1">คล้องหูผู้ใหญ่</p>
                </div>
              </div>
            </router-link>
          </b-col>
          <b-col md="3" class="mb-2 mb-md-0">
            <router-link to="/categorys">
              <div class="pointer position-relative" @click="setCategoryName('สายคล้องคอผู้ใหญ่')">
                <div
                  :style="{ backgroundImage: 'url(' + require('@/assets/images/สายคล้องคอผู้ใหญ่.jpg') + ')' }"
                  class="product-img product-cat product"
                ></div>
                <div class="card-text">
                  <p class="font-weight-bold mt-3 mb-1">สายคล้องคอผู้ใหญ่</p>
                </div>
              </div>
            </router-link>
          </b-col>
          <b-col md="3" class="mb-2 mb-md-0">
            <router-link to="/categorys">
              <div class="pointer position-relative" @click="setCategoryName('คล้องคอเด็ก')">
                <div
                  :style="{ backgroundImage: 'url(' + require('@/assets/images/คล้องหูเด็ก.jpg') + ')' }"
                  class="product-img product-cat product"
                ></div>
                <div class="card-text">
                  <p class="font-weight-bold mt-3 mb-1">คล้องคอเด็ก</p>
                </div>
              </div>
            </router-link>
          </b-col>
          <b-col md="3" class="mb-2 mb-md-0">
            <router-link to="/categorys">
              <div class="pointer position-relative" @click="setCategoryName('สายคล้องคอเด็ก')">
                <div
                  :style="{ backgroundImage: 'url(' + require('@/assets/images/สายคล้องคอเด็ก.jpg') + ')' }"
                  class="product-img product-cat product"
                ></div>
                <div class="card-text">
                  <p class="font-weight-bold mt-3 mb-1">สายคล้องคอเด็ก</p>
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
      }
    };
  },
  methods: {
    setCategoryName(name) {
      this.$cookies.set("name", name, 60 * 60 * 24 * 30);
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
