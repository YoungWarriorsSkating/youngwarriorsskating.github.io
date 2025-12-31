<template>
    <div id="contact" class="mt-24 bg-white">
        <div class="flex flex-wrap items-start justify-around justify-center  xs:p-4">
            <div class="md:w-1/3 xs:w-full text-main-black">
                <h1 class="text-main-black font-semibold text-2xl">
                    Contact with us
                </h1>
                <div id="Locations" class="mt-12 font-bold">
                    Location
                </div>
                <div class="mt-2 md:text-base xs:text-sm">
                  
                    <div>
                        6, Sri Aiyappa Nagar 7th St, Munusamy Nagar, 
                    </div>
                    <div>
                         Ponniammanmedu, Chennai, 
                    </div>
                    <div>
                        Tamil Nadu 600110
                    </div>
                    <div>
                      
                  <div class="mt-5 map-container" style="overflow:hidden; padding-bottom:56.25%; position:relative; height:0;">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.3990414163063!2d80.2222216!3d13.1372108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52650030ce6e49%3A0x1a9a46e7c9366773!2sYOUNG%20WARRIORS%20SKATING%20ACADEMY!5e0!3m2!1sen!2sin!4v1767077891062!5m2!1sen!2sin" 
    width="600" 
    height="450" 
    style="border:0; position:absolute; top:0; left:0; width:100%; height:100%;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>
                    </div>
                </div>
                <div class="flex mt-12 opacity-75 items-center">
                  <a target="_blank" class="flex items-center" href="https://wa.me/917338881156?text=Hi">
                    <img src="./../assets/whatsapp-icon-logo-svgrepo-com.svg" alt="" class="h-8 mr-2">
                    <span class="text-base">7338881156</span>
                    </a>
                </div>
                <div class="flex mt-2 opacity-75 items-center">
                    <img src="./../assets/phone-call-telephone-svgrepo-com.svg" alt="" class="h-8 mr-2">
                    <span class="text-base">9788261156</span>
                    
                </div>
                <div class="flex mt-2 opacity-75 items-center">
                    <img src="./../assets/phone-call-telephone-svgrepo-com.svg" alt="" class="h-8 mr-2">
                    <span class="text-base">7871919383</span>
                    
                </div>
                <div class="flex items-center mt-2 opacity-75">
                    <img src="./../assets/email-opened-svgrepo-com.svg" alt="" class="h-8 mr-2">
                    <a href="mailto:Youngwarriorsskating@gmail.com" class="no-underline text-base text-main-green">Youngwarriorsskating@gmail.com</a>
                </div>
                
            <div class="mt-5">
                <a target="_blank" href="https://www.facebook.com/share/1Gi6YMFJcd/">
                    <img src="./../assets/facebook-3-logo-svgrepo-com.svg" alt="facebook icon" class="h-12 mr-6">
                </a>
                <a target="_blank" href="https://www.instagram.com/_youngwarriors_skating_academy">
                    <img src="./../assets/instagram-2-1-logo-svgrepo-com.svg" alt="instagram icon" class="h-12 mr-6">
                </a>
            </div>
            </div>
            <div class="md:w-1/3 xs:w-full md:mt-0 xs:mt-6">
                <form action="#" method="post" class="" v-on:submit.prevent>
                    <div class="xs:block text-extrabold mt-6 mb-4 text-2xl">
                        Send us a message
                    </div>

                    <div class="mb-6">
                        <span v-if="error.nameEmpty">
                            <input v-model="name" :disabled="showLoader"  type="text" placeholder="Name" class="w-full border border-red-light bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none mr-2">
                            <span class="text-main-black font-semibold text-xs opacity-75">
                                Please enter your name before sumbiting the message
                            </span>
                        </span>
                        <span v-else>
                            <input v-model="name" :disabled="showLoader"  type="text" placeholder="Name" class="w-full bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none mr-2">
                        </span>
                    </div>

                    <div class="mb-6">
                        <span v-if="error.emailEmpty">
                            <input v-model="email" :disabled="showLoader"  type="text" placeholder="Email" class="w-full border border-red-light bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none">
                            <span class="text-main-black font-semibold text-xs opacity-75">
                                Please enter your email before sumbiting the message
                            </span>
                        </span>

                        <span v-else>
                            <span v-if="error.emailWrong">
                                <input v-model="email" :disabled="showLoader"  type="text" placeholder="Email" class="w-full border border-red-light bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none">
                                <span class="text-main-black font-semibold text-xs opacity-75">
                                    Please enter a valid email address
                                </span>
                            </span>
                            <span v-else>
                                <input v-model="email" :disabled="showLoader"  type="text" placeholder="Email" class="w-full bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none">
                            </span>
                        </span>
                    </div>
                    
                    <div class="mb-6">
                        <span v-if="error.phoneEmpty">
                            <input v-model="phone" :disabled="showLoader"  type="text" placeholder="Phone number" class="w-full border border-red-light bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none">
                            <span class="text-main-black font-semibold text-xs opacity-75">
                                Please enter your phone number before sumbiting the message
                            </span>
                        </span>

                        <span v-else>
                            <span v-if="error.phoneWrong">
                                <input v-model="phone" :disabled="showLoader"  type="text" placeholder="Phone number" class="w-full border border-red-light bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none">
                                <span class="text-main-black font-semibold text-xs opacity-75">
                                    Please enter a valid phone number
                                </span>
                            </span>
                            <span v-else>
                                <input v-model="phone" :disabled="showLoader"  type="text" placeholder="Phone number" class="w-full bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none">
                            </span>
                        </span>
                    </div>

                    <div class="mb-6">
                        <span v-if="error.messageBodyEmpty">
                            <textarea v-model="messageBody" :disabled="showLoader"  placeholder="Message" class="w-full border border-red-light bg-grey-lightest py-16 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none"></textarea>
                            <span class="text-main-black font-semibold text-xs opacity-75">
                                Please enter a message before sumbiting the message
                            </span>
                        </span>

                        <span v-else>
                            <textarea v-model="messageBody" :disabled="showLoader"  placeholder="Message" class="w-full bg-grey-lightest py-16 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none"></textarea>
                        </span>
                    </div>
                    

                    
                    <div class="w-full md:text-right xs:text-center grid-container">
                        <button @click="checkForm" :disabled="showLoader" :class="[showLoader? 'bg-main-green px-4 py-4 rounded font-medium text-center xs:w-full text-grey' : 'bg-main-green px-4 py-4 rounded font-medium text-center xs:w-full text-grey-lightest']">Send Message</button>
                        <img v-show="showLoader" src="./../assets/bars-scale-fade.svg" alt="send icon" class="inline-block top h-12">
                    </div>
                    
                    <!-- <button class="bg-yellow-dark uppercase px-4 py-4 rounded font-black text-yellow-darker border-b-4 border-yellow-darker mb-4">Create -->
                    <!-- my account</button> -->
                </form>
            </div>
        </div>

        <div class="flex items-center justify-center" v-show="alert">
            <div class="bg-green-lightest border border-green-light text-green-dark px-12 py-3 rounded relative" role="alert">
            <strong class="font-bold">Your message has been sent successfully.</strong>
            <span class="absolute pin-t pin-b pin-r px-4 py-3">
                <svg @click="alert=false" class="fill-current h-6 w-6 text-red-light opacity-75" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
            </div>
        </div>


    </div>
</template>

<script>

import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      error: {
        nameEmpty: false,
        emailEmpty: false,
        phoneEmpty: false,
        phoneWrong: false,
        emailWrong: false,
        messageBodyEmpty: false,
        database: false
      },
      name: null,
      email: null,
      messageBody: null,
      phone: null,
      showLoader: false,
      alert: false,
      templateParams:{
  name: 'James',
  time: new Date(),
  email:'',
  message:'',
  phone:''
}
    };
  },
  computed: {
    hasNoErrors() {
      return (
        !this.error.nameEmpty &&
        !this.error.emailEmpty &&
        !this.error.emailWrong &&
        !this.error.messageBodyEmpty &&
        !this.error.phoneEmpty &&
        !this.error.phoneWrong
      );
    }
  },
  methods: {
    emailValidation(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    //method to validate indian phone numbers
    phoneValidation(phone) {  
      var re = /^[6-9]\d{9}$/;
      return re.test(String(phone));
    },

    checkForm() {
      if (!this.name) {
        this.error.nameEmpty = true;
      } else {
        this.error.nameEmpty = false;
      }

      if (!this.email) {
        this.error.emailEmpty = true;
      } else {
        if (this.emailValidation(this.email)) {
          this.error.emailWrong = false;
        } else {
          this.error.emailWrong = true;
        }
        this.error.emailEmpty = false;
      }

      if (!this.phone) {
        this.error.phoneEmpty = true;
      } else {
        if (this.phoneValidation(this.phone)) {
          this.error.phoneWrong = false;
        } else {
          this.error.phoneWrong = true;
        }
        this.error.phoneEmpty = false;
      }

      if (!this.messageBody) {
        this.error.messageBodyEmpty = true;
      } else {
        this.error.messageBodyEmpty = false;
      }

      if (this.hasNoErrors) {
        this.templateParams.name=this.name;
        this.templateParams.email=this.email;
        this.templateParams.message=this.messageBody;
        this.templateParams.time=new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
        this.templateParams.phone=this.phone;
        this.showLoader = true;
        this.submitMessage();
      }
    },

    submitMessage() {
        emailjs
  .send(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, this.templateParams, {
    publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
  })
  .then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      this.alert = true;
      this.resetForm();
      this.showLoader = false;
    },
    (err) => {
      console.log('FAILED...', err);
      this.customEmail();
      this.showLoader = false;
    },
  );
    },

    customEmail() {
      window.open(
        `mailto:youngwarriorsskating@gmail.com?subject=${this.name}&body=${this.messageBody}`
      );
    },

    resetForm() {
      this.name = null;
      this.email = null;
      this.messageBody = null;
      this.phone = null;
    },

  },
  mounted() {}
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-areas: "stack"; /* Define one area */
}

.grid-container > * {
  grid-area: stack; /* Both children go to the same spot */
}
.top {
  align-self: center;
  justify-self: center;
}
</style>