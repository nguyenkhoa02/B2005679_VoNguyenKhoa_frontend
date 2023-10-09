<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default{
  components: {ContactForm},
  data() {
    return {
      contact: {
        "name": "",
        "address": "",
        "phone": "",
        "email": "",
        "favorite": ""
      },
      message: "",
    };
  },
  methods: {
    async createContact(data) {
      try {
        await ContactService.create(data);
        this.message = "Liên hệ được thêm thành công.";
      }
      catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.message = "";
  },
};
</script>

<template>
  <div class="page">
    <h4>Thêm liên hệ</h4>
    <ContactForm
        :contact= {contact}
        @submit:contact="createContact"
        ></ContactForm>
    <p>{{message}}</p>
  </div>
</template>

<style scoped>

</style>