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

    openTile(){
        this.classList.add('Open');
        this.classList.remove('Closed');
        //run tile check
    }

    genTile(){
        const tile = document.createElement('div');

        tile.addEventListener('click',this.openTile);

        tile.addEventListener('contextmenu', (event) => {
        console.log('kill yourself');

        if(tile.classList.contains('Closed') || tile.classList.contains('Flag')){
            console.log('1st');

            if (tile.classList.contains('Flag')){

                console.log('2nd');
                tile.classList.add('Closed');
                tile.classList.remove('Flag');
                tile.addEventListener('click',this.openTile);

            }else{
                
                console.log('3rd');
                tile.classList.add('Flag');
                tile.classList.remove('Closed');
                tile.onclick = null;
            }
        
        }
        event.preventDefault()
        
        })

        tile.classList.add('tile');
        tile.classList.add('Closed');
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