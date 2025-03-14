//Home page
let homePage = document.querySelector("#homePage");
let goToGameButton = homePage.querySelector("#goToGameButton");

goToGameButton.addEventListener("click", () => {
    homePage.style.display = "none";
    gamePage.style.display = "block";

})


//Game page
//HTML randomElements
let gamePage = document.querySelector("#gamePage");
gamePage.style.display = "none";
let tableDiv = gamePage.querySelector("#tableDiv");
let table = gamePage.querySelector("#table");
let currentElementDiv = gamePage.querySelector("#currentElementDiv");
let currentElementTable = gamePage.querySelector("#currentElementTable");
let rotateButton = gamePage.querySelector("#rotateButton");
let mirrorButton = gamePage.querySelector("#mirrorButton");
let timeDiv = gamePage.querySelector("#timeDiv");
let time = timeDiv.querySelector("#time");
let neededTimeDiv = gamePage.querySelector("#neededTimeDiv");
let neededTime = gamePage.querySelector("#neededTime");
let springPoints = gamePage.querySelector("#springPoints");
let summerPoints = gamePage.querySelector("#summerPoints");
let autumnPoints = gamePage.querySelector("#autumnPoints");
let winterPoints = gamePage.querySelector("#winterPoints");
let aMissionImg = gamePage.querySelector("#aMissionImg");
let bMissionImg = gamePage.querySelector("#bMissionImg");
let cMissionImg = gamePage.querySelector("#cMissionImg");
let dMissionImg = gamePage.querySelector("#dMissionImg");
let springCard = gamePage.querySelector("#spring");
let summerCard = gamePage.querySelector("#summer");
let autumnCard = gamePage.querySelector("#autumn");
let winterCard = gamePage.querySelector("#winter");
let aMissionPoints = gamePage.querySelector("#aMissionPoints");
let bMissionPoints = gamePage.querySelector("#bMissionPoints");
let cMissionPoints = gamePage.querySelector("#cMissionPoints");
let dMissionPoints = gamePage.querySelector("#dMissionPoints");
let reasonOfEnd = gamePage.querySelector("#reasonOfEnd");
let totalPoints = gamePage.querySelector("#totalPoints");
let summaryDiv = gamePage.querySelector("#summaryDiv");
let endGameButton = gamePage.querySelector("#endGameButton");
let bonusPointsSpan = gamePage.querySelector("#bonusPoints");
let summarizedPoints = gamePage.querySelector("#summarizedPoints");


//missions and randomElements
const missions =
    [
        {
            "title": "Az erdő széle",
            "description": "A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz.",
            "function": edgeOfTheForest,
            "image": "missions/azerdoszele.png"
        },
        {
            "title": "Álmos-völgy",
            "description": "Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz.",
            "function": sleepyValley,
            "image": "missions/almosvolgy.png"
        },
        {
            "title": "Krumpliöntözés",
            "description": "A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz.",
            "function": potatoWatering,
            "image": "missions/krumpliontozes.png"
        },
        {
            "title": "Határvidék",
            "description": "Minden teli sorért vagy oszlopért 6-6 pontot kapsz.",
            "function": borderland,
            "image": "missions/hatarvidek.png"
        },
        {
            "title": "Fasor",
            "description": "A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért.",
            "function": treeLine,
            "image": "missions/fasor.png"
        },
        {
            "title": "Gazdag város",
            "description": "A legalább három különböző tereptípussal szomszédos falurégióidért három-három pontot kapsz.",
            "function": richTown,
            "image": "missions/gazdagvaros.png"
        },
        {
            "title": "Öntözőcsatorna",
            "description": "Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy pontot kapsz. Mindkét tereptípusból legalább egy-egy mezőnek lennie kell az oszlopban ahhoz, hogy pontot kaphass érte.",
            "function": canal,
            "image": "missions/ontozocsatorna.png"
        },
        {
            "title": "Mágusok völgye",
            "description": "A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz.",
            "function": valleyOfMagicians,
            "image": "missions/magusokvolgye.png"
        },
        {
            "title": "Üres telek",
            "description": "A városmezőiddel szomszédos üres mezőkért 2-2 pontot kapsz.",
            "function": emptyField,
            "image": "missions/urestelek.png"
        },
        {
            "title": "Sorház",
            "description": "A leghosszabb, vízszintesen megszakítás nélkül egybefüggő falumezők mindegyikéért kettő-kettő pontot kapsz.",
            "function": lineHouse,
            "image": "missions/sorhaz.png"
        },
        {
            "title": "Páratlan silók",
            "description": "Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz.",
            "function": oddSilos,
            "image": "missions/paratlansilok.png"
        },
        {
            "title": "Gazdag vidék",
            "description": "Minden legalább öt különböző tereptípust tartalmazó sorért négy-négy pontot kapsz.",
            "function": richArea,
            "image": "missions/gazdagvidek.png"
        }
    ]

const elements = [
    {
        time: 2,
        type: 'water',
        shape: [[1, 1, 1],
        [0, 0, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1, 1, 1],
        [0, 0, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'forest',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1, 1, 1],
        [0, 0, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1, 1, 1],
        [0, 0, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1, 1, 1],
        [0, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1, 1, 1],
        [0, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'town',
        shape: [[1, 1, 0],
        [1, 0, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'town',
        shape: [[1, 1, 1],
        [1, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'farm',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'farm',
        shape: [[0, 1, 0],
        [1, 1, 1],
        [0, 1, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'water',
        shape: [[1, 1, 1],
        [1, 0, 0],
        [1, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'water',
        shape: [[1, 0, 0],
        [1, 1, 1],
        [1, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 1]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'water',
        shape: [[1, 1, 0],
        [1, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
]

//variables
let currentElement = 0;
let currentTime = 0;
let seasonTime = 0;
let seasons = ["Tavasz", "Nyár", "Ősz", "Tél"];
let seasonCounter = 0;
let shuffeledMissions = shuffleArray(missions);
let randomMissions = [];
let seasonPoints = [0, 0, 0, 0];
let missionPoints = [0, 0, 0, 0];
for (let i = 0; i < 4; i++) {
    randomMissions.push(shuffeledMissions[i]);
}
let tiles = {
    "base": "tiles/base_tile.svg",
    "forest": "tiles/forest_tile.svg",
    "mountain": "tiles/mountain_tile.svg",
    "farm": "tiles/plains_tile.svg",
    "town": "tiles/village_tile.svg",
    "water": "tiles/water_tile.svg"
}



//creating the matrix
let matrix = [];
for (let i = 0; i < 11; i++) {
    let row = [];
    for (let j = 0; j < 11; j++) {
        row.push(0);
    }
    matrix.push(row);
}

let mountainIndices = [
    [2, 2],
    [4, 9],
    [6, 4],
    [9, 10],
    [10, 6]
];

for (let i = 0; i < mountainIndices.length; i++) {
    let rowIndex = mountainIndices[i][0] - 1;
    let colIndex = mountainIndices[i][1] - 1;
    matrix[rowIndex][colIndex] = "mountain";
}

//printing the matrix
function printMatrix() {
    table.innerHTML = "";
    for (let i = 0; i < matrix.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < matrix[i].length; j++) {
            let type = matrix[i][j];
            let td = document.createElement("td");
            td.id = i.toString() + "_" + j.toString();
            switch (type) {
                case 0:
                    td.style.backgroundImage = `url("${tiles["base"]}")`;
                    td.style.backgroundSize = "cover";
                    break;
                case "mountain":
                    td.style.backgroundImage = `url("${tiles["mountain"]}")`;
                    td.style.backgroundSize = "cover";
                    break;
                case "forest":
                    td.style.backgroundImage = `url("${tiles["forest"]}")`;
                    td.style.backgroundSize = "cover";
                    break;
                case "farm":
                    td.style.backgroundImage = `url("${tiles["farm"]}")`;
                    td.style.backgroundSize = "cover";
                    break;
                case "town":
                    td.style.backgroundImage = `url("${tiles["town"]}")`;
                    td.style.backgroundSize = "cover";
                    break;
                case "water":
                    td.style.backgroundImage = `url("${tiles["water"]}")`;
                    td.style.backgroundSize = "cover";
                    break;
            }
            tr.append(td);
        }
        table.append(tr);
    }
}


//shuffling the arrays
function shuffleArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}
let randomElements = shuffleArray(elements);

printMatrix();
printCurrentElement();
printCurrentTime();
printNeededTime();
printSeasonPoints();
printMissions();
checkAndChangeSeasons();
manageActiveMissions();

//inserting an element
table.addEventListener("click", tableClicked);

function tableClicked(e) {
    if (e.target.matches("td")) {
        let rowIndex = parseInt(e.target.id.split("_")[0]);
        let colIndex = parseInt(e.target.id.split("_")[1]);
        let element = randomElements[currentElement % randomElements.length];
        let type = randomElements[currentElement % randomElements.length]["type"];
        if (checkIfAreaIsFree(element, rowIndex, colIndex)) {
            putElementIntoMatrix(element, rowIndex, colIndex);
            currentTime += element["time"];
            currentElement++;
            if (currentElement >= elements.length) randomElements = shuffleArray(elements);
            checkAndChangeSeasons();
            manageActiveMissions();
        }
        printMatrix();
        printCurrentElement();
        printCurrentTime();
        printNeededTime();
        printSeasonPoints();
    }
}

function checkIfAreaIsFree(element, rowIndex, colIndex) {
    shape = element["shape"];
    let verticalMax = 0;
    let horizontalMax = 0;
    for (let i = 0; i < shape.length; i++) {
        for (let j = 0; j < shape[i].length; j++) {
            if (shape[i][j] != 0) {
                verticalMax = i;
                if (j > horizontalMax) horizontalMax = j;
            }
        }
    }
    if (rowIndex + verticalMax > 10) return false;
    if (colIndex + horizontalMax > 10) return false;
    let x = 0;
    for (let i = rowIndex; i < rowIndex + 3; i++) {
        let y = 0;
        for (let j = colIndex; j < colIndex + 3; j++) {
            if (shape[x][y] != 0 && matrix[i][j] != 0) return false;
            y++;
        }
        x++;
    }
    return true;
}

function putElementIntoMatrix(element, rowIndex, colIndex) {
    let shape = element["shape"];
    let type = element["type"];
    let x = 0;
    for (let i = rowIndex; i < rowIndex + 3; i++) {
        let y = 0;
        for (let j = colIndex; j < colIndex + 3; j++) {
            if (shape[x][y] != 0) matrix[i][j] = type;
            y++;
        }
        x++;
    }
}

table.addEventListener("mouseover", overTable);
function overTable(e) {
    if (e.target.matches("td")) {
        let element = randomElements[currentElement % randomElements.length];
        let shape = element["shape"];
        let rowIndex = parseInt(e.target.id.split("_")[0]);
        let colIndex = parseInt(e.target.id.split("_")[1]);
        let tds = getCells(element, rowIndex, colIndex);
        if (checkIfAreaIsFree(element, rowIndex, colIndex)) {
            for (let x = 0; x < tds.length; x++) {
                tds[x].style.border = "3px solid green";

            }
        } else {
            for (let x = 0; x < tds.length; x++) {
                tds[x].style.border = "3px solid red";
            }
        }
    }
}

table.addEventListener("mouseout", (e) => {
    if (e.target.matches("td")) {
        setAllCellsBorders("3px solid rgba(255, 0, 0, 0)");
    }
})

function setAllCellsBackgroundColor(color) {
    for (let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            let cell = row.cells[j];
            cell.style.backgroundColor = color;
        }
    }
}

function setAllCellsBorders(value) {
    for (let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            let cell = row.cells[j];
            cell.style.border = value;
        }
    }
}

function getCells(element, rowIndex, colIndex) {
    let boundaryRow;
    let boundaryCol;
    shape = element["shape"];
    let verticalMax = 0;
    let horizontalMax = 0;
    for (let i = 0; i < shape.length; i++) {
        for (let j = 0; j < shape[i].length; j++) {
            if (shape[i][j] != 0) {
                verticalMax = i;
                if (j > horizontalMax) horizontalMax = j;
            }
        }
    }
    boundaryRow = rowIndex + verticalMax + 1;
    boundaryCol = colIndex + horizontalMax + 1;
    if (rowIndex + verticalMax > 10) {
        boundaryRow = 11;
    }
    if (colIndex + horizontalMax > 10) {
        boundaryCol = 11;
    }
    let tds = [];
    let x = 0;
    for (let i = rowIndex; i < boundaryRow; i++) {
        let y = 0;
        for (let j = colIndex; j < boundaryCol; j++) {
            if (shape[x][y] != 0) {
                tds.push(table.rows[i].cells[j]);
            }
            y++;
        }
        x++;
    }
    return tds;
}

function printCurrentElement() {
    currentElementTable.innerHTML = "";
    let element = randomElements[currentElement % randomElements.length];
    let shape = element["shape"];
    let type = element["type"];
    for (let i = 0; i < 3; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            let td = document.createElement("td");
            if (shape[i][j] === 0) {
                td.style.backgroundImage = `url("${tiles["base"]}")`;
                td.style.backgroundSize = "cover";
            }
            else {
                switch (type) {
                    case "mountain":
                        td.style.backgroundImage = `url("${tiles["mountain"]}")`;
                        td.style.backgroundSize = "cover";
                        break;
                    case "forest":
                        td.style.backgroundImage = `url("${tiles["forest"]}")`;
                        td.style.backgroundSize = "cover";
                        break;
                    case "farm":
                        td.style.backgroundImage = `url("${tiles["farm"]}")`;
                        td.style.backgroundSize = "cover";
                        break;
                    case "town":
                        td.style.backgroundImage = `url("${tiles["town"]}")`;
                        td.style.backgroundSize = "cover";
                        break;
                    case "water":
                        td.style.backgroundImage = `url("${tiles["water"]}")`;
                        td.style.backgroundSize = "cover";
                        break;
                }
            }
            tr.append(td);
        }
        currentElementTable.append(tr);
    }
}

function rotate(matrix) {
    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        let newRow = [];
        for (let j = 0; j < matrix[i].length; j++) {
            newRow.push(matrix[i][j]);
        }
        newMatrix.push(newRow);
    }
    for (let i = 0; i < newMatrix.length; i++) {
        for (let j = 0; j < i; j++) {
            let temp = matrix[i][j];
            newMatrix[i][j] = newMatrix[j][i];
            newMatrix[j][i] = temp;
        }
    }
    for (let i = 0; i < newMatrix.length; i++) {
        newMatrix[i].reverse();
    }
    correctMatrix(newMatrix);
    return newMatrix;
}

rotateButton.addEventListener("click", () => {
    let element = randomElements[currentElement % randomElements.length];
    element["shape"] = rotate(element["shape"]);
    printCurrentElement();
})

mirrorButton.addEventListener("click", () => {
    let element = randomElements[currentElement % randomElements.length];
    element["shape"] = mirror(element["shape"]);
    printCurrentElement();
})

function correctMatrix(matrix) {
    while (matrix[0].every(e => e === 0)) {
        for (let i = 1; i < matrix.length; i++) {
            matrix[i - 1] = matrix[i];
        }
        matrix[matrix.length - 1] = [0, 0, 0];
    }
    let emptyFirstColumn = true;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] != 0) emptyFirstColumn = false;
    }
    while (emptyFirstColumn) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 1; j < matrix[i].length; j++) {
                matrix[i][j - 1] = matrix[i][j];
            }
        }
        matrix[0][2] = 0;
        matrix[1][2] = 0;
        matrix[2][2] = 0;
        emptyFirstColumn = true;
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][0] != 0) emptyFirstColumn = false;
        }


    }
}

function mirror(matrix) {
    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        let newRow = [];
        for (let j = 0; j < matrix[i].length; j++) {
            newRow.push(matrix[i][j]);
        }
        newMatrix.push(newRow);
    }
    for (let i = 0; i < newMatrix.length; i++) {
        let temp = newMatrix[i][0];
        newMatrix[i][0] = newMatrix[i][2];
        newMatrix[i][2] = temp;
    }
    correctMatrix(newMatrix);
    return newMatrix;
}

function printCurrentTime() {
    time.innerHTML = currentTime.toString();
}

//A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz.
function edgeOfTheForest() {
    let s = 0;
    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            if ((i === 0 || i === 10 || j === 0 || j === 10) && matrix[i][j] === "forest") s++;
        }
    }
    return s;
}

//Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz.
function sleepyValley() {
    let c = 0;
    for (let i = 0; i < 11; i++) {
        let s = 0;
        for (let j = 0; j < 11; j++) {
            if (matrix[i][j] === "forest") s++;
        }
        if (s === 3) c++;
    }
    return c * 4;
}

//A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz.
function potatoWatering() {
    let s = 0;
    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            if (matrix[i][j] === "farm") {
                if (i > 0 && matrix[i - 1][j] === "water") {
                    s += 2;
                }
                if (i < 10 && matrix[i + 1][j] === "water") {
                    s += 2;
                }
                if (j > 0 && matrix[i][j - 1] === "water") {
                    s += 2;
                }
                if (j < 10 && matrix[i][j + 1] === "water") {
                    s += 2;
                }
            }
        }
    }
    return s;
}

//Minden teli sorért vagy oszlopért 6-6 pontot kapsz.
function borderland() {
    let c = 0;
    for (let i = 0; i < 11; i++) {
        if (!matrix[i].some(e => e === 0)) c++;
    }
    for (let i = 0; i < 11; i++) {
        let tele = true;
        for (let j = 0; j < 11; j++) {
            if (matrix[j][i] === 0) tele = false;
        }
        if (tele) c++;
    }
    return c * 6;
}

//A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért.
function treeLine() {
    let max = 0;
    for (let i = 0; i < 11; i++) {
        let actual = 0;
        for (let j = 0; j < 11; j++) {
            if (matrix[j][i] === "forest") {
                actual++;
                if (actual > max) max = actual;
            } else {
                actual = 0;
            }
        }
    }
    return max * 2;
}

//A legalább három különböző tereptípussal szomszédos falurégióidért három-három pontot kapsz.
function richTown() {
    let c = 0;
    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            let neighbours = [];
            if (matrix[i][j] === "town") {
                if (i > 0 && !neighbours.includes(matrix[i - 1][j]) && matrix[i - 1][j] != 0) {
                    neighbours.push(matrix[i - 1][j])
                }
                if (i < 10 && !neighbours.includes(matrix[i + 1][j]) && matrix[i + 1][j] != 0) {
                    neighbours.push(matrix[i + 1][j])
                }
                if (j > 0 && !neighbours.includes(matrix[i][j - 1]) && matrix[i][j - 1] != 0) {
                    neighbours.push(matrix[i][j - 1]);
                }
                if (j < 10 && !neighbours.includes(matrix[i][j + 1]) && matrix[i][j + 1] != 0) {
                    neighbours.push(matrix[i][j + 1]);
                }
                if (neighbours.length >= 3) c++;
            }
        }
    }
    return c * 3;
}

//Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy pontot kapsz. Mindkét tereptípusból legalább egy-egy mezőnek lennie kell az oszlopban ahhoz, hogy pontot kaphass érte.
function canal() {
    let c = 0;
    for (let i = 0; i < 11; i++) {
        let w = 0;
        let f = 0;
        for (let j = 0; j < 11; j++) {
            if (matrix[j][i] === "farm") f++;
            if (matrix[j][i] === "water") w++;
        }
        if (w > 0 && w === f) c++;
    }
    return c * 4;
}

//A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz.
function valleyOfMagicians() {
    let s = 0;
    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            if (matrix[i][j] === "mountain") {
                if (i > 0 && matrix[i - 1][j] === "water") {
                    s += 3;
                }
                if (i < 10 && matrix[i + 1][j] === "water") {
                    s += 3;
                }
                if (j > 0 && matrix[i][j - 1] === "water") {
                    s += 3;
                }
                if (j < 10 && matrix[i][j + 1] === "water") {
                    s += 3;
                }
            }
        }
    }
    return s;
}

//A városmezőiddel szomszédos üres mezőkért 2-2 pontot kapsz.
function emptyField() {
    let s = 0;
    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            if (matrix[i][j] === "town") {
                if (i > 0 && matrix[i - 1][j] === 0) {
                    s += 2;
                }
                if (i < 10 && matrix[i + 1][j] === 0) {
                    s += 2;
                }
                if (j > 0 && matrix[i][j - 1] === 0) {
                    s += 2;
                }
                if (j < 10 && matrix[i][j + 1] === 0) {
                    s += 2;
                }
            }
        }
    }
    return s;
}

//A leghosszabb, vízszintesen megszakítás nélkül egybefüggő falumezők mindegyikéért kettő-kettő pontot kapsz.
function lineHouse() {
    let max = 0;
    for (let i = 0; i < 11; i++) {
        let actual = 0;
        for (let j = 0; j < 11; j++) {
            if (matrix[i][j] === "town") {
                actual++;
                if (actual > max) max = actual;
            } else {
                actual = 0;
            }
        }
    }
    return max * 2;
}

//Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz.
function oddSilos() {
    let c = 0;
    for (let i = 0; i < 11; i++) {
        let tele = true;
        for (let j = 0; j < 11; j += 2) {
            if (matrix[j][i] === 0) tele = false;
        }
        if (tele) c++;
    }
    return c * 10;
}

//Minden legalább öt különböző tereptípust tartalmazó sorért négy-négy pontot kapsz.
function richArea() {
    let c = 0;
    for (let i = 0; i < 11; i++) {
        let areas = [];
        for (let j = 0; j < 11; j++) {
            if (!areas.includes(matrix[i][j]) && matrix[i][j] != 0) areas.push(matrix[i][j]);
        }
        if (areas.length >= 5) c++;
    }
    return c * 4;
}

function printNeededTime() {
    neededTime.innerHTML = randomElements[currentElement % randomElements.length]["time"];
}

function checkAndChangeSeasons() {
    let season = seasons[seasonCounter];
    if (currentTime >= 7) {
        if (season === "Tavasz") {
            let mission1 = randomMissions[0];
            let mission2 = randomMissions[1];

            seasonPoints[0] = mission1["function"]() + mission2["function"]();
            missionPoints[0] = mission1["function"]();
            missionPoints[1] = mission2["function"]();

        } else if (season === "Nyár") {
            let mission1 = randomMissions[1];
            let mission2 = randomMissions[2];
            seasonPoints[1] = mission1["function"]() + mission2["function"]();
            missionPoints[1] += mission1["function"]();
            missionPoints[2] = mission2["function"]();

        } else if (season === "Ősz") {
            let mission1 = randomMissions[2];
            let mission2 = randomMissions[3];
            seasonPoints[2] = mission1["function"]() + mission2["function"]();
            missionPoints[2] += mission1["function"]();
            missionPoints[3] = mission2["function"]();
        } else {
            let mission1 = randomMissions[3];
            let mission2 = randomMissions[0];
            seasonPoints[3] = mission1["function"]() + mission2["function"]();
            missionPoints[3] += mission1["function"]();
            missionPoints[0] += mission2["function"]();
        }
        aMissionPoints.innerHTML = `${missionPoints[0]} pont`;
        bMissionPoints.innerHTML = `${missionPoints[1]} pont`;
        cMissionPoints.innerHTML = `${missionPoints[2]} pont`;
        dMissionPoints.innerHTML = `${missionPoints[3]} pont`;
        currentTime = 0;
        seasonCounter++;
        if (seasonCounter === 4) endOfGame(true);
    }
}
function printSeasonPoints() {
    springPoints.innerHTML = seasonPoints[0];
    summerPoints.innerHTML = seasonPoints[1];
    autumnPoints.innerHTML = seasonPoints[2];
    winterPoints.innerHTML = seasonPoints[3];
}

function printMissions() {
    let aMissionImage = randomMissions[0]["image"];
    let bMissionImage = randomMissions[1]["image"];
    let cMissionImage = randomMissions[2]["image"];
    let dMissionImage = randomMissions[3]["image"];
    aMissionImg.src = aMissionImage;
    bMissionImg.src = bMissionImage;
    cMissionImg.src = cMissionImage;
    dMissionImg.src = dMissionImage;
}

function manageActiveMissions() {
    let season = seasons[seasonCounter];
    switch (season) {
        case "Tavasz":
            cMissionImg.classList.add("inActive");
            dMissionImg.classList.add("inActive");
            springCard.classList.remove("inActive");
            summerCard.classList.add("inActive");
            autumnCard.classList.add("inActive");
            winterCard.classList.add("inActive");
            cMissionPoints.classList.add("inActive");
            dMissionPoints.classList.add("inActive");
            break;
        case "Nyár":
            aMissionImg.classList.add("inActive");
            dMissionImg.classList.add("inActive");
            bMissionImg.classList.remove(...bMissionImg.classList);
            cMissionImg.classList.remove(...cMissionImg.classList);
            springCard.classList.add("inActive");
            summerCard.classList.remove("inActive");
            autumnCard.classList.add("inActive");
            winterCard.classList.add("inActive");
            aMissionPoints.classList.add("inActive");
            dMissionPoints.classList.add("inActive");
            bMissionPoints.classList.remove("inActive");
            cMissionPoints.classList.remove("inActive");
            break;
        case "Ősz":
            aMissionImg.classList.add("inActive");
            bMissionImg.classList.add("inActive");
            cMissionImg.classList.remove(...cMissionImg.classList);
            dMissionImg.classList.remove(...dMissionImg.classList);
            springCard.classList.add("inActive");
            summerCard.classList.add("inActive");
            autumnCard.classList.remove("inActive");
            winterCard.classList.add("inActive");
            aMissionPoints.classList.add("inActive");
            bMissionPoints.classList.add("inActive");
            cMissionPoints.classList.remove("inActive");
            dMissionPoints.classList.remove("inActive");
            break;
        case "Tél":
            bMissionImg.classList.add("inActive");
            cMissionImg.classList.add("inActive");
            aMissionImg.classList.remove(...aMissionImg.classList);
            dMissionImg.classList.remove(...dMissionImg.classList);
            springCard.classList.add("inActive");
            summerCard.classList.add("inActive");
            autumnCard.classList.add("inActive");
            winterCard.classList.remove("inActive");
            bMissionPoints.classList.add("inActive");
            cMissionPoints.classList.add("inActive");
            aMissionPoints.classList.remove("inActive");
            dMissionPoints.classList.remove("inActive");
    }
}

summaryDiv.style.display = "none";
function endOfGame(letelt) {
    bMissionImg.classList.remove("inActive");
    cMissionImg.classList.remove("inActive");
    aMissionImg.classList.remove("inActive");
    dMissionImg.classList.remove("inActive");
    springCard.classList.remove("inActive");
    summerCard.classList.remove("inActive");
    autumnCard.classList.remove("inActive");
    winterCard.classList.remove("inActive");
    bMissionPoints.classList.remove("inActive");
    cMissionPoints.classList.remove("inActive");
    aMissionPoints.classList.remove("inActive");
    dMissionPoints.classList.remove("inActive");
    if (letelt) {
        reasonOfEnd.innerHTML = "Az időd elfogyott.";
    } else {
        reasonOfEnd.innerHTML = "A játék befejezése mellett döntöttél.";
    }

    let s = 0;
    missionPoints.forEach(e => {
        s += e;
    })
    totalPoints.innerHTML = s;
    bonusPointsSpan.innerHTML = bonusPoints();
    summarizedPoints.innerHTML = (bonusPoints() + s);
    summaryDiv.style.display = "block";
    rotateButton.disabled = true;
    mirrorButton.disabled = true;
    endGameButton.disabled = true;
    table.removeEventListener("click", tableClicked);
    table.removeEventListener("mouseover", overTable);
}

endGameButton.addEventListener("click", endManually);

function endManually() {
    endOfGame(false);
}

function bonusPoints() {
    let s = 0;
    for (let i = 0; i < mountainIndices.length; i++) {
        let rowIndex = mountainIndices[i][0] - 1;
        let colIndex = mountainIndices[i][1] - 1;
        if (matrix[rowIndex - 1][colIndex] != 0 && matrix[rowIndex + 1][colIndex] != 0 && matrix[rowIndex][colIndex - 1] != 0 && matrix[rowIndex][colIndex + 1] != 0) s++;
    }
    return s;
}

