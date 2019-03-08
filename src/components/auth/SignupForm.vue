<template>
<div>
  <a-form
    id="components-form-demo-normal-signup"
    :form="form"
    class="signup-form"
    @submit="handleSubmit"
  >

    <h1 class="auth-heading">Sign Up</h1>

    <a-row :gutter="12">
      <a-col :span="12">
        <a-form-item
          :validate-status="firstNameError() ? 'error' : ''"
          :help="firstNameError() || ''"
          label="First Name"
        >
          <a-input
            v-decorator="[
              'firstName',
              {rules: [{ required: true, message: 'Please input your first name!' }]}
            ]"
            placeholder="First Name"
            autocomplete="fname"
          >
            <a-icon
              slot="prefix"
              type="user"
            />
          </a-input>
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item
          :validate-status="firstNameError() ? 'error' : ''"
          :help="firstNameError() || ''"
          label="Last Name"
        >
          <a-input
            v-decorator="[
              'lastName',
              {rules: [{ required: true, message: 'Please input your last name!' }]}
            ]"
            placeholder="Last Name"
            autocomplete="lname"
          >
            <a-icon
              slot="prefix"
              type="user"
            />
          </a-input>
        </a-form-item>
      </a-col>
    </a-row>

    <a-form-item
      :validate-status="emailError() ? 'error' : ''"
      :help="emailError() || ''"
      label="Email Address"
    >
      <a-input
        v-decorator="[
          'email',
          {rules: [{ required: true, message: 'Please input your Email!' }]}
        ]"
        placeholder="you@example.com"
        autocomplete="email"
      >
        <a-icon
          slot="prefix"
          type="mail"
        />
      </a-input>
    </a-form-item>

    <a-row :gutter="12">
      <a-col :span="12">
        <a-form-item
          :validate-status="passwordError() ? 'error' : ''"
          :help="passwordError() || ''"
          label="Password"
        >
          <a-input
            v-decorator="[
              'password',
              {rules: [{ required: true, message: 'Please input your Password!' }]}
            ]"
            type="password"
            placeholder="Password"
            autocomplete="new-password"
          >
            <a-icon
              slot="prefix"
              type="lock"
            />
          </a-input>
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item
          :validate-status="passwordError() ? 'error' : ''"
          :help="passwordError() || ''"
          label="Confirm Password"
        >
          <a-input
            v-decorator="[
              'password_confirmation',
              {rules: [{ required: true, message: 'Please input your Password!' }]}
            ]"
            type="password"
            placeholder="Confirm Password"
            autocomplete="new-password"
          >
            <a-icon
              slot="prefix"
              type="lock"
            />
          </a-input>
        </a-form-item>
      </a-col>
    </a-row>

    <a-form-item class="align-right">
      <a-button
        type="primary"
        html-type="submit"
        class="signup-form-btn"
        :disabled="hasErrors(form.getFieldsError())"
      >
        Sign Up
      </a-button>
    </a-form-item>
  </a-form>

  <div class="align-center">
      <router-link to="/login" class="login-btn">Login</router-link>
    </div>
</div>
</template>

<script>
function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  name: 'SignupForm',
  data () {
    return {
      hasErrors,
      form: this.$form.createForm(this),
    };
  },
  mounted () {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError () {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('userName') && getFieldError('userName');
    },

    firstNameError () {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('firstName') && getFieldError('firstName');
    },

    emailError () {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('email') && getFieldError('email');
    },

    lastNameError () {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('lastName') && getFieldError('lastName');
    },

    // Only show error after a field is touched.
    passwordError () {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('password') && getFieldError('password');
    },

    handleSubmit  (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>


<style lang="less">

</style>
