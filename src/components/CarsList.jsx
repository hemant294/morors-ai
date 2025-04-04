import React from 'react'

const CarsList = () => {

    const carsDetials = [
        {
            img: require("../assets/roolsRoyls.webp"),
            name: "Rools royls",
            collection: "147 cars"
        },
        {
            img: require("../assets/roolsRoyls.webp"),
            name: "Rools royls",
            collection: "147 cars"
        },
        {
            img: require("../assets/roolsRoyls.webp"),
            name: "Rools royls",
            collection: "147 cars"
        },
        {
            img: require("../assets/roolsRoyls.webp"),
            name: "Rools royls",
            collection: "147 cars"
        },
        {
            img: require("../assets/roolsRoyls.webp"),
            name: "Rools royls",
            collection: "147 cars"
        },
        {
            img: require("../assets/roolsRoyls.webp"),
            name: "Rools royls",
            collection: "147 cars"
        },
        {
            img: require("../assets/roolsRoyls.webp"),
            name: "Rools royls",
            collection: "147 cars"
        },
        {
            img: require("../assets/roolsRoyls.webp"),
            name: "Rools royls",
            collection: "147 cars"
        },
        {
            img: require("../assets/roolsRoyls.webp"),
            name: "Rools royls",
            collection: "147 cars"
        },
        {
            img: require("../assets/roolsRoyls.webp"),
            name: "Rools royls",
            collection: "147 cars"
        },
    ]
  return (
    <div>
        {
            carsDetials.map((item, index) => (
                <div key={index}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                    <p>{item.collection}</p>
                </div>
            ))
        }
    </div>
  )
}

export default CarsList