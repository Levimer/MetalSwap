import React, { useState, useEffect } from 'react'
import './Settings.scss'


// mui


import { Button, styled, TextField, Modal, Autocomplete } from '@mui/material'
import { Box, Grid } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


const MassInput = styled(TextField)({

  '& .MuiInput-underline:before': {
          border: 'solid',
          borderLeft: 'none',
          borderRight: 'none',
          borderTop: 'none',
          borderColor: '#d4e1ed',
          borderWidth: '1px',
          borderRadius: '1px',
          marginLeft: '0px',
          marginRight: '0px',

  },
  '& .MuiInput-underline:after': {
          border: 'solid',
          borderLeft: 'none',
          borderRight: 'none',
          borderTop: 'none',
          borderColor: '#00f4cc',
          borderWidth: '1px',
          borderRadius: '1px',
          marginLeft: '0px',
          marginRight: '0px',

  },

  "& .MuiInput-underline:hover:before": {
          border: 'solid',
          borderLeft: 'none',
          borderRight: 'none',
          borderTop: 'none',
          borderColor: '#00f4cc',
          borderWidth: '1px',
          borderRadius: '1px',
          marginLeft: '0px',
          marginRight: '0px',

    },
  "& .MuiInput-underline:hover:after": {
          border: 'solid',
          borderLeft: 'none',
          borderRight: 'none',
          borderTop: 'none',
          borderColor: '#00f4cc',
          borderWidth: '1px',
          borderRadius: '1px',
          marginLeft: '0px',
          marginRight: '0px',

    },

  '& ::placeholder':{
      color: '#d4e1ed',
      opacity: '80%',
  },
  '& ::placeholder - focused':{
      color: '#d4e1ed',
      opacity: '80%',
  },

  '& ::placeholder:hover':{
      color: '#d4e1ed',
      opacity: '80%',
  }

});



const UnitOfMeasurement = styled(Autocomplete)({
  

  '& + .MuiAutocomplete-popper .MuiAutocomplete-option': {          
    color: 'white',
    boxShadow: 'none',
    border: 'none',

    '&:hover':{
      backgroundColor:'rgba(0,244,204,0.5)',
    }
  },

  '& .MuiSvgIcon-root': {
    color: '#d4e1ed',
  },
  

  '& .MuiOutlinedInput-root': {
    '& fieldset': {

          border: 'solid',
          borderLeft: 'none',
          borderRight: 'none',
          borderTop: 'none',
          borderColor: 'white',
          borderWidth: '1px',
          borderRadius: '1px',
          marginLeft: '11px',
          marginRight: '13px',

          

          
    },
    '&:hover fieldset': {
      border: 'solid',
      borderLeft: 'none',
      borderRight: 'none',
      borderTop: 'none',
      borderColor: '#00bd9e',
      borderWidth: '1px',
      borderRadius: '1px',
      marginLeft: '11px',
      marginRight: '13px',

    },
    '&.Mui-focused fieldset': {
      border: 'solid',
      borderLeft: 'none',
      borderRight: 'none',
      borderTop: 'none',
      borderColor: '#00bd9e',
      borderWidth: '1px',
      borderRadius: '1px',
      marginLeft: '11px',
      marginRight: '13px'
    },
    

  },


});





const Button2 = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.3,
  backgroundColor: 'none',
  borderColor: '#d4e1ed',
  color: '#d4e1ed',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#02314f',
    borderColor: '#00f4cc',
    borderWidth: '1px',
    color: '#00f4cc',
    boxShadow: '0.3px 0.2px 8px 3px #00f4cc',
    textShadow: '0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;'
  },
});

const CloseIcon2 = styled(CloseIcon)({
  '&:hover':{
    color: '#00f4cc'
  }
})

const SettingsIcon2 = styled(SettingsOutlinedIcon)({
  '&:hover':{
    cursor: 'pointer',
  }
})



function Settings({userUnit, setUserUnit, userKey, setUserKey}) {

    const [open, setOpen] = useState(false);

    const [mass, setMass] = useState('');
    const [massValue, setMassValue] = useState(3);
    const [privateKey, setPrivateKey] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    


    const handleChange1 = (e) => {
      var test1 = e.target.value;   
      setPrivateKey(test1);

      
    };



    const handleChange2 = (e) => {
      var test1 = e.target.innerText;   
      setMass(test1);

      if(test1 === 'Kilogram'){
        setMassValue(0);      
      }
      else if(test1 === 'Pound'){
        setMassValue(1);
      }
      else if(test1 === 'Ounce'){
        setMassValue(2);
      }
      else if(test1 === 'Troy Ounce'){
        setMassValue(3);
      }

      
 
    };




    const initialLoad = () => {
      setPrivateKey(userKey);
    };

    const fun = () => {
      setUserKey(privateKey);
      setUserUnit(mass);
      handleClose();
      
    };



    const fun3 = () => {

      if(userUnit === 'Kilogram'){
        setMassValue(0);       
      }
      else if(userUnit === 'Pound'){
        setMassValue(1);
      }
      else if(userUnit === 'Ounce'){
        setMassValue(2);
      }
      else if(userUnit === 'Troy Ounce'){
        setMassValue(3);
      }

      handleClose();
    }


    const unitsOfMeasurement = [
      { label: 'Kilogram'},
      { label: 'Pound'},
      { label: 'Ounce'},
      { label: 'Troy Ounce' },
      
    ];


    useEffect(() => {
      setTimeout(() => {
        initialLoad();
      }, 50);
      

    },[]);


  return (
    <Box sx={{display: 'flex', justifyContent: 'end', alignItems: 'center', paddingTop: '10%' }}>
        <SettingsIcon2 onClick={handleOpen}  sx={{fontSize: '26px', color: '#d4e1ed'}}/>

                <Modal open={open} className='ModalStyle'>
                    
                    <Box sx={{
                        position: 'absolute', 
                        top: '48%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)', 
                        width: {xs:'calc(100vw*(1/12)*11)', sm: 'calc(100vw*(1/12)*9)', md: 'calc(100vw*(1/12)*7)', lg:'calc(100vw*(1/12)*5)', xl:'calc(100vw*(1/12)*3)'}, 
                        bgcolor: '#023453', 
                        borderRadius: '12px', 
                        boxShadow: 24,
                    }}>
                      
                            <Grid container className= 'ModalInsideWrapper' sx={{display: 'flex'}}>

                                    <Grid item xs={10} sx={{display: 'flex', alignItems: 'center'}}>

                                            <Box sx={{paddingLeft: '6%', paddingTop: '3%', paddingBottom: '2%', color: '#d4e1ed'}}>
                                              <Box sx={{fontSize: '24px'}}>Settings</Box>
                                            </Box>

                                    </Grid>
                                    
                                    <Grid item xs={2} sx={{display: 'flex', justifyContent: 'center', paddingTop: '3.5%'}}>
                                            <CloseIcon2 sx={{color: '#d4e1ed', cursor: 'pointer'}} onClick={fun3}/>
                                    </Grid>
                            </Grid>


                            <Grid container className= 'ModalInsideWrapper' sx={{display: 'flex', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '', paddingTop: '2%'}}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>                                 
                                    <MassInput
                                            variant= 'standard'
                                            type='text'
                                            sx={{ width: '100%', input: {color: '#d4e1ed'} }}
                                            placeholder='Enter Your Key'
                                            onChange={(e) => handleChange1(e)}
                                            value={privateKey}
                                    />                                
                                </Grid>
                            </Grid>


                            <Grid container className= 'ModalInsideWrapper' sx={{display: 'flex', paddingLeft: '3%', paddingRight: '2%', paddingBottom: '', paddingTop: '3%'}}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <UnitOfMeasurement
                                            disablePortal
                                            freeSolo
                                            options={unitsOfMeasurement}
                                            isOptionEqualToValue={(option) => option.label}
                                            value={unitsOfMeasurement[massValue]}
                                            sx={{ width: '100%', input: {color: '#d4e1ed'} }}
                                            ListboxProps={{
                                              className: "myCustomList",
                                              
                                            }}
                                            componentsProps={{
                                              paper: {sx: {position: 'absolute', top: '50%', left: '49.5%', transform: 'translate(-50%, 0%)', width: '105%', boxShadow: 'none'}}
                                            }}
                                            renderInput={(params) => <TextField {...params}/>}
                                            onChange={(e) => {handleChange2(e)}}
                                />
                                </Grid>
                            </Grid>


                          <Grid container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                              <Grid item>
                                            <Box sx={{display: 'flex', justifyContent: 'center', paddingBottom: '3%', paddingTop: '4%', paddingLeft: '0%', width: {xs:'calc(100vw*(1/12)*11)', sm: 'calc(100vw*(1/12)*9)', md: 'calc(100vw*(1/12)*7)', lg:'calc(100vw*(1/12)*5)', xl:'calc(100vw*(1/12)*3)'}}}>
                                                <Button2 onClick={fun} sx={{width: '90%'}}>Save Settings</Button2>
                                            </Box>
                              </Grid>
                          </Grid>
                    </Box>
                </Modal>
    </Box>
  )
}

export default Settings




