function openTab(event, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the 'active' class from all tab buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab's content and add 'active' class to the button
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";

    console.log(event.currentTarget.className);
    console.log(tablinks);
}

// Set default tab to open
document.getElementsByClassName('tablinks')[0].click();
