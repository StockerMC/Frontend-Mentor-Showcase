
// import { default as QRCodeApp} from './challenges/qr-code-component/App';
// import { default as AgeCalculatorApp} from './challenges/age-calculator/App';
import { ReactElement } from 'react';

class ChallengeData {
    constructor(
        readonly path: string,
        readonly title: string,
        readonly description: string,
        readonly appElement: ReactElement
    ) {}
}

export const cards: ChallengeData[] = [
    new ChallengeData(
        "qr-code-component",
        "QR Code Component",
        "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
        <p>TEST</p>,
    ),
    new ChallengeData(
        "interactive-rating-component",
        "Interactive Rating Component",
        "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
        <p>TEST</p>,
    ),
    new ChallengeData(
        "age-calculator-app",
        "Age Calculator App",
        "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
        <p>TEST</p>,
    ),
    new ChallengeData(
        "calculator-app",
        "Calculator App",
        "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
        <p>TEST</p>,
    ),
    new ChallengeData(
        "rock-paper-scissors",
        "Rock, Paper, Scissors",
        "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
        <p>TEST</p>,
    ),
];