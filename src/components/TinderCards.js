import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import "../TinderCards.css"


function TinderCards() {
    const [food, setFood] = useState([
        {
            name: 'murzynek',
            url: 'https://staticsmaker.iplsc.com/smaker_prod_2010_02_27/5676a35e6759518dd1c9bf6fc3d2fd59-content.jpg'
        },
        {
            name: 'jabłecznik',
            url: 'https://cdn.aniagotuje.com/pictures/articles/2020/09/7815831-v-1500x1500.jpg'
        }
    ]);


    return (
        <div>
            <div className={"cardContainer"}>
                {food.map(food => (
                    <TinderCard
                        className={"swipe"}
                        key={food.name}
                        preventSwipe={["up", "down"]}
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