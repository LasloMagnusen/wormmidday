


                                
                        import React from 'react';

                        import { ToastContainer, toast } from 'react-toastify';
                        import 'react-toastify/dist/ReactToastify.css';
                        
                        function App(){
                          const notify = () => toast("Wow so easy!");
                      
                          return (
                            <div>
                              <button onClick={notify}>Notify!</button>
                              <ToastContainer />
                            </div>
                          );
                        }          
                                
                                
                                
                                
                                function connectmetamask(){

                                    try {

                                        document.getElementById('connectwallet').click();


                                                        } 
                                                        
                                                        catch (err) {
                                                          console.log('already connected')


                                                        }

                                                    }
                          
  function roulettemint(){


                            try {

                                document.getElementById('roulettemint').click();


                                    } catch (err) {

                                        document.getElementById('connectwallet').click();

                                        // let switchcolor = document.getElementById('roulettebtn')
                                        // switchcolor.innerHTML = '<img id="roulettebtn" class="btn_roulette" style="cursor:pointer;margin: 30px 0px 30px 0px;max-width: 320px;" src="mint_elements/btn_gray.png" onclick="roulettemint();" alt="ROULETTE">'

                                        console.log(err)


                                    }

                            }
                         
             


                            function connectmetamask(){

                              try {

                                  document.getElementById('connectwallet').click();


                                                  } 
                                                  
                                                  catch (err) {
                                                    console.log('already connected')


                                                  }

                                              }