<template>
  <div class="table-container container w-100 mt-4">
    <table class="table w-100">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.role }}</td>
          <td>
            <button class="btn btn-danger" @click="deleteUser(index)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AdminsAndUsers",
  data() {
    return {
      name: "",
      age: null,
      id: 0,
      role: "User",
    };
  },
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
  },
  methods: {
    deleteUser(userIndex) {
      const userDeleted = this.users[userIndex];
      this.$store.dispatch("DeleteUser", userDeleted);
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

button.btn {
  padding: 5px 10px;
  border: none;
  background-color: #dc3545;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}
</style>
