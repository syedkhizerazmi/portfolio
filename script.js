$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $("nav").css("background", "#12771c");
        } else {
            $("nav").css("background", "transparent");
        }
    })
})

function sidebar() {

    document.querySelector(".hidden-span").style.display = "flex";
    document.querySelector(".hidden-span").style.display = "flex";
}

function fun() {

    document.querySelector(".html").innerHTML = `
		          <div class="html-c">Html</div>
	`;

    document.querySelector(".html-c").style.width = `60%`;
    document.querySelector(".html-c").style["background-color"] = `green`;
    document.querySelector(".html-c").style.transation = `2s`;




}