<template>
<div>

  <a-form
    id="components-form-demo-normal-lostpassword"
    :form="form"
    class="lostpassword-form height-50"
    @submit="handleSubmit"
  >
    <a-form-item
      :validate-status="emailNameError() ? 'error' : ''"
      :help="emailNameError() || ''"
    >
      <a-input
        v-decorator="[
          'userName',
          {rules: [{ required: true, message: 'Please input your Email!' }]}
        ]"
        placeholder="email"
      >
        <a-icon
          slot="prefix"
          type="user"
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
        Lost Password
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
  name: 'PasswordLostForm',
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
    emailNameError () {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('email') && getFieldError('email');
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
  #components-form-demo-normal-lostpassword .lostpassword-form {
    max-width: 300px;
  }
  #components-form-demo-normal-lostpassword .lostpassword-form-forgot {
    /* float: right; */
  }
  #components-form-demo-normal-lostpassword .lostpassword-form-btn {
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