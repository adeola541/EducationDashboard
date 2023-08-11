import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WebIcon from '@mui/icons-material/Web';
import { Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { ConnectWithoutContact, Hub, Public } from "@mui/icons-material";


export default function FolderList() {
  return (
    <div>
      <List>
               <Typography 
                style={{color:"#F6FEF6", fontSize: 12, fontWeight: 500, }}
                >Community Groups
              <span style={{paddingLeft:55}}> 
              <AddIcon fontSize="small" /></span>
               </Typography>

      </List>

      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ConnectWithoutContact />
            </Avatar>
          </ListItemAvatar>
          <ListItemText 
          style={{color:"#F6FEF6", fontSize: 12, fontWeight: 500, }}
          
            primary="Design Community, USA"
            secondary="115K Members"
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
            <WebIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText 
           style={{color:"#F6FEF6", fontSize: 12, fontWeight: 500, }}
          primary="SEO Helpline 24/7" secondary="78k Members" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Public />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
           style={{color:"#F6FEF6", fontSize: 12, fontWeight: 500, }}
           primary="UI/UX Worldwide" secondary="498K Members" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Hub />
            </Avatar>
          </ListItemAvatar>
          <ListItemText 
           style={{color:"#F6FEF6", fontSize: 12, fontWeight: 500, }}
          primary="UI Hunter" secondary="212K Members" />
        </ListItem>
      </List>
    </div>
  );
}
