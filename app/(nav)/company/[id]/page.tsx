import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { CiDollar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { ICompany } from "@/components/_home/type";

export default async function CompanyId(props: any) {
  const { params } = props;
  const fetchJob = await fetch(`${process.env.API}/company/read/${params.id}`);
  const company: ICompany = await fetchJob.json();
  return (
    <>
      <Grid container component="main" rowGap={3} spacing={2}>
        <Grid item xs={12} sm={9} md={9}>
          <Typography component="h1" variant="h3">
            {company.name}
          </Typography>
          <Typography variant="subtitle1">
            <CiLocationOn className="inline mr-1" />
            {company.location}
          </Typography>
          <hr className="mb-10" />
          <div>{company.description}</div>
        </Grid>
        <Grid item sm={3} md={3}>
          <CardMedia
            component="img"
            sx={{
              width: 140,
              height: 140,
              display: { xs: "none", sm: "block" },
              borderRadius: 100,
            }}
            className="mx-auto mb-3"
            image={`${process.env.API}/company/logo/${company.id}`}
          />

          <Typography
            component="h2"
            variant="h5"
            align="center"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {company.name}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}