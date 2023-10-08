<script>
export default {
  props: {
    modelValue: { type: String, default: "" },
  },
  emits: ["submit", "update:modelValue"],
  methods: {
    updateModelValue(e) {
      this.$emit("update:modelValue", e.target.value);
    },
    submit() {
      this.$emit("submit");
    }
  }
};
</script>

<template>
  <div class="input-group">
    <input
        :value="modelValue"
        class="form-control"
        placeholder="Nhập thông tin cần tìm"
        type="text"
        @input="updateModelValue"
        @keyup.enter="submit"
    />
    <div class="mx-1 input-group-append">
      <button
          class="btn btn-outline-secondary"
          type="button"
          @click="submit"
      >
        <i class="fa fa-search"></i> Tìm kiếm

      </button>
    </div>
  </div>
</template>