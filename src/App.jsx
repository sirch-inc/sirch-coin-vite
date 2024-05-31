import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@stripe/stripe-js";
import NavBar from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import SendCoin from "./components/SendCoin";
import MainPage from "./MainPage";
import CoinBalance from "./components/CoinBalance";
import DepositForm from "./components/DepositForm";
import Preferences from "./components/Preferences";
import TransferHistory from "./components/TransferHistory";
import Help from "./components/Help";
import Login from "./components/Users/Login";
import success from "./components/Stripe/success";
import Failure from "./components/Stripe/Failure";
import supabase from './Config/supabaseConfig'
import LoginSupabase from "./components/Users/LoginSupabase";
import LogoutSupabase from "./components/Users/LogoutSupabase"
import CoinFaucetDeposit from "./components/CoinFaucetDeposit";
import { AuthProvider } from "./components/Users/AuthContext";

export default function App() {

  console.log(supabase)


  return (
    
    <AuthProvider supabase={supabase} >
      <BrowserRouter>
        <NavBar supabase={supabase} />
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="login" Component={Login} />
          <Route path="/supabase-login" element={<LoginSupabase supabase={supabase}/>}/>
          <Route path="/supabase-logout" element={<LogoutSupabase supabase={supabase}/>}/>
          <Route path="coin/send" Component={SendCoin} />
          <Route path="coin/balance" Component={CoinBalance} />
          <Route path="/coin-faucet" Component={CoinFaucetDeposit}/>
          <Route path="/checkout" Component={DepositForm} />
          <Route path="/preferences" Component={Preferences} />
          <Route path="/transferhistory" Component={TransferHistory} />
          <Route path="/help" Component={Help} />
          <Route path="/Stripe/success" Component={success} />
          <Route path="/Stripe/Failure" Component={Failure} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
