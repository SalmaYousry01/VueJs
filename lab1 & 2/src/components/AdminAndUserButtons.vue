<!-- <template>
  <div class="d-flex container justify-content-center gap-2">
    <div class="col-6">
      <button type="submit" class="btn btn-dark" @click="filterUsers(User)">
        Users
      </button>
    </div>
    <div class="col-6">
      <button type="submit" class="btn btn-dark" @click="filterUsers(Admin)">
        Admins
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AdminAndUserButtons",
  data() {
    return {
      role: null,
    };
  },
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
  },
  methods: {
    filterUsers(role) {
      let newArr = this.users.filter((user) => user.role === role);
      this.users = newArr;
    },
  },
};
</script>

<style scoped>
button {
  width: 70%;
  height: 40px;
}
</style> -->
