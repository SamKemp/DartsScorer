var ScoreLog = document.getElementById('ScoreLog');
var CurrentScore = 0;

function startingScore(newScore)
{
    CurrentScore = newScore;
    
    // Clear ScoreLog
    ScoreLog.replaceChildren();
    
    addToLog(CurrentScore);
}

function doDartHit(number, modifier)
{
    if(CurrentScore == 0) return;

    var newCurrentScore = CurrentScore - (number*modifier);

    if(newCurrentScore < 0)
    {
        addToLog("BUST!");
        return;
    }


    CurrentScore = newCurrentScore;
    addToLog(CurrentScore);
}

function addToLog(logMessage)
{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(logMessage));
    ScoreLog.appendChild(li);
}