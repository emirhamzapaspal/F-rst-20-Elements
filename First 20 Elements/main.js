
function About(Atom){
    const elements = document.querySelectorAll('.About');

    elements.forEach(function(element){
        element.style.display = "none";
    });
    const aboutDiv = document.getElementById(`About${Atom}`);
    aboutDiv.style.display = "block";
}
function Exit(Atom){
    const aboutDiv = document.getElementById(`About${Atom}`);
    aboutDiv.style.display = "none";
}