<template>
  <nav class="navbar navbar-dark bg-dark">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active text-light" aria-current="page" href="#"
              >Home</a
            >
            <!-- <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> -->
          </div>
        </div>
      </div>
    </nav>
  </nav>
  <div>
    <h1 class="mt-3">Add User</h1>
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
  name: "NavBar",
  components: { UserForm, AdminsAndUsers, AdminAndUserButtons },
};
</script>

<style scoped></style>
