<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <h2>{{ contact.title }}</h2>
      </div>
    </div>
    <form id="contact_form" name="contact" @submit.prevent="validateBeforeSubmit" :action="contact.action" method="post" class="container">

      <input type="hidden" name="_after" :value="contact.after">
      <input type="hidden" name="_replyto" :value="contact.replyto">
      <input type="text" name="_honey" value="" style="display:none">

      <div class="form-group row">
        <label :for="contact.fields.name.name" class="col-sm-2 col-xs-12 form-control form-control-label form-control-lg">{{ contact.fields.name.label }}</label>
        <div class="col-sm-10 col-xs-12">
          <input
            type="text"
            :id="contact.fields.name.name"
            :name="contact.fields.name.name"
            :placeholder="contact.fields.name.placeholder"
            v-model.trim="name"
            @blur="$v.name.$touch()"
            class="form-control form-control-lg"
            :class="{ 'alert-success': isSuccess($v.name), 'alert-danger': $v.name.$error }"
          >
          <!-- <span class="form-group__message" v-if="$v.name.$error">Required: Can only contain letters and numbers, between 3 and 40 characters long.</span> -->
        </div>
      </div>

      <div class="form-group row">
        <label :for="contact.fields.email.name" class="col-sm-2 col-xs-12 form-control form-control-label form-control-lg">{{ contact.fields.email.label }}</label>
        <div class="col-sm-10 col-xs-12">
          <input
            type="text"
            :id="contact.fields.email.name"
            :name="contact.fields.email.name"
            :placeholder="contact.fields.email.placeholder"
            v-model.trim="email"
            @blur="$v.email.$touch()"
            class="form-control form-control-lg"
            :class="{ 'alert-success': isSuccess($v.email), 'alert-danger': $v.email.$error }"
          >
          <!-- <span class="form-group__message" v-if="$v.email.$error">Required: Must be an e-mail address.</span> -->
        </div>
      </div>

      <div class="form-group row">
        <label :for="contact.fields.message.name" class="col-sm-2 col-xs-12 form-control form-control-label form-control-lg">{{ contact.fields.message.label }}</label>
        <div class="col-sm-10 col-xs-12">
          <fieldset class="form-group">
            <textarea
              :id="contact.fields.message.name"
              :name="contact.fields.message.name"
              :placeholder="contact.fields.message.placeholder"
              v-model.trim="message"
              @blur="$v.message.$touch()"
              class="form-control form-control-lg"
              :class="{ 'alert-success': isSuccess($v.message), 'alert-danger': $v.message.$error }"
              rows="3"
            ></textarea>
          </fieldset>
          <!-- <span class="form-group__message" v-if="$v.message.$error">Required: Must be between 20 and 800 characters long.</span> -->
        </div>
      </div>
      
      <div class="form-group row">
        <label for="submit" class="col-sm-2 col-xs-12 form-control form-control-label form-control-lg"></label>
        <div class="col-md-10 offset-md-2 col-xs-12">
          <button type="submit" class="btn btn-primary btn-lg">Send</button>
        </div>
      </div>

      <div v-show="validationSummary.messages.length" class="form_messages alert alert-danger col-xs-12">
        <transition-group name="fade">
          <p v-for="message in validationSummary.messages" :key="message">
            {{message}}
          </p>
        </transition-group>
      </div>

    </form>
  </div>
</template>

<script>
import { required, alphaNum, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { Summary } from './validationSummary.js'

export default {
  name: 'contact',
  props: ['contact'],
  data () {
    return {
      email: '',
      name: '',
      message: ''
    }
  },
  computed: {
    validationSummary: Summary
  },
  methods: {
    isSuccess (v) {
      return !v.$invalid && v.$dirty
    }
  },
  validations: {
    name: {
      required,
      alphaNum,
      minLength: minLength(3),
      maxLength: maxLength(40)
    },
    email: {
      required,
      email
    },
    message: {
      required,
      minLength: minLength(20),
      maxLength: maxLength(800)
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
.form_messages.alert p {
  margin: 0;
}
</style>