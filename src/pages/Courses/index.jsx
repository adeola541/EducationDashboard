import React from "react";
import Header from "../../components/Header"
import { tokens } from "../../theme";
import { Progress, Space } from "antd";
import { Box, Typography, useTheme } from "@mui/material";
import Table from "../../components/Table";

const Course = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="">
      <Header title="Course"  subtitle="Overview your progress" />
      <div className="">
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
          ml="35px"
        >
          <Space wrap>
            <Progress
              type="circle"
              percent={90}
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
            />
            <Typography variant="h3" color={colors.blueAccent[500]}>
              Design
            </Typography>
          </Space>
          <Space  wrap>
          <Progress
              type="circle"
              percent={90}
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
            />
            <Typography variant="h3" color={colors.redAccent[500]}>
              Drawing
            </Typography>
          </Space>
          <Space  wrap>
          <Progress
              type="circle"
              percent={90}
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
            />
            <Typography variant="h3" color={colors.redAccent[500]}>
              Text
            </Typography>
          </Space>
        </Box>
      </div>
      <div  
      className=""
       style={{
               paddingTop: 35,          
             }}>
                    <Header title="Course You're taking" />

               <Table/>
      </div>
      
    </div>
  );
};
export default Course;
