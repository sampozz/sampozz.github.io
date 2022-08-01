$(document).ready(() => {

    $("#contacts-link").click(() => {
        $("h3").css("animation-delay", "0s");
        $(".profile-text").css("animation-delay", ".2s");
        $("#contacts-link").css("animation-delay", "0s");

        $(".contacts-container").css("display", "block");
        $("#contacts-link").css("display", "none");
        $(".profile-container").css("display", "none");
        $("#profile-link").css("display", "list-item");
    });

    $("#profile-link").click(() => {
        $(".contacts-container").css("display", "none");
        $("#contacts-link").css("display", "list-item");
        $(".profile-container").css("display", "block");
        $("#profile-link").css("display", "none");
    });

});