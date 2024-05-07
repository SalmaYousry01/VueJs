<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            class="form-control"
            v-model.trim.lazy="name"
          />
        </div>
      </div>

      <div class="col-md-6">
        <div class="mb-3">
          <label for="age" class="form-label">Age</label>
          <input
            type="number"
            id="age"
            placeholder="Enter your age"
            class="form-control"
            v-model.lazy.number="age"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label class="form-label">Role</label>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle w-100"
              type="button"
              id="roleDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ role }}
            </button>
            <ul class="dropdown-menu" aria-labelledby="roleDropdown">
              <li><a class="dropdown-item" @click="updateRole('Admin')">Admin</a></li>
              <li><a class="dropdown-item" @click="updateRole('User')">User</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <button type="submit" class="btn btn-success w-100" @click="InsertUser()">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "UserForm",
  data() {
    return {
      role: "User",
      name: "",
      id: 1,
      age: null,
    };
  },

  methods: {
    InsertUser() {
      if (this.age <= 0) {
        alert("Age must be a positive number");
        return;
      }
      this.$store.dispatch("insertUser", {
        id: this.id,
        name: this.name,
        age: this.age,
        role: this.role,
      });
      ++this.id;
    },
    updateRole(newRole) {
      this.role = newRole;
    },
  },
};
</script>

<style scoped>
input.form-control {
  height: 40px;
}

button.btn {
  width: 100%;
  height: 40px;
}

.container {
  padding: 20px;
}

.role {
  width: 100px !important;
}

.role-button {
  display: flex;
  justify-content: start;
  align-items: left;
}
</style>
