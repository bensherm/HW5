
var $box1 = $('#one');
var $box2 = $('#two');
var $box3 = $('#three');

function generate(box){
    var rndNum;
for(var boxes=1; boxes<=3; boxes++)
    {
        for(var iteration=1; iteration<=10; iteration++)
            {
                do
                {
                   rndNum = Math.floor(Math.random() * 10)
                }
                while ( (rndNum==0) || (rndNum >3) );   
                if (rndNum == 1){
                        box.attr('class', 'one');
                            
                        }
                    if (rndNum == 2){
                        box.attr('class', 'two');
                          }
                    if (rndNum == 3){
                        box.attr('class','three');
                    }
            }
    }
}
        
function spin (){
        generate($box2);
        generate($box1);
        generate($box3);
    checkresult();
}
var $btn = $('#spin');
$btn.click(spin);




function checkresult(){
    if ($box1.attr('class')== $box2.attr('class') && $box1.attr('class') == $box3.attr('class')){$('#msg').html('Congrats!')};
    
}


function quit(){
$('#table').fadeOut(2000);
    $('#msg').html('Goodbye');
    
}

var donebtn= $('#done');
donebtn.click(quit);


function animation(){
    $('#spin').toggleClass("animate");
    
}
function spinagain(){
    $('#spin').text('spin again');

}
function goback(){
    $('#spin').text('spin now');
}

$btn.on('mouseover', animation).on('mouseout', animation);

$btn.on('mouseover', spinagain).on('mouseout', goback);
    