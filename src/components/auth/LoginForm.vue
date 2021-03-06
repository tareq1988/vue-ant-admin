<template>
  <div>
    <a-form
      id="login-form"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
      layout="vertical"
    >
      <h1 class="auth-heading">Login</h1>

      <a-form-item
        :validate-status="userNameError() ? 'error' : ''"
        :help="userNameError() || ''"
        label="Email Address"
      >
        <a-input
          v-decorator="[
            'userName',
            {rules: [{ required: true, message: 'Please input your email address!' }]}
          ]"
          type="email"
          placeholder="E-mail address"
          autocomplete="email"
        >
          <a-icon slot="prefix" type="mail"/>
        </a-input>
      </a-form-item>

      <a-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
        <template slot="label">Password
          <router-link to="/lost-password" class="login-form-forgot">Lost your password?</router-link>
        </template>
        <a-input
          v-decorator="[
            'password',
            {rules: [{ required: true, message: 'Please input your password!' }]}
          ]"
          type="password"
          placeholder="Password"
          autocomplete="current-password"
        >
          <a-icon slot="prefix" type="lock"/>
        </a-input>
      </a-form-item>

      <a-form-item class="align-right">
        <a-button
          type="primary"
          html-type="submit"
          :loading="loading"
          :disabled="hasErrors(form.getFieldsError())"
          class="login-form-btn"
        >Log in</a-button>
      </a-form-item>
    </a-form>

    <div class="align-center">Need an account?
      <router-link to="/signup" class="signup-btn">Signup</router-link>
    </div>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  name: "Login",
  data() {
    return {
      loading: false,
      iconLoading: false,
      hasErrors,
      form: this.$form.createForm(this)
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("password") && getFieldError("password");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(err => {
        if (!err) {
          this.loading = true;

          let user = {
            id: 1,
            first_name: "Britney",
            last_name: "Cooper",
            email: "john@doe.com",
            api_token: "1212121",
            avatar: "https://randomuser.me/api/portraits/women/63.jpg"
          };

          setTimeout(() => {
            this.loading = false;
            this.$store.dispatch("login", user);
            this.$router.push("/");
          }, 1000);
        }
      });
    },
    enterLoading() {
      this.loading = true;
    },
    enterIconLoading() {
      this.iconLoading = { delay: 1000 };
    }
  }
};
</script>


<style lang="less">
.ant-form {
  &.login-form,
  &.signup-form,
  &.lostpassword-form {
    background: #fff;
    padding: 15px 25px 5px 25px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.13);
    margin-bottom: 20px;
    margin-top: 20px;
  }

  a.login-form-forgot {
    float: right;
    font-size: 13px;
  }

  .auth-heading {
    text-align: center;
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 10px;
  }

  .ant-form-item {
    margin-bottom: 10px;
  }

  .ant-form-item-required:before {
    content: "";
  }

  .ant-form-item-required::after {
    display: inline-block;
    margin-right: 4px;
    content: "*";
    line-height: 1;
    font-size: 14px;
    color: #f5222d;
  }
}
</style>
