import { Button, Typography, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { add } from "../services/Firebase/Firestore";
import { useNavigate } from "react-router-dom";

export default function Create() {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState(false);
  const company = JSON.parse(sessionStorage.getItem("user"));

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDescriptionError(false);

    if (!title) {
      setTitleError(true);
    }
    if (!description) {
      setDescriptionError(true);
    }
    if (title && description) {
      add("jobs", {
        title,
        description,
        isActive: true,
        date: new Date().toDateString(),
        companyId: company.companyId,
        companyName: company.companyName,
      }).then(() => navigate("/"));
    }
  };
  return (
    <Container>
      <Typography variant="h6">Create a new Job</Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          id="job-title"
          label="Title"
          fullWidth
          required
          sx={{
            margin: "20px 0px",
            display: "block",
          }}
          error={titleError}
        />

        <TextField
          onChange={(e) => setDescription(e.target.value)}
          id="job-description"
          label="Description"
          fullWidth
          required
          multiline
          rows={4}
          sx={{
            margin: "20px 0px",
            display: "block",
          }}
          error={descriptionError}
        />

        <Button type="submit" color="primary" variant="contained">
          Submit
        </Button>
      </form>
    </Container>
  );
}
