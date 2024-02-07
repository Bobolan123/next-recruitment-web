"use client";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import { CiLocationOn } from "react-icons/ci";
import Stack from "@mui/material/Stack";
import { IJob } from "./type";

export default function JobPagination(props: any) {
  const job:IJob = props.job

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{
          width: 80,
          height: 80,
          display: { xs: "none", sm: "block" },
          alignSelf: "center",
          borderRadius: 100,
          marginLeft: 2,
        }}
        image={`${process.env.API}/company/logo/${job.company.id}`}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography component="h2" variant="h5">
          {job.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          <CiLocationOn className="inline mr-1" />
          {job.company.location}
        </Typography>
        <Typography variant="subtitle1" color="primary" paragraph>
          $ {job.salary}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" align="right">
          10 days ago
        </Typography>
      </CardContent>
    </Card>
  );
}
