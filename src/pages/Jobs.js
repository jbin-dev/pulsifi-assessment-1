import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { get } from "../services/Firebase/Firestore";
import JobList from "../components/Job/List";
import JobDetails from "../components/Job/Details";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState({});

  useEffect(() => {
    get("jobs")
      .then((res) => {
        console.log("res");
        setJobs(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const jobClickHandler = (job) => {
    setSelectedJob(job);
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={4} style={{ margin: "auto" }}>
          <Grid item xs={4}>
            <JobList jobs={jobs} jobClickHandler={jobClickHandler} />
          </Grid>
          <Grid item xs={8}>
            <JobDetails job={selectedJob} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
