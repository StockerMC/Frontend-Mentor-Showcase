import styles from './Footer.module.css';

import { Button } from './Button'
import { RulesModal } from './RulesModal';

function rulesOnClick() {
    return;
}

export function Footer(props: {mode: number, setMode: (value: number) => void}) {
    return <div className={styles.footer}>
        <Button
            content={props.mode == 0 ? '🗿 📄 ✂️ 🦎 🖖' : '🗿 📄 ✂️'}
            title={props.mode == 0 ? 'Rock, Paper, Scissors, Lizard, Spock' : 'Rock, Paper, Scissors'}
            onClick={() => props.setMode(props.mode == 0 ? 1 : 0)}
        />
        <Button content='RULES' onClick={rulesOnClick} title='Rules'/>
    </div>
}