<template>
  <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            required
            v-model="job.title"
            name="title"
          />
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <input
            class="form-control"
            id="description"
            required
            v-model="job.description"
            name="description"
          />
        </div>
        <div class="form-group">
          <label for="title">Date</label>
          <input
            type="date"
            class="form-control"
            id="date"
            required
            v-model="job.date"
            name="date"
          />
        </div>
        <button @click="saveJob" class="btn btn-success">Submit</button>
      </div>

      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newJob">Add</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
  </template>

  <script>
  import JobDataService from "../services/DatabaseService";

  export default {
    name: "add-job",
    data() {
      return {
        job: {
          title: "",
          description: "",
          date: ""
        },
        submitted: false
      };
    },
    methods: {
      saveJob() {
        var data = {
          title: this.job.title,
          description: this.job.description,
          date: this.job.date
        };

        JobDataService.create(data)
          .then(() => {
            console.log("Created new item successfully!");
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },

      newJob() {
        this.submitted = false;
        this.job = {
          title: "",
          description: "",
          date: ""
        };
      }
    }
  };
  </script>

<style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>