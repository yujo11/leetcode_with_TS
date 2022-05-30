const isValidLine = (line) => {
  line = line.filter((value) => value !== '.')

  return line.length === new Set(line).size
}

function isValidSudoku(board) {
  for (let i = 0; i < board.length; i++) {
    if (!isValidLine(board[i])) return false
  }

  board = board.flat()

  const columns = []

  for (let i = 0; i < 9; i++) {
    const column = []

    for (let j = i; j < board.length; j += 9) {
      column.push(board[j])
    }

    columns.push(column)
  }

  for (let i = 0; i < columns.length; i++) {
    if (!isValidLine(columns[i])) return false
  }

  board = board.flat()

  const position = []

  for (let i = 0; i < board.length; i += 3) {
    position.push(i)

    if (position.length % 3 === 0) {
      i += 18
    }
  }

  const subBox = []

  for (let i = 0; i < position.length; i++) {
    subBox.push([
      ...board.slice(position[i], position[i] + 3),
      ...board.slice(position[i] + 9, position[i] + 9 + 3),
      ...board.slice(position[i] + 18, position[i] + 18 + 3),
    ])
  }

  for (const box of subBox) {
    if (!isValidLine(box)) return false
  }

  return true
}

console.log(
  isValidSudoku([
    ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
    ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
    ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
    ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ])
)
