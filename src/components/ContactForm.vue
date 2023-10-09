<script>
import * as yup from "yup";
import {ErrorMessage, Field, Form} from "vee-validate";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  emits: ["submit:contact", "delete:contact"],
  props: {
    contact: {type: Object, required: true}
  },

  data() {
    const contactFormSchema = yup.object().shape({
      name: yup
          .string()
          .required("Tên phải có giá trị.")
          .min(2, "Tên phải ít nhất 2 ký tự.")
          .max(50, "Tên có nhiều nhất 50 ký tự."),
      email: yup
          .string()
          .email("E-mail không đúng.")
          .max(50, "E-mail tối đa 50 ký tự."),
      address: yup
          .string()
          .max(100, "Địa chỉ tối đa 100 ký tự."),
      phone: yup
          .string()
          .matches(/(09|03|07|08|05)+([0-9]{8}\b)/g,
              "Số điện thoại không hợp lệ.")
    });
    return {
      contactLocal: this.contact,
      contactFormSchema,
    }
  },
  methods: {
    deleteContact() {
      this.$emit("delete:contact", this.contactLocal.id);
    },

    submitContact() {
      this.$emit("submit:contact", this.contactLocal);
    },

    resetContact() {
      this.contactLocal = this.contact;
    }

  }
};

</script>

<template>
  <Form
      :validation-schema="contactFormSchema"
      @submit="submitContact"
  >
    <div class="form-group">
      <label for="name">Tên</label>
      <Field
          v-model="contactLocal.name"
          class="form-control"
          name="name"
          type="text"
      ></Field>
      <ErrorMessage class="error-feedback" name="name"></ErrorMessage>
    </div>
    <div>
      <label for="email">E-mail</label>
      <Field
          v-model="contactLocal.email"
          class="form-control"
          name="email"
          type="text"
      ></Field>
      <ErrorMessage class="error-feedback" name="email"></ErrorMessage>
    </div>

    <div>
      <label for="address">Địa chỉ</label>
      <Field
          v-model="contactLocal.address"
          class="form-control"
          name="address"
          type="text"
      ></Field>
      <ErrorMessage class="error-feedback" name="address"></ErrorMessage>
    </div>

    <div>
      <label for="phone">Điện thoại</label>
      <Field
          v-model="contactLocal.phone"
          class="form-control"
          name="phone"
          type="text"
      ></Field>
      <ErrorMessage class="error-feedback" name="phone"></ErrorMessage>
    </div>

    <div class="form-check">
      <input
          v-model="contactLocal.favorite"
          class="form-check-input"
          name="favorite"
          type="checkbox"
      />
      <label class="form-check-label" for="favorite">
        <strong>Liên hệ yêu thích</strong>
      </label>
    </div>

    <div class="mt-2">
      <button class=" btn btn-primary">
        <i class="fa-solid fa-floppy-disk"></i> Lưu
      </button>
      <button
          v-if="contactLocal._id"
          class="ms-2 btn btn-danger"
          type="button"
          @click="deleteContact"
      >
        <i class="fa-solid fa-trash"></i> Xóa
      </button>
      <button
          v-else
          class="ms-2 btn btn-danger"
          type="button"
          @click="resetContact"
      >
        <i class="fa-solid fa-rotate-right"></i> Làm mới
      </button>
    </div>


  </Form>

</template>

<style scoped>
@import "@/assets/form.css";
</style>