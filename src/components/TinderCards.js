import React, {useEffect, useState} from "react";
import TinderCard from "react-tinder-card";
import database from "../firebase";
import {reactLocalStorage} from 'reactjs-localstorage';
import "../css/TinderCards.css"


function TinderCards() {
    const [food, setFood] = useState([]);

    useEffect(() => {
        database.collection('recipes').onSnapshot(snapshot => (
            setFood(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    const onSwipe = (direction, swipedCake) => {
        if (direction === "left") {
            let cakes = reactLocalStorage.getObject('likedCakes', []);

            const cakeExist = cakes.some(e => e.name === swipedCake.name)

            if (!cakeExist) {
                cakes.push(swipedCake);
            }

            reactLocalStorage.setObject('likedCakes', cakes);
            console.log(reactLocalStorage.get('likedCakes', []));
        }
    }

    return (
        <div>
            <div className={"cardContainer"}>
                {food.map(food => (
                    <TinderCard
                        className={"swipe"}
                        key={food.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(direction) => onSwipe(direction, food)}
                    >
                        <div
                            className={"card"}
                            style={{backgroundImage: `url(${food.url}`}}
                        >
                            <h3>{food.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards