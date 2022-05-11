import { useState } from "react"
import shopData from "../../shop-data/shop-data.json"

const Shop = () => {
    const [hats, setHats] = useState(shopData)
    console.log(hats)
    return (
        <div>
            <h1>SHOP PAGE</h1>
            {hats.map((hat) => {
                <div>
                    <h2>{hat.name}</h2>
                </div>

            })}
        </div>

    )
}

export default Shop;