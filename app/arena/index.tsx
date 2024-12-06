import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button } from "react-native";
import { Chess, Square } from "chess.js";
import Icon from "react-native-vector-icons/FontAwesome";

const ChessArena: React.FC = () => {
  const [game, setGame] = useState(new Chess());
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [highlightedSquares, setHighlightedSquares] = useState<string[]>([]);
  const [promotionModalVisible, setPromotionModalVisible] = useState(false);
  const [promotionSquare, setPromotionSquare] = useState<string | null>(null);

  type PieceIconKeys = `${'w' | 'b'}${'p' | 'K' | 'Q' | 'R' | 'B' | 'N'}`;
  const pieceIcons: Record<PieceIconKeys, string> = {
    wp: "chess-pawn",
    wK: "chess-king",
    wQ: "chess-queen",
    wR: "chess-rook",
    wB: "chess-bishop",
    wN: "chess-knight",
    bp: "chess-pawn",
    bK: "chess-king",
    bQ: "chess-queen",
    bR: "chess-rook",
    bB: "chess-bishop",
    bN: "chess-knight",
  };

  const generateBoard = () => {
    const board = [];
    const squares = game.board();

    for (let row = 0; row < 8; row++) {
      const rowSquares = [];
      for (let col = 0; col < 8; col++) {
        const squareName = `${String.fromCharCode(97 + col)}${8 - row}`;
        const piece = squares[row][col];

        rowSquares.push(
          <TouchableOpacity
            key={squareName}
            style={[
              styles.square,
              (row + col) % 2 === 0 ? styles.lightSquare : styles.darkSquare,
              highlightedSquares.includes(squareName) && styles.highlightSquare,
            ]}
            onPress={() => handleSquarePress(squareName)}
          >
            {piece && (
              <Icon
              name={pieceIcons[`${piece.color}${piece.type.toUpperCase()}` as keyof typeof pieceIcons]}
              size={24}
              color={piece.color === "w" ? "#fff" : "#000"}
            />
            )}
          </TouchableOpacity>
        );
      }
      board.push(
        <View key={`row-${row}`} style={styles.row}>
          {rowSquares}
        </View>
      );
    }
    return board;
  };

  const handleSquarePress = (square: string) => {
    // Ensure `square` is a valid chess square
    if (!/^[a-h][1-8]$/.test(square)) {
      console.log(`Invalid square: ${square}`);
      return;
    }

    if (selectedSquare) {
      const gameCopy = new Chess(game.fen());
      const move = gameCopy.move({
        from: selectedSquare as Square,
        to: square as Square,
      });

      if (move?.flags.includes("p")) {
        setPromotionSquare(square);
        setPromotionModalVisible(true);
      } else if (move) {
        setGame(gameCopy);
        setSelectedSquare(null);
        setHighlightedSquares([]);
      }
    } else {
      setSelectedSquare(square);

      const legalMoves = game.moves({ square: square as Square, verbose: true });
      setHighlightedSquares(legalMoves.map((move) => move.to));
    }
  };

  const promotePawn = (piece: string) => {
    const gameCopy = new Chess(game.fen());
    gameCopy.move({
      from: selectedSquare as Square,
      to: promotionSquare as Square,
      promotion: piece,
    });
    setGame(gameCopy);
    setPromotionModalVisible(false);
    setSelectedSquare(null);
    setHighlightedSquares([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chess Arena</Text>
      <Text style={styles.status}>
        {game.isCheckmate()
          ? "Checkmate!"
          : game.isDraw()
          ? "Draw!"
          : game.isCheck()
          ? "Check!"
          : `${game.turn() === "w" ? "White" : "Black"}'s turn`}
      </Text>
      <View style={styles.chessboard}>{generateBoard()}</View>
      <TouchableOpacity style={styles.undoButton} onPress={() => setGame(new Chess(game.undo()?.fen || ""))}>
        <Text style={styles.undoText}>Undo Move</Text>
      </TouchableOpacity>
      <Modal visible={promotionModalVisible} transparent>
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Choose Promotion</Text>
          {["q", "r", "b", "n"].map((piece) => (
            <TouchableOpacity
              key={piece}
              style={styles.modalButton}
              onPress={() => promotePawn(piece)}
            >
              <Text style={styles.modalButtonText}>{piece.toUpperCase()}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  status: {
    fontSize: 16,
    marginBottom: 20,
  },
  chessboard: {
    width: 320,
    height: 320,
    flexDirection: "column",
    borderWidth: 2,
    borderColor: "#000",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  square: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
  lightSquare: {
    backgroundColor: "#f0d9b5",
  },
  darkSquare: {
    backgroundColor: "#b58863",
  },
  highlightSquare: {
    backgroundColor: "rgba(0, 255, 0, 0.5)",
  },
  undoButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
  },
  undoText: {
    color: "#fff",
    fontWeight: "bold",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ChessArena;
