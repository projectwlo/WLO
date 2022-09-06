import {MenuBar, Wizard} from "../../components";
import './Home.scss';

interface HomeProps {
}

export function Home(_props: HomeProps) {
    return (
        <div>
            <MenuBar display={``}/>
            <Wizard/>
        </div>
    )
}