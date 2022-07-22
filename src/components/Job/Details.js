import { Card, Typography, CardContent, Grid, Chip } from "@mui/material";

export default function Details({ job }) {
  return !job.id ? (
    <div></div>
  ) : (
    <Card raised style={{ minHeight: "40vw" }}>
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h4" gutterBottom align="left">
              {job.title}
            </Typography>
          </Grid>

          <Grid item xs={4} alignItems="center" justifyContent="center">
            <Chip
              label={job.isActive ? "Active" : "Inactive"}
              color={job.isActive ? "success" : "error"}
            />
          </Grid>
        </Grid>
        <Typography variant="h5" component="div" gutterBottom align="left">
          {job.companyName}
        </Typography>
        <Typography
          variant="p"
          component="div"
          gutterBottom
          align="left"
          style={{ fontSize: "12px", color: "grey" }}
        >
          Posted at: {job.date}
        </Typography>
        <Typography variant="p" component="div" align="left" gutterBottom>
          {job.description}
        </Typography>

        {/* Google Map */}
      </CardContent>
    </Card>
  );
}
