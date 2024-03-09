import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Container, Link, TextField } from "@mui/material";
import FormUpsert from "@/components/_admin/job/formUpsert";
import { FaArrowLeft } from "react-icons/fa";

export default function UpsertJob() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <div className="flex justify-between mb-5">
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Upsert Job
              </Typography>
              <Link href="/admin/job">
                <Button variant="text" color="primary">
                  <FaArrowLeft />
                </Button>
              </Link>
            </div>
            <FormUpsert />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
