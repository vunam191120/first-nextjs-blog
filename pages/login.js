import axios from "axios";
import Head from "next/head";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
      axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });
    }

  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>

      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" onChange={({target}) => setEmail(target.value)} />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={({target}) => setPassword(target.value)}  />

        <button type="submit">Login</button>
      </form>
    </>
  );
}
