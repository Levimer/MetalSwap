import React, { useState } from 'react'
import './CurrencyModal.scss'


// mui


import { Button, styled, TextField, Modal, Autocomplete } from '@mui/material'
import { Box, Grid } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const CurrencySearch = styled(Autocomplete)({
        
  "& .MuiFormLabel-root": {
    color: '#d4e1ed'
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: '#00bd9e',
    display: 'none',
    '&:hover':{
      color: '#00bd9e'
    },
  },

  '& + .MuiAutocomplete-popper .MuiAutocomplete-option': {          
    color: '#d4e1ed',
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
          borderColor: '#d4e1ed',
          borderRadius: 15,
          borderWidth: '1px',

          
    },
    '&:hover fieldset': {
          border: 'solid',
          borderColor: '#00f4cc',
          borderRadius: 15,
          borderWidth: '2px',
    },
    '&.Mui-focused fieldset': {
          border: 'solid',
          borderColor: '#00f4cc',
          borderRadius: 15,
          borderWidth: '2px',
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

function CurrencyModal({userCurrency, setUserCurrency}) {

    const [open, setOpen] = React.useState(false);

    const [currencyRegex, setCurrencyRegex] = useState('123');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

      

     const currencyList = [
        { label: 'CAD - Canadian Dollar' },
        { label: 'USD - United States Dollar' },

      ];

      const fun2 = () => {
        setUserCurrency(currencyRegex);
        
        handleClose();
      }

      const varSetter = (e) => {
        var test1 = e.target.innerText;
        var test2 = test1.substring(0,4);
        setCurrencyRegex(test2);
        

      }

      const CloseIcon2 = styled(CloseIcon)({
        '&:hover':{
          color: '#00f4cc'
        }
      })


  return (
    <Box sx={{
      width: {xs:'calc(100vw*(1/12)*1.5)', 
          sm: 'calc(100vw*(1/12)*1.5)', 
          md: 'calc(100vw*(1/12)*1)', 
          lg:'calc(100vw*(1/12)*0.75)', 
          xl:'calc(100vw*(1/12)*0.75)',
          xxl:'calc(100vw*(1/12)*0.75)',
          xxxl:'calc(100vw*(1/12)*0.75)'
      }}}>      
        <Box onClick={handleOpen} className='ButtonText' sx={{textTransform: 'none', fontFamily: 'Source Code Pro', color: "black"}}>{userCurrency}</Box>

                <Modal open={open} className='ModalStyle'>
                    
                    <Box sx={{position: 'absolute', top: '44.5%', left: '50%', transform: 'translate(-50%, -50%)', width: {xs:'calc(100vw*(1/12)*11)', sm: 'calc(100vw*(1/12)*9)', md: 'calc(100vw*(1/12)*7)', lg:'calc(100vw*(1/12)*5)', xl:'calc(100vw*(1/12)*3)'},bgcolor: '#023453', borderRadius: '12px', boxShadow: 24,}}>

                            <Grid container className= 'ModalInsideWrapper' sx={{display: 'flex'}}>

                                    <Grid item xs={10} sx={{display: 'flex', alignItems: 'center'}}>

                                            <Box sx={{paddingLeft: '6%', paddingTop: '3%', paddingBottom: '2%', color: 'white'}}>
                                              <Box>Select your Currency</Box>
                                            </Box>

                                    </Grid>
                                    
                                    <Grid item xs={2} sx={{display: 'flex', justifyContent: 'center', paddingTop: '2%'}}>
                                            <CloseIcon2 sx={{color: 'white', cursor: 'pointer'}} onClick={handleClose}/>
                                    </Grid>
                            </Grid>

 


                            <Grid container className= 'ModalInsideWrapper' sx={{display: 'flex', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '', paddingTop: '1%'}}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <CurrencySearch
                                            disablePortal
                                            options={currencyList}
                                            freeSolo
                                            isOptionEqualToValue={(option) => option.label}
                                            sx={{ width: '100%', input: {color: '#d4e1ed'} }}

                                            ListboxProps={{
                                              className: "myCustomList",
                                              
                                            }}
                                            componentsProps={{
                                              paper: {sx: {position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, 0%)', width: '111%', boxShadow: 'none'}}
                                            }}
                                            renderInput={(params) => <TextField {...params} placeholder='Search currency or symbol'/>}
                                            onChange={(e) => varSetter(e)}

                                    />
                                    
                                </Grid>
                            </Grid>

                          <Grid container>
                              <Grid item>
                                            <Box sx={{display: 'flex', justifyContent: 'center', paddingBottom: '3%', paddingTop: '3%', width: {xs:'calc(100vw*(1/12)*11)', sm: 'calc(100vw*(1/12)*9)', md: 'calc(100vw*(1/12)*7)', lg:'calc(100vw*(1/12)*5)', xl:'calc(100vw*(1/12)*3)'}}}>
                                                <Button2 onClick={fun2} sx={{width: '90%'}}>Select Active Currency</Button2>
                                            </Box>
                              </Grid>



                          </Grid>


                    </Box>


                </Modal>
    </Box>
   
  )
}

export default CurrencyModal




