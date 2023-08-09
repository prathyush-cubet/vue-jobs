<template>
    <div v-if="currentJob" class="edit-form">
      <h4>Job</h4>
      <form>
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="currentJob.title"
          />
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <input
            type="text"
            class="form-control"
            id="description"
            v-model="currentJob.description"
          />
        </div>
        <div class="form-group">
          <label for="description">Date</label>
          <input
            type="date"
            class="form-control"
            id="date"
            v-model="currentJob.date"
          />
        </div>

        <div class="form-group">
          <label><strong>Status:</strong></label>
          {{ currentJob.date }}
        </div>
      </form>



      <button class="badge badge-danger mr-2" @click="deleteJob">
        Delete
      </button>

      <button type="submit" class="badge badge-success" @click="updateJob">
        Update
      </button>
      <p>{{ message }}</p>
    </div>

    <div v-else>
      <br />
      <p>Please click on a Job...</p>
    </div>
  </template>

  <script>
  import DatabaseService from "../services/DatabaseService";

  export default {
    name: "MyJob",
    props: ["job"],
    data() {
      return {
        currentJob: null,
        message: "",
      };
    },
    watch: {
      job: function(job) {
        this.currentJob = { ...job };
        this.message = "";
      },
    },
    methods: {
      updateJob() {
        const data = {
          title: this.currentJob.title,
          description: this.currentJob.description,
        };

        DatabaseService.update(this.currentJob.key, data)
          .then(() => {
            this.message = "The job was updated successfully!";
          })
          .catch((e) => {
            console.log(e);
          });
      },

      deleteJob() {
        DatabaseService.delete(this.currentJob.key)
          .then(() => {
            this.$emit("refreshList");
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
    mounted() {
      this.message = "";
      this.currentJob = { ...this.job }
    },
  };
  </script>

  <style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>