<script>
import OwnershipTable from "@/components/OwnershipTable.vue";

export default {
  components: { OwnershipTable },
  data() {
    return { ownerships: [] };
  },
  async created() {
    try {
      const response = await fetch("http://localhost:8080/ownerships");
      this.ownerships = await response.json();
    } catch (error) {
      console.error("Failed to fetch ownerships:", error);
    }
  },
  methods: {
    async deleteOwnership(id) {
      try {
        await fetch(`http://localhost:8080/ownerships/${id}`, { method: "DELETE" });
        this.ownerships = this.ownerships.filter(o => o.OwnerId !== id);
      } catch (error) {
        console.error("Failed to delete ownership:", error);
      }
    }
  }
};
</script>

<template>
  <div>
    <h2>Ownership List</h2>
    <OwnershipTable :ownerships="ownerships" @delete-ownership="deleteOwnership" />
  </div>
</template>
