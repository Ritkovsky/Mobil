function Backgroundchange()
{
    let heroText = document.getElementById("hero-text");
    heroText.innerHTML = "Poznaj nas!";
}
function Start()
{
    setTimeout(Backgroundchange, 1000)
}
