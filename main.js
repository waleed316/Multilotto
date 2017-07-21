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


});    