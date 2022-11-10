import React from "react";
import "../css/Recipes.css"
import {reactLocalStorage} from "reactjs-localstorage";

function Recipes() {

    let cakes = reactLocalStorage.getObject('likedCakes')
    console.log(cakes)


    return (
        <div>
            <div className={"recipeContainer"}>
                {cakes.map(cake => (
                    <div
                        className={"recipe"}
                        style={{backgroundImage: `url(${cake.url}`}}
                    >
                        <h3>{cake.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recipes