import React, {useEffect, useMemo, useState} from "react";
import TinderCard from "react-tinder-card";
import database from "../firebase";
import {reactLocalStorage} from 'reactjs-localstorage';
import "../css/TinderCards.css"
// import IconButton from "@mui/material/IconButton";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import CloseIcon from "@mui/icons-material/Close";


function TinderCards() {

    const [food, setFood] = useState([]);


    useEffect(() => {
        database.collection('recipes').onSnapshot(snapshot => (
            setFood(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    const onSwipe = (direction, swipedCake) => {
        if (direction === "left") {
            const cakes = reactLocalStorage.getObject('likedCakes', []);

            const cakeExist = cakes.some(e => e.name === swipedCake.name)

            if (!cakeExist) {
                cakes.push(swipedCake);
            }

            reactLocalStorage.setObject('likedCakes', cakes);
        }
    }

    // console.log(food.length)
    //
    // const [currentIndex, setCurrentIndex] = useState(food.length - 1)
    //
    // const childRefs = useMemo(
    //     () =>
    //         Array(food.length)
    //             .fill(0)
    //             .map((i) => React.createRef()),
    //     []
    // )
    //
    // const canSwipe = currentIndex >= 0
    //
    // const swipe = async (direction) => {
    //     if (canSwipe && currentIndex < food.length) {
    //         await childRefs[currentIndex].current.swipe(direction) // Swipe the card!
    //     }
    // }



    return (
            <div className={"cardContainer"}>
                {food.map((food) => (
                    <TinderCard
                        // ref={childRefs[index]}
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


                        {/*<div className={"buttons"}>*/}
                        {/*    <IconButton onClick={() => swipe("left")}>*/}
                        {/*        <FavoriteIcon fontSize={"large"} className={"pressable"}/>*/}
                        {/*    </IconButton>*/}
                        {/*    <IconButton>*/}
                        {/*        <CloseIcon fontSize={"large"} className={"pressable"}/>*/}
                        {/*    </IconButton>*/}
                        {/*</div>*/}


                    </TinderCard>


                ))}
            </div>
    )
}

export default TinderCards