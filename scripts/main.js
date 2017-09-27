(function() {
    var teamOneScore = 0;
    var teamTwoScore = 0;
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

    function gameOver() {
        if (teamOneScore >= 150 || teamTwoScore >= 150) {
            console.log("Game Over!");
            $(".modal-body").append("<p>Final for game " + gameCount + " score, Team One: " + teamOneScore + " Team Two: " + teamTwoScore + "</p>");
        }
    }

    $("#reset").click(function() {
        document.getElementById("scoreOne").innerText = 0;
        document.getElementById("scoreTwo").innerText = 0;
        teamOneScore = 0;
        teamTwoScore = 0;
        gameCount = 1;
        document.getElementById("count").innerText = gameCount;
        document.getElementById("results").innerHTML = "";
    });



    $("#newGame").click(function() {
        document.getElementById("scoreOne").innerText = 0;
        document.getElementById("scoreTwo").innerText = 0;
        teamOneScore = 0;
        teamTwoScore = 0;
        gameCount++;
        document.getElementById("count").innerText = gameCount;
    });


    updateTeamOneScore();
    updateTeamTwoScore();
})();