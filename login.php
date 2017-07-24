<!doctype html>
<html lang="en">
    
    <?php include 'header.php' ?>

    
    

    <body>

       
            
           



        <div class="container main-margin">
            
            <?php include 'topbar.php' ?>

            <div class="row">

                <div class="section">
                    
                    <div class="col-md-12">

                        <!-- header starts -->
                        <header>
                                <!-- responsive nav bar -->
                            <div class="nav-bar" id="menu">
                                <a href=""><i class="fa fa-bars"></i><span><img src="images/money_yours.png" class="img-responsive" ></span></a>
                            </div>
                                <!-- navigation -->
                            <nav>
                                <ul>
                                    <li><a class="hm-dis" href="index.php">HOME</a></li>
                                    <li><a href="moneymillion.php">MONEY MILLION</a></li>
                                    <li><a href="yourmillion.php">YOUR MILLIONS</a></li>
                                    <li><a href="moneyjackpot.php">MONEY JACKPOT</a></li>
                                    <li><a href="winahouse.php">WIN A HOUSE</a></li>
                                    <li><a href="winayacht.php">WIN A YACHT</a></li>
                                    <li><a href="winacar.php">WIN A CAR</a></li>
                                    <li><a href="result.php">LOTTO RESULTS</a></li>
                                    <li><a class="hm-dis" style="color:#62b32c" href="signup.php">SIGN UP</a></li>
                                    <li><a class="hm-dis" style="color:rgb(81, 145, 196);" href="login.php">LOG IN</a></li>
                                    
                                </ul>
                            </nav> <!-- navigation end -->
                            
                        </header> <!-- header end -->


                    </div>
                    
                </div>

            </div>


            <div class="row">

                <section>

                   <div class="col-md-12 tagline-margin col-sm-12 col-xs-6">

                        <h5 class="tag-line"><i class="fa fa-play" aria-hidden="true"></i>&nbsp; Welcome to moneyyours.com. Play lotto on the world's biggest lotteries and make your dream come true!<span class="pull-right">time clock</span></h5>
                        
                   
                   </div>

                </section>
            
            </div>

           

            <!-- Main Section -->


            <div class="row">
            
                <section class="main-section">

                
                    <div class="container">

                        <div class="col-md-12"> 

                            <h3 class="ltry-head">Sign up or log in</h3>

                        </div>

                       

                        <div class="col-md-6 col-sm-12 col-xs-12">

                            <h3 class="rslt-date">Existing Customer</h3>
                            <h5 class="rslt-note1">Please log in below if you have ever played with us before.</h5>
                            

                            <div class="login-form-page">

                                <form>

                                    <div class="form-group">
                                
                                        <input type="email" class="form-control lgn-pg-input" id="email" placeholder="E-mail">
                                    
                                    </div>

                                    <div class="form-group">
                                       
                                        <input type="password" class="form-control lgn-pg-input" id="pwd" placeholder="Password">
                                    
                                    </div>

                                    <div>
                                        <a type="checkbox"> Forgot your Password</a>
                                    </div>
                                    <button type="submit" class="btn btn-default pull-right log-btn-frm">LOG IN</button>
                                    </form>


                                </form>
                                    
                            </div>

                            
                        </div>


                        <div class="col-md-6 col-sm-12 col-xs-12" >

                            <h3 class="rslt-date">New customer</h3>
                            <h5 class="rslt-note1">Create your account here - you will be done in under a minute!</h5>
                            
                            <button type="submit" class="btn btn-default signup-btn-frm">SIGN UP</button>
                        </div>

                    </div>
                    

                </scetion>

            </div>
               
            <!-- Main Section Ends Here-->

            
            <?php include 'payment.php' ?>

            <hr>

            <div class="row">

                <section class="description">

                    <div class="col-md-12">

                        <h6>
                            <p>
                              On this page you can find all the latest lottery results, as well as a comprehensive record of past lotto results. Use this page to verify your last played numbers and see if they are winning lottery numbers. You can find results and payout for a wide variety of international lotteries. Find Money Million results, UK lottery results, Euromillions results and National lottery results from your local operators. We update all results shortly after the corresponding draw has taken place, so you can always find the right lotto numbers here, and use the page as a lotto results checker! Use the menu on your left to choose which lottery you would like to see the latest results for, then navigate back in time for historical results.
                            
                                                         
                            </p>
                        
                        </h6>

                    </div>

                </section>

            </div>

            <!-- Description Ends here -->
        
           <!-- Footer -->
            <hr>

            <?php include 'footer.php' ?>            

            

        </div>


        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <script>

            // var array-1 = [{
            //     'value':1,
            //     'checked':false
            // },
            // {
            //     'value':1,
            //     'checked':false
            // }
            // {
            //     'value':1,
            //     'checked':false
            // }
            // {
            //     'value':1,
            //     'checked':false
            // }
            // {
            //     'value':1,
            //     'checked':false
            // }
            // {
            //     'value':1,
            //     'checked':false
            // }
            // {
            //     'value':1,
            //     'checked':false
            // }
            // ]

            // var container = $('.upper-border'); 
            
            // counter =0;
            // flag = false;
            // for(var i = 1; i <= num; i++) {
            //     if(!flag){
            //         container.append('<tr id="id'+i+'" data-index='+i+'>);    
            //         flag = true;
            //     }
            //     container.append('<a id="id'+i+'" data-index='+i+'>'+i+'</a>');
            //     if((i % 5) == 0){
            //         container.append('</tr>');
            //         flag = false;
            //     }
            // }

                $(document).ready(function(){
                     
                    var val = 1;

                    $("#menu").click(function(){


                    if (val == 1) {

                        $("header nav").animate({
                            'left' : '0'
                        });
                        val = 0;
                    }else{
                        val = 1;
                        $("header nav").animate({
                            'left' : '-100%'
                        });
                    }



                    return false;
                });

                    // submenu
                    $('.sub-menu').click(function(){
                        $(this).children('.children').slideToggle();
                    })


                });

        </script>
        
        <!-- 80f601e453811a3a139a5120d2f103bf -->


    </body>
</html>