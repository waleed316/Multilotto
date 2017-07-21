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



    var selected = [];
            
    $( "a#add2" ).click(function() {
        
            
        if(selected.length<5){

            $( this ).toggleClass( "background_color" );
            var data = $(this).data('index');
            
            function findbydata(selected) {
                return selected.data === data;
            }
            
            var task = selected.find(findbydata);
            

            if(task){
                
                var index = selected.indexOf(task);
                selected.splice(index,1);
                
            
            }
            else{
                
                selected.push({data});
    
            }
            console.table(selected);
        } 

        else{

            var data = $(this).data('index');

            function findbydata(selected) {
                return selected.data === data;
            }
            
            var task = selected.find(findbydata);
            

            if(task){
                
                var index = selected.indexOf(task);
                selected.splice(index,1);
                
            
            }
        }     


    });

});    