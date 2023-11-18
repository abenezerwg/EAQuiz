(function() {
    window.onload = function() {
        parent.iframeLoaded();
    }
})();
try {
$(document).ready(function() {
$('#createKahootForm').submit(function(e) {
    e.preventDefault();
    let quizName = $('#quizName').val();
    let quizQuestions = $('#quizQuestions').val();
    alert(`Kahoot created!\nName: ${quizName}\nNumber of Questions: ${quizQuestions}`);
    $(this)[0].reset();
});

$('#joinKahootForm').submit(function(e) {
    e.preventDefault();
    let kahootCode = $('#kahootCode').val();
    let playerName = $('#playerName').val();
    alert(`Joining Kahoot!\nKahoot Code: ${kahootCode}\nPlayer Name: ${playerName}`);
    $(this)[0].reset();
});
});
} catch (e) {
    console.log("Error in JS code", e);
}