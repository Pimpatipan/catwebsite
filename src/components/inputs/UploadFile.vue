<template>
  <div>
    <div class="div-input">
      <div :class="['input-custom', { error: isValidate }]">
        <label>
          {{textFloat}}
          <span v-if="isRequired" class="text-danger">*</span>
        </label>
        <div class="d-flex justify-content-center align-items-center">
          <div class="w-100 display-only">
            <input
              :class="['custom-input']"
              :type="type"
              :placeholder="placeholder"
              :name="name"
              :required="required"
              :value="fileName"
              :size="size"
            />
          </div>
          <label class="mb-0 btn-main" :size="size">
            <input
              type="file"
              v-on:change="handleFileChange"
              :required="required"
              :name="name"
              ref="input"
            />
            <font-awesome-icon icon="upload" color="white" class="bg-icon" :size="size" />
          </label>
        </div>
      </div>
      <!-- <b-button
        type="button"
        class="btn-download-file"
        variant="link"
        @click.prevent="downloadItem(downloadPath)"
      >{{fileName}}</b-button> -->
      <p class="detail-format">{{text}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    textFloat: {
      required: true,
      type: String
    },
    text: {
      required: true,
      type: String
    },
    format: {
      required: true,
      type: String
    },
    fileName: {
      required: true,
      type: String
    },
    required: {
      required: false,
      type: Boolean
    },
    name: {
      required: false,
      type: String
    },
    isRequired: {
      required: false,
      type: Boolean
    },
    isValidate: {
      required: false,
      type: Boolean
    },
    placeholder: {
      required: true,
      type: String
    },
    size: {
      required: false,
      type: String
    },
    downloadPath: {
      required: false,
      type: String
    }
  },
  data() {
    return {
      file: "",
      value: "",
      type: {
        all: ["image/jpeg", "image/png", "application/pdf", ""],
        file: ["image/jpeg", "image/png", "application/pdf"],
        pdf: ["application/pdf"],
        png: ["image/png"],
        image: ["image/jpeg", "image/png"]
      },
      error: "",
      hasError: false
    };
  },
  methods: {
    handleFileChange(e) {
      this.hasError = false;
      this.error = "";
      var _validFileExtensions = this.type.file;
      if (this.format == "image") {
        _validFileExtensions = this.type.image;
      }
      this.value = e.target.files[0];
      if (e.target.files.length) {
        if (_validFileExtensions.indexOf(this.value.type) < 0) {
          this.value = "";
          this.$refs.input.value = "";
          this.error = `*${this.$t("invalidFileType")}`;
          this.hasError = true;
        }
      } else {
        this.value = "";
        this.$refs.input.value = "";
        this.hasError = true;
      }
      this.$emit("onFileChange", this.value);
    },
    downloadItem: async function(path) {
      let pathFile = path;
      axios({
        url: pathFile,
        method: "GET",
        headers: null,
        responseType: "blob"
      }).then(response => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement("a");

        fileLink.href = fileURL;
        fileLink.setAttribute("download", `download.${response.data.type.split("/").pop(-1)}`);
        document.body.appendChild(fileLink);
        fileLink.click();
      });
    }
  }
};
</script>

<style scoped>
input[type="file"] {
  display: none;
}
.detail-format {
  color: #9b9b9b;
  font-size: 12px;
  font-family: "Kanit-Light";
  margin-top: 3px;
  margin-bottom: 0px;
}
.bg-icon {
  width: 25px;
  height: 25px;
  margin: 5px 0px;
}
.bg-icon.fa-lg {
  margin: 8px 0px;
}
.div-input {
  margin-bottom: 15px;
  position: relative;
  white-space: nowrap;
}
.input-custom {
  padding: 0px;
}
.input-custom > label {
  color: #16274a;
  font-size: 17px;
  margin-bottom: 2px;
}
input.custom-input {
  color: #16274a;
  background-color: white;
  border: 1px solid #bcbcbc;
  border-radius: 0px;
  padding: 5px 10px;
}
label[size="lg"].btn-main,
input[size="lg"].custom-input {
  height: 45px;
}
.input-custom.error .custom-input {
  border-color: red !important;
}
::-webkit-input-placeholder {
  /* Edge */
  color: rgba(22, 39, 74, 0.4);
}
:-ms-input-placeholder {
  /* Internet Explorer */
  color: rgba(22, 39, 74, 0.4);
}
::placeholder {
  color: rgba(22, 39, 74, 0.4);
}
.custom-input {
  display: block;
  border: none;
  width: 100%;
}
.text-desc {
  color: #16274a;
  font-size: 15px;
  font-family: "Kanit-Light";
}
.display-only {
  position: relative;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.btn-main {
  width: 120px;
  text-align: center;
  height: 36px;
  vertical-align: middle;
  cursor: pointer;
}
.btn-download-file {
  padding: 0;
  text-decoration: underline;
}
@media (max-width: 767.98px) {
  .input-custom > label {
    font-size: 15px;
  }
  .detail-format {
    font-size: 11px;
  }
}
</style>

