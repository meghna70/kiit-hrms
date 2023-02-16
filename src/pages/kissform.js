import React, {useState} from 'react';
import { TextField, Box, Button, Typography, Select, FormControl, MenuItem, InputLabel } from "@mui/material";
//import { useNavigate } from 'react-router-dom';
//import './App.css';
import axios from 'axios';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
 
const Kissform = () => {
    // const history= useNavigate();
    const [inputs, setInputs] = useState({
      eid: "3478g",
      product_name: "",
      pid: "",
      pquantity: 0,
      pprice: 0,
      date_pr: "",
      
  });

  const products = [
    { heading: 'Name', value: 'name_' },
  ]

  const [valuetime, setValuetime] = React.useState(dayjs().format('MM-DD-YYYY'));
    const handleChangetime = (newValuetime) => {
        setValuetime(newValuetime);
        //avail_date=newValuetime;
    };

  const handleChange = (e) => {
    setInputs(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
};

const sendRequest = async () => {
  const res = await axios.post("http://192.168.33.145:5000/api/kiss/adddata",
      {
          eid: inputs.eid,
          product_name: inputs.product_name,
          pid: inputs.pid,
          pquantity: inputs.pquantity,
          pprice: inputs.pprice
      }
  ).catch((err) => console.log(err));
  const data = await res.data;
  return data;
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(inputs);
  sendRequest().then(() => alert("Product Registered")); //to meghna
};

const [file, setFile] = useState();
    function handleChangeimage(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

function Options({ options }) {
  return (
      options.map(option => 
                  <option key={option.heading} value={option.value}>                                   
                  {option.value}
                  </option>)
                 );
}

  return (
    <div className="Forms">
            <form onSubmit={handleSubmit} className="">
                <Box display="flex" component={"div"} flexDirection={"column"} marginLeft="auto" color="green"  marginRight="auto" width={500} justifyContent="center" alignItems="center" sx={{backgroundColor:'white', pt:8}}>

                    <Typography margin="normal" variant="h3">KISS PRODUCT</Typography>
                    <FormControl margin="normal" fullWidth required>
                        <InputLabel id="demo-simple-select-label">Product</InputLabel>
                        <Select
                            name="product_"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={inputs.patient_rel}
                            label="Relationship"
                            onChange={handleChange}
                        >
                            <MenuItem value="Self">Self</MenuItem>
                            <MenuItem value="Family Member">Family Member</MenuItem>
                            <MenuItem value="Friends">Friends</MenuItem>
                            <MenuItem value="Others">Other</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField name="pid" onChange={handleChange} value={inputs.pid} type="text" label="Product Id" fullWidth margin="normal" required/>
                    <TextField name="product_name" onChange={handleChange} value={inputs.product_name} type="text" label="Product Name" fullWidth margin="normal" required/>
                    <TextField name="pquantity" onChange={handleChange} type="number" label="Product Quantity" fullWidth value={inputs.pquantity} margin="normal" required />
                    <TextField name="pprice" onChange={handleChange} type="number" label="Product Price" fullWidth value={inputs.pprice} margin="normal" required />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker className="" label="Avail Date" inputFormat="DD-MM-YYYY" disableFuture value={valuetime} onChange={handleChangetime} renderInput={(params) => <TextField sx={{mt:2,mb:1}} {...params} fullWidth />} />
                    </LocalizationProvider>
                    <Button variant="contained" component="label" onChange={handleChangeimage} sx={{
                        backgroundColor: '#17d059',
                        mb: 2,
                        '&:hover': {
                            backgroundColor: '#1ca04b',
                            boxShadow: 'none',
                            mb: 2
                          },
                        
                    }} >
                        Upload
                        <input hidden accept="image/*" multiple type="file" />
                        
                    </Button>
                    <img src={file} />
                    <Button className="Button" margin="normal" fullWidth variant="contained" type="submit">Register Product</Button>

                </Box>
            </form>
        </div>
  );
}

 
export default Kissform;