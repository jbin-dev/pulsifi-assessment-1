import List from "@mui/material/List";
import JobListItem from "./ListItem";

export default function JobList({ jobs, jobClickHandler }) {
  return !jobs.length ? (
    <div>no job available</div>
  ) : (
    <ul>
      <List>
        {jobs.map((job) => (
          <JobListItem
            key={job.id}
            job={job}
            jobClickHandler={jobClickHandler}
          />
        ))}
      </List>
    </ul>
  );
}
