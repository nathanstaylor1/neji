//hiragana converter.

function Hiragana(){
    this.あ = ["","a","word","story story story"]
this.い = ["","i","word","story story story"]
this.う = ["","u","word","story story story"]
this.え = ["","e","word","story story story"]
this.お = ["","o","word","story story story"]
this.か = ["k","a","word","story story story"]
this.き = ["k","i","word","story story story"]
this.く = ["k","u","word","story story story"]
this.け = ["k","e","word","story story story"]
this.こ = ["k","o","word","story story story"]
this.さ = ["s","a","word","story story story"]
this.し = ["s","i","word","story story story"]
this.す = ["s","u","word","story story story"]
this.せ = ["s","e","word","story story story"]
this.そ = ["s","o","word","story story story"]
this.た = ["t","a","word","story story story"]
this.ち = ["t","i","word","story story story"]
this.つ = ["t","u","word","story story story"]
this.て = ["t","e","word","story story story"]
this.と = ["t","o","word","story story story"]
this.な = ["n","a","word","story story story"]
this.に = ["n","i","word","story story story"]
this.ぬ = ["n","u","word","story story story"]
this.ね = ["n","e","word","story story story"]
this.の = ["n","o","word","story story story"]
this.は = ["h","a","word","story story story"]
this.ひ = ["h","i","word","story story story"]
this.ふ = ["h","u","word","story story story"]
this.へ = ["h","e","word","story story story"]
this.ほ = ["h","o","word","story story story"]
this.ま = ["m","a","word","story story story"]
this.み = ["m","i","word","story story story"]
this.む = ["m","u","word","story story story"]
this.め = ["m","e","word","story story story"]
this.も = ["m","o","word","story story story"]
this.や = ["y","a","word","story story story"]
this.ゆ = ["y","u","word","story story story"]
this.よ = ["y","o","word","story story story"]
this.ら = ["r","a","word","story story story"]
this.り = ["r","i","word","story story story"]
this.る = ["r","u","word","story story story"]
this.れ = ["r","e","word","story story story"]
this.ろ = ["r","o","word","story story story"]
this.わ = ["w","a","word","story story story"]
this.を = ["w","o","word","story story story"]
this.が = ["g","a","word","story story story"]
this.ぎ = ["g","i","word","story story story"]
this.ぐ = ["g","u","word","story story story"]
this.げ = ["g","e","word","story story story"]
this.ご = ["g","o","word","story story story"]
this.ざ = ["z","a","word","story story story"]
this.じ = ["z","i","word","story story story"]
this.ず = ["z","u","word","story story story"]
this.ぜ = ["z","e","word","story story story"]
this.ぞ = ["z","o","word","story story story"]
this.だ = ["d","a","word","story story story"]
this.づ = ["d","i","word","story story story"]
this.ぢ = ["d","u","word","story story story"]
this.で = ["d","e","word","story story story"]
this.ど = ["d","o","word","story story story"]
this.ば = ["b","a","word","story story story"]
this.び = ["b","i","word","story story story"]
this.ぶ = ["b","u","word","story story story"]
this.べ = ["b","e","word","story story story"]
this.ぼ = ["b","o","word","story story story"]
this.ぱ = ["p","a","word","story story story"]
this.ぴ = ["p","i","word","story story story"]
this.ぷ = ["p","u","word","story story story"]
this.ぺ = ["p","e","word","story story story"]
this.ぽ = ["p","o","word","story story story"]
this.ゃ = ["x","ya","word","story story story"]
this.ゅ = ["x","yu","word","story story story"]
this.ょ = ["x","yo","word","story story story"]
this.ん = ["n","","word","story story story"]
this.っ = ["t","t","word","story story story"]
}

var hira = new Hiragana()

function hiraToRoma(text){
var outputText = ""
    //turn into english
    for(i=0;i<text.length;i++){
      var currentKeta = text.substring(i,i+1);
      var romaji = hira[currentKeta][0] +
      hira[currentKeta][1];
      
      outputText += romaji 
    }
    //format special characters
    for(i=0;i<outputText.length;i++){
      var currentLetter = outputText.substring(i,i+1);
      
      switch(currentLetter){
          case "x":
          outputText = outputText.substring(0,i-1) +
                       outputText.substring(i+1                               ,outputText.length)
          break;
          case "q":
        　outputText = outputText.substring(0,i) +
        　              outputText.substring(i+1,+i+2)+
                       outputText.substring(i+1                               ,outputText.length)
          break;
      } 
    }
return outputText
}


///////--------level design--------//////

function Level(number,content,intro){
    // number is for ordering content should be an 
    // array containing the material to be tested.   
    this.number = number;
    this.content = content;
    this.intro = intro;
    levels[levels.length] = this;
}   

function simpleExplain(start){
 return "In this level we will introduce <em>hiragana             </em> starting with a '" + start + "' sound." ;
}
function reviewExplain(content){
 return "In this level let's review what we learned in "  + content;
}

levels = new Array()

var Hell = new Level(0,["Why are you here?"])
var level1 = new Level(1,["あ","い","う","え","お"],"Lets start by learning the <em>hiragana</em> for the vowel sounds. Here are some example words so you can get a feel for the sounds: <br>a-about , i-elite, u-attitude, e-pet, o-old")
var level2 = new Level(2,["か","き","く","け","こ"],simpleExplain("k"))
var level3 = new Level(3,["さ","し","す","せ","そ"],simpleExplain("s") + " Notice that 'し' makes a 'shi' sound. This sounds more like the English 'she' than 'see'.")
var review1 = new Level(4,["さ","し","す","せ","そ","か","き","く","け","こ","あ","い","う","え","お"],reviewExplain("lessons 1-3."))

var level4 = new Level(5,["た","ち","つ","て","と"],simpleExplain("t") + " Notice that 'ち' makes a 'chi' sound. This sounds like the start of '<em>che</em>ese'. Also 'つ' makes a 'tsu' sound like the start of '<em>tsu</em>nami'.")

var level5 = new Level(6,["は","ひ","ふ","へ","ほ"],simpleExplain("h") + " Notice that 'ふ' makes a 'f' sound. The sound is a bit softer than the English f.")

var level6 = new Level(7,["ら","り","る","れ","ろ"],simpleExplain("r"))

var review2 = new Level(8,["た","ち","つ","て","と","は","ひ","ふ","へ","ほ","ら","り","る","れ","ろ"],reviewExplain("lessons 5-7."))

var level7 = new Level(9,["ま","み","む","め","も"],simpleExplain("m"))
var level8 = new Level(10,["や","ゆ","よ"],simpleExplain("y") + "You get a bit of a break here~! Only 3 'y' sounds!")
var level9 = new Level(11,["わ","を","ん","っ"],"In this level we will introduce the remaining <em>hiragana</em>. These are the ones that dont really fit into any group. 'を' should be typed 'wo' but is pronuced the same as 'お'. 'ん' is the only solo consonant sound. 'っ' is a special symbol that has no sound but symbolises someting like a double letter. It is the same as the 'tsu' symbol just smaller but please type 'tt' to answer.")

var review3 = new Level(12,["ま","み","む","め","も","や","ゆ","よ","わ","を","ん","っ"],reviewExplain("lessons 9-12."))

var review4 = new Level(13,["さ","し","す","せ","そ","か","き","く","け","こ","あ","い","う","え","お","ま","み","む","め","も","や","ゆ","よ","わ","を","ん","っ","た","ち","つ","て","と","は","ひ","ふ","へ","ほ","ら","り","る","れ","ろ"],"The hard part is over! you now know all the characters in <em>hiragana</em>. There is a little bit more to go but for now lets review everything we have learned up until now (lessons 1-12).")

var level10 = new Level(14,["が","ぎ","ぐ","げ","ご"],simpleExplain("g") + " These are the same as the 'k' sound characters except they have these two little lines called てんてん. These sybolize a <em>voiced</em> sound." )

var level11 = new Level(15,["ざ","じ","ず","ぜ","ぞ"],"Here we have the 's' sound characters with てんてん. This changes the sound to a 'z' sound. Be careful with 'shi' which becomes a 'ji' sound.")

var level12 = new Level(16,["ば","び","ぶ","べ","ぼ"],"Lastsly for the てんてん we have the 'h' sound characters. This changes the sound to a 'b' sound.")

var level13 = new Level(17,["ぱ","ぴ","ぷ","ぺ","ぽ"],"For one final twist, the 'h' sounds can take a little cirle called まる instead of the てんてん. This changes the sound to a 'p' sound.")

var review5 = new Level(18,["が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ","ば","び","ぶ","べ","ぼ","ぱ","ぴ","ぷ","ぺ","ぽ"],reviewExplain("lessons 10-14."))

var Graduation = new Level(20,[1,2,3,4,5,6],"Congratulations!! You have mastered <em>hiragana</em>!! Click 'Got it!' to continue practicing or ___ to start learning some conjugations.")



//------bonus bar structure----///

function Multiplier(multiply,color){
    this.multiply = multiply;
    this.color = color;
    multipliers[multipliers.length] = this
}

var multipliers = new Array()

var start = new Multiplier(1,'#EC1739')
var first = new Multiplier(1.2,'#E12B81')
var second = new Multiplier(1.5,'#37C556')
var third = new Multiplier(2,'#A210A2')
var fourth = new Multiplier(3,'#FFAD30')
var fifth = new Multiplier(5,'#FFAD30')


//////_-_^_-_-_-_^_-_-_-_^_PRE-_J-_QUERY-_^_-_-_-_^_-_-_-_^_-_-_-_^_-_-//////////




//////_-_^_-_-_-_^_-_-_-_^_PRE-_J-_QUERY-_^_-_-_-_^_-_-_-_^_-_-_-_^_-_-//////////


//---------functions----------//

function randomKeta(content){
    var position = Math.floor(Math.random()*content.length);
    return content[position];
}


function changeKeta(){
    var prevKeta = currentKeta
    do {
        currentKeta = randomKeta(levels[currentLevel].content);
    } while (prevKeta === currentKeta)
    $("#question").html(currentKeta);
}

function checkAnswer(){
    var answer = $("input[name=answer]").val();    
    if( answer === hiraToRoma(currentKeta)){
        return true;
    } else {
        return false;
    }
}

function decreaseBar(speed){
    
    var countdown = setInterval(function () {
    
      if(levelBarWidth >= 0){
        $('.level.inner').css('width',levelBarWidth--); 
      }    
    
    }, speed);

    return countdown
}
function checkLevelUp() {

    if (levelBarWidth >= levelBarMaxWidth ) {
        
        $("input[name=answer]").blur()
        $("#main-window div").fadeOut(fadeTime)
        setTimeout(function(){
            $("#levelupmsg").fadeIn(fadeTime)
            
            streak = 0;
            currentLevel++;
            levelBarWidth = 0;
            
            bonusCalculations()        
            updateValues()
            changeKeta()

            setTimeout(function(){    
                $("#levelupmsg").fadeOut(fadeTime)
                
                setTimeout(function(){          
                
                    levelExplanation()
                            
                },fadeTime);
            },fadeTime + 1000); 
        },fadeTime);
    }   

}

function levelExplanation(){

    $("#explanation-heading").html("Welcome to level " + currentLevel)
    $("#intro").html(levels[currentLevel].intro)
    
    $(".j").html("") 
    $(".r").html("") 
    
    if(levels[currentLevel].content.length <= 5) {
    
      for (i = 1; i<=levels[currentLevel].content.length;i++) {    
        currentKeta = levels[currentLevel].content[i-1];
        $(".j").append("<td class='popup'>" + currentKeta + "</td>");
        $(".r").append("<td>" + hira[currentKeta][0] +           hira[currentKeta][1] + "</td>");
      }
    }
    
    changeKeta()     
    
    $("#explanation , #gotit").fadeIn(fadeTime)
    $("#gotit").click(function(){
        $("#explanation , #gotit").fadeOut(fadeTime)
            setTimeout(function(){          
                $("#main-window div:not(#levelupmsg,#explanation)").fadeIn(fadeTime)
                setTimeout(function(){ 
                    $("input[name=answer]").focus()
                    flashText($("#level"),100)
                },fadeTime);              
            },fadeTime);
    });
}

function bonusCalculations(){
    
    prevBonusLevel = bonusLevel;
    
    bonusLevel = Math.floor(streak/10); 
    bonusProgress = ((streak/10) - bonusLevel);
    
    if (bonusLevel > 4) {
        bonusLevel = 5; 
        bonusProgress = 1;
    }
    
    currentBonus = multipliers[bonusLevel]
    prevBonus = multipliers[prevBonusLevel]
    accuracyBonus = currentBonus.multiply;
     
    $('.bonus.inner').css('opacity',bonusProgress); 
    
    
    if (prevBonusLevel !== bonusLevel ){
        flashText($("#bonus"),100)
        flashText($("#streak"),100)
        $('.bonus.inner').css('background-color',currentBonus.color); 
        $('.bonus.outer').css('background-color',prevBonus.color); 
    }
   
   if (streak === 0) {
      $('.bonus.outer').css('background-color',"#fafafa");
   }
    
}

function popupManager(){

    setInterval(function(){
        if($("#popup").css("display") !== "none"){
            $(document).mousemove( function(e) {
                mouseX = e.pageX; 
                mouseY = e.pageY;
                $("#popup").css("top",mouseY-80)
                $("#popup").css("left",mouseX+20)
            });
        }
    },500) 



    $(".popup").mouseenter(function(){
            popupData($(this))
            $(document).mousemove( function(e) {
                mouseX = e.pageX; 
                mouseY = e.pageY;
                $("#popup").css("top",mouseY-80)
                $("#popup").css("left",mouseX+20)
            });
        $("#popup").css("display","inline-block")
            $(this).mouseleave(function(){
                $("#popup").css("display","none")
            }); 

    });   
}

function popupData(object){
        var k = object.html()
        var output = "<p class = 'pop-char'>" + k +
                     "</p><p class = 'pop-text'> Pronunciation: "+ hira[k][0] + hira[k][1]
                     + "<br> sound: " + hira[k][2] + "</p><p class = 'pop-long'>"
                    + hira[k][3] + "</p>"
        $("#popup").html(output)        
}

function flashText(object,speed,final){
    object.css("opacity",0);
    setTimeout(function(){
        object.css("opacity",1);
        setTimeout(function(){
            object.css("opacity",0)
                setTimeout(function(){
                    object.css("opacity",1);
                        setTimeout(function(){
                            object.css("opacity",0)
                            setTimeout(function(){
                                object.css("opacity",1);
            if(final === 'off') {
            setTimeout(function(){
            object.css("opacity",0);
            },speed);
            }
                         },speed);
                     },speed);
                },speed);
        },speed);
    },speed); 
};


function updateValues(){
    

    $("input[name=answer]").val("");
    $("#level").html(currentLevel);
    $("#streak").html(streak );
    $("#bonus").html("x" + accuracyBonus);
    $('.level.inner').css('width',levelBarWidth);
    
}


//----------variables--------//

var currentKeta = "";
var currentLevel = 1;
var streak = 0;

var levelBarWidth = 0;
var levelBarMaxWidth = 760;
var bonuslevelBarWidth = 0;
var bonusMaxWidth = 1;

var accuracyBonus = 1;
var bonusProgress = 0;
var bonusLevel = 0;
var prevBonusLevel = 0;

var decreaseSpeed = 50;
var defaultScore = 50;

var fadeTime = 500;


//--------S  U  T  A  R  U  T  O--------//

$(document).ready(function(){
    $("#main-window div").css("display","none")
    levelExplanation()
    changeKeta()
    var countdown = decreaseBar(decreaseSpeed);
    
        $(document).keydown(function(key){
            
            //check for enter press:

            if (key.which == 13) {
                
                clearInterval(countdown)
                //decreaseSpeed += 10;
                countdown = decreaseBar(decreaseSpeed);
                

                if(checkAnswer()) {
                    
                    streak++
                    
                    bonusCalculations()
                    
                    levelBarWidth += defaultScore*accuracyBonus
                    if(levelBarWidth > levelBarMaxWidth){
                        levelBarWidth = levelBarMaxWidth;
                    }
                    
                    checkLevelUp()
                    updateValues()
                    changeKeta()  
                    
                } else {
                    streak = 0;
                    levelBarWidth -= defaultScore
                    $('#hint').html(hiraToRoma(currentKeta));
                    flashText($("#hint"),100,'off')

                    bonusProgress = 0;
                    bonusCalculations()
                    
                    if(levelBarWidth < 0){
                        levelBarWidth = 0;
                    }
                    updateValues()
                    
                }

                popupData($("#question"))
            }   
        });

    $("#sidebar-trigger-area").mouseenter(function(event) {
        $("#sidebar").animate({left: "-=300"},500)
    });    
        $("#sidebar").mouseleave(function(event) {
        $("#sidebar").animate({left: "+=300"},500)
    }); 

    popupManager()
});


