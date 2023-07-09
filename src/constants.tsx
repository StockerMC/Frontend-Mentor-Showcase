class ChallengeData {
    constructor(
        readonly path: string,
        readonly title: string,
        readonly description: string,
    ) {}
}

export const cards: ChallengeData[] = [
    new ChallengeData(
        "qr-code-component",
        "QR Code Component",
        "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
    ),
    new ChallengeData(
        "interactive-rating-component",
        "Interactive Rating Component",
        "This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!        ",
    ),
    new ChallengeData(
        "rock-paper-scissors",
        "Rock, Paper, Scissors",
        "This challenge will test your HTML, CSS and JavaScript skills. There's even a Rock, Paper, Scissors, Lizard, Spock version if you really want to challenge yourself.        ",
    ),
    new ChallengeData(
        "age-calculator-app",
        "Age Calculator App",
        "This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!        ",
    ),
    new ChallengeData(
        "calculator-app",
        "Calculator App",
        "This calculator app will be a great test of your CSS and JS skills especially. If you're wanting to practice using Grid, this challenge will be perfect for you!        ",
    ),
];