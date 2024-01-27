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

export default function JobPagination(props: any) {
  const post = {
    title: "Junier developer react nest node",
    location: "Hanoi",
    price: "1220 $",
    image: "https://source.unsplash.com/random?wallpapers",
  };
  const post2 = {
    title: "lan",
    location: "Hanoi",
    price: "adf",
    image: "https://source.unsplash.com/random?wallpapers",
  };

  const posts = [post, post2];
  return (
    <div className="">
      <Grid container spacing={4} className="mb-9">
        {posts.map((post, index) => (
          <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
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
                  image={post.image}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="h2" variant="h5">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    <CiLocationOn className="inline mr-1" />
                    {post.location}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" paragraph>
                    {post.price}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    align="right"
                  >
                    10 days ago
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
      <Stack alignItems="center">
        <Pagination count={10} variant="outlined" color="primary" />
      </Stack>
    </div>
  );
}