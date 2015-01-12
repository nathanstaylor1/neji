function Word(text){
    this.text = text;
}

function Verb(text,kana,type){
    this.text = text;
    this.kana = kana;
    this.type = type;
    this.teForm = teForm(text,type);
    this.kanaTeForm = teForm(kana,type);
    this.negativeForm = negativeForm(text,type)
    this.kanaNegativeForm = negativeForm(kana,type)
    this.masuForm = masuForm(text,type);
    this.kanaMasuForm = masuForm(kana,type);
    this.potentialForm = potentialForm(text,type);
    this.kanaPotentialForm = potentialForm(kana,type);
    this.passiveForm = passiveForm(text,type);
    this.kanaPassiveForm = passiveForm(kana,type);
    this.causativeForm = causativeForm(text,type);
    this.kanaCausativeForm = causativeForm(kana,type);
    this.causativePassiveForm = causativePassiveForm(text,type);
    this.kanaCausativePassiveForm = causativePassiveForm(kana,type);
    verbs[verbs.length] = this;
}

Verb.prototype = new Word;

function teForm(verb,type){
    strip = verb.substring(0,verb.length-1)
    if (type === 2) {
        return strip + "て";
    } else if (type = 1) {
        var lastKeta = verb.substring(
            verb.length-1,verb.length);
        // conjugate for each case
        switch (lastKeta){
            case "う":
            case "る":
            case "つ":
                return strip + "って";
                break;
            case "く":
                return strip + "いて";
                break;
            case "ぐ":
                return strip + "いで";
                break;
            case "む":
            case "ぶ":
            case "ぬ":
                return strip + "んで";
                break;    
            case "す":
                return strip + "して";
                break;
        }
    } else {
        
    }
}

function negativeForm(verb,type){
    strip = verb.substring(0,verb.length-1)
    if (type === 2) {
        return strip + "ない";
    } else if (type = 1) {
        var lastKeta = verb.substring(
            verb.length-1,verb.length);
        // conjugate for each case
        switch (lastKeta){
            case "う":
                return strip + "わない";
                break;
            case "る":
                return strip + "らない";
                break;
            case "つ":
                return strip + "たない";
                break;
            case "く":
                return strip + "かない";
                break;
            case "ぐ":
                return strip + "がない";
                break;
            case "む":
                return strip + "まない";
                break;
            case "ぶ":
                return strip + "ばない";
                break;
            case "ぬ":
                return strip + "なない";
                break;    
            case "す":
                return strip + "さない";
                break;
        }
    } else {
        
    }
}
function masuForm(verb,type){
    strip = verb.substring(0,verb.length-1)
    if (type === 2) {
        return strip + "ます";
    } else if (type = 1) {
        var lastKeta = verb.substring(
            verb.length-1,verb.length);
        // conjugate for each case
        switch (lastKeta){
            case "う":
                return strip + "います";
                break;
            case "る":
                return strip + "ります";
                break;
            case "つ":
                return strip + "ちます";
                break;
            case "く":
                return strip + "きます";
                break;
            case "ぐ":
                return strip + "ぎます";
                break;
            case "む":
                return strip + "みます";
                break;
            case "ぶ":
                return strip + "びます";
                break;
            case "ぬ":
                return strip + "にます";
                break;    
            case "す":
                return strip + "します";
                break;
        }
    } else {
        
    }
}

function potentialForm(verb,type){
    strip = verb.substring(0,verb.length-1)
    if (type === 2) {
        return strip + "られる";
    } else if (type = 1) {
        var lastKeta = verb.substring(
            verb.length-1,verb.length);
        // conjugate for each case
        switch (lastKeta){
            case "う":
                return strip + "える";
                break;
            case "る":
                return strip + "れる";
                break;
            case "つ":
                return strip + "てる";
                break;
            case "く":
                return strip + "ける";
                break;
            case "ぐ":
                return strip + "げる";
                break;
            case "む":
                return strip + "める";
                break;
            case "ぶ":
                return strip + "べる";
                break;
            case "ぬ":
                return strip + "ねる";
                break;    
            case "す":
                return strip + "せる";
                break;
        }
    } else {
        
    }
}

function passiveForm(verb,type){
    strip = verb.substring(0,verb.length-1)
    if (type === 2) {
        return strip + "られる";
    } else if (type = 1) {
        var lastKeta = verb.substring(
            verb.length-1,verb.length);
        // conjugate for each case
        switch (lastKeta){
            case "う":
                return strip + "われる";
                break;
            case "る":
                return strip + "られる";
                break;
            case "つ":
                return strip + "たれる";
                break;
            case "く":
                return strip + "かれる";
                break;
            case "ぐ":
                return strip + "がれる";
                break;
            case "む":
                return strip + "まれる";
                break;
            case "ぶ":
                return strip + "ばれる";
                break;
            case "ぬ":
                return strip + "なれる";
                break;    
            case "す":
                return strip + "される";
                break;
        }
    } else {
        
    }
}

function causativeForm(verb,type){
    strip = verb.substring(0,verb.length-1)
    if (type === 2) {
        return strip + "させる";
    } else if (type = 1) {
        var lastKeta = verb.substring(
            verb.length-1,verb.length);
        // conjugate for each case
        switch (lastKeta){
            case "う":
                return strip + "わせる";
                break;
            case "る":
                return strip + "らせる";
                break;
            case "つ":
                return strip + "たせる";
                break;
            case "く":
                return strip + "かせる";
                break;
            case "ぐ":
                return strip + "がせる";
                break;
            case "む":
                return strip + "ませる";
                break;
            case "ぶ":
                return strip + "ばせる";
                break;
            case "ぬ":
                return strip + "なせる";
                break;    
            case "す":
                return strip + "させる";
                break;
        }
    } else {
        
    }
}

function causativePassiveForm(verb,type){
    strip = verb.substring(0,verb.length-1)
    if (type === 2) {
        return strip + "させられる";
    } else if (type = 1) {
        var lastKeta = verb.substring(
            verb.length-1,verb.length);
        // conjugate for each case
        switch (lastKeta){
            case "う":
                return strip + "わせられる";
                break;
            case "る":
                return strip + "らせられる";
                break;
            case "つ":
                return strip + "たせられる";
                break;
            case "く":
                return strip + "かせられる";
                break;
            case "ぐ":
                return strip + "がせられる";
                break;
            case "む":
                return strip + "ませられる";
                break;
            case "ぶ":
                return strip + "ばせられる";
                break;
            case "ぬ":
                return strip + "なせられる";
                break;    
            case "す":
                return strip + "させられる";
                break;
        }
    } else {
        
    }
}


//////_-_^_-_-_-_^_-_-_-_^_PRE-_J-_QUERY-_^_-_-_-_^_-_-_-_^_-_-_-_^_-_-//////////




//////_-_^_-_-_-_^_-_-_-_^_PRE-_J-_QUERY-_^_-_-_-_^_-_-_-_^_-_-_-_^_-_-//////////



function updateChecked(array){
    var teCheckedValue = $("input[name=te]").is(":checked");
    var negativeCheckedValue = $("input[name=negative]").is(":checked");
    var masuCheckedValue = $("input[name=masu]").is(":checked");
    var potentialCheckedValue = $("input[name=potential]").is(":checked");
    var passiveCheckedValue = $("input[name=passive]").is(":checked");
    var causativeCheckedValue = $("input[name=causative]").is(":checked");
    var causativePassiveCheckedValue = $("input[name=causativepassive]").is(":checked");
    var allOff = 1;
    if(teCheckedValue){
        array[0][0]=1;
        allOff = 0;
    } else {
        array[0][0]=0;
    }
    if(negativeCheckedValue){
        array[1][0]=1;
        allOff = 0
    } else {
        array[1][0]=0;
    }
    if(masuCheckedValue){
        array[2][0]=1;
        allOff = 0
    } else {
        array[2][0]=0;
    }
    if(potentialCheckedValue){
        array[3][0]=1;
        allOff = 0
    } else {
        array[3][0]=0;
    }
    if(passiveCheckedValue){
        array[4][0]=1;
        allOff = 0
    } else {
        array[4][0]=0;
    }
    if(causativeCheckedValue){
        array[5][0]=1;
        allOff = 0
    } else {
        array[5][0]=0;
    }
    if(causativePassiveCheckedValue){
        array[6][0]=1;
        allOff = 0
    } else {
        array[6][0]=0;
    }
    if(allOff === 1) {
        array[0][0]=1;
    }
}

function decreaseBar(speed){
      
    $('#inner').css('width',levelBarWidth);
    
    setInterval(function () {
    
      if(levelBarWidth >= 0){
        $('.level.inner').css('width',levelBarWidth--); 
      }    
    
    }, speed);
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

    $('.level.inner').css('width',levelBarWidth);

    $("#form-name").html('Change to '+ conjJapanese + "-form:");
    $("#question").html(verbs[verbPosition].text);
    $("#kana").html(verbs[verbPosition].kana);

    $("#multiplier").html("x" + multiplier);
    $("#level").html("<br>" + currentLevel);

    $("#percentage").html(percentage + "%");
    $('.percentage.inner').css('width',percentage*percentageBarMaxWidth/100);

    $("#streak").html(streak);

    $("input[name=answer]").val("");

}

function checkLevelUp() {

    if (levelBarWidth >= levelBarMaxWidth ) {

        streak = 0;
        currentLevel++;
        flashText($("#level"),100)
        levelBarWidth = 0;
        clearInterval(countdown)
        decreaseSpeed -= 10;
        defaultScore *=0.8;
        var countdown = decreaseBar(decreaseSpeed);

    }   

}

// input verbs //

var verbs = new Array()

var talk = new Verb("話す" , "はなす",1);
var write = new Verb("書く" , "かく",1);
var swim = new Verb("泳ぐ" , "およぐ",1);
var drink = new Verb("飲む" , "のむ",1);
var play = new Verb("遊ぶ" , "あそぶ",1);
var die = new Verb("死ぬ" , "しぬ",1);
var cut = new Verb("切る" , "きる",1);
var buy = new Verb("買う" , "かう",1);
var hold = new Verb("持つ" , "もつ",1);
var runAway = new Verb("逃げる" , "にげる",2);
var give = new Verb("あげる" , "あげる",2);
var eat2 = new Verb("食う" , "くう",1);
var show = new Verb("見せる" , "みせる",2);
var run = new Verb("走る" , "はしる",1);
var eat = new Verb("食べる" , "たべる",2);
var leave = new Verb("出る" , "でる",2);
var throwAway = new Verb("捨てる" , "すてる",2);


//declare generator variables//

var currentlyStudying = [[1,"teForm","て"],[0,"negativeForm","ない"],
                        [0,"masuForm","ます"],[0,"potentialForm","Potential"],
                        [0,"passiveForm","Passive"],[0,"causativeForm","Causative"],
                        [0,"causativePassiveForm","Causative-Passive"]];


var verbPosition = Math.floor(Math.random()*verbs.length) ;
var previousVerbPosition = 1;

var conjNumber = 0
var currentConjugation = currentlyStudying[conjNumber][1]
var conjJapanese = currentlyStudying[conjNumber][2]

var answer = ""
var kanjiCorrect = ""
var kanaCorrect = ""

var correctCount = 0;
var totalCount = 0;
var percentage = 100;
var streak = 0;
var score = 0;
var accuracyBonus = 1;
var multiplier = 1;
var currentLevel = 1;

var levelScore = 100;
var percentageBarMaxWidth = 350;

var levelBarWidth = 0;
var levelBarMaxWidth = 760;

var decreaseSpeed = 100;
var defaultScore = 150;

$(document).ready(function(){
    
    $('#main-window *').css('display', 'none');
    $('#main-window *').fadeIn(500);
    $('#sidebar-trigger-area').animate({top: "+=60"},500)

    updateChecked(currentlyStudying)
    var countdown = decreaseBar(decreaseSpeed);

    $("#form-name").html('Change to '+ conjJapanese + "-form:");
    $("#question").html(verbs[verbPosition].text);
    $("#kana").html(verbs[verbPosition].kana);
    $("input[name=answer]").val(window.location.search);
    
        $(document).keydown(function(key){
            
            //check for enter press:
            
            if (key.which == 13) {

                //check if answer is correct and update scores
                
                totalCount++

                answer = $("input[name=answer]").val();

                kanjiCorrect = verbs[verbPosition][currentConjugation]
                kanaCorrect = verbs[verbPosition]["kana"+
                    currentConjugation.substring(0,1).toUpperCase()+
                    currentConjugation.substring(1,currentConjugation.length)]
                
                if (answer === kanjiCorrect || answer === kanaCorrect ) {
                    correctCount++;
                    
                    streak++;
                    accuracyBonus = (1 + (streak/10));

                    levelBarWidth += defaultScore*accuracyBonus
                    if(levelBarWidth > levelBarMaxWidth){
                        levelBarWidth = levelBarMaxWidth;
                    }
                    
                    
                } else {
                    streak = 0;
                    levelBarWidth -= defaultScore
                    $('#hint').html(kanjiCorrect);
                    flashText($("#hint"),200,'off')

                }
                

                percentage = Math.floor(correctCount/totalCount*100)
                
                // select next verb
                    
                //choose verb
                previousVerbPosition = verbPosition;
                do {
                    verbPosition = Math.floor
                    (Math.random()*verbs.length);       
                } while (previousVerbPosition === verbPosition);

                //choose conjugation

                updateChecked(currentlyStudying)

                do {
                    conjNumber = Math.floor(Math.random()*currentlyStudying.length);     
                } while (currentlyStudying[conjNumber][0] === 0);

                currentConjugation = currentlyStudying[conjNumber][1]
                conjJapanese = currentlyStudying[conjNumber][2]

                checkLevelUp()
                updateValues()
                
                return false;              
            }
        });

    $("#sidebar-trigger-area").mouseenter(function(event) {
        $("#sidebar").animate({left: "-=300"},500)
    });    
        $("#sidebar").mouseleave(function(event) {
        $("#sidebar").animate({left: "+=300"},500)
    }); 
        $("#question").mouseenter(function(event) {
        $("#kana").css("opacity",1);
    });    
        $("#question").mouseleave(function(event) {
        $("#kana").css("opacity",0);
    }); 
});

