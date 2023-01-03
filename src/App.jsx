import React from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Deposit from "./components/Deposit";
import Withdrawal from "./components/Withdrawal";
import Transaction from "./components/Transaction";
import Creditcard from "./components/CreditCard";
import Home from "./components/Home";
import Footer from "./components/Footer";
import useFetch from "./useFetch";

export default function App() {
  const { data, loading, error } = useFetch(
    "http://127.0.0.1:8000/api/transactions/vfs_list/"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deposit" element={<Deposit api={data} />} />
        <Route path="/withdrawal" element={<Withdrawal api={data} />} />
        <Route path="/transaction" element={<Transaction api={data} />} />
        <Route path="/creditcard" element={<Creditcard />} />
      </Routes>
      <Footer />
    </>
  );
}
