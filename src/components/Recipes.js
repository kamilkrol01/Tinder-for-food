import React from "react";
import {reactLocalStorage} from "reactjs-localstorage";

import "../css/Recipes.css"


function Recipes() {

    let cakes = reactLocalStorage.getObject('likedCakes')

    return (

        <div className={"recipeContainer"}>
            {cakes.map(cake => (
                <div
                    className={"recipe"}
                    style={{backgroundImage: `url(${cake.url}`}}
                    key={cake.name}
                >
                    <h3>{cake.name}</h3>
                    <p>{cake.description}</p>
                </div>

            ))}
        </div>

    )
}

export default Recipes