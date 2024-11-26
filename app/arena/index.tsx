// app/tabs/home.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Square = string | null;

const initialBoard: Square[][] = [
  ["r", "n", "b", "q", "k", "b", "n", "r"],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
];

const ChessArena: React.FC = () => {
  const [board, setBoard] = useState<Square[][]>(initialBoard);
  const [selectedPiece, setSelectedPiece] = useState<{ row: number; col: number } | null>(null);
  const [turn, setTurn] = useState<"white" | "black">("white");

  const handleSquarePress = (row: number, col: number) => {
    const piece = board[row][col];

    if (selectedPiece) {
      // Handle move
      const isValid = validateMove(selectedPiece, { row, col }, board, turn);
      if (isValid) {
        const updatedBoard = [...board.map(row => [...row])];
        updatedBoard[row][col] = board[selectedPiece.row][selectedPiece.col];
        updatedBoard[selectedPiece.row][selectedPiece.col] = null;

        setBoard(updatedBoard);
        setTurn(turn === "white" ? "black" : "white");
      }
      setSelectedPiece(null);
    } else if (piece && isTurn(piece, turn)) {
      // Select piece
      setSelectedPiece({ row, col });
    }
  };

  const isTurn = (piece: string | null, currentTurn: "white" | "black") => {
    return currentTurn === "white" ? piece?.toUpperCase() === piece : piece?.toLowerCase() === piece;
  };

  const validateMove = (
    from: { row: number; col: number },
    to: { row: number; col: number },
    board: Square[][],
    turn: "white" | "black"
  ) => {
    const piece = board[from.row][from.col];
    // Add custom logic for piece-specific movement
    return true; // Placeholder for simplicity
  };

  return (
    <View style={styles.container}>
      <Text style={styles.turnText}>{turn === "white" ? "White's Turn" : "Black's Turn"}</Text>
      <View style={styles.board}>
        {board.map((row, rowIndex) =>
          row.map((square, colIndex) => (
            <TouchableOpacity
              key={`${rowIndex}-${colIndex}`}
              style={[
                styles.square,
                (rowIndex + colIndex) % 2 === 0 ? styles.lightSquare : styles.darkSquare,
                selectedPiece?.row === rowIndex && selectedPiece?.col === colIndex && styles.selectedSquare,
              ]}
              onPress={() => handleSquarePress(rowIndex, colIndex)}
            >
              <Text style={styles.piece}>{square}</Text>
            </TouchableOpacity>
          ))
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  turnText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  board: {
    width: 320,
    height: 320,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  square: {
    width: "12.5%",
    height: "12.5%",
    justifyContent: "center",
    alignItems: "center",
  },
  lightSquare: {
    backgroundColor: "#f0d9b5",
  },
  darkSquare: {
    backgroundColor: "#b58863",
  },
  selectedSquare: {
    borderWidth: 2,
    borderColor: "blue",
  },
  piece: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ChessArena;
