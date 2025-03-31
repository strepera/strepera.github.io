const locations = [
    {
        coords: [-34, 57, -108],
        island: "hub",
        image: "https://i.ibb.co/NnmZ06H8/2025-03-31-15-56-40.png"
    },
    {
        coords: [13, 58, -71],
        island: "rift",
        image: "https://i.ibb.co/gZxdYqYS/2025-03-31-15-55-40.png"
    },
    {
        coords: [38, 89, 16],
        island: "rift",
        image: "https://i.ibb.co/CKmVM9sw/2025-03-31-15-54-26.png"
    },
    {
        coords: [-192, 71, -65],
        island: "rift",
        image: "https://i.ibb.co/pvPrPjTr/2025-03-31-15-53-45.png"
    },
    {
        coords: [-4, 57, 75],
        island: "rift",
        image: "https://i.ibb.co/ymfYLRyK/2025-03-31-15-52-58.png"
    },
    {
        coords: [-437, 109, 11],
        island: "park",
        image: "https://i.ibb.co/0pyRBcWv/2025-03-31-15-51-05.png"
    },
    {
        coords: [-325, 91, -55],
        island: "park",
        image: "https://i.ibb.co/mrDkPD6s/2025-03-31-15-50-38.png"
    },
    {
        coords: [-231, 83, 88],
        island: "hub",
        image: "https://i.ibb.co/bRjMvrMM/2025-03-31-15-50-13.png"
    },
    {
        coords: [144, 128, 81],
        island: "dwarven",
        image: "https://i.ibb.co/R4ZKD5ZH/2025-03-31-15-49-19.png"
    },
    {
        coords: [44, 108, 176],
        island: "dwarven",
        image: "https://i.ibb.co/Y7hdJ5kc/2025-03-31-15-47-28.png"
    },
    {
        coords: [178, 196, 152],
        island: "dwarven",
        image: "https://i.ibb.co/4wff5kd1/2025-03-31-15-44-52.png"
    },
    {
        coords: [153, 202, 230],
        island: "dwarven",
        image: "https://i.ibb.co/cSg0hgBP/2025-03-31-15-44-26.png"
    },
    {
        coords: [-375, 95, -471],
        island: "isle",
        image: "https://i.ibb.co/YBHNZmcy/2025-03-31-15-42-45.png"
    },
    // {
    //     coords: [],
    //     island: "",
    //     image: ""
    // },
    // {
    //     coords: [],
    //     island: "",
    //     image: ""
    // },
    // {
    //     coords: [],
    //     island: "",
    //     image: ""
    // },
    // {
    //     coords: [],
    //     island: "",
    //     image: ""
    // },
    // {
    //     coords: [],
    //     island: "",
    //     image: ""
    // },
    // {
    //     coords: [],
    //     island: "",
    //     image: ""
    // },
    // {
    //     coords: [],
    //     island: "",
    //     image: ""
    // },
    // {
    //     coords: [],
    //     island: "",
    //     image: ""
    // }
]

const islands = {
    "hub": {
        image: "https://i.ibb.co/zTf8DwhY/Hub-Island-0-13-Top-View.webp"
    },
    "dwarven": {
        image: "https://i.ibb.co/ycTRBRV2/Dwarven-Mines-Map.webp"
    },
    "isle": {
        image: "https://i.ibb.co/XrBBSF5r/Crimson-Isle-0-13-Top-View.webp"
    },
    "park": {
        image: "https://i.ibb.co/4RfzfcGH/The-Park-0-7-4-Top-View.webp"
    },
    "rift": {
        image: "https://i.ibb.co/1DgdWmy/Rift-Dimension.webp"
    }
}

const setRandomLocation = () => {
    const random = locations[Math.floor(Math.random()*(locations.length-1))];
    document.getElementById('location').innerHTML = `<img src="${random.image}"><p>${random.coords.join(", ")}</p><p>${random.island}</p>`;
    document.getElementById('mapSelect').innerHTML = '';
    for (let name of Object.keys(islands)) {
        document.getElementById('mapSelect').innerHTML += `<option value="${name}">${name}</option>`
    }
}

const updateMap = (island) => {
    document.getElementById('map').innerHTML = `<img src="${islands[island].image}">`
}

const finishGame = () => {
    
}