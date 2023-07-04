import { useCookies } from "react-cookie";
import styles from './Game.module.css'
import { useState } from "react";
import { Header } from "./Header";
import { GameObject, ObjectType } from "./GameObject";
import { Result } from './Result';
import { Footer } from "./Footer";

function calculate(choice1: ObjectType, choice2: ObjectType) {
    const wins = {
        'rock': ['scissors', 'lizard'],
        'paper': ['rock', 'spock'],
        'scissors': ['paper', 'lizard'],
        'lizard': ['paper', 'spock'],
        'spock': ['scissors', 'rock'],
    }

    if (choice1 == choice2) {
        return 0;
    } else if (wins[choice1].includes(choice2)) {
        return 1;
    } else {
        return 2;
    }
}

export function Game() {
    const [cookies, setCookie, removeCookie] = useCookies(['score']);
    const cookieScore = !cookies['score'] ? 0 : JSON.parse(cookies['score']);
    if (!cookies['score']) {
        setCookie('score', 0);
    }
    
    const objects: ObjectType[] = ['rock', 'paper', 'scissors'];
    const [mode, setMode] = useState<number>(0);

    if (mode == 1) {
        objects.push('lizard');
        objects.push('spock');
    }

    const [score, setScore] = useState<number>(cookieScore);
    setCookie('score', score);
    const [winner, setWinner] = useState<number>(-1);
    const [userChoice, setUserChoice] = useState<ObjectType>();
    const [computerChoice, setComputerChoice] = useState<ObjectType>();

    function handleGameObjectClick(choice: ObjectType) {
        setUserChoice(choice);
        const random = objects[Math.floor(Math.random()*objects.length)];
        setComputerChoice(random);
        const winner = calculate(choice, random);
        setWinner(winner);
        setScore(score + +(winner == 1));
    }

    // 0 = regular, 1 = lizard & spock
    // const [player, setPlayer] = useState<number>(1);
    // const [playerChoice, setPlayerChoice] = useState<
    // TODO: show which player's turn it is
    return winner == -1 ? <div><div className={styles.flex}>
        <div className={styles.game}>
            <Header objects={objects} score={score}/>
            <div className={styles.gameObjects + ' ' + (mode == 0 ? styles.rps : styles.rpsls)}>
                {objects.map(obj => <GameObject key={obj} type={obj} handleGameObjectClick={handleGameObjectClick}></GameObject>)}
            </div>
        </div>
    </div>
    <Footer mode={mode} setMode={setMode}/></div> :
    <div>
    <div className={styles.flex}>
        <Header objects={objects} score={score }/>
        <Result choice1={userChoice as ObjectType} choice2={computerChoice as ObjectType} winner={winner} reset={() => setWinner(-1)} />
    </div>
    <Footer mode={mode} setMode={setMode}/>
    </div>
}