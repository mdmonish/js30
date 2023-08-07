const chessBoard = document.querySelector(".chess__board");

function createBoard() {
  chessBoard.innerHTML = "";
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const div = document.createElement("div");
      div.classList.add("chess__box");
      if (i % 2 === 0) {
        div.style.background = j % 2 === 0 ? "white" : "black";
      } else {
        div.style.background = j % 2 !== 0 ? "white" : "black";
      }
      div.setAttribute("data-label", `${i * 8 + j + 1}`);

      chessBoard.appendChild(div);
    }
  }
}
createBoard();

chessBoard.addEventListener("click", function calcIndex(e) {
  createBoard();
  const id = +e.target.dataset.label - 1;

  const row = Math.floor(id / 8);
  const col = id - row * 8;
  
  findBox(row, col);
});

function findBox(row, col) {
  const selectedBox = document.querySelector(`[data-label="${row * 8 + col + 1}"]`);
  selectedBox.style.background = "orange";
 
  //selecting respective diagonals
  topLeft(row, col);
  topRight(row, col);
  bottomRight(row, col);
  bottomLeft(row, col);
}
// topLeft->if(row <0 || col <0){}row--,col--;
// bottomLeft;if(row>length || col<0); row++;col--
// topRight;if(row<0 || col>lenth);row--;col++;
// bottomRight;if(r0w>length || col>lenth)row++,col++

function topLeft(top, left) {
  if (top === 0 || left === 0) {
    return;
  } else {
    const selectDiag = document.querySelector(
      `[data-label="${(top - 1) * 8 + (left - 1 + 1)}"]`
    );
    selectDiag.style.background = "orange";
    topLeft(top - 1, left - 1);
  }
}

function topRight(top, right) {
  if (top === 0 || right === 7) {
    return;
  } else {
    const selectDiag = document.querySelector(
      `[data-label="${(top - 1) * 8 + (right + 1 + 1)}"]`
    );

    selectDiag.style.background = "orange";
    topRight(top - 1, right + 1);
  }
}

function bottomRight(bottom, right) {
  if (bottom === 7 || right === 7) {
    return;
  } else {
    const selectDiag = document.querySelector(
      `[data-label="${(bottom + 1) * 8 + (right + 1 + 1)}"]`
    );

    selectDiag.style.background = "orange";
    bottomRight(bottom + 1, right + 1);
  }
}

function bottomLeft(bottom, left) {
  if (bottom === 7 || left === 0) {
    return;
  } else {
    const selectDiag = document.querySelector(
      `[data-label="${(bottom + 1) * 8 + (left - 1 + 1)}"]`
    );

    selectDiag.style.background = "orange";
    bottomLeft(bottom + 1, left - 1);
  }
}
