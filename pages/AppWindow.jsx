import React, { useState, useEffect } from 'react'
import './AppWindow.scss'


//Components
import  Settings from '../components/Settings.jsx'
import MetalModal from '../components/MetalModal.jsx'
import CurrencyModal from '../components/CurrencyModal.jsx'


// mui

import { Fab, styled, TextField } from '@mui/material'
import { Box, Grid, Paper } from '@mui/material'




const MassInput = styled(TextField)({

  '& .MuiOutlinedInput-root': {

    '& fieldset': {
      borderColor: 'none',
      border: 'none',      
    },

    '&:hover fieldset': {
      borderColor: 'none',
      border: 'none',
    },
    '&::placeholder': {
      color: 'blue !important'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'none',
      border: 'none',
    },

  },


  

  

});



const Fab2 = styled(Fab) ({
  '&:hover':{
    backgroundColor: '#d4e1ed',
  }
});



function AppWindow() {
  

  const [userCurrency, setUserCurrency] = useState('USD');
  const [userCurrency2, setUserCurrency2] = useState('');
  const [searchedCurrency, setSearchedCurrency] = useState('USD');
  const [userMetal, setUserMetal] = useState('Metal');
  const [userUnit, setUserUnit] = useState('Troy Ounce');
  const [userKey, setUserKey] = useState('p8xz0k3s9buatx3a74cy79n3656ta44y2nk8qp472oi707u80s65vnh0fm6p');

//live price to unit conversion
  const [livePrice, setLivePrice] = useState(''); //variable to set to something else

  const [livePriceTOZ, setLivePriceTOZ] = useState(1); // fetched result
  var TOZRate1 = (1/livePriceTOZ).toFixed(9);
  var KGRate1 = (TOZRate1*32.1507).toFixed(9);
  var LBRate1 = (TOZRate1*14.5833).toFixed(9);
  var OZRate1 = (TOZRate1*0.911458).toFixed(9);

  const [livePriceOZ, setLivePriceOZ] = useState(1); // fetched result if gold or silver
  var OZRate2 = (1/livePriceOZ).toFixed(9);
  var KGRate2 = (OZRate2*35.274).toFixed(9);
  var LBRate2 = (OZRate2*16).toFixed(9);
  var TOZRate2 = (OZRate2*1.09714).toFixed(9);

  
  
  
  const [inputCheck, setInputCheck] = useState(0);
  const [inputDecoration, setInputDecoration] = useState('');

  const [finalPrice, setFinalPrice] = useState(0);

  const [currencySymbol, setCurrencySymbol] = useState('');

  const fun = (e) => {
    var test1 = e.target.value;
    setInputCheck(test1);
    var test2 = test1 * livePrice;
    setFinalPrice(test2);
    finalChecker();

  }


  const inputDecorationFun = () => {

      if(inputCheck === 0){
        setLivePrice('');
        setUserCurrency2('')
      }

      else {
        setUserCurrency2(searchedCurrency)
        
        if(userMetal.includes('Gold') || userMetal.includes('Silver')){
          if(userUnit === 'Kilogram'){
            setLivePrice(KGRate2);
          }
          else if(userUnit === 'Pound'){
            setLivePrice(LBRate2);
          }
          else if(userUnit === 'Ounce'){
            setLivePrice(OZRate2);

          }
          else if(userUnit === 'Troy Ounce'){
            setLivePrice(TOZRate2);
          };
        }

        else{
          if(userUnit === 'Kilogram'){
            setLivePrice(KGRate1);
          }
          else if(userUnit === 'Pound'){
            setLivePrice(LBRate1);
          }
          else if(userUnit === 'Ounce'){
            setLivePrice(OZRate1);
          }
          else if(userUnit === 'Troy Ounce'){
            setLivePrice(TOZRate1);
          }
        };    
      };

      if(userUnit === 'Kilogram'){
        setInputDecoration('Kg');
      }
      else if(userUnit === 'Pound'){
        setInputDecoration('Lb');
      }
      else if(userUnit === 'Ounce'){
        setInputDecoration('Oz');
      }
      else if(userUnit === 'Troy Ounce'){
        setInputDecoration('TOz');
      };   
  }


  const finalChecker = () => {
    if(inputCheck === 0){
      setFinalPrice('');
      setCurrencySymbol('');
    }

    else if(inputCheck > 0){
      var stringA = (inputCheck * livePrice).toFixed(2);
      setFinalPrice(stringA);
      setCurrencySymbol('$');
    }
  }


  useEffect(() => {
    finalChecker();
    inputDecorationFun();
  });

  return (
    <Box className="App">

      <Grid container className='AppContainer'>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} xxxl={12}>

          <Paper className='Application' elevation={24} sx={{backgroundColor: '#023453', borderRadius: '20px', boxShadow: '0.3px 0.2px 10px 3px #00bd9e'}} >

              <Box sx={{marginLeft: '3%', marginRight: '3%', paddingTop: '1.8%', paddingBottom: ''}}>

                  <Grid container>
                      <Grid item xs={11} sm={11} md={11} lg={11} xl={11} xxl={10.85} xxxl={10.85} sx={{color: '#d4e1ed', fontSize: '21px'}}>
                          <Box sx={{paddingLeft: '2.5%'}}>Converter</Box>
                      </Grid>

                      <Grid item xs={1} sm={1} md={1} lg={1} xl={1} xxl={1.15} xxxl={1.15} sx={{textAlign: 'center'}}>
                          <Settings userKey={userKey} setUserKey={setUserKey} userUnit={userUnit} setUserUnit={setUserUnit}/>
                      </Grid>
                  </Grid>


                  <Box sx={{ position: 'relative', paddingTop: ''}}>
              
                      <Paper className='MetalInputArea' elevation={0} sx={{background: 'none', display: 'flex', alignItems: 'center'}}>

                          <Grid container>

                              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} xxxl={12}>  

                                  <Grid container>

                                      <Grid item xs={9} sm={8} md={8.5} lg={8.5} xl={8} xxl={8.5} xxxl={7.5}>

                                          <Box sx={{display: 'flex', flexDirection: 'column'}}>

                                              <Box sx={{paddingTop: '2%'}}>
                                                  <MassInput 
                                                    id='MassInput'
                                                    placeholder='0.0' 
                                                    type='number' 
                                                    inputProps={{
                                                      style: {fontSize: '34px', fontFamily: 'Source Code Pro',  height: '15px'},                                             
                                                    }} 
                                                    InputProps={{
                                                      startAdornment: <Box sx={{ color: 'rgba(212,225,237,0.60)', display: 'flex', paddingTop: '1%', paddingRight: '2%' }}>{inputDecoration}</Box>
                                                    }}
                                                    sx={{input: { color: '#d4e1ed' }}}

                                                    onChange={(e) => fun(e)} 
                                                  />
                                              </Box>

                                              <Box sx={{fontFamily: 'Source Code Pro', fontSize: '16px', display: 'flex', height: '20px'}}>
                                                  <Box sx={{paddingLeft: {xs: '4.6%', sm: '4.6%', md: '4.6%', lg: '4.6%', xl: '4.7%', xxl: '4.7%', xxxl: '4.7%'}, color: 'rgba(212,225,237,0.60)'}}>{userCurrency2}</Box>  
                                                  <Box sx={{paddingLeft: {xs: '10px', sm: '10px', md: '10px', lg: '10px', xl: '10px', xxl: '10px', xxxl: '10px'}, color: 'rgba(212,225,237,1)'}}>{livePrice}</Box>
                                              </Box>

                                          </Box>

                                      </Grid>
                                
 
                                      <Grid item xs={3} sm={4} md={3.5} lg={3.5} xl={4} xxl={3.5} xxxl={4.5} sx={{display: 'flex', alignItems: 'center'}}>
                                          <Box>
                                              <Fab2 size='small' variant='extended' sx={{background: '#d4e1ed'}}>
                                                <MetalModal  
                                                    userCurrency={userCurrency} 
                                                    userMetal={userMetal} 
                                                    setUserMetal={setUserMetal} 
                                                    livePriceOZ={livePriceOZ} 
                                                    setLivePriceOZ={setLivePriceOZ} 
                                                    livePriceTOZ={livePriceTOZ} 
                                                    setLivePriceTOZ={setLivePriceTOZ} 
                                                    userUnit={userUnit} 
                                                    setUserUnit={setUserUnit}
                                                    userKey={userKey}
                                                    setSearchedCurrency={setSearchedCurrency}
                                                />
                                              </Fab2>
                                          </Box>                               
                                      </Grid>

                                  </Grid>

                              </Grid>

                              <Grid container sx={{height: '75px', paddingTop: '2%'}}>

                                  <Grid item xs={9} sm={8} md={8.5} lg={8.5} xl={8} xxl={8.5} xxxl={7.5} sx={{display: 'flex', alignItems: 'center'}}>
                                      <Box sx={{display: 'flex'}}>
                                          <Box sx={{fontFamily: 'Source Code Pro', fontSize: '28px', color: 'rgba(212,225,237,0.95)', 
                                              paddingLeft: {xs: '9%', sm: '9%', md: '9%', lg: '7%', xl: '8%', xxl: '17px', xxxl: '25px'},
                                              
                                          }}>
                                              {currencySymbol}
                                          </Box>

                                          <Box sx={{fontFamily: 'Source Code Pro', fontSize: '28px', color: 'rgba(212,225,237,0.95)',
                                              paddingLeft: {xs: '10px', sm: '10px', md: '10px', lg: '10px', xl: '10px', xxl: '10px', xxxl: '10px'},
                                              maxWidth: '200px'
                                          }}>
                                              {finalPrice}
                                          </Box>
                                      </Box>
                                  </Grid>

                                  <Grid item xs={3} sm={4} md={3.5} lg={3.5} xl={4} xxl={3.5} xxxl={4.5} sx={{display: 'flex', alignItems: 'center'}}>
                                    <Box>
                                          <Fab2 size='small' variant='extended' sx={{background: '#d4e1ed'}}><CurrencyModal userCurrency={userCurrency} setUserCurrency={setUserCurrency}/></Fab2>
                                    </Box>
                                    
                                  </Grid>
                              </Grid>

                              

                              
                          </Grid>
                        
                      </Paper>

                  </Box>
              </Box>
          </Paper>   
          </Grid>   
      </Grid>
    </Box>
  );
}

export default AppWindow;
