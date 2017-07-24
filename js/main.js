$(document).ready(function () {

    // generate number 1 to 69 for money millions and put selected numbers in arrays box1

        for (var j = 1; j <= 10; j++) {
            flag = false;
            var list1 = [];
            for (var i = 1; i <= 69; i++) {

                list1.push({i});

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
        console.table(list1);
    // end of money millions list

    // bonus section boxes
        for (var h = 1; h <= 20; h++) {
            flag = false;
            var list3 = [];
            for (var i = 1; i <= 26; i++) {

                list3.push({ 'value': i, 'checked': false });

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

        for (var k = 1; k <= 4; k++) {
            flag = false;
            var list2 = [];
            for (var i = 1; i <= 69; i++) {

                list2.push({ 'value': i, 'checked': false });

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
        for (var i = 1; i <= 8; i++) {
            flag = false;
            var list4 = [];
            for (var j = 1; j <= 26; j++) {

                list4.push({ j });

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


    // single player game boxes

        var box = [];
        for (var i = 1; i <= 10; i++)
            box[i] = [];
        for (var i = 1; i <= 10; i++) {
            $("a#add" + i).click(createCallback(i))
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
                    console.log(box[i]);
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



    // single box end here


    // Bonus Selection game boxes

        var bonusbox = [];
        for (var j = 1; j <= 20; j++)
            bonusbox[j] = [];
        for (var k = 1; k <= 20; k++) 
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

        var sysbox = [];
        for (var j = 1; j <= 10; j++)
            sysbox[j] = [];
        for (var k = 1; k <= 10; k++) 
            $("a#sysaddbtn" + k).click(createCallback2(k))

        function createCallback2(k) {
            return function () {
                if (sysbox[k].length < 12) {
                    $(this).toggleClass("background_color");
                    var data = $(this).data('index');

                    function findbydata(k) {
                        return k.data == data;
                    }
                    var task = sysbox[k].find(findbydata);
                    if (task) {
                        var index = sysbox[k].indexOf(task);
                        sysbox[k].splice(index, 1);
                    }
                    else {
                        sysbox[k].push({ data });

                    }
                    console.table(sysbox[k]);
                }
                else {

                    var data = $(this).data('index');
                    function findbydata(k) {
                        return k.data == data;
                    }
                    var task = sysbox[k].find(findbydata);

                    if (task) {
                        var index = sysbox[k].indexOf(task);
                        sysbox[k].splice(index, 1);
                        $(this).toggleClass("background_color");


                    }
                }
            }
        }



    // single box end here


    // system Selection game boxes

        var sysbonusbox = [];
        for (var j = 1; j <= 10; j++)
            sysbonusbox[j] = [];
        for (var k = 1; k <= 10; k++) 
            $("a#systembtnadd" + k).click(createCallback3(k))

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



    // single box end here
    

    $('a.random-btn').click(function() {
        var randompick = [];
        for(var i=1; i<=5; i++) {
            randompick.push([Math.floor(Math.random()*list1.length)]);
            $('a#add6').filter("[data-index="+randompick+"]").toggleClass("background_color");
            // $("a#add6[data-index="+randompick+"]").toggleClass("background_color");
            console.log(randompick);
        }
        
    });


});

