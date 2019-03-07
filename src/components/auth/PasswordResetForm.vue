<template>
<div>
  <a-form
    id="components-form-demo-normal-resetpassword"
    :form="form"
    class="resetpassword-form height-50"
    @submit="handleSubmit"
  >

    <a-form-item
      :validate-status="presentpasswordError() ? 'error' : ''"
      :help="presentpasswordError() || ''"
    >
      <a-input
        v-decorator="[
          'presentpassword',
          {rules: [{ required: true, message: 'Please input your Present Password!' }]}
        ]"
        type="password"
        placeholder="Present Password"
      >
        <a-icon
          slot="prefix"
          type="lock"
          style="color:rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>

    <a-form-item
      :validate-status="newpasswordError() ? 'error' : ''"
      :help="newpasswordError() || ''"
    >
      <a-input
        v-decorator="[
          'newpassword',
          {rules: [{ required: true, message: 'Please input your Password!' }]}
        ]"
        type="password"
        placeholder="New Password"
      >
        <a-icon
          slot="prefix"
          type="lock"
          style="color:rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>

    <a-form-item
      :validate-status="confirmpasswordError() ? 'error' : ''"
      :help="confirmpasswordError() || ''"
    >
      <a-input
        v-decorator="[
          'confirmpassword',
          {rules: [{ required: true, message: 'Please input your Confirm Password!' }]}
        ]"
        type="password"
        placeholder="Confirm Password"
      >
        <a-icon
          slot="prefix"
          type="lock"
          style="color:rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="hasErrors(form.getFieldsError())"
      >
        Reset Password
      </a-button>
    </a-form-item>
  </a-form>
</div>
</template>

<script>
function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  name: 'PasswordResetForm',
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
    newpasswordError () {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('newpassword') && getFieldError('newpassword');
    },

    presentpasswordError () {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('presentpassword') && getFieldError('presentpassword');
    },

    confirmpasswordError () {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('confirmpassword') && getFieldError('confirmpassword');
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

<style scoped>
  #components-form-demo-normal-resetpassword .resetpassword-form {
    max-width: 300px;
  }
  #components-form-demo-normal-resetpassword .resetpassword-form-forgot {
    /* float: right; */
  }
  #components-form-demo-normal-resetpassword .resetpassword-form-btn {
    width: 100%;
  }

</style>