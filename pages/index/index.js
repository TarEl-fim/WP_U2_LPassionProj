class Board{

    constructor(h,w){
        this.Arrayset = this.genBoard(h,w);
        this.Visualset = this.genTileList(this.Arrayset);
    }

    genTileList(arraySet){
        //VISUAL DOMs LIST OF OBJs
        const board = document.createElement('div');
        board.className = 'gray';
        board.id = 'gameBoard'
        for (let h = 0; h < arraySet.length; h++){
            const invis = document.createElement('div');
            invis.className = 'invisi';
            for (let w = 0; w < arraySet[h].length; w++){
                const eleTile = arraySet[h][w];
                invis.appendChild(eleTile.element);
            }
            board.appendChild(invis);
        }
        return board;

    }

    genBoard(height,width){
        //ACTUAL OBJECT LIST FOR EDITING VISUALS
        const boardList = [];
        for (let h = 0; h <height; h++){
            const invisList = [];
            for (let w = 0; w < width; w++){
                const tileGen = new tileClass();
                invisList.push(tileGen);
            }
            boardList.push(invisList);
        }
        return boardList;
    }
}

class tileClass{
    constructor(){
        this.element = this.genTile();
        this.img = null;
    }

    genTile(){
        const tile = document.createElement('div');

        tile.addEventListener('contextmenu', (event) => {
        console.log('kill yourself');
        event.preventDefault()
        })

        tile.className = 'tile';
        return tile;
    }  

};

main();

function main(){
    board = new Board(9,10);
    const body = document.getElementById('gameArea');
    body.appendChild(board.Visualset)
    console.log(board.Visualset);
}