import React, {useState} from 'react';
// import * as dotenv from 'dotenv';
import { TextField, Box, Stack, Select, Button,FormControl, MenuItem, InputLabel, Typography } from "@mui/material";
import AspectRatio from '@mui/joy/AspectRatio';
import { IconButton, Sheet} from '@mui/joy';
import {  Close, Delete, Download, InsertLink, Crop } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

// require(dotenv).config();
const link = process.env.REACT_APP_NETWORK;
console.log(link);

const Kimsform = () => {
    const history= useNavigate();
    const [inputs, setInputs] = useState({
      eid: "e3hdf",
      total_price: "",
      drop_down: "",
      avail_date: "",
  });

  const handleChange = (e) => {
    setInputs(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
    console.log(e.target.value);
};

// const utc= require('dayjs/plugin/utc');
// const timezone= require('dayjs/plugin/timezone');

const [valuetime, setValuetime] = React.useState(dayjs().format('MM-DD-YYYY'));
    const handleChangetime = (newValuetime) => {
        console.log(newValuetime);
        const time = new Date(newValuetime);
        const t = new Date(time.getTime() - time.getTimezoneOffset()*60000).toISOString();
        setValuetime(t);
        console.log(t);
        //avail_date=newValuetime;
    };

    const [file, setFile] = useState();
    function handleChangeimage(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

const sendRequest = async () => {
const res = await axios.post("http://10.7.212.177:5000/api/kims/adddata",
    {
        eid: inputs.eid,
        total_price: inputs.total_price,
        avail_date: inputs.avail_date,
        drop_down: inputs.drop_down
            
    }
  ).catch((err) => console.log(err));
  const data = await res.data;
  return data;
};

// const [setMenu, Menu] = useState([]);
// console.log(Menu, setMenu);

// useEffect(() => {
//   axios("http://10.7.214.12:5000/api/kims")
//   .then(res => setMenu(res.data))
//   .catch(err => console.log(err))
// }, []);

//const handlerelationChange



const handleSubmit = (e) => {
  e.preventDefault();
  console.log(inputs);
  sendRequest().then(() => history()); //to meghna
};

  return (
    <div className='Forms' >
        <Stack spacing={50}>
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection={"column"} color="green" boxShadow={"inherit"} marginLeft="auto" marginRight="auto" width={500} justifyContent="center" alignItems="center" sx={{border: 'solid',
          borderColor: 'white',
          borderWidth: 10,         
          alignSelf: 'center',
          borderStartEndRadius: 10,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          borderEndLeftRadius: 10,
          borderEndRightRadius: 10,
          p:2,
          bgcolor: 'white',
          maxWidth: '100%',
          textEmphasisColor: 'green',
          
          boxShadow: 'sm',
          borderRadius: 'md',
          }}>

                    <Typography margin="normal" variant="h4" color='green'> Temple Trust </Typography>
                    <FormControl margin="normal" fullWidth required>
                        <InputLabel id="demo-simple-select-label">Services</InputLabel>
                        <Select
                            name="drop_down"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={inputs.drop_down}
                            label="Drop Down"
                            onChange={handleChange}
                        >
                            <MenuItem value="Prasad">Prasad</MenuItem>
                            <MenuItem value="Place Booking">Place Booking</MenuItem>
                        </Select>
                    </FormControl>

                    
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker className="" label="Date of Purchase/Service" inputFormat="YYYY-MM-DD" disableFuture value={valuetime} onChange={handleChangetime}
                     renderInput={(params) => <TextField sx={{mt:2,mb:1}} {...params} fullWidth />} />
                    </LocalizationProvider>


                    <TextField name="total_price" onChange={handleChange} type="text" label="Total Cost" fullWidth value={inputs.total_price} margin="normal" required />
                    






<Box
      sx={{
        display: 'flex',
        width: '100%',
        py: 1,
        borderRadius: 3,
      }}
    >

<Box
        sx={{
          border: '1px solid',
          borderColor: 'background.level2',
          alignSelf: 'center',
          maxWidth: '100%',
          minWidth: { xs: 220, sm: 500 },
          mx: 'auto',
          boxShadow: 'sm',
          borderRadius: 'md',
          overflow: 'auto',
          
        }}
      >



                    <Sheet
          sx={{
            borderWidth: '0 0 1px 0',
            display: 'flex',
            alignItems: 'center',
            p: 2,
            borderBottom: '1px solid',
            borderColor: 'background.level2',
          }}
        >
          <Typography level="h2" fontSize="md">
            Photo upload
          </Typography>
          <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: 'auto' }}>
            <Close />
          </IconButton>
        </Sheet>
        <Sheet sx={{ p: 2 }}>
          <Sheet
            variant="outlined"
            sx={{
              borderRadius: 'md',
              overflow: 'auto',
              borderColor: 'background.level2',
              bgcolor: 'background.level1',
            }}
          >
            <AspectRatio>
            <img src={file} />
            </AspectRatio>
            <Box
              sx={{
                display: 'flex',
                p: 1.5,
                gap: 1.5,
                '& > button': { bgcolor: 'background.body' },
              }}
            >
              <IconButton
                color="danger"
                variant="plain"
                size="sm"
                sx={{ mr: 'auto' }}
              >
                <Delete />
              </IconButton>
              <IconButton color="neutral" variant="outlined" size="sm">
                <Download />
              </IconButton>
              <IconButton color="neutral" variant="outlined" size="sm">
                <InsertLink />
              </IconButton>
              <IconButton color="neutral" variant="outlined" size="sm">
                <Crop />
              </IconButton>
            </Box>
          </Sheet>
        </Sheet>
        <Sheet
          sx={{
            display: 'flex',
            p: 2,
            borderTop: '1px solid',
            borderColor: 'background.level2',
            gap: 1,
          }}
        >
          <Button size="md" variant="contained" component="label"   sx={{ ml: 'auto' }} onChange={handleChangeimage}>
            Replace photo
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Button size="md" onChange={handleChangeimage} variant="contained" component="label">Upload
          <input hidden accept="image/*" multiple type="file" /></Button>
        </Sheet>
        </Box>
        </Box>





























                    
                    <Button className='Buttoin' sx={{
                        backgroundColor: '#17d059',
                        '&:hover': {
                            backgroundColor: '#1ca04b',
                            boxShadow: 'none',
                          },
                        
                    }} margin="normal" fullWidth variant="contained" type="submit">Generate</Button>

                </Box>
                
            </form>
            </Stack>
        </div>
        // <div style="float">

        // </div>
  );
}

 
export default Kimsform;