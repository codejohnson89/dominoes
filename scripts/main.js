var teamOneScore = 0;
var teamTwoScore = 0;
var teamThreeScore = 0;
var teamFourScore = 0;
var updateScore = [5, 10, 15, 20, 25, 30, 35];
var score;
var gameCount = $("#count").innerText;
var xplayers = [$("#teamThree"), $("#teamFour")];
var oplayers = [$("#teamOne"), $("#teamTwo")];
var i = 0;
var activePlayers = 2;
var teamOpt = [$("#optionOne"), $("#optionTwo")];

function updateTeamOneScore() {
    $(".teamOne button").click(function() {
        score = $(this).val();
        teamOneScore = teamOneScore + updateScore[score];
        $("#scoreOne").text(teamOneScore);
        gameOver();
    });
}

function updateTeamTwoScore() {
    $(".teamTwo button").click(function() {
        score = $(this).val();
        teamTwoScore = teamTwoScore + updateScore[score];
        $("#scoreTwo").text(teamTwoScore);
        gameOver();
    });
}

function updateTeamThreeScore() {
    $(".teamThree button").click(function() {
        score = $(this).val();
        teamThreeScore = teamThreeScore + updateScore[score];
        $("#scoreThree").text(teamThreeScore);
        gameOver();
    });
}

function updateTeamFourScore() {
    $(".teamFour button").click(function() {
        score = $(this).val();
        teamFourScore = teamFourScore + updateScore[score];
        $("#scoreFour").text(teamFourScore);
        gameOver();
    });
}

function teamPlay() {
    if (activePlayers == 3 || activePlayers == 4) {
        $(teamOpt[0]).text("Player");
        $(teamOpt[1]).text("Player");
    } else {
        $(teamOpt[0]).text("Team");
        $(teamOpt[1]).text("Team");
    }
}

function gameOver() {
    if (teamOneScore >= 150 || teamTwoScore >= 150 || teamThreeScore >= 150 || teamFourScore >= 150) {
        window.alert("Game Over!");
        $(".modal-body").append("<p>Final for game " + gameCount + " score,<br> Player One: " + teamOneScore + " Player Two: " + teamTwoScore + " Player Three: " + teamThreeScore + " Player Four: " + teamFourScore + "</p>");
    }
}

$("#reset").click(function() {
    $("#scoreOne").innerText = 0;
    $("#scoreTwo").innerText = 0;
    $("#scoreThree").innerText = 0;
    $("#scoreFour").innerText = 0;
    teamOneScore = 0;
    teamTwoScore = 0;
    teamThreeScore = 0;
    teamFourScore = 0;
    gameCount = 1;
    $("#count").innerText = gameCount;
    $("#results").innerHTML = "";
    i = 0;
    $(xplayers).addClass("d-none");
});



$("#newGame").click(function() {
    $("#scoreOne").innerText = 0;
    $("#scoreTwo").innerText = 0;
    $("#scoreThree").innerText = 0;
    $("#scoreFour").innerText = 0;
    teamOneScore = 0;
    teamTwoScore = 0;
    teamThreeScore = 0;
    teamFourScore = 0;
    gameCount++;
    $("#count").innerText = gameCount;
});

$("#addPlayer").click(function() {
    $(xplayers[i]).removeClass("d-none");
    activePlayers++;
    i++;
    teamPlay();
});

$("#removePlayer").click(function() {
    $(xplayers[i - 1]).addClass("d-none");
    activePlayers--;
    i--;
    teamPlay();
});

updateTeamOneScore();
updateTeamTwoScore();
updateTeamThreeScore();
updateTeamFourScore();