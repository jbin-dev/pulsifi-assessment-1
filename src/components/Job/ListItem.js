import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

export default function JobListItem({ job, jobClickHandler }) {
  return (
    <Box>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical button group"
        fullWidth
        sx={{ margin: "5px" }}
      >
        <Button
          key={job.id}
          fullWidth
          color="inherit"
          onClick={() => jobClickHandler(job)}
        >
          <div>
            <Typography sx={{ fontSize: 18 }} color="text.primary">
              {job.title}
            </Typography>
            <Typography sx={{ fontSize: 12 }} color="text.secondary">
              {job.companyName}
            </Typography>
          </div>
        </Button>
      </ButtonGroup>
    </Box>
  );
}
