function updateProfile() {
    let newName = document.getElementById("nameInput").value;
    let newBio = document.getElementById("bioInput").value;

    if (newName !== "") {
        document.getElementById("name").innerText = newName;
    }

    if (newBio !== "") {
        document.getElementById("bio").innerText = newBio;
    }

    document.getElementById("nameInput").value = "";
    document.getElementById("bioInput").value = "";
}
