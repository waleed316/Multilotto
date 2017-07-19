$(document).ready(function() {
    

    flag=false;
    var list1 =[];
    for(var i = 1; i <= 69; i++){
        
        list1.push({'value':i,'checked':false});
        
        if(!flag){
            $("tbody.add").append("<tr class=\"upper-border\">")
            flag=true;
            
        }
   
        $('tr.upper-border:last').append('<td><a data-index='+i+'>'+i+'</a></td>');
        
        if( i%5 == 0 ){
            $("tr.upper-border:last").append('</tr>');
            
            flag=false;
            
        }
        
        if(i>9){
            $("td:gt(8) a").addClass("extra-padding");
        }		
        
        

    }
    
    

    var selected = [];
            
    $( "a" ).click(function() {
        
            
        if(selected.length<5){

            $( this ).toggleClass( "background_color" );
            var data = $(this).data('index');
            selected.push({"value":data});
            

            var index = selected.indexOf(data);
 
                if (index > -1) {
                selected.splice(index, 1);
                }
        }

    });

});    