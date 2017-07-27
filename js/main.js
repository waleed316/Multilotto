$(document).ready(function () {

    // generate number 1 to 69 for money millions and put selected numbers in arrays box1

        for (var j = 1; j <= 5; j++) {
            flag = false;
            var list1 = [];
            for (var i = 1; i <= 69; i++) {

                // list1.push({i});

                if (!flag) {
                    $("tbody.add" + j).append("<tr class=\"upper-border\">")
                    flag = true;

                }

                $('tbody.add' + j + ' tr.upper-border:last').append('<td><a id=add' + j + ' data-index=' + i + '>' + i + '</a></td>');

                if (i % 5 == 0) {
                    $("tr.upper-border:last").append('</tr>');

                    flag = false;

                }

                if (i > 9) {
                    $("td:gt(8) a").addClass("extra-padding");
                }


            }
            
            
        }
 
    // end of money millions list

    // bonus section boxes

        for (var h = 1; h <=10; h++) {
            flag = false;
            var list3 = [];
            for (var i = 1; i <= 26; i++) {

                // list3.push({ 'value': i, 'checked': false });

                if (!flag) {
                    $("tbody.bonustable" + h).append("<tr class=\"upper-border\">")
                    flag = true;

                }
                
                $('tbody.bonustable' + h + ' tr.upper-border:last').append('<td><a id=btadd' + h + ' data-index=' + i + '>' + i + '</a></td>');

                if (i % 5 == 0) {
                    $("tr.upper-border:last").append('</tr>');

                    flag = false;

                }

                if (i > 9) {
                    $("td:gt(8) a").addClass("extra-padding");
                }
                
               
            }



        }

    // bonus table end here

    // Generate System and Group Play section Numbers 

        for (var k = 1; k <= 2; k++) {
            flag = false;
            var list2 = [];
            for (var i = 1; i <= 69; i++) {

                // list2.push({ 'value': i, 'checked': false });

                if (!flag) {
                    $("tbody.system-add-table" + k).append("<tr class=\"upper-border\">")
                    flag = true;

                }

                $('tbody.system-add-table' + k + ' tr.upper-border:last').append('<td><a id=sysaddbtn' + k + ' data-index=' + i + '>' + i + '</a></td>');

                if (i % 7 == 0) {
                    $("tr.upper-border:last").append('</tr>');

                    flag = false;

                }

                if (i > 9) {
                    $("td:gt(8) a").addClass("extra-padding");
                }

            }

        }

    // Generate System and Group Play section Numbers 


    // bonus sction for system and group play section
        for (var i = 1; i <= 4; i++) {
            flag = false;
            var list4 = [];
            for (var j = 1; j <= 26; j++) {

                // list4.push({ j });

                if (!flag) {
                    $("tbody.systembonustable" + i).append("<tr class=\"upper-border\">")
                    flag = true;

                }

                $('tbody.systembonustable' + i + ' tr.upper-border:last').append('<td><a id=systembtnadd' + i + ' data-index=' + j + '>' + j + '</a></td>');

                if (j % 7 == 0) {
                    $("tr.upper-border:last").append('</tr>');

                    flag = false;

                }

                if (i > 9) {
                    $("td:gt(8) a").addClass("extra-padding");
                }

            }

        }

    // End bonus sction of system and group play section

});



$(document).ready(function () {
   
    // single player game boxes
        var bonusbox = [];
        for (var j = 1; j <= 5; j++){
            bonusbox[j] = [];
        }     

        var box = [];
        for (var i = 1; i <= 5; i++)
            box[i] = [];
        for (var i = 1; i <= 5; i++) {
            $("a#add" + i).click(createCallback(i))
            $("a.random-btn"+i).click(randomclick(i))
            $("a.fa-trash"+i).click(deleteclick(i))
            $(".quickpick-btn").click(randomclick(i))
            
            
        }

        function createCallback(i) {
            return function () {
                if (box[i].length < 5) {
                    $(this).toggleClass("background_color");
                    var data = $(this).data('index');
                    console.table(data);
                    function findbydata(i) {
                        return i.data == data;
                    }
                    var task = box[i].find(findbydata);
                    if (task) {
                        var index = box[i].indexOf(task);
                        box[i].splice(index, 1);
                    }
                    else {
                        box[i].push({ data });

                    }
                    console.table(box[i]);
                }
                else {

                    var data = $(this).data('index');
                    function findbydata(i) {
                        return i.data == data;
                    }
                    var task = box[i].find(findbydata);

                    if (task) {
                        var index = box[i].indexOf(task);
                        box[i].splice(index, 1);
                        $(this).toggleClass("background_color");


                    }
                }
            }
        }

        function randomclick(i){
           
            return function (){

                for (var f = 0; f < box[i].length; f++){
                    var fbMenu = box[i][f];
                    $("a#add"+i).filter("[data-index="+fbMenu.data+"]").toggleClass("background_color");
                
                }
                for (var f = 0; f < bonusbox[i].length; f++){
                    var fbMenu1 = bonusbox[i][f];
                    $("a#btadd"+i).filter("[data-index="+fbMenu1.data+"]").toggleClass("background_color");
                
                }

                while(box[i].length > 0){
                    box[i].pop();
                }
                while(bonusbox[i].length > 0){
                    bonusbox[i].pop();
                }
               

                for(var k=1; k<=5; k++) {
                    var data=(Math.floor(Math.random() * 69) + 1);       
                    function findbydata(i) {
                        return i.data == data;
                    }
                    var task = box[i].find(findbydata);
                    if (task) {
                        var index = box[i].indexOf(task);
                        box[i].splice(index, 1);
                        $("a#add"+i).filter("[data-index="+data+"]").toggleClass("background_color");
                        for(g=1; g<=2; g++){
                            var ddata=(Math.floor(Math.random() * 69) + 1);
                            box[i].push({"data":ddata});
                            $("a#add"+i).filter("[data-index="+ddata+"]").toggleClass("background_color");
                        }
                    }
                    else {
                        box[i].push({ data });
                        $("a#add"+i).filter("[data-index="+data+"]").toggleClass("background_color");

                    }
                    
                    
                    
                }
                    console.table(box[i]);
                    
                    var data = (Math.floor(Math.random() * 26) + 1);
                    bonusbox[i].push({data});
                    $("a#btadd"+i).filter("[data-index="+data+"]").toggleClass("background_color");

           
                    console.table(bonusbox[i]);
           
            }
        }
        


        function deleteclick(i){

            return function (){
                for (var f = 0; f < box[i].length; f++){
                        var fbMenu = box[i][f];
                        $("a#add"+i).filter("[data-index="+fbMenu.data+"]").toggleClass("background_color");  
                          
                }
                
                for (var f = 0; f < bonusbox[i].length; f++){
                        var fbMenu1 = bonusbox[i][f];
                        $("a#btadd"+i).filter("[data-index="+fbMenu1.data+"]").toggleClass("background_color");  
                                            
                }

                while(box[i].length > 0){
                    box[i].pop();
                }

                while(bonusbox[i].length > 0){
                    bonusbox[i].pop();
                   
                }

               
            }
        }

    // single box end here


    // Bonus Selection game boxes

        
        for (var k = 1; k <= 10; k++) 
            $("a#btadd" + k).click(createCallback1(k))

        function createCallback1(k) {
            return function () {
                if (bonusbox[k].length < 1) {
                    $(this).toggleClass("background_color");
                    var data = $(this).data('index');

                    function findbydata(k) {
                        return k.data == data;
                    }
                    var task = bonusbox[k].find(findbydata);
                    if (task) {
                        var index = bonusbox[k].indexOf(task);
                        bonusbox[k].splice(index, 1);
                    }
                    else {
                        bonusbox[k].push({ data });

                    }
                    console.table(bonusbox[k]);
                }
                else {

                    var data = $(this).data('index');
                    function findbydata(k) {
                        return k.data == data;
                    }
                    var task = bonusbox[k].find(findbydata);

                    if (task) {
                        var index = bonusbox[k].indexOf(task);
                        bonusbox[k].splice(index, 1);
                        $(this).toggleClass("background_color");
                    

                    }
                }
            }
        }



    // single box end here



    // system Selection game boxes

        // create array for bonus box 
            var sysbonusbox = [];
            for (var j = 1; j <= 4; j++){
                sysbonusbox[j] = [];
            }
        // end of bonus box array here
        
        // create array of system and multiplayer box for selection
            var sysbox = [];
            for (var i = 1; i <= 2; i++){
                sysbox[i] = [];
            }
        // End of Array system and multiplayer box for selection


        // Click button for Selection of Numbers and random Selection
            for (var i = 1; i <= 2; i++){ 
                $("a#sysaddbtn" + i).click(createCallback2(i))
                $("a.random-btna"+i).click(randomclicka1(i))   
                $("a.fa-trasha"+i).click(deleteclicka1(i))
            }
        // End here 

        // generate random Numbers From 5 to 12 
            var random_lenght =[] ;
            for (var i = 1; i <= 8; i++)
                    random_lenght[i] = $(':button.random-btna'+i).data("index");
            
            for (var j = 1; j <= 8; j++){
                for(var i=1; i<=2; i++)
                $(".random-btna"+j).click(randomclicka11(i,j))
                console.log(random_lenght[j]);
            }
        // End here







        // Single selection for System and Multiplayer boxes
            function createCallback2(i) {
                return function () {
                    if (sysbox[i].length < 12) {
                        $(this).toggleClass("background_color");
                        var data = $(this).data('index');

                        function findbydata(i) {
                            return i.data == data;
                        }
                        var task = sysbox[i].find(findbydata);
                        if (task) {
                            var index = sysbox[i].indexOf(task);
                            sysbox[i].splice(index, 1);
                        }
                        else {
                            sysbox[i].push({ data });

                        }
                        console.table(sysbox[i]);
                    }
                    else {

                        var data = $(this).data('index');
                        function findbydata(i) {
                            return i.data == data;
                        }
                        var task = sysbox[i].find(findbydata);

                        if (task) {
                            var index = sysbox[i].indexOf(task);
                            sysbox[i].splice(index, 1);
                            $(this).toggleClass("background_color");


                        }
                    }
                }
            }
        // End Here Single selection for System and Multiplayer boxes
        
        // Random selection for System and Multiplayer boxes in Mobile View button
            function randomclicka1(i){
            
                return function (){

                    for (var f = 0; f<sysbox[i].length; f++){
                        var fbMenu = sysbox[i][f];
                        $("a#sysaddbtn"+i).filter("[data-index="+fbMenu.data+"]").toggleClass("background_color");
                    
                    }

                    for (var f = 0; f<sysbonusbox[i].length; f++){
                        var fbMenu1 = sysbonusbox[i][f];
                        $("a#systembtnadd"+i).filter("[data-index="+fbMenu1.data+"]").toggleClass("background_color");
                    
                    }

                    sysbox[i]=[];
                    while(sysbox[i].length > 0){
                        sysbox[i].pop();
                    }

                    sysbonusbox[i]=[];
                    while(sysbonusbox[i].length > 0){
                        sysbonusbox[i].pop();
                    }
                    

                    for(var k=1; k<=5; k++) {
                        var data=(Math.floor(Math.random() * 69) + 1);       
                        function findbydata(i) {
                            return i.data == data;
                        }
                        var task = sysbox[i].find(findbydata);
                        if (task) {
                            var index = sysbox[i].indexOf(task);
                            sysbox[i].splice(index, 1);
                            $("a#sysaddbtn"+i).filter("[data-index="+data+"]").toggleClass("background_color");
                            for(var g=1; g<=2; g++){
                                var ddata=(Math.floor(Math.random() * 69) + 1);
                                sysbox[i].push({"data":ddata});
                                $("a#sysaddbtn"+i).filter("[data-index="+ddata+"]").toggleClass("background_color");
                            }
                        }
                        else {
                            sysbox[i].push({ data });
                            $("a#sysaddbtn"+i).filter("[data-index="+data+"]").toggleClass("background_color");

                        }
                        
                        
                        
                    }

                    console.table(sysbox[i]);  

                    var data = (Math.floor(Math.random() * 26) + 1);
                        sysbonusbox[i].push({data});
                        $("a#systembtnadd"+i).filter("[data-index="+data+"]").toggleClass("background_color");

            
                        console.table(sysbonusbox[i]);         
                        
                    
                }
            }
        // End Here

        function randomclicka11(i,j){
        
            return function (){

                for (var f = 0; f<sysbox[i].length; f++){
                    var fbMenu = sysbox[i][f];
                    $("a#sysaddbtn"+i).filter("[data-index="+fbMenu.data+"]").toggleClass("background_color");
                
                }

                sysbox[i]=[];
                while(sysbox[i].length > 0){
                    sysbox[i].pop();
                }
                

                for(var k=1; k<=random_lenght[j]; k++) {
                    var data=(Math.floor(Math.random() * 69) + 1);       
                    function findbydata(i) {
                        return i.data == data;
                    }
                    var task = sysbox[i].find(findbydata);
                    if (task) {
                        var index = sysbox[i].indexOf(task);
                        sysbox[i].splice(index, 1);
                        $("a#sysaddbtn"+i).filter("[data-index="+data+"]").toggleClass("background_color");
                        for(g=1; g<=2; g++){
                            var ddata=(Math.floor(Math.random() * 69) + 1);
                            sysbox[i].push({"data":ddata});
                            $("a#sysaddbtn"+i).filter("[data-index="+ddata+"]").toggleClass("background_color");
                        }
                    }
                    else {
                        sysbox[i].push({ data });
                        $("a#sysaddbtn"+i).filter("[data-index="+data+"]").toggleClass("background_color");

                    }
                    
                    
                    
                }

                console.table(sysbox[i]);           
                    
                
            }
        }

        function deleteclicka1(i){

            return function (){
                for (var f = 0; f < sysbox[i].length; f++){
                        var fbMenu = sysbox[i][f];
                        $("a#sysaddbtn"+i).filter("[data-index="+fbMenu.data+"]").toggleClass("background_color");
                }       

                for (var f = 0; f<sysbonusbox[i].length; f++){
                    var fbMenu1 = sysbonusbox[i][f];
                    $("a#systembtnadd"+i).filter("[data-index="+fbMenu1.data+"]").toggleClass("background_color");
                
                }
                    
                while(sysbox[i].length > 0){
                        sysbox[i].pop();
                }

                sysbonusbox[i]=[];
                while(sysbonusbox[i].length > 0){
                    sysbonusbox[i].pop();
                }
            }
        }


        
    // single box end here


    // system Selection bonus game boxes

      
        for (var k = 1; k <= 4; k++){
            $("a#systembtnadd" + k).click(createCallback3(k))
        }

        var bonus_random_lenght =[] ;
        for (var i = 1; i <= 2; i++)
                bonus_random_lenght[i] = $(':button.random-btnb'+i).data("index");
        
        for (var j = 1; j <= 2; j++){
            for(var i=1; i<=2; i++)
            $(".random-btnb"+j).click(randomclickb11(i,j))
            console.log(bonus_random_lenght[j]);
        }




        function createCallback3(k) {
            return function () {
                if (sysbonusbox[k].length < 2) {
                    $(this).toggleClass("background_color");
                    var data = $(this).data('index');

                    function findbydata(k) {
                        return k.data == data;
                    }
                    var task = sysbonusbox[k].find(findbydata);
                    if (task) {
                        var index = sysbonusbox[k].indexOf(task);
                        sysbonusbox[k].splice(index, 1);
                    }
                    else {
                        sysbonusbox[k].push({ data });

                    }
                    console.table(sysbonusbox[k]);
                }
                else {

                    var data = $(this).data('index');
                    function findbydata(k) {
                        return k.data == data;
                    }
                    var task = sysbonusbox[k].find(findbydata);

                    if (task) {
                        var index = sysbonusbox[k].indexOf(task);
                        sysbonusbox[k].splice(index, 1);
                        $(this).toggleClass("background_color");


                    }
                }
            }
        }


        function randomclickb11(i,j){
        
            return function (){

                for (var f = 0; f<sysbonusbox[i].length; f++){
                    var fbMenu = sysbonusbox[i][f];
                    $("a#systembtnadd"+i).filter("[data-index="+fbMenu.data+"]").toggleClass("background_color");
                
                }

                sysbonusbox[i]=[];
                while(sysbonusbox[i].length > 0){
                    sysbonusbox[i].pop();
                }
                

                for(var k=1; k<=bonus_random_lenght[j]; k++) {
                    var data=(Math.floor(Math.random() * 26) + 1);       
                    function findbydata(i) {
                        return i.data == data;
                    }
                    var task = sysbonusbox[i].find(findbydata);
                    if (task) {
                        var index = sysbonusbox[i].indexOf(task);
                        sysbonusbox[i].splice(index, 1);
                        $("a#systembtnadd"+i).filter("[data-index="+data+"]").toggleClass("background_color");
                  
                            // var ddata=(Math.floor(Math.random() * 26) + 1);
                            // sysbonusbox[i].push({"data":ddata});
                            // $("a#systembtnadd2").filter("[data-index="+ddata+"]").toggleClass("background_color");
                    
                    }
                    else {
                        sysbonusbox[i].push({ data });
                        $("a#systembtnadd"+i).filter("[data-index="+data+"]").toggleClass("background_color");

                    }
                    
                    
                    
                }

                console.table(sysbonusbox[i]);           
                    
                
            }
        }
    
            
            


    // single box end here

});




       
    
$(".radio-inline input[name='optradio']").click(function(){
    
    var x ,y,z;
    var x = document.getElementById("draw-no");
    var z = document.getElementById("total_amount");
    
    if (document.getElementById("v1").checked){
        y = document.getElementById("v1").value;
        var amount = $('.draw-1').html();
        x.innerHTML = y;
        z.innerHTML = amount;

    }
    else if(document.getElementById("v2").checked){
        y = document.getElementById("v2").value;
        var amount = $('.draw-2').html();
        x.innerHTML = y;
        z.innerHTML = amount;
    }
    else if (document.getElementById("v3").checked){
        y = document.getElementById("v3").value;
        var amount = $('.draw-3').html();
        x.innerHTML = y;
        z.innerHTML = amount;
    }
    else if (document.getElementById("v4").checked){
        y = document.getElementById("v4").value;
        var amount = $('.draw-4').html();
        x.innerHTML = y;
        z.innerHTML = amount;
    }
    else
    y = "kuch nhi;"
    x.innerHTML = y;
});