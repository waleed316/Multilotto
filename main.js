$(document).ready(function() {
    

    flag=false;
    var list1 =[];
    for(var i = 1; i <= 69; i++){
        
        list1.push({[i]:"false"});
        
        if(!flag){
            $("tbody.add").append("<tr class=\"upper-border\">")
            flag=true;
            
        }

        $( "a" ).click(function() {
        $( this ).toggleClass( "background_color" );
        var data = $(this).data('index');

            if(list1[i]=={[data]:"true"}){

                list1[data-1]={[data]:"false"}

            }
        
            else{
            
                list1[data-1]={[data]:"true"}   
            }

            console.log(JSON.stringify(list1));
           
        });
         
        $('tr.upper-border:last').append('<td><a data-index='+i+'>'+i+'</a></td>');
        
        if( i%5 == 0 ){
            $("tr.upper-border:last").append('</tr>');
            
            flag=false;
            
        }
        
        if(i>9){
            $("td:gt(8) a").addClass("extra-padding");
        }		

        $( "a" ).click(function() {
        $( this ).toggleClass( "background_color" );
        });
    }
    

console.log(JSON.stringify(list1));

});    