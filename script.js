// Update the openFrame function to handle the homepage
function openFrame(frameId) {
    // Hide all frames
    var frames = document.getElementsByClassName("frame");
    for (var i = 0; i < frames.length; i++) {
        frames[i].style.display = "none";
    }

    // Show the selected frame
    var frame = document.getElementById(frameId);
    frame.style.display = "block";

    // Update the active tab
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    var activeTab = document.querySelector(".tab[data-frame='" + frameId + "']");
    activeTab.classList.add("active");
}

// Display the homepage by default
document.addEventListener("DOMContentLoaded", function() {
    openFrame("home");
});
