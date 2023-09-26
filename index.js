document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var inputValue = document.getElementById("myInput").value;

    alert("Input Value: " + inputValue);
})