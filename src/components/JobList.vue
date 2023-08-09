<template>
    <div class="list row">
      <div class="col-md-6">
        <h4>Jobs List</h4>
        <ul class="list-group">
          <li
            class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(job, index) in jobs"
            :key="index"
            @click="setActiveJob(job, index)"
          >
            {{ job.title }}
          </li>
        </ul>

        <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllJobs">
          Remove All
        </button> -->
      </div>
      <div class="col-md-6">
        <div v-if="currentJob">
          <job-details
            :job="currentJob"
            @refreshList="refreshList"
          />
        </div>
        <div v-else>
          <br />
          <p>Please click on a Job...</p>
        </div>
      </div>
    </div>
  </template>

  <script>
  import JobDataService from "../services/DatabaseService";
  import JobDetails from "./JobDetails";

  export default {
    name: "jobs-list",
    components: { JobDetails },
    data() {
      return {
        jobs: [],
        currentJob: null,
        currentIndex: -1
      };
    },
    methods: {
      onDataChange(items) {
        let _jobs = [];

        items.forEach((item) => {
          let key = item.key;
          let data = item.val();
          _jobs.push({
            key: key,
            title: data.title,
            description: data.description,
            date: data.date,
          });
        });

        this.jobs = _jobs;
      },

      refreshList() {
        this.currentJob = null;
        this.currentIndex = -1;
      },

      setActiveJob(job, index) {
        this.currentJob = job;
        this.currentIndex = index;
      },

      removeAllJobs() {
        JobDataService.deleteAll()
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
    mounted() {
      JobDataService.getAll().on("value", this.onDataChange);
    },
    beforeUnmount() {
      JobDataService.getAll().off("value", this.onDataChange);
    }
  };
  </script>

  <style>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
  </style>