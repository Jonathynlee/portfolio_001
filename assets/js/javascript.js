var iframeOn = 0;
document.getElementsByClassName("project one")[0].addEventListener('click', function(){
    document.getElementById("portfolio_file").style.display="block";
    iframeOn = 1;
})
document.getElementsByClassName("exit-button")[0].addEventListener('click', function(){
    document.getElementById("portfolio_file").style.display="none";
    iframeOn = 1;
})