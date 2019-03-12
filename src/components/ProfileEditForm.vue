<template>
  <div>
    <a-form
      id="components-form-demo-normal-profileedit"
      :form="form"
      class="profileedit-form height-50"
      @submit="handleSubmit"
    >
      <a-row :gutter="24">
        <a-col :span="12">
          <a-form-item
            :validate-status="userNameError() ? 'error' : ''"
            :help="userNameError() || ''"
          >
            <a-input
              v-decorator="[
                'userName',
                {rules: [{ required: true, message: 'Please input your username!' }]}
                ]"
              placeholder="Username"
            >
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item :validate-status="emailError() ? 'error' : ''" :help="emailError() || ''">
            <a-input
              v-decorator="[
                'email',
                {rules: [{ required: true, message: 'Please input your Email!' }]}
                ]"
              placeholder="email"
            >
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            :validate-status="firstNameError() ? 'error' : ''"
            :help="firstNameError() || ''"
          >
            <a-input
              v-decorator="[
                'firstName',
                {rules: [{ required: true, message: 'Please input your firstName!' }]}
                ]"
              placeholder="firstName"
            >
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            :validate-status="lastNameError() ? 'error' : ''"
            :help="lastNameError() || ''"
          >
            <a-input
              v-decorator="[
                            'lastName',
                            {rules: [{ required: true, message: 'Please input your LastName!' }]}
                            ]"
              placeholder="lastName"
            >
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            :validate-status="passwordError() ? 'error' : ''"
            :help="passwordError() || ''"
          >
            <a-input
              v-decorator="[
                'password',
                {rules: [{ required: true, message: 'Please input your Password!' }]}
                ]"
              type="password"
              placeholder="Password"
            >
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
        </a-col>

        <a-col :span="12"></a-col>
      </a-row>

      <a-row>
        <a-col :span="6">
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              class="signup-form-btn"
              :disabled="hasErrors(form.getFieldsError())"
            >Update Profile</a-button>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  name: "SignupForm",
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
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },

    firstNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("firstName") && getFieldError("firstName");
    },

    emailError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("email") && getFieldError("email");
    },

    lastNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("lastName") && getFieldError("lastName");
    },

    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("password") && getFieldError("password");
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


<style scoped>
#components-form-demo-normal-profileedit .profileedit-form {
  /* max-width: 300px; */
}
#components-form-demo-normal-profileedit .login-form-forgot {
  /* float: right; */
}
#components-form-demo-normal-profileedit .signup-form-btn {
  width: 100%;
}

.signup-btn,
.reset-password-btn {
  display: inline-block !important;
  text-decoration: none;
  padding: 15px;
  background: #1ab188 !important;
  color: #fff !important;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  transition: 0.5s ease;
  margin-right: 5px;
}
</style>
