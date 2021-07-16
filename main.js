

const initialState = [["5", "4", "3", "2", "1"],
    [],
    [],
];  // watch out for off-by-one errors


const board = {
    gameState: [...initialState],
    moveDisc: (initialPeg, targetPeg) => {
        // ... all your game logic
            // top is the last item in the initalPeg
            // check that the peg in question in smaller than where it's headed
                // handle null/empty state
            // if peg is validated, then update the target peg
        // after every move, you want to check for a winner
        this.checkWinner()
    },
    checkWinner: () => {
        // const winner = ...some logic to check for the winner
        if (winner) {
            console.log("You won!!")
            // reset to initial state
        }
    }
}