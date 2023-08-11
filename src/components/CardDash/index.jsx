import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box, Typography} from "@mui/material";
import Button from '@mui/material/Button';



export default function CardDash() {
  return (
    <Box sx={{ display: "flex" }}>
      <ImageList sx={{ width: 500, height: 250 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span> {item.course}</span>}
            position="below"
          />
          <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                30 Lesson| 83 Hours
              </Typography>
              <Button 

              sx={{
                
              }}
              variant="contained" href="#contained-buttons">Enroll now</Button>
        </ImageListItem>
        
      ))}
    </ImageList>
    </Box>

  );
}

const itemData = [
  {
    img: '/2835143.jpg',
    title: 'HTML',
    course: 'Front-end Developement ',
  },
  {
    img: '/11000.jpg',
    title: 'Search Engine',
    course: 'SEO Expert from Zero ',
  },
  {
    img: '/7856001.jpg',
    title: 'UI Design',
    course: 'Learn Creative Design ',
  },
  {
    img: '/6342523.jpg',
    title: 'Marketing',
    course: 'Become Online Digital Marketing',
  },
 

  
  
];

