<template>
    <div v-if="currentJob">
      <h4>Job</h4>
      <form @submit.prevent="apply(currentJob.key)">
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
        <div class="form-group">
          <button>Apply</button>
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
  import firebase from "../firebase";
  const db = firebase.ref("/applications");
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
    methods: {
      apply(key) {
        var user =this.$store.getters.user.data;
        var data = [];
        data['jobId'] = key;
        data['email'] = user.email;
        db.push(data);
        this.message = "Applied successfully";
      }
    }
  };
  </script>
