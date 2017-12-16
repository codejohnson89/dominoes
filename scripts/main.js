(function() {
    var teamOneScore = 0;
    var teamTwoScore = 0;
    var teamThreeScore = 0;
    var teamFourScore = 0;
    var updateScore = [5, 10, 15, 20, 25, 30, 35];
    var score;
    var gameCount = document.getElementById("count").innerText;


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

    function gameOver() {
        if (teamOneScore >= 150 || teamTwoScore >= 150 || teamThreeScore >= 150 || teamFourScore >= 150) {
            window.alert("Game Over!");
            $(".modal-body").append("<p>Final for game " + gameCount + " score,<br> Player One: " + teamOneScore + " Player Two: " + teamTwoScore + "Player Three: " + teamThreeScore + " Player Four: " + teamFourScore + "</p>");
        }
    }

    $("#reset").click(function() {
        document.getElementById("scoreOne").innerText = 0;
        document.getElementById("scoreTwo").innerText = 0;
        document.getElementById("scoreThree").innerText = 0;
        document.getElementById("scoreFour").innerText = 0;
        teamOneScore = 0;
        teamTwoScore = 0;
        teamThreeScore = 0;
        teamFourScore = 0;
        gameCount = 1;
        document.getElementById("count").innerText = gameCount;
        document.getElementById("results").innerHTML = "";
    });



    $("#newGame").click(function() {
        document.getElementById("scoreOne").innerText = 0;
        document.getElementById("scoreTwo").innerText = 0;
        document.getElementById("scoreThree").innerText = 0;
        document.getElementById("scoreFour").innerText = 0;
        teamOneScore = 0;
        teamTwoScore = 0;
        teamThreeScore = 0;
        teamFourScore = 0;
        gameCount++;
        document.getElementById("count").innerText = gameCount;
    });


    updateTeamOneScore();
    updateTeamTwoScore();
    updateTeamThreeScore();
    updateTeamFourScore();
})();