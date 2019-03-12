<template>
  <div>
    <a-form
      id="components-form-demo-normal-lostpassword"
      :form="form"
      class="lostpassword-form height-50"
      @submit="handleSubmit"
    >
      <h1 class="auth-heading">Reset Your Password</h1>

      <a-form-item
        :validate-status="emailNameError() ? 'error' : ''"
        :help="emailNameError() || ''"
        label="Account Email"
      >
        <a-input
          v-decorator="[
          'userName',
          {rules: [{ required: true, message: 'Please input your Email!' }]}
        ]"
          placeholder="you@example.com"
          type="email"
          autocomplete="email"
        >
          <a-icon slot="prefix" type="mail" style="color:rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>

      <a-form-item class="align-right">
        <a-button
          type="primary"
          html-type="submit"
          :disabled="hasErrors(form.getFieldsError())"
        >Reset Password</a-button>
      </a-form-item>
    </a-form>

    <div class="align-center">
      <router-link to="/signup" class="signup-btn">Signup</router-link>
      <a-divider type="vertical"/>
      <router-link to="/login" class="login-form-forgot">Login</router-link>
    </div>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  name: "PasswordLostForm",
  data() {
    return {
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
    emailNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("email") && getFieldError("email");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>

<style>
</style>
