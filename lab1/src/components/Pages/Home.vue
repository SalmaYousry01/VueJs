<template>
  <div>
    <h1 class="my-5 d-flex justify-content-center">Home</h1>
  </div>
  <user-form />
  <AdminAndUserButtons />
  <AdminsAndUsers />
</template>

<script>
import UserForm from "../Form/UserForm.vue";
import AdminsAndUsers from "../AdminsAndUsers/AdminsAndUsers.vue";
import AdminAndUserButtons from "../AdminAndUserButtons.vue";
export default {
  name: "HomePage",
  components: {
    UserForm,
    AdminsAndUsers,
    AdminAndUserButtons,
  },
};
</script>

<style scoped></style>
