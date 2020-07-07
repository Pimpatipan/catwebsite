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
        <h1 class="font-weight-bold mb-5 text-center">ABOUT US</h1>

        <b-row class="mb-5">
          <b-col>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </CContainer>
</template>

<script>
import Slick from "vue-slick";
import image from "@/assets/images/673272.jpg";

export default {
  name: "Home",
  components: {
    Slick
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
      selected: 1,
      options: [
        { value: "1", text: "Featured" },
        { value: "2", text: "Best Selling" },
        { value: "3", text: "Alphabetically, A-Z" },
        { value: "4", text: "Alphabetically, Z-A" },
        { value: "5", text: "Price, low to high" },
        { value: "6", text: "Price, high to low" },
        { value: "7", text: "Date, new to old" },
        { value: "8", text: "Date, old to new" }
      ]
    };
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

 .btn-select {
    color: rgb(22, 39, 74);
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(188, 188, 188);
    border-image: initial;
    border-radius: 0px;
    padding: 5px 10px;
}
</style>
