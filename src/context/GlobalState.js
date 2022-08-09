import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  transactions: [
    {
      id: 1,
      text: `Salary`,
      amount: 15000,
      time: `July 26th 2022, 12:00:17 pm`,
    },
    {
      id: 2,
      text: `electricity-bill`,
      amount: -1200,
      time: `July 25th 2022, 11:15:23 pm`,
    },
    {
      id: 3,
      text: `COJ utilities`,
      amount: -400,
      time: `July 21th 2022, 09:31:35 pm`,
    },
    {
      id: 4,
      text: `monthly-bonus`,
      amount: 3900,
      time: `June 15th 2022, 10:22:03 am`,
    },
    {
      id: 5,
      text: `weekend outing`,
      amount: -2500,
      time: `May 19th 2022, 11:11:55 pm`,
    },
    {
      id: 6,
      text: `crypto-income`,
      amount: 4800,
      time: `May 10th 2021, 06:25:24 pm`,
    },
    {
      id: 7,
      text: `tax-paid`,
      amount: -3500,
      time: `April 21th 2022, 06:05:08 pm`,
    },
  ],
};

// Creating Context
export const GlobalContext = createContext(initialState);

// Creating Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransactions(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransactions(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
