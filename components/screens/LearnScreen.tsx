import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const LearnScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>How to Play Chess</Text>

      <Text style={styles.heading}>1. Setting Up the Board</Text>
      <Text style={styles.content}>
        Place the board so that each player has a white square on their right. Arrange the pieces as follows: rooks in
        the corners, then knights next to them, bishops next to the knights, queens on their color, and kings on the
        remaining squares. Pawns go in the row in front of the pieces.
      </Text>

      <Text style={styles.heading}>2. Understanding How Each Piece Moves</Text>
      <Text style={styles.content}>
        - **Pawn**: Moves forward one square, but captures diagonally. On its first move, it can move two squares.
        {"\n"}- **Rook**: Moves horizontally or vertically as far as possible. {"\n"}- **Knight**: Moves in an "L"
        shape, two squares in one direction and then one square perpendicular. It can jump over pieces. {"\n"}-{" "}
        **Bishop**: Moves diagonally as far as possible. {"\n"}- **Queen**: Moves horizontally, vertically, or
        diagonally as far as possible. {"\n"}- **King**: Moves one square in any direction. The objective is to protect
        the king from checkmate.
      </Text>

      <Text style={styles.heading}>3. Goal of the Game</Text>
      <Text style={styles.content}>
        The goal is to checkmate your opponent's king. This happens when the king is in a position to be captured (in
        check) and there’s no way to escape.
      </Text>

      <Text style={styles.heading}>4. Special Moves</Text>
      <Text style={styles.content}>
        - **Castling**: A move involving the king and a rook. The king moves two squares towards the rook, and the rook
        moves to the square next to the king. {"\n"}- **En passant**: A special capture by a pawn that can occur if a
        pawn moves two squares forward from its starting position and lands beside an opponent's pawn. {"\n"}- **Pawn
        promotion**: If a pawn reaches the opposite side of the board, it can be promoted to any other piece, typically a
        queen.
      </Text>

      <Text style={styles.heading}>5. Tips for Beginners</Text>
      <Text style={styles.content}>
        - Control the center of the board with your pieces and pawns. {"\n"}- Try not to move the same piece multiple
        times in the opening. {"\n"}- Develop all your pieces before launching an attack. {"\n"}- Keep your king safe by
        castling early.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
    color: "#333333",
  },
});

export default LearnScreen;
