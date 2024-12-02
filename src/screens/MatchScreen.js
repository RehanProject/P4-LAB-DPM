import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import ScoreButton from '../components/ScoreButton';

const MatchScreen = () => {
  // Skor awal
  const [scoreA, setScoreA] = useState(0); // Real Madrid
  const [scoreB, setScoreB] = useState(0); // Barcelona

  const incrementScoreA = () => {
    if (scoreA < 10) {
      setScoreA(scoreA + 1);
    }
  };

  const decrementScoreA = () => {
    if (scoreA > 0) {
      setScoreA(scoreA - 1);
    }
  };

  const incrementScoreB = () => {
    if (scoreB < 10) {
      setScoreB(scoreB + 1);
    }
  };

  const decrementScoreB = () => {
    if (scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  // Menentukan pemenang
  const winnerMessage = () => {
    if (scoreA === 10) return "Real Madrid Menang!";
    if (scoreB === 10) return "Barcelona Menang!";
    return "";
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <SafeAreaView style={styles.overlay}>
          <Text style={styles.title}>Pertandingan Futsal</Text>
          <Text style={styles.subTitle}>Real Madrid vs Barcelona</Text>

          <View style={styles.scoreContainer}>
            <Text style={styles.score}>Real Madrid: {scoreA}</Text>
            <Text style={styles.score}>Barcelona: {scoreB}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <ScoreButton title="+" onPress={incrementScoreA} backgroundColor="#0033A0" />
            <ScoreButton title="-" onPress={decrementScoreA} backgroundColor="#0033A0" />
          </View>

          <View style={styles.buttonContainer}>
            <ScoreButton title="+" onPress={incrementScoreB} backgroundColor="#A50021" />
            <ScoreButton title="-" onPress={decrementScoreB} backgroundColor="#A50021" />
          </View>

          {/* Pesan pemenang */}
          <Text style={styles.winnerText}>{winnerMessage()}</Text>

          {/* Tombol Reset */}
          <ScoreButton title="Reset" onPress={resetScores} backgroundColor="#32CD32" />
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    backgroundColor: '#0033A0', // Warna biru Real Madrid
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent overlay
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '90%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  scoreContainer: {
    marginBottom: 30,
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  winnerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700', // Warna emas untuk pemenang
    marginTop: 20,
  },
});

export default MatchScreen;
