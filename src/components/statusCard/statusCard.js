import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { GlobalContext } from "../../context/GlobalState";

const StatusCard = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <View>
      <View style={styles.cardContainer}>
        <Card title="Income" containerStyle={styles.card1}>
          <Text style={styles.text}>INCOME</Text>
          <Text style={styles.textIncome}>R{income}</Text>
        </Card>
        <Card title="Expense" containerStyle={styles.card2}>
          <Text style={styles.text}>EXPENSES</Text>
          <Text style={styles.textExpense}>R{expense}</Text>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row",
  },
  card1: {
    height: 120,
    width: 150,
    justifyContent: "center",
    borderRadius: 6,
    left: 8,
    backgroundColor: "#05445E",
  },
  card2: {
    height: 120,
    width: 150,
    justifyContent: "center",
    borderRadius: 6,
    right: 8,
    backgroundColor: "#05445E",
  },
  text: {
    alignSelf: "center",
    fontSize: 16,
    color: "#fff",
  },
  textIncome: {
    fontSize: 24,
    color: "#19D95E",
    alignSelf: "center",
    fontWeight: "600",
  },
  textExpense: {
    fontSize: 24,
    color: "#E81A30",
    alignSelf: "center",
    fontWeight: "600",
  },
});

export default StatusCard;
