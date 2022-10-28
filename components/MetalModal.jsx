import React, { useState } from 'react'
import './MetalModal.scss'


// mui


import { Button, styled, TextField, Modal, Autocomplete } from '@mui/material'
import { Box, Grid } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';



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



const MetalSearch2 = styled(Autocomplete)({
        
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

const CloseIcon2 = styled(CloseIcon)({
  '&:hover':{
    color: '#00f4cc'
  }
});


const top100Films = [
  { label: 'XAU | Gold', value: 10 },
  { label: 'XAG | Silver', value: 10 },
  { label: 'XPT | Platinum', value: 10 },
  { label: 'XPD | Palladium', value: 10 },
  { label: 'XCU | Copper', value: 10 },
  { label: 'XRH | Rhodium', value: 10 },
  { label: 'RUTH | Ruthenium', value: 10 },
  { label: 'ALU | Aluminum', value: 10 },
  { label: 'NI | Nickel', value: 10 },
  { label: 'TIN | Tin', value: 10 },
  { label: 'LCO | Cobalt', value: 10 },
  { label: 'IRD | Iridium', value: 10 },
  { label: 'LEAD | Lead', value: 10 },
  { label: 'IRON | Iron Ore 62% Fe', value: 10 },
  { label: 'LBSAUAM | LBMA Gold Am', value: 10 },
  { label: 'LBXAUPM | LBMA Gold Pm', value: 10 },
  { label: 'LBXAG | LBMA Silver', value: 10 },
  { label: 'LBXPTAM | LBMA Platinum Am', value: 10 },
  { label: 'LBXPTPM | LBMA Platinum Pm', value: 10 },
  { label: 'LBXPDAM | LBMA Palladium Am', value: 10 },
  { label: 'LBXPDPM | LBMA Palladium Pm', value: 10 },
  { label: 'LME - ALU | LME Aluminium', value: 10 },
  { label: 'LME - XCU | LME Copper', value: 10 },
  { label: 'LME - ZNC | LME Zinc', value: 10 },
  { label: 'LME - NI | LME Nickel', value: 10 },
  { label: 'LME - LEAD | LME Lead', value: 10 },
  { label: 'LME - TIN | LME Tin', value: 10 },
  { label: 'URANIUM | Uranium', value: 10 },
  { label: 'STEEL - SC | LME Steel Scrap CFR Turkey', value: 10 },
  { label: 'STEEL - RE | LME Steel Rebar FOB Turkey', value: 10 },
  { label: 'STEEL - HR | LME Steel HRC FOB China', value: 10 },
  { label: 'BRONZE | Bronze', value: 10 },
  { label: 'MG | Magnesium', value: 10 },
  { label: 'OSMIUM | Osmium', value: 10 },
  { label: 'RHENIUM | Rhenium', value: 10 },
  { label: 'INDIUM | Indium', value: 10 },
  { label: 'MO | Molybdenum', value: 10 },
  { label: 'TUNGSTEN | Tungsten', value: 10 },
  { label: 'LITHIUM | Lithium', value: 10 },
  { label: 'XAU-AHME | Ahmedabad Gold', value: 10 },
  { label: 'XAU-BANG | Bangalore Gold', value: 10 },
  { label: 'XAU-CHEN | Chennai Gold', value: 10 },
  { label: 'XAU-COIM | Coimbatore Gold', value: 10 },
  { label: 'XAU-DELH | Delhi Gold', value: 10 },
  { label: 'XAU-HYDE | Hyderabad Gold', value: 10 },
  { label: 'XAU-KOCH | Kochi Gold', value: 10 },
  { label: 'XAU-KOLK | Kolkata Gold', value: 10 },
  { label: 'XAU-MUMB | Mumbai Gold', value: 10 },
  { label: 'XAU-SURA | Surat Gold', value: 10 },
  { label: 'XAG-AHME | Ahmedabad Silver', value: 10 },
  { label: 'XAG-BANG | Bangalore Silver', value: 10 },
  { label: 'XAG-CHEN | Chennai Silver', value: 10 },
  { label: 'XAG-COIM | Coimbatore Silver', value: 10 },
  { label: 'XAG-DELH | Delhi Silver', value: 10 },
  { label: 'XAG-HYDE | Hyderabad Silver', value: 10 },
  { label: 'XAG-KOCH | Kochi Silver', value: 10 },
  { label: 'XAG-KOLK | Kolkata Silver', value: 10 },
  { label: 'XAG-MUMB | Mumbai Silver', value: 10 },
  { label: 'XAG-SURA | Surat Silver', value: 10 },
  { label: 'ANTIMONY | Antimony', value: 10 },
  { label: 'BITUMEN | Bitumen', value: 10 },
  { label: 'GALLIUM | Gallium', value: 10 },
  { label: 'MN | Manganese', value: 10 },
  { label: 'ND | Neodymium', value: 10 },
  { label: 'TE | Tellurium', value: 10 },
  

  
  ];





function MetalModal({userMetal, setUserMetal, userUnit, setUserUnit, livePriceOZ, setLivePriceOZ, livePriceTOZ, setLivePriceTOZ, userCurrency, userKey, setSearchedCurrency}) {

    const [open, setOpen] = React.useState(false);
    const [activeMetal, setActiveMetal] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [tempSymbol, setTempSymbol] = useState('');

      
 
      const fun2 = () => {
        setUserMetal(activeMetal);

        

        var API_KEY = userKey;
        var SYMBOL = tempSymbol;
        var CURRENCY = userCurrency;
        setSearchedCurrency(CURRENCY);
         
// metals api xsc41mi2q5kevizjg21h62hk8wwbfwaq69p1xqyzb50653ayj1jrsd24dllv
        fetch(`https://metals-api.com/api/latest?access_key=${API_KEY}&base=${CURRENCY}&symbols=${SYMBOL}`)
          .then(res => res.json())
          .then(data => {

            var test1 = `data.rates.${tempSymbol}`;
            var test2 = eval(test1);

            
            

            if(activeMetal.includes('Gold') || activeMetal.includes('Silver')){
              setUserUnit('Ounce');
              setLivePriceOZ(test2);
            }
            else{
              setUserUnit('Troy Ounce');
              setLivePriceTOZ(test2);
            }

          })
          
        handleClose();

        
      }

      const varSetter = (e) => {
        
        var test1 = e.target.innerText;
        var test2 = test1.match(/[|].*/g);
        var test3 = test2.toString();
        var test4 = test3.slice(2);
        var test5 = test1.match(/^[^|]*/g).toString();
        var test6 = test5.trim();

        setTempSymbol(test6);

        if(test4 === ''){
          setActiveMetal('Metal');
        }
        else{
          setActiveMetal(test4);
        }
        
        
        

      }

      

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
      
      <Box onClick={handleOpen} className='ButtonText' sx={{textTransform: 'none', fontFamily: 'Source Code Pro', color: "black"}}>{userMetal}</Box>

                <Modal open={open} className="ModalStyle">
                    
                    <Box sx={{position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', width: {xs:'calc(100vw*(1/12)*11)', sm: 'calc(100vw*(1/12)*9)', md: 'calc(100vw*(1/12)*7)', lg:'calc(100vw*(1/12)*5)', xl:'calc(100vw*(1/12)*3)'},bgcolor: '#023453', borderRadius: '12px', boxShadow: 24,}}>

                            <Grid container className= 'ModalInsideWrapper' sx={{display: 'flex'}}>

                                    <Grid item xs={10} sx={{display: 'flex', alignItems: 'center'}}>

                                            <Box sx={{paddingLeft: '6%', paddingTop: '3%', paddingBottom: '2%', color: '#d4e1ed'}}>
                                              <Box>Select a Metal</Box>
                                            </Box>

                                    </Grid>
                                    
                                    <Grid item xs={2} sx={{display: 'flex', justifyContent: 'center', paddingTop: '2%'}}>
                                            <CloseIcon2 sx={{color: '#d4e1ed', cursor: 'pointer'}} onClick={handleClose}/>
                                    </Grid>
                            </Grid>

 


                            <Grid container className= 'ModalInsideWrapper' sx={{display: 'flex', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '', paddingTop: '2%'}}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <MetalSearch2
                                            disablePortal
                                            freeSolo
                                            isOptionEqualToValue={(option) => option.label}
                                            options={top100Films}
                                            sx={{ width: '100%', input: {color: '#d4e1ed'} }}
                                            ListboxProps={{
                                              className: "myCustomList",
                                              
                                            }}
                                            componentsProps={{
                                              paper: {sx: {position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, 0%)', width: '111%', boxShadow: 'none'}}
                                            }}
                                            renderInput={(params) => <TextField {...params} placeholder='Search metal or ticker symbol'/>}
                                            onChange={(e) => varSetter(e)}
                                    />
                                </Grid>
                            </Grid>

                          <Grid container>
                              <Grid item>
                                            <Box sx={{display: 'flex', justifyContent: 'center', paddingBottom: '3%', paddingTop: '4%', width: {xs:'calc(100vw*(1/12)*11)', sm: 'calc(100vw*(1/12)*9)', md: 'calc(100vw*(1/12)*7)', lg:'calc(100vw*(1/12)*5)', xl:'calc(100vw*(1/12)*3)'}}}>
                                                <Button2 onClick={fun2} sx={{width: '90%'}}>Request Price Data</Button2>
                                            </Box>
                              </Grid>



                          </Grid>


                    </Box>


                </Modal>
    </Box>

  )
}

export default MetalModal




