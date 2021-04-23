import { useState } from "react";

const Cards = () => {

    const [properties, newProperties] = useState([

        { name:"Prakhar Singh", stream:"CSE", section:"E1" },
        { name:"Tanisha Bisht", stream:"CSE", section:"E1" },
        { name:"Adithya Balachandra", stream:"CSE", section:"E1"},
        { name:"Arjun Gopikrishnan", stream:"CSE", section:"E1"}
    ]);

    return (
        <div>
            {properties.map((property) => (
                <div class="card" style={{ margin: "38px",display: "inline-block" }}>
                    <div class="card-body">
                        <h5 class="card-title">{property.name}</h5>
                        <h5>{property.stream} {property.section}</h5>
                        <p class="card-text">
                            Some quick example text to build on the card title and make up the bulk of the
                            card's content.
                        </p>
                        <button type="button" class="btn btn-primary">Button</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;