import React from 'react';
import Badge from '@mui/material/Badge';
import { Typography, Box, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { Allbug } from '../../../redux/selectors/bugSelectors';
import { GetCurrentUser } from '../../../redux/selectors/userSelectors';
import { SettingsBrightnessRounded } from '@mui/icons-material';

export const BoxCountTickets = () => {

  const currentUser = GetCurrentUser()
    const bugCount = Allbug()   


    const countProject = useSelector(state => state.project.project)

    const projectfilter = countProject?.flatMap(project =>
      bugCount.filter(bug =>        
        !project.is_archived  
        //!bug.is_archived
      )
    );
    const totalTicket = Array.from(new Set(projectfilter));
    return(



<Box display="flex" justifyContent="center" marginLeft="-170px" marginTop='40px' style={{paddingRight: '15px', paddingLeft: '5px'}}>
<Paper elevation={4} sx={{backgroundColor: '#F2B16F',marginLeft: '180px',marginBottom: '-50px', width: '345px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'primary.contrastText',  boxShadow: '1px 1px 7px rgba(0.0, 0.0, 0.0, 0.1)' }}>
  <Box textAlign="center">
  <Typography color={'black'} variant="h4" component="h2">
     {totalTicket?.length ??  '0'}
    </Typography>
    {currentUser.groups[0] === 'admin' ? (
  <Typography color={'black'} style={{ fontWeight: 'bold', fontFamily: 'inherit' }}>
    Total Ticket(s)
  </Typography>
) : (
  <Typography color={'black'} style={{ fontWeight: 'bold', fontFamily: 'inherit' }}>
    Total assigned Ticket(s)
  </Typography>
)}
  
    
    
    
  </Box>
  
</Paper>

</Box>

    )
}

