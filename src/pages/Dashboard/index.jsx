import React from "react";
import Header from "../../components/Header";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import "../Dashboard/Dash.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleIcon from "@mui/icons-material/People";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AddchartIcon from "@mui/icons-material/Addchart";
import FolderList from "../../components/FolderList";
import CardDash from "../../components/CardDash";

const Dashboard = () => {
  return (
    <div className="">
      <Header title="Dashboard" />
      <div className="">
      <Box height={10} />
      </div>
      <div className="">
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack direction="row" spacing={2}>
                <Card
                className=""
                  sx={{
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
                    p: 2,
                    width: 150,
                    height: 150,
                  }}
                >
                  <CardContent>
                    <AddchartIcon />
                    <Typography gutterBottom variant="h5" component="div">
                      Course in Progress
                    </Typography>
                    <span>18</span>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
                    p: 2,
                    width: 150,
                    height: 150,
                  }}
                >
                  <CardContent>
                    <CheckCircleOutlineIcon />
                    <Typography gutterBottom variant="h5" component="div">
                      Course Completed
                    </Typography>

                    <span>70</span>
                  </CardContent>
                </Card>
                <Card
                className=""
                  sx={{
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
                    p: 2,
                    width: 150,
                    height: 150,
                  }}
                >
                  <CardContent>
                    <AssignmentIcon />
                    <Typography gutterBottom variant="h5" component="div">
                      Certifiacate Earned
                    </Typography>

                    <span>62</span>
                  </CardContent>
                </Card>

                <Card
                className=""
                  sx={{
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
                    p: 2,
                    width: 150,
                    height: 150,
                  }}
                >
                  <CardContent>
                    <PeopleIcon />
                    <Typography gutterBottom variant="h5" component="div">
                      Community Support
                    </Typography>

                    <span>240</span>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card 
              className=""
              sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <CardDash />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                sx={{ bgcolor: "#131318", color: "#121416", height: 80 + "vh" }}
              >
                <CardContent>
                  <FolderList />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </div>
    </div>
  );
};
export default Dashboard;
