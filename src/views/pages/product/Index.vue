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

        <b-row class="mb-5">
          <b-col sm="6" md="9" class="font-weight-bold">Result 8 list(s)</b-col>
          <b-col sm="6" md="3" class="text-right mt-3 mt-sm-0">
            <b-form-select v-model="selected" :options="options" class="btn-select"></b-form-select>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="3">
            <b-button
              v-b-toggle.collapse-filter
              class="category-collapse justify-content-center btn-filter d-md-none"
            >
              <span>
                <font-awesome-icon icon="filter" title="filter-btn" class="mr-2" />Filter
              </span>
            </b-button>

            <b-collapse id="collapse-filter" class="mt-2" v-model="visible">
              <b-button v-b-toggle.collapse-1 class="category-collapse">
                คล้องหูผู้ใหญ่
                <font-awesome-icon icon="chevron-up" class="mt-1" />
                <font-awesome-icon icon="chevron-down" class="mt-1" />
              </b-button>
              <b-collapse id="collapse-1" class="mt-2">
                <b-card>
                  <a href="#" class="category-list-txt">
                    สีฟ้า
                    <span class="text-right">(1)</span>
                  </a>
                  <a href="#" class="category-list-txt">
                    สีชมพู
                    <span class="text-right">(1)</span>
                  </a>
                  <a href="#" class="category-list-txt">
                    สีดำ
                    <span class="text-right">(1)</span>
                  </a>
                  <hr />
                </b-card>
              </b-collapse>

              <b-button v-b-toggle.collapse-2 class="category-collapse">
                สายคล้องคอผู้ใหญ่
                <font-awesome-icon icon="chevron-up" class="mt-1" />
                <font-awesome-icon icon="chevron-down" class="mt-1" />
              </b-button>
              <b-collapse id="collapse-2" class="mt-2">
                <b-card>
                  <a href="#" class="category-list-txt">
                    สีฟ้า
                    <span class="text-right">(1)</span>
                  </a>
                  <a href="#" class="category-list-txt">
                    สีชมพู
                    <span class="text-right">(1)</span>
                  </a>
                  <a href="#" class="category-list-txt">
                    สีดำ
                    <span class="text-right">(1)</span>
                  </a>
                  <hr />
                </b-card>
              </b-collapse>

              <b-button v-b-toggle.collapse-3 class="category-collapse">
                คล้องหูเด็ก
                <font-awesome-icon icon="chevron-up" class="mt-1" />
                <font-awesome-icon icon="chevron-down" class="mt-1" />
              </b-button>
              <b-collapse id="collapse-3" class="mt-2">
                <b-card>
                  <a href="#" class="category-list-txt">
                    สีฟ้า
                    <span class="text-right">(1)</span>
                  </a>
                  <a href="#" class="category-list-txt">
                    สีชมพู
                    <span class="text-right">(1)</span>
                  </a>
                  <a href="#" class="category-list-txt">
                    สีดำ
                    <span class="text-right">(1)</span>
                  </a>
                  <hr />
                </b-card>
              </b-collapse>

              <b-button v-b-toggle.collapse-4 class="category-collapse">
                สายคล้องคอเด็ก
                <font-awesome-icon icon="chevron-up" class="mt-1" />
                <font-awesome-icon icon="chevron-down" class="mt-1" />
              </b-button>
              <b-collapse id="collapse-4" class="mt-2">
                <b-card>
                  <a href="#" class="category-list-txt">
                    สีฟ้า
                    <span class="text-right">(1)</span>
                  </a>
                  <a href="#" class="category-list-txt">
                    สีชมพู
                    <span class="text-right">(1)</span>
                  </a>
                  <a href="#" class="category-list-txt">
                    สีดำ
                    <span class="text-right">(1)</span>
                  </a>
                  <hr />
                </b-card>
              </b-collapse>
            </b-collapse>
          </b-col>
          <b-col md="9">
            <b-row class="mt-4">
              <b-col cols="6" md="3">
                <div class="pointer" @click="showProduct('673272.jpg','Product 1')">
                  <div
                    :style="{ backgroundImage: 'url(' + require('@/assets/images/673272.jpg') + ')' }"
                    class="product-img shadow product"
                  ></div>
                  <div class="tag">คล้องหูผู้ใหญ่</div>
                  <p class="font-weight-bold mb-1">Product 1</p>
                  <p variant="dark" class="product-price">999 Baht</p>
                </div>
              </b-col>
              <b-col cols="6" md="3">
                <div class="pointer" @click="showProduct('673273.jpg','Product 2')">
                  <div
                    :style="{ backgroundImage: 'url(' + require('@/assets/images/673273.jpg') + ')' }"
                    class="product-img shadow product"
                  ></div>
                  <div class="tag">คล้องหูผู้ใหญ่</div>
                  <p class="font-weight-bold mb-1">Product 2</p>
                  <p variant="dark" class="product-price">999 Baht</p>
                </div>
              </b-col>
              <b-col cols="6" md="3">
                <div class="pointer" @click="showProduct('673274.jpg','Product 3')">
                  <div
                    :style="{ backgroundImage: 'url(' + require('@/assets/images/673274.jpg') + ')' }"
                    class="product-img shadow product"
                  ></div>
                  <div class="tag">คล้องหูผู้ใหญ่</div>
                  <p class="font-weight-bold mb-1">Product 3</p>
                  <p variant="dark" class="product-price">999 Baht</p>
                </div>
              </b-col>
              <b-col cols="6" md="3">
                <div class="pointer" @click="showProduct('673275.jpg','Product 4')">
                  <div
                    :style="{ backgroundImage: 'url(' + require('@/assets/images/673275.jpg') + ')' }"
                    class="product-img shadow product"
                  ></div>
                  <div class="tag">คล้องหูผู้ใหญ่</div>
                  <p class="font-weight-bold mb-1">Product 4</p>
                  <p variant="dark" class="product-price">999 Baht</p>
                </div>
              </b-col>
            </b-row>

            <b-row class="mt-4">
              <b-col cols="6" md="3">
                <div class="pointer" @click="showProduct('673276.jpg','Product 5')">
                  <div
                    :style="{ backgroundImage: 'url(' + require('@/assets/images/673276.jpg') + ')' }"
                    class="product-img shadow product"
                  ></div>
                  <div class="tag">คล้องหูผู้ใหญ่</div>
                  <p class="font-weight-bold mb-1">Product 5</p>
                  <p variant="dark" class="product-price">999 Baht</p>
                </div>
              </b-col>
              <b-col cols="6" md="3">
                <div class="pointer" @click="showProduct('673277.jpg','Product 6')">
                  <div
                    :style="{ backgroundImage: 'url(' + require('@/assets/images/673277.jpg') + ')' }"
                    class="product-img shadow product"
                  ></div>
                  <div class="tag">คล้องหูผู้ใหญ่</div>
                  <p class="font-weight-bold mb-1">Product 6</p>
                  <p variant="dark" class="product-price">999 Baht</p>
                </div>
              </b-col>
              <b-col cols="6" md="3">
                <div class="pointer" @click="showProduct('673278.jpg','Product 7')">
                  <div
                    :style="{ backgroundImage: 'url(' + require('@/assets/images/673278.jpg') + ')' }"
                    class="product-img shadow product"
                  ></div>
                  <div class="tag">คล้องหูผู้ใหญ่</div>
                  <p class="font-weight-bold mb-1">Product 7</p>
                  <p variant="dark" class="product-price">999 Baht</p>
                </div>
              </b-col>
              <b-col cols="6" md="3">
                <div class="pointer" @click="showProduct('673279.jpg','Product 8')">
                  <div
                    :style="{ backgroundImage: 'url(' + require('@/assets/images/673279.jpg') + ')' }"
                    class="product-img shadow product"
                  ></div>
                  <div class="tag">คล้องหูผู้ใหญ่</div>
                  <p class="font-weight-bold mb-1">Product 8</p>
                  <p variant="dark" class="product-price">999 Baht</p>
                </div>
              </b-col>
            </b-row>
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
      },
      selected: 1,
      visible: true,
      screenSize: 0,
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
  },
  created: async function() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.screenSize = window.innerWidth;
      if (this.screenSize > 767) this.visible = true;
      else this.visible = false;
    },
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
