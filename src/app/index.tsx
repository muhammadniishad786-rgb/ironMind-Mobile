import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      {/* Logo */}
      <Text style={styles.logo}>IRONMIND</Text>

      {/* Welcome */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcome}>
          Welcome back, Nishad 👋
        </Text>

        <Text style={styles.subtitle}>
          Ready for today's workout?
        </Text>
      </View>

      {/* Workout Card */}
      <View style={styles.workoutCard}>
        <Text style={styles.cardLabel}>TODAY'S WORKOUT</Text>

        <Text style={styles.workoutName}>
          Push Day
        </Text>

        <Text style={styles.workoutInfo}>
          5 Exercises • 45 Minutes
        </Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            START WORKOUT →
          </Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    padding: 24,
    paddingTop: 70,
  },

  logo: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 4,
  },

  welcomeSection: {
    marginTop: 50,
  },

  welcome: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "700",
  },

  subtitle: {
    color: "#a1a1aa",
    fontSize: 16,
    marginTop: 8,
  },

  workoutCard: {
    backgroundColor: "#18181b",
    borderRadius: 20,
    padding: 24,
    marginTop: 40,
  },

  cardLabel: {
    color: "#71717a",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.5,
  },

  workoutName: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "700",
    marginTop: 12,
  },

  workoutInfo: {
    color: "#a1a1aa",
    fontSize: 15,
    marginTop: 8,
  },

  button: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    paddingVertical: 16,
    marginTop: 24,
  },

  buttonText: {
    color: "#000000",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
});
