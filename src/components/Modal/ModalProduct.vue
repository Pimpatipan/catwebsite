<template>
  <div>
    <b-modal
      v-model="showModal"
      hide-header
      hide-footer
      centered
      size="lg"
      id="modalProduct"
      ref="modalProduct"
    >
      <div class="modal-header p-0 border-0">
        <button
          type="button"
          aria-label="Close"
          class="close"
          @click="$bvModal.hide('modalProduct')"
        >×</button>
      </div>
      <div v-if="img != ''">
        <b-row>
          <b-col md="6">
            <div
              :style="{ backgroundImage: 'url(' + require('@/assets/images/'+img) + ')' }"
              class="product-img"
            ></div>
          </b-col>
          <b-col md="6">
            <h3 class="font-weight-bold">{{name}}</h3>
            <p class="product-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "modal-product",
  props: {
    isOpen: {
      required: false,
      type: Boolean
    }
  },
  data() {
    return {
      showModal: false,
      img: "",
      name: ""
    };
  },
  methods: {
    show(img, name) {
      this.img = img;
      this.name = name;
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    }
  }
};
</script>

<style scpoed>
.product-img {
  width: 100%;
  padding-bottom: 100%;
  background-size: contain;
  background-position: 50% center;
  background-repeat: no-repeat;
}

.modal-header {
  border-color: white;
}

.product-desc {
  font-size: 16px;
  color: #707070;
}
</style>