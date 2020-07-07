<template>
  <div class="d-flex align-items-center min-vh-100">
    <b-container>
      <b-row class="justify-content-center">
        <c-col md="6">
          <b-card-group>
            <b-card class="p-4">
              <b-card-body>
                <b-form>
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <InputText
                    className="my-3"
                    v-model="form.username"
                    textFloat="Email"
                    placeholder="Email"
                    type="email"
                    name="email"
                    isRequired
                    :isValidate="$v.form.username.$error"
                    :v="$v.form.username"
                  />
                  <InputText
                    className="my-3"
                    v-model="form.password"
                    textFloat="Password"
                    placeholder="Password"
                    type="password"
                    name="password"
                    isRequired
                    :isValidate="$v.form.password.$error"
                    :v="$v.form.password"
                  />
                  <b-row>
                    <c-col>
                      <b-button
                        variant="primary"
                        type="button"
                        class="px-4"
                        @click="checkForm"
                      >Login</b-button>
                    </c-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </c-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import InputText from "@/components/inputs/InputText";

export default {
  name: "Login",
  components: {
    InputText
  },
  data() {
    return {
      error: "",
      form: {
        username: "",
        password: ""
      },
      isLoading: false
    };
  },
  validations() {
    return {
      form: {
        username: { required, email },
        password: { required, minLength: minLength(6) }
      }
    };
  },
  methods: {
    checkForm: async function() {
      this.$v.form.$touch();
      if (this.$v.form.$error) return;

      //-mock
      await this.$cookies.set("back_office_token", "1234", 60 * 60 * 24 * 30);
      window.location.href = "/";
      //-mock

     
      // this.isLoading = true;
      // this.error = "";
      // let data = await this.$callApi(
      //   "post",
      //   `${this.$baseUrl}/api/authenticate`,
      //   null,
      //   this.$headers,
      //   this.form
      // );
      // this.isLoading = false;
      // if (data.result == 1) {
      //   await this.$cookies.set(
      //     "back_office_token",
      //     data.detail,
      //     60 * 60 * 24 * 30
      //   );
      //   window.location.href = "/";
      // } else {
      //   this.error = data.detail;
      // }
    }
  }
};
</script>
