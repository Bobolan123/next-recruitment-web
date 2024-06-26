import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { ICompany } from "./type";
import Image from "next/image";

export default function CompanyAlbum(props: any) {
  const companies: ICompany[] = props.companies;
  return (
    <div className="mb-20">
      <Typography className="mb-3" variant="h4">
        Top company
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {companies.map((company: ICompany) => (
          <Grid item key={company.id} md={3}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardActionArea>
                <Link href={`/company/${company.id}`}>
                   <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: "56.25%",
                        height: 200,
                      }}
                      image={`/logos/${company.filename}`}  
                    /> 
                  {/* <Image
                    src={`/logos/${company.filename}`}  
                    width={500}
                    height={500}
                    alt={`${company.name}`}
                  /> */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {company.name}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
