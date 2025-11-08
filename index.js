const $h1 = $("h1");

$h1.addClass("margin-50 big-title");

$h1.slideToggle()

$("#btn1").click(() => {
    $h1.slideDown();
});

$("#btn2").click(() => {
    $h1.slideUp();

    setTimeout(() => $h1.text("Start Typing"), 1000);
});

$(document).on("keydown", (event) => {

    if (!$h1.is(":visible")) {
        return;
    }

    const key = event.key;
    let current = $h1.text();

    if (current === "Start Typing" && key !== "Backspace" && key.length === 1) {
        $h1.text("");
        current = "";
    }

    if ((key === "Backspace")) {
        event.preventDefault();

        if (current !== "Start Typing") {
            $h1.text(current.slice(0, -1));
        }
    }
    else if (key.length === 1) {
        $h1.append(key);
    }

    if ($h1.text().length === 0) {
        $h1.text("Start Typing");
    }
});