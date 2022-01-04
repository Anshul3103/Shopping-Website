import React from 'react'
import { useState } from 'react';
import { Product } from "./Product";
import Client from "./Client";
import Card from "./Card.js";


function Prdctimg() {
    const [item, setitem] = useState(Product);
    const [client, setClient] = useState(Client);
    return (
        <div>
            <div className="covid">
                <div className="covid_product">
                    <img src="image/Banner.png" alt="covid" />
                </div>
            </div>
            <div className="card_info">
                {
                    item.map((element) => {
                        return <Card
                            title={element.title}
                            img={element.img}
                        />
                    })
                }

            </div>
        </div>
    )
}

export default Prdctimg
