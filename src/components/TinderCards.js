import React, {useEffect, useState} from "react";
import TinderCard from "react-tinder-card";
import database from "../firebase";
import "../css/TinderCards.css"


function TinderCards() {
    const [food, setFood] = useState([]);

    useEffect(() => {
      database.collection('recipes').onSnapshot(snapshot => (
          setFood(snapshot.docs.map(doc => doc.data()))
      ))
    }, [])

    const onSwipeLeft = (left) => {
        console.log("You swiped:" + left)
    }

    return (
        <div>
            <div className={"cardContainer"}>
                {food.map(food => (
                    <TinderCard
                        className={"swipe"}
                        key={food.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={onSwipeLeft}
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