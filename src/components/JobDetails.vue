<template>
    <div v-if="currentJob">
      <h4>Job</h4>
      <form>
        <div class="form-group">
          <label for="title">Title</label>
          <pre>{{currentJob.title}}</pre>
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          {{currentJob.description}}
        </div>
        <div class="form-group">
          <label for="date">Date</label>
          {{currentJob.date}}
        </div>
      </form>


      <p>{{ message }}</p>
    </div>

    <div v-else>
      <br />
      <p>Please click on a Job...</p>
    </div>
  </template>

  <script>
  export default {
    name: "JobDetails",
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
    mounted() {
      this.message = "";
      this.currentJob = { ...this.job }

    },
  };
  </script>
