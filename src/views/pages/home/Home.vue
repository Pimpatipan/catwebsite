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
        <h1 class="font-weight-bold mb-5 text-center">PRODUCT</h1>

        <b-row class="mt-4">
          <b-col cols="6" md="3">
            <div class="pointer" @click="showProduct('673272.jpg','Product 1')">
              <div
                :style="{ backgroundImage: 'url(' + require('@/assets/images/673272.jpg') + ')' }"
                class="product-img"
              ></div>
              <p class="font-weight-bold mt-3 mb-1">Product 1</p>
              <p variant="dark" class="product-price">999 Baht</p>
            </div>
          </b-col>
          <b-col cols="6" md="3">
            <div class="pointer" @click="showProduct('673273.jpg','Product 2')">
              <div
                :style="{ backgroundImage: 'url(' + require('@/assets/images/673273.jpg') + ')' }"
                class="product-img"
              ></div>
              <p class="font-weight-bold mt-3 mb-1">Product 2</p>
              <p variant="dark" class="product-price">999 Baht</p>
            </div>
          </b-col>
          <b-col cols="6" md="3">
            <div class="pointer" @click="showProduct('673274.jpg','Product 3')">
              <div
                :style="{ backgroundImage: 'url(' + require('@/assets/images/673274.jpg') + ')' }"
                class="product-img"
              ></div>
              <p class="font-weight-bold mt-3 mb-1">Product 3</p>
              <p variant="dark" class="product-price">999 Baht</p>
            </div>
          </b-col>
          <b-col cols="6" md="3">
            <div class="pointer" @click="showProduct('673275.jpg','Product 4')">
              <div
                :style="{ backgroundImage: 'url(' + require('@/assets/images/673275.jpg') + ')' }"
                class="product-img"
              ></div>
              <p class="font-weight-bold mt-3 mb-1">Product 4</p>
              <p variant="dark" class="product-price">999 Baht</p>
            </div>
          </b-col>
        </b-row>

        <b-row class="mt-4">
          <b-col cols="6" md="3">
            <div class="pointer" @click="showProduct('673276.jpg','Product 5')">
              <div
                :style="{ backgroundImage: 'url(' + require('@/assets/images/673276.jpg') + ')' }"
                class="product-img"
              ></div>
              <p class="font-weight-bold mt-3 mb-1">Product 5</p>
              <p variant="dark" class="product-price">999 Baht</p>
            </div>
          </b-col>
          <b-col cols="6" md="3">
            <div class="pointer" @click="showProduct('673277.jpg','Product 6')">
              <div
                :style="{ backgroundImage: 'url(' + require('@/assets/images/673277.jpg') + ')' }"
                class="product-img"
              ></div>
              <p class="font-weight-bold mt-3 mb-1">Product 6</p>
              <p variant="dark" class="product-price">999 Baht</p>
            </div>
          </b-col>
          <b-col cols="6" md="3">
            <div class="pointer" @click="showProduct('673278.jpg','Product 7')">
              <div
                :style="{ backgroundImage: 'url(' + require('@/assets/images/673278.jpg') + ')' }"
                class="product-img"
              ></div>
              <p class="font-weight-bold mt-3 mb-1">Product 7</p>
              <p variant="dark" class="product-price">999 Baht</p>
            </div>
          </b-col>
          <b-col cols="6" md="3">
            <div class="pointer" @click="showProduct('673279.jpg','Product 8')">
              <div
                :style="{ backgroundImage: 'url(' + require('@/assets/images/673279.jpg') + ')' }"
                class="product-img"
              ></div>
              <p class="font-weight-bold mt-3 mb-1">Product 8</p>
              <p variant="dark" class="product-price">999 Baht</p>
            </div>
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
