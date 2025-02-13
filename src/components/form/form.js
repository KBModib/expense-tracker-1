import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { GlobalContext } from "../../context/GlobalState";
import moment from "moment";

const FormInput = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("0");

  const { addTransactions } = useContext(GlobalContext);

  const onSubmit = () => {
    let checkAmount = String(amount);

    if (text.length === 0 || amount === 0 || typeof amount !== "number") {
      alert(`please fill the fields!`);
    } else if (checkAmount[0] == "-" || checkAmount == "NaN") {
      alert("Special characters are not allowed 1");
    } else {
      //creating new transaction
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
      };

      addTransactions(newTransaction);

      // updating field / clearing after form submission
      setText("");
      setAmount("0");
    }
  };

  const onWithdraw = () => {
    let checkAmount = String(amount);
    if (text.length === 0 || amount === 0 || typeof amount !== "number") {
      alert(`please fill the fields!`);
    } else if (checkAmount[0] == "-" || checkAmount == "NaN") {
      alert("special characters are not allowed 2");
    } else {
      //creating new transaction
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +-Math.abs(amount),
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
      };

      addTransactions(newTransaction);

      // updating field / clearing after form submission
      setText("");
      setAmount("0");
    }
  };

  return (
    <View>
      <Input
        label={"TRANSACTION NAME"}
        labelStyle={{ color: "#000" }}
        placeholder="Enter transaction name"
        value={text}
        onChangeText={(text) => setText(text)}
        leftIcon={
          <Icon
            name="text"
            type="entypo"
            size={16}
            color="#05445E"
          />
        }
      />
      <Input
        label="TRANSACTION AMOUNT"
        labelStyle={{ color: "#000" }}
        keyboardType="numeric"
        placeholder="R"
        value={amount}
        onChangeText={(text) => setAmount(Number(text))}
      />
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <Button
          buttonStyle={{
            backgroundColor: "#F51720",
            marginTop: 10,
            width: 150,
            marginRight: 5,
            borderRadius:30
          }}
          title="-TAKING AN L"
          onPress={() => onWithdraw()}
        />
        <Button
          buttonStyle={{
            backgroundColor: "#81B622",
            marginTop: 10,
            width: 150,
            marginLeft: 5,
            borderRadius:30
          }}
          title="+TO MORE Ws"
          onPress={() => onSubmit()}
        />
        
      </View>
    </View>
  );
};

export default FormInput;
