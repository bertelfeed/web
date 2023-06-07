import {Header} from "../components/header/Header";
import { useContext } from 'react';
import { AsteroidsContext } from '../components/asteroids-context/AsteroidsContext';
import { AsteroidCard } from '../components/card/Card';

export const Destroyment = ()=> {

    const {destroyment} = useContext(AsteroidsContext)

    return <div>
        <Header/>
        {destroyment.map(item=><AsteroidCard key={item.id}{...item}/>)}
    </div>
}