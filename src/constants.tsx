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
        "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
    ),
    new ChallengeData(
        "rock-paper-scissors",
        "Rock, Paper, Scissors",
        "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
    ),
    new ChallengeData(
        "age-calculator-app",
        "Age Calculator App",
        "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
    ),
    new ChallengeData(
        "calculator-app",
        "Calculator App",
        "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
    ),
];