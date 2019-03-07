<template>
  <div>
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form height-50"
      @submit="handleSubmit"
    >
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
          <a-icon
            slot="prefix"
            type="user"
            style="color:rgba(0,0,0,.25)"
          />
        </a-input>
      </a-form-item>
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
          <a-icon
            slot="prefix"
            type="lock"
            style="color:rgba(0,0,0,.25)"
          />
        </a-input>
      </a-form-item>

      <div style="display:flex; justify-content:space-between">
          <a-form-item >
              <a-checkbox
              > 
                Remember me
              </a-checkbox>
          </a-form-item>
          <router-link to="/lost-password" class="login-form-forgot" style="line-height: 39px;"> Forget Password</router-link>
      </div>
      
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          :loading="loading"
          :disabled="hasErrors(form.getFieldsError())"
          class="login-form-btn"
        >
          Log in
        </a-button>
      </a-form-item>
    </a-form>
    
    <div style="display:flex; justify-content:space-between">
      <router-link to="/signup" class="signup-btn">signup</router-link>
      <router-link to="/reset-password" class="reset-password-btn">reset-password</router-link>
    </div>
  </div>
</template>

<script>
function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  name: 'Login',
  data () {
    return {
      loading: false,
      iconLoading: false,
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
    // Only show error after a field is touched.
    passwordError () {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('password') && getFieldError('password');
    },
    handleSubmit  (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.loading = true;
          this.$store.dispatch('login');
          this.$router.push('/');
          console.log('Received values of form: ', values);
        }
      });
    },
    enterLoading () {
      this.loading = true
    },
    enterIconLoading () {
      this.iconLoading = { delay: 1000 }
    },
  },
};
</script>


<style scoped>
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    /* float: right; */
  }
  #components-form-demo-normal-login .login-form-btn {
    width: 100%;
  }

  .signup-btn, .reset-password-btn{
    display: inline-block !important;
    text-decoration: none;
    padding: 15px;
    background: #1ab188 !important;
    color: #fff !important;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    transition: .5s ease;
    margin-right: 5px;
  }
</style>