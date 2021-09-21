let sub = document.querySelector(".subtitle");

let toMotivate = [
    "If you want to make the world a better place, take a look at yourself, and make a change. - Michael Jackson",
    '<a href="https://open.spotify.com/track/1X1DWw2pcNZ8zSub3uhlNz?si=8532869fc4c840b0">Hall of Fame (feat. will.i.am)</a> - The Script',
    "You can do it!",
    '<a href="https://www.youtube.com/watch?v=fRc3OD_bxZ8">WHEN YOU FEEL BROKEN  - Motivational Speech</a>',
    '<a href="https://open.spotify.com/track/2bJvI42r8EF3wxjOuDav4r?si=db1fa4307f9f46e2">Time of Our Lives</a> - Pitbull, Ne-Yo',
    "Hold fast to dreams,<br>For if dreams die<br>Life is a broken-winged bird,<br>That cannot fly.<br>― Langston Hughes",
    "If you're tired of starting over, stop giving up. - Shia Labeouf",
    "The only time you should look back in life, is to see how far you have come. - Kevin Hart",
    "If you're going through hell, keep going. - Winston Churchill",
    '<a href="https://www.youtube.com/watch?v=aDCGrINPGUQ">THROUGH HELL - Motivational Video</a>',
    '<a href="https://open.spotify.com/track/0ct6r3EGTcMLPtrXHDvVjc?si=632cee9bd90f4d58">The Nights</a> - Avicii',
    "I believe in you.",
    '<a href="https://open.spotify.com/track/1kiNatIrwDusOZfR29W0LJ?si=9d8ca61dc6dd4564">Man In The Mirror</a> - Michael Jackson',
];

function generate() {
    if (sub.classList.contains("open")) {
        sub.classList.remove("open");
        setTimeout(function () {
            sub.innerHTML = toMotivate[Math.floor(Math.random() * toMotivate.length)];
            sub.classList.add("open");
        }, 500);
    } else {
        sub.innerHTML = toMotivate[Math.floor(Math.random() * toMotivate.length)];
        sub.classList.add("open");
    }
}
