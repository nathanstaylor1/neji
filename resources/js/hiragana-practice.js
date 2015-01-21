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



//////_-_^_-_-_-_^_-_-_-_^_PRE-_J-_QUERY-_^_-_-_-_^_-_-_-_^_-_-_-_^_-_-//////////




//////_-_^_-_-_-_^_-_-_-_^_PRE-_J-_QUERY-_^_-_-_-_^_-_-_-_^_-_-_-_^_-_-//////////

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

function checkAnswer(answer){  
	//$("#hiragana-question p:first-child").html(answer)
    if( answer === hiraToRoma(currentKeta)){
        return true;
    } else {
        return false;
    }
}

function decreaseBar(speed,amount){

    var countdown = setInterval(function () {

      if(levelBarWidth > 0){
        levelBarWidth -= amount
        $('.level.inner').css('width',levelBarWidth); 
      } else {
        levelBarWidth = 0  
        $('.level.inner').css('width',0);
        endGame()  
      }    
    }, speed);
    
    return countdown;
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

    $("#stat-main .number").html("<br>" + statMain);
    $("#stat1 .number").html(stat1);
    $("#stat2 .number").html(stat2);

    $("#stat-bar-number").html(statBar);
    $('#stat-bar-inner').css('width',statBarWidth);
    $('.level.inner').css('width',levelBarWidth); 

    $("input[name=answer]").val("");

}

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

function multiplierCalculations(ease,text,div){
    
    var prevMultiplierLevel = multiplierLevel;
    
    multiplierLevel = Math.floor(streak/ease); 
    var multiplierProgress = ((streak/ease) - multiplierLevel);
    
    if (multiplierLevel > 4) {
        multiplierLevel = 5; 
        multiplierProgress = 1;
    }    
    var multiplier = multipliers[multiplierLevel].multiply
      
    if (prevMultiplierLevel !== multiplierLevel ){
        flashText(text,100)
        div.css('background-color',multipliers[multiplierLevel].color); 
    };

    return multiplier;
    
}

function sidebarManager(){

    $('#sidebar-trigger-area').animate({top: "+=60"},500)
    $("#sidebar-trigger-area").mouseenter(function(event) {
        $("#sidebar").animate({left: "-=300"},300)
        for(i=1;i<8;i++){
        $(".sub.num"+i).animate({top: "+="+70*i},600)
        }
    });    
    $("#sidebar").mouseleave(function(event) {
        $("#sidebar").animate({left: "1300"},500)
        for(i=7;i>0;i--){
        $(".sub.num"+i).animate({top: "0"},500)
        }
    });

    for(i=1;i<8;i++){
        $(".sub.num"+i).click(function(){
            $(".sub").css("background-color","#fafafa")
            $(this).css("background-color","#2FAA8F")
            active = $(this).attr('id')
            window.location.hash += "?" + active
            for(i=0;i<currentlyStudying.length;i++){
                currentlyStudying[i][0]=0
                if(currentlyStudying[i][1]===active){
                    currentlyStudying[i][0]=1}
            }
        initializeGame()
        });
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
        var k = currentKeta
        var output = "<p class = 'pop-char'>" + k +
                     "</p><p class = 'pop-text'> Pronunciation: "+ hira[k][0] + hira[k][1]
                     + "<br> sound: " + hira[k][2] + "</p><p class = 'pop-long'>"
                    + hira[k][3] + "</p>"
        $("#popup").html(output)        
}

function wrongAnswers(verb,conjugation,number){
       // methods //
    function wrong(type){
        switch (type) {
            case 1:
            //delete//
                var correctSelection = verbs[verb][conjugation]
             return wrongSelection = correctSelection[0] + correctSelection.substring(2,correctSelection.length)
            break;
            case 2:
            //change ending
                var correctSelection = verbs[verb][conjugation]
                var lastKeta = correctSelection[correctSelection.length-1]
                    switch (lastKeta){
                        case "る":
                            return wrongSelection = verbs[verb][conjugation].replace("る","た")
                        break;
                        case "て":
                            return wrongSelection = verbs[verb][conjugation].replace("て","た")
                        break;
                        case "で":
                            return wrongSelection = verbs[verb][conjugation].replace("で","て")
                        break;
                        default:
                            return false
                        break;
                    }
            break;
            case 3:
            //wrong conjugation
                var wrongConj = Math.floor(Math.random()*7)
                    if (wrongConj===conjNumber){return false}
                return wrongSelection = verbs[verb][currentlyStudying[wrongConj][1]]
            break;
            case 4:
            //switch characters
                var correctSelection = verbs[verb][conjugation]
                var correctLength = verbs[verb][conjugation].length
                if (correctLength <=2){return false}
                var pos1 = 1 + (Math.floor(Math.random()*(verbs[verb][conjugation].length-1)))
                do {var pos2 = 1 + (Math.floor(Math.random()*(verbs[verb][conjugation].length-1)))
                } while (pos1 === pos2)
                var keta1 = correctSelection[pos1]
                correctSelection = correctSelection.substring(0,pos1) + correctSelection[pos2] + correctSelection.substring(pos1+1,correctSelection.length-1)
                return wrongSelection = correctSelection.substring(0,pos2) + keta1 + correctSelection.substring(pos2+1,correctSelection.length-1)
            break;
            case 5:
            //wrong verb type
                var lastKeta = verbs[verbPosition].text[verbs[verbPosition].text.length-1]
                    switch (lastKeta){
                        case "る":
                            var correctType = verbs[verbPosition].type
                                if (correctType === 1){ var wrongType = 2}else{var wrongType = 1}
                            return wrongSelection = window[currentConjugation](verbs[verbPosition].text,wrongType);
                        break;
                        case "く":
                            var wrongEnd = verbs[verbPosition].text.replace("く","ぐ")
                            return wrongSelection = window[currentConjugation](wrongEnd,verbs[verbPosition].type);
                        break;
                        case "ぐ":
                            var wrongEnd = verbs[verbPosition].text.replace("ぐ","く")
                            return wrongSelection = window[currentConjugation](wrongEnd,verbs[verbPosition].type);                        break;
                        default:
                            return false
                        break;
                    }
            break;
        };
    };
    //select
    var wrongArray = new Array()
        do{ 
            var wrongType = Math.floor(Math.random()*6);
            var possibility = wrong(wrongType);
            var unique = true
                if (possibility){
                    for(i=0;i<wrongArray.length;i++){
                        if(possibility === wrongArray[i]){unique = false}
                    }
                if (unique){wrongArray[wrongArray.length]= possibility}
                }
        } while (wrongArray.length < number);
    
    return wrongArray
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function updateAnswerButtons(){
var answersArray = []
	do {
		var potential = randomKeta(levels[currentLevel].content);
		var valid = true;
			for(i=0;i<answersArray.length;i++){
				if (hiraToRoma(potential) == answersArray[i]){valid = false;}

			}
			if(potential != currentKeta && valid){answersArray.push(hiraToRoma(potential))}
	} while (answersArray.length <3)

	answersArray.push(hiraToRoma(currentKeta));
	shuffleArray(answersArray);
	for (i=-0;i<4;i++){
	            $("#ans" + i ).html("<p>" + answersArray[i] + "</p>");
	}
}
//declare general variables//
var currentKeta = "";
var currentLevel = 1;

var answer = ""

var correctCount = 0;
var totalCount = 0;
var percentage = 100;
var streak = 0;
var defaultScore = 100;
var score = 0;
var multiplier = 1;
var multiplierLevel = 0;
var gameTime = 0;
var remainingTime = 60;
var decreaseSpeed = 50;
var recordStreak = 0;

var statBarWidth = 0;
var statBarMaxWidth = 350;
var levelBarWidth = 0;
var levelBarMaxWidth = 760;

var statMain = 0;
var stat1 = 0;
var stat2 = 0;
var statBar = 0;
var times = new Array()

var level = 1;
var attack = 10;
var defence = 10;
var exp = 0;
var HP = 100;
var maxHP = 100;
var toNextLevel = new Array()
    for(i=0;i<100;i++){toNextLevel[i]=i*100}

var enemyNumber = 0;

function Enemy(enemyNumber){
    this.maxHp = 20 + enemyNumber*level
    this.hp = this.maxHp
    this.attack = 30 + level*enemyNumber*maxHP/20;
    this.exp = level*30 + enemyNumber*10
}

var enemies = new Array()

//declare game types
function Game(name,stats){
    this.name = name;
    this.stats = stats;
    games[games.length] = this;   
};

var games = new Array()

var oneminute = new Game("?oneminute",["score","streak","multiplier","percentage"])
var survival = new Game("?survival",["time","streak","multiplier","percentage"])
var streaker = new Game("?streaker",["streak","record","total","percentage"])
var adventure = new Game("?adventure",["level","attack","defence","experience"])

//_-_-_-__//_-_-_-__   -_-_-__//_-_-_-__   -_-_-__//_-_-_-__   -_-_-__//_-_-_-__    
               // GAME START //
//_-_-_-__  //_-_-_-__    //_-_-_-__    //_-_-_-__    //_-_-_-__    
//_-_-_-__  
//_-_-_-__  
//_-_-_-__  
//_-_-_-__    
//_-_-_-__    


function initializeGame(){
    gameTime = 0;
    streak = 0;
    score = 0;
    correctCount = 0;
    totalCount = 0;
    statMain = 0;
    statbar = 0;
    stat1 = 0;
    stat2 = 0;
    statBarWidth = 0;
    $("#stat1, #stat2").css("background-color","#EC173A")

    changeKeta();

    $('#main-window *').css('display', 'none');
    $('#main-window *:not(#try-again').fadeIn(500);
    $("input[name=answer]").focus();

    gameType = window.location.search

    for(i=0;i<games.length;i++){
        if (gameType === games[i].name){
            $("#stat-main .small").html(games[i].stats[0])
            $("#stat1 .small").html(games[i].stats[1])
            $("#stat2 .small").html(games[i].stats[2])
            $(".stat.bar.small").html(games[i].stats[3])
        }
    }

    for(i=0;i<times.length;i++){clearInterval(times[i])}

    times[times.length] = setInterval(function(){
        gameTime++
    },10)

    //declare game specific variables

    switch (gameType){
        case "?oneminute":
        levelBarWidth = levelBarMaxWidth;
        remainingTime = 60
        times[times.length] = decreaseBar(1000,levelBarMaxWidth/60);
        times[times.length] = setInterval(function(){
            $(".level.bar.number").html(remainingTime--)
            if(remainingTime<=0) endGame()
        },1000)
        break;

        case "?survival":
        levelBarWidth = levelBarMaxWidth;
        times[times.length] = decreaseBar(decreaseSpeed,1);
        times[times.length] = setInterval(function(){
            $("#stat-main .number").html("<br>" + Math.floor(gameTime/100));
        },100);
        $("input[name=answer]").css("display","none");
        $('#answers').remove()
        $("#question").after("<div class = 'holder' id='answers'/>")
        for (i=-0;i<4;i++){
            $("#answers").append("<div class = 'holder ansbutton' id='ans" + i + "'/>");
        }
        updateAnswerButtons()
        break;

        case "?streaker":

        break;

        case "?adventure":
        $("input[name=answer]").css("display","none");
        $('#answers').remove()
        $("#question").after("<div class = 'holder' id='answers'/>")
        for (i=-0;i<4;i++){
            $("#answers").append("<div class = 'holder ansbutton' id='ans" + i + "'/>");
        }

        updateAnswerButtons()

        levelBarWidth = levelBarMaxWidth/2;
        $(".level.bar.outer").css("background-color","#E0E4CC")
        HP = 100;
        $(".level.bar.number").html("HP:" + HP)
        $(".level.bar.outer").before("<div id = 'battle-track' class = 'full'><div id = 'you' class = 'character'/></div>")
        $(".level.bar.inner").after("<div id = 'enemy-hp' class = 'bar inner holder'><p class = 'number'></div>")
        $("#enemy-hp").css("width",levelBarMaxWidth/2)
        enemyNumber++
        enemies[enemyNumber] = new Enemy(enemyNumber);
        $("#battle-track").append("<div id = 'enemy" + enemyNumber + "' class = 'character enemy'></div>");
        flashText($("#battle-track div:last-child"),100,"on");

        times[times.length] = setInterval(function(){
            $(".level.bar.number").html("HP:" + HP);
            levelBarWidth = HP/maxHP*levelBarMaxWidth/2;
            $('.level.inner').css('width',levelBarWidth); 
            $("#enemy-hp p").html("HP:" + enemies[enemyNumber].hp);
            $('#enemy-hp').css('width',enemies[enemyNumber].hp/enemies[enemyNumber].maxHp*levelBarMaxWidth/2); 
        },100);

        times[times.length] = setInterval(function(){
            if(Math.floor(Math.random()*3*percentage)>=1){
                $(".enemy.character").append("<div class = 'bullet enemy'/>")
                $(".bullet").animate({left:'-=730'},1000,"linear",function(){
                	$("#you").append("<div class = 'damage'><p class = 'strokeme small'>" + Math.floor(enemies[enemyNumber].attack/defence) + "</p></div>")
                	$(".damage").animate({top:'-=50'},800,"linear",function(){this.remove()})
                    this.remove()
                    HP -= Math.floor(enemies[enemyNumber].attack/defence);
                    flashText($("#you"),20,"on");
                    if (HP<=0){endGame()}
                });
            };

        },2000);

        statMain = level
        stat1 = attack
        stat2 = defence

        break;

    }

    updateValues()
}

function runGame(correct){

percentage = Math.floor(correctCount/totalCount*100)

    switch (gameType){
        case "?oneminute":
            multiplier = multiplierCalculations(3,$('#stat2 .small, #stat2 .number'),$('#stat2'))
            if(correct){  
                score += defaultScore*multiplier
            }; 
            statMain = score
            stat1 = streak
            stat2 = "x" + multiplier
            statBar = percentage + "%"
            statBarWidth = percentage*statBarMaxWidth/100
        break;

        case "?survival":
            var ease = (50/percentage)*3
            multiplier = multiplierCalculations(ease,$('#stat2 .small, #stat2 .number'),$('#stat2'))
            if(correct){  
                levelBarWidth += defaultScore*multiplier
            };
            if (levelBarWidth > levelBarMaxWidth) {levelBarWidth=levelBarMaxWidth}
            statMain = Math.floor(gameTime/100); 
            stat1 = streak;
            stat2 = "x" + multiplier;
            statBar = percentage + "%";
            statBarWidth = percentage*statBarMaxWidth/100;
            if(decreaseSpeed>=20){decreaseSpeed -= 2}
            clearInterval(times[1])
            times[1] = decreaseBar(decreaseSpeed,1)

        	updateAnswerButtons()
        break;

        case "?streaker":
            if (streak >= recordStreak){recordStreak = streak}

            statMain = streak
            stat1 = recordStreak
            stat2 = totalCount
            statBar = percentage + "%"
            statBarWidth = percentage*statBarMaxWidth/100
        break;

        case "?adventure":
            if(correct){
                if (streak >= recordStreak){recordStreak = streak}
                //bullet animation
                $("#you").append("<div class = 'bullet you'/>")
                $(".bullet").animate({left:'+=720'},1000,"linear",function(){
                	$(".enemy.character").append("<div class = 'damage'><p class = 'strokeme small'>" + attack + "</p></div>")
                	$(".damage").animate({top:'-=50'},800,"linear",function(){this.remove()})
                    this.remove()
                    flashText($(".enemy.character"),20,"on")
                    enemies[enemyNumber].hp -= attack;

                    if(enemies[enemyNumber].hp <= 0){
                        exp += enemies[enemyNumber].exp;
                        $("#enemy" + enemyNumber).fadeOut(500,function(){
                            $("#enemy" + enemyNumber).remove();
                            enemyNumber++
                            enemies[enemyNumber] = new Enemy(enemyNumber);
                            $("#battle-track").append("<div id = 'enemy" + enemyNumber + "' class = 'character enemy'></div>");
                        });      
                    }
                    if (exp >= toNextLevel[level]){
                        exp -= toNextLevel[level]
                        level++
                        percentage = correctCount/totalCount;
                        flashText($("#stat-main p"),100,"on")
                        attack = Math.floor(10+level*recordStreak*percentage)
                        defence = Math.floor(10+level*enemyNumber*percentage)
                        maxHP += Math.floor(level*10*percentage);
                        HP = maxHP;
                        statMain = level
                        stat1 = attack
                        stat2 = defence
                    }
                    statBar = exp
                    statBarWidth = exp/toNextLevel[level]*statBarMaxWidth;
                    levelBarWidth = HP/maxHP*levelBarMaxWidth/2;
                    $(".level.bar.number").html("HP:" + HP)
                    updateValues()
                })
            } else {
                $(".enemy.character").append("<div class = 'bullet enemy'/>")
				$(".bullet").animate({left:'-=730'},1000,"linear",function(){
                	$("#you").append("<div class = 'damage'><p class = 'strokeme small'>" + Math.floor(enemies[enemyNumber].attack/defence) + "</p></div>")
                	$(".damage").animate({top:'-=50'},800,"linear",function(){this.remove()})
                    this.remove()
                    HP -= Math.floor(enemies[enemyNumber].attack/defence);
                    flashText($("#you"),100,"on");
                    if (HP<=0){endGame()}
                });
            }
	        updateAnswerButtons()
        break;
    }

    updateValues()

}

function endGame(){

    switch (gameType){

    case "?oneminute":
        if(gameTime/100 >= 60){
            for(i=0;i<times.length;i++){clearInterval(times[i])}
            $(".level.bar.number").fadeOut(500)
            $("#try-again").fadeIn(500)
            $("#try-again").click(function(){
                initializeGame();
            });
        }
    break;

    case "?survival":
        if(levelBarWidth <= 0){
            for(i=0;i<times.length;i++){clearInterval(times[i])}
            $("#try-again").fadeIn(500);
            $("#try-again").click(function(){
                initializeGame();
            });
        }
    break;

    case "?streaker":

    break;

    case "?adventure":
            for(i=0;i<times.length;i++){clearInterval(times[i])}
            $(".level.bar.outer").fadeOut(500)
            $("#try-again").fadeIn(500);
            $("#try-again").click(function(){
                initializeGame();
            });
    break;
}

}

function innerWorkings(answer){
    //recieve answer
    totalCount++
        //check answer
        if (checkAnswer(answer)) {     
            correctCount++;
            streak++;
            changeKeta() 
            runGame(true)      
        } else {
            streak = 0;
            changeKeta() 
            runGame(false)
        }  
    updateValues() 
    popupData()
}

//______________-------------____________-----------__________??????//

$(document).ready(function(){
    
    initializeGame()
    popupData()

        $(document).keydown(function(key){
            //check for enter press:
            if (key.which == 13 && $("#try-again").css("display")==="none") {
                innerWorkings($("input[name=answer]").val())
                //$("#form-name").html()     
            }
        });

        $(document).on("click",$(".ansbutton p"),function(e){
            if ($("#try-again").css("display")==="none") {
                var target = $(e.target), article;
                if(target.parents("div").hasClass("ansbutton")){innerWorkings(target.html())}
            };
        });


    sidebarManager() 

    popupManager()


});

