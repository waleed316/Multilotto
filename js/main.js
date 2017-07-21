$(document).ready(function() {
    
    for(var j = 1; j <=5; j++){
        flag=false;
        var list1 =[];
        for(var i = 1; i <= 69; i++){
            
            list1.push({'value':i,'checked':false});
            
            if(!flag){
                $("tbody.add"+j).append("<tr class=\"upper-border\">")
                flag=true;
                
            }
    
            $('tr.upper-border:last').append('<td><a id=add'+j+' data-index='+i+'>'+i+'</a></td>');
            
            if( i%5 == 0 ){
                $("tr.upper-border:last").append('</tr>');
                
                flag=false;
                
            }
            
            if(i>9){
                $("td:gt(8) a").addClass("extra-padding");
            }		
            
            

        }

    }


    for(var k = 6; k <=7; k++){
        flag=false;
        var list2 =[];
        for(var i = 1; i <= 69; i++){
            
            list2.push({'value':i,'checked':false});
            
            if(!flag){
                $("tbody.add"+k).append("<tr class=\"upper-border\">")
                flag=true;
                
            }
    
            $('tr.upper-border:last').append('<td><a id=add'+k+' data-index='+i+'>'+i+'</a></td>');
            
            if( i%7 == 0 ){
                $("tr.upper-border:last").append('</tr>');
                
                flag=false;
                
            }
            
            if(i>9){
                $("td:gt(8) a").addClass("extra-padding");
            }		
            
            

        }

    }



    // bonus section boxes
    for(var h = 1; h <=2; h++){
        flag=false;
        var list3 =[];
        for(var i = 1; i <= 26; i++){
            
            list3.push({'value':i,'checked':false});
            
            if(!flag){
                $("tbody.bonust"+h).append("<tr class=\"upper-border\">")
                flag=true;
                
            }
    
            $('tr.upper-border:last').append('<td><a id=btadd'+h+' data-index='+i+'>'+i+'</a></td>');
            
            if( i%7 == 0 ){
                $("tr.upper-border:last").append('</tr>');
                
                flag=false;
                
            }
            
            if(i>9){
                $("td:gt(8) a").addClass("extra-padding");
            }		
            
            

        }

    }




   




















// single game boxes

    var box1 = [];
            
    $( "a#add1" ).click(function() {
        
            
        if(box1.length<5){

            $( this ).toggleClass( "background_color" );
            var data = $(this).data('index');
            
            function findbydata(box1) {
                return box1.data === data;
            }
            
            var task = box1.find(findbydata);
            

            if(task){
                
                var index = box1.indexOf(task);
                box1.splice(index,1);
                
            
            }
            else{
                
                box1.push({data});
    
            }
            console.table(box1);
        } 

        else{

            var data = $(this).data('index');

            function findbydata(box1) {
                return box1.data === data;
            }
            
            var task = box1.find(findbydata);
            

            if(task){
                
                var index = box1.indexOf(task);
                box1.splice(index,1);
                $( this ).toggleClass( "background_color" );
                
            
            }
        }     


    });


    var box2 = [];
            
    $( "a#add2" ).click(function() {
        
            
        if(box2.length<5){

            $( this ).toggleClass( "background_color" );
            var data = $(this).data('index');
            
            function findbydata(box2) {
                return box2.data === data;
            }
            
            var task = box2.find(findbydata);
            

            if(task){
                
                var index = box2.indexOf(task);
                box2.splice(index,1);
                
            
            }
            else{
                
                box2.push({data});
    
            }
            console.table(box2);
        } 

        else{

            var data = $(this).data('index');

            function findbydata(box2) {
                return box2.data === data;
            }
            
            var task = box2.find(findbydata);
            

            if(task){
                
                var index = box2.indexOf(task);
                box2.splice(index,1);
                $( this ).toggleClass( "background_color" );
            
            }
        }     


    });




    var box3 = [];
            
    $( "a#add3" ).click(function() {
        
            
        if(box3.length<5){

            $( this ).toggleClass( "background_color" );
            var data = $(this).data('index');
            
            function findbydata(box3) {
                return box3.data === data;
            }
            
            var task = box3.find(findbydata);
            

            if(task){
                
                var index = box3.indexOf(task);
                box3.splice(index,1);
                
            
            }
            else{
                
                box3.push({data});
    
            }
            console.table(box3);
        } 

        else{

            var data = $(this).data('index');

            function findbydata(box3) {
                return box3.data === data;
            }
            
            var task = box3.find(findbydata);
            

            if(task){
                
                var index = box3.indexOf(task);
                box3.splice(index,1);
                $( this ).toggleClass( "background_color" );
                
            
            }
        }     


    });



    var box4 = [];
            
    $( "a#add4" ).click(function() {
        
            
        if(box4.length<5){

            $( this ).toggleClass( "background_color" );
            var data = $(this).data('index');
            
            function findbydata(box4) {
                return box4.data === data;
            }
            
            var task = box4.find(findbydata);
            

            if(task){
                
                var index = box4.indexOf(task);
                box4.splice(index,1);
                
            
            }
            else{
                
                box4.push({data});
    
            }
            console.table(box4);
        } 

        else{

            var data = $(this).data('index');

            function findbydata(box4) {
                return box4.data === data;
            }
            
            var task = box4.find(findbydata);
            

            if(task){
                
                var index = box4.indexOf(task);
                box4.splice(index,1);
                $( this ).toggleClass( "background_color" );
                
            
            }
        }     


    });



    var box5 = [];
            
    $( "a#add5" ).click(function() {
        
            
        if(box5.length<5){

            $( this ).toggleClass( "background_color" );
            var data = $(this).data('index');
            
            function findbydata(box5) {
                return box5.data === data;
            }
            
            var task = box5.find(findbydata);
            

            if(task){
                
                var index = box5.indexOf(task);
                box5.splice(index,1);
                
            
            }
            else{
                
                box5.push({data});
    
            }
            console.table(box5);
        } 

        else{

            var data = $(this).data('index');

            function findbydata(box5) {
                return box5.data === data;
            }
            
            var task = box5.find(findbydata);
            

            if(task){
                
                var index = box5.indexOf(task);
                box5.splice(index,1);
                $( this ).toggleClass( "background_color" );
                
            
            }
        }     


    });

// single game boxes end










// system game box

     var sysbox = [];
            
    $( "a#add6" ).click(function() {
        
            
        if(sysbox.length<12){

            $( this ).toggleClass( "background_color" );
            var data = $(this).data('index');
            
            function findbydata(sysbox) {
                return sysbox.data === data;
            }
            
            var task = sysbox.find(findbydata);
            

            if(task){
                
                var index = sysbox.indexOf(task);
                sysbox.splice(index,1);
                
            
            }
            else{
                
                sysbox.push({data});
    
            }
            console.table(sysbox);
        } 

        else{

            var data = $(this).data('index');

            function findbydata(sysbox) {
                return sysbox.data === data;
            }
            
            var task = sysbox.find(findbydata);
            

            if(task){
                
                var index = sysbox.indexOf(task);
                sysbox.splice(index,1);
                $( this ).toggleClass( "background_color" );
                
            
            }
        }     


    });


// system game box end here












// multiplayer game box

     var mulbox = [];
            
    $( "a#add7" ).click(function() {
        
            
        if(mulbox.length<12){

            $( this ).toggleClass( "background_color" );
            var data = $(this).data('index');
            
            function findbydata(mulbox) {
                return mulbox.data === data;
            }
            
            var task = mulbox.find(findbydata);
            

            if(task){
                
                var index = mulbox.indexOf(task);
                mulbox.splice(index,1);
                
            
            }
            else{
                
                mulbox.push({data});
    
            }
            console.table(mulbox);
        } 

        else{

            var data = $(this).data('index');

            function findbydata(mulbox) {
                return mulbox.data === data;
            }
            
            var task = mulbox.find(findbydata);
            

            if(task){
                
                var index = mulbox.indexOf(task);
                mulbox.splice(index,1);
                $( this ).toggleClass( "background_color" );
                
            
            }
        }     


    });


// multiplayer game box end here













// bonus game box

     var bonusbox1 = [];
            
    $( "a#btadd1" ).click(function() {
        
            
        if(bonusbox1.length<2){

            $( this ).toggleClass( "background_color" );
            var data = $(this).data('index');
            
            function findbydata(bonusbox1) {
                return bonusbox1.data === data;
            }
            
            var task = bonusbox1.find(findbydata);
            

            if(task){
                
                var index = bonusbox1.indexOf(task);
                bonusbox1.splice(index,1);
                
            
            }
            else{
                
                bonusbox1.push({data});
    
            }
            console.table(bonusbox1);
        } 

        else{

            var data = $(this).data('index');

            function findbydata(bonusbox1) {
                return bonusbox1.data === data;
            }
            
            var task = bonusbox1.find(findbydata);
            

            if(task){
                
                var index = bonusbox1.indexOf(task);
                bonusbox1.splice(index,1);
                $( this ).toggleClass( "background_color" );
                
            
            }
        }     


    });





    var bonusbox2 = [];
            
    $( "a#btadd2" ).click(function() {
        
            
        if(bonusbox2.length<2){

            $( this ).toggleClass( "background_color" );
            var data = $(this).data('index');
            
            function findbydata(bonusbox2) {
                return bonusbox2.data === data;
            }
            
            var task = bonusbox2.find(findbydata);
            

            if(task){
                
                var index = bonusbox2.indexOf(task);
                bonusbox2.splice(index,1);
                
            
            }
            else{
                
                bonusbox2.push({data});
    
            }
            console.table(bonusbox2);
        } 

        else{

            var data = $(this).data('index');

            function findbydata(bonusbox2) {
                return bonusbox2.data === data;
            }
            
            var task = bonusbox2.find(findbydata);
            

            if(task){
                
                var index = bonusbox2.indexOf(task);
                bonusbox2.splice(index,1);
                $( this ).toggleClass( "background_color" );
                
            
            }
        }     


    });



    // var bonusbox3 = [];
            
    // $( "a#btadd3" ).click(function() {
        
            
    //     if(bonusbox3.length<2){

    //         $( this ).toggleClass( "background_color" );
    //         var data = $(this).data('index');
            
    //         function findbydata(bonusbox3) {
    //             return bonusbox3.data === data;
    //         }
            
    //         var task = bonusbox3.find(findbydata);
            

    //         if(task){
                
    //             var index = bonusbox3.indexOf(task);
    //             bonusbox3.splice(index,1);
                
            
    //         }
    //         else{
                
    //             bonusbox3.push({data});
    
    //         }
    //         console.table(bonusbox3);
    //     } 

    //     else{

    //         var data = $(this).data('index');

    //         function findbydata(bonusbox3) {
    //             return bonusbox3.data === data;
    //         }
            
    //         var task = bonusbox3.find(findbydata);
            

    //         if(task){
                
    //             var index = bonusbox3.indexOf(task);
    //             bonusbox3.splice(index,1);
    //             $( this ).toggleClass( "background_color" );
                
            
    //         }
    //     }     


    // });



    // var bonusbox4 = [];
            
    // $( "a#btadd4" ).click(function() {
        
            
    //     if(bonusbox4.length<2){

    //         $( this ).toggleClass( "background_color" );
    //         var data = $(this).data('index');
            
    //         function findbydata(bonusbox4) {
    //             return bonusbox4.data === data;
    //         }
            
    //         var task = bonusbox4.find(findbydata);
            

    //         if(task){
                
    //             var index = bonusbox4.indexOf(task);
    //             bonusbox4.splice(index,1);
                
            
    //         }
    //         else{
                
    //             bonusbox4.push({data});
    
    //         }
    //         console.table(bonusbox4);
    //     } 

    //     else{

    //         var data = $(this).data('index');

    //         function findbydata(bonusbox4) {
    //             return bonusbox4.data === data;
    //         }
            
    //         var task = bonusbox4.find(findbydata);
            

    //         if(task){
                
    //             var index = bonusbox4.indexOf(task);
    //             bonusbox4.splice(index,1);
    //             $( this ).toggleClass( "background_color" );
                
            
    //         }
    //     }     


    // });


// bonus game box end here











});    