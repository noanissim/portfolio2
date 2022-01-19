<template>
   <validation-observer ref="observer" v-slot="{ invalid }">
      <form
         action="https://formspree.io/f/xnqwjvaz"
         method="POST"
         class="form-section"
      >
         <validation-provider
            v-slot="{ errors }"
            name="Name"
            rules="required|max:20"
         >
            <v-text-field
               v-model="name"
               :counter="20"
               :error-messages="errors"
               label="Name"
               name="user name:"
               required
            ></v-text-field>
         </validation-provider>
         <validation-provider
            v-slot="{ errors }"
            name="phoneNumber"
            :rules="{
               required: false,
               digits: 10,
               regex: '^(050|052|053|054|055)\\d{7}$',
            }"
         >
            <v-text-field
               v-model="phoneNumber"
               :counter="10"
               :error-messages="errors"
               label="Phone Number"
               name="phone number"
            ></v-text-field>
         </validation-provider>
         <validation-provider
            v-slot="{ errors }"
            name="email"
            rules="required|email"
         >
            <v-text-field
               v-model="email"
               name="_replyto"
               :error-messages="errors"
               label="E-mail"
               required
            ></v-text-field>
         </validation-provider>
         <validation-provider
            v-slot="{ errors }"
            name="Message"
            rules="required"
         >
            <v-text-field
               v-model="message"
               :error-messages="errors"
               name="message: "
               label="Your Message"
               required
            ></v-text-field>
         </validation-provider>

         <div class="btn-section">
            <v-btn type="submit" :disabled="invalid" @click="handleClick">
               submit
            </v-btn>
            <v-btn @click="clear"> clear </v-btn>
         </div>
      </form>
      <v-snackbar
         v-model="snackbar"
         :timeout="timeout"
         color="green lighten-2"
         elevation="24"
      >
         {{ text }}

         <template v-slot:action="{ attrs }">
            <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
               Close
            </v-btn>
         </template>
      </v-snackbar>
   </validation-observer>
</template>

<script>
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('digits', {
   ...digits,
   message: '{_field_} needs to be {length} digits. ({_value_})',
})

extend('required', {
   ...required,
   message: '{_field_} can not be empty',
})

extend('max', {
   ...max,
   message: '{_field_} may not be greater than {length} characters',
})

extend('regex', {
   ...regex,
   message: '{_field_} {_value_} does not match {regex}',
})

extend('email', {
   ...email,
   message: 'Email must be valid',
})

export default {
   components: {
      ValidationProvider,
      ValidationObserver,
   },
   data: () => ({
      name: '',
      phoneNumber: '',
      email: '',
      message: '',
      snackbar: false,
      text: 'Your message was sent. Thank you!',
      timeout: 10000,
   }),
   created() {
      // this.clear()
   },
   destroyed() {
      this.clear()
   },

   methods: {
      handleClick() {
         console.log('clicked')
         setTimeout(() => {
            this.clear()
         }, 500)
      },
      submit() {
         // this.$refs.observer.validate() //using https://formspree.io/forms so it's not relavent
         this.clear()
         this.snackbar = true

      },
      clear() {
         this.name = ''
         this.phoneNumber = ''
         this.email = ''
         this.message = ''
         this.$refs.observer.reset()
      },
   },
}
</script>