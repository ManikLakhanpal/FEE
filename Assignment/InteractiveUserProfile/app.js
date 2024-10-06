let doneButton = document.getElementById("done");

doneButton.addEventListener("click", (e) => {
    e.preventDefault(); 

    var username = document.getElementById("username").value;
    var bio = document.getElementById("bio").value;
    var picture = document.getElementById("profilePicture").value;

    document.getElementById("usernameDisplay").innerText = username || "User name";
    document.getElementById("bioDisplay").innerText = bio || "This user has no bio.";

    if (picture) {
        document.getElementById("profilePictureDisplay").src = picture;
    }

    document.querySelector("form").reset();
});
