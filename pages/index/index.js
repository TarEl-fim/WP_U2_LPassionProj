class Board{

    constructor(h,w){
        this.Arrayset = this.genBoard(h,w);
        this.Visualset = this.genTileList();
    }

    genTileList(){
        //VISUAL DOMs LIST OF OBJs
        const board = document.createElement('div');
        board.className = 'gray';
        board.id = 'gameBoard'
        for (let h = 0; h < this.Arrayset.length; h++){
            const invis = document.createElement('div');
            invis.className = 'invisi';
            for (let w = 0; w < this.Arrayset[h].length; w++){
                const eleTile = this.Arrayset[h][w];
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
                const tileGen = new tileClass(this.Arrayset,h,w);
                invisList.push(tileGen);
            }
            boardList.push(invisList);
        }
        return boardList;
    }
}

class tileClass{
    constructor(boardAround,y,x){
        this.element = this.genTile();
        this.img = null;
        this.holder = boardAround;
        this.value = 0;
        this.y = y;
        this.x = x;
    }

    bombPlace(){
        //yo mama
        //Change random num to size accordingly later
        for (let i=0; i<20;i++){
            console.log(i)
            let yValue = randNum(this.holder.length);
            let xValue = randNum(this.holder[0].length);
            this.holder[yValue][xValue].classList.add('BombClosed');
            console.log(yValue,xValue);
        }
    }

    openTile(){
        if (firstClick == 0){
            console.log('penis')
            this.bombPlace;
            console.log('penis')
            firstClick += 1;
        }

        if (this.classList.contains('BombClosed')){

            this.className = '';
            this.classList.add('Bomb');

        }else{
            this.classList.add('Open');
            this.classList.remove('Closed');
            //run tile check
        }
        
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

function randNum(max){
    return Math.floor(Math.random() * max);
}

main();

function main(){
    firstClick = 0;
    board = new Board(9,10);
    const body = document.getElementById('gameArea');
    body.appendChild(board.Visualset)
    console.log(board.Visualset);
}