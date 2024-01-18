"use client";

import { Button, Paper, TextField } from "@mui/material";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const Login = () => {
  const supabase = createClient(
    "https://otecmligjvehwyfagmgl.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90ZWNtbGlnanZlaHd5ZmFnbWdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMDUwMTksImV4cCI6MjAyMDg4MTAxOX0.2iH6zP5xtUAHpNlHKCrjaW5cA1XQossZTMpMQK_xrfg");

  const signUp = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Paper className="w-2/6 mx-auto p-12 absolute top-1/2 left-1/2">
        <form method="POST">
          <TextField
            className="flex w-3/4 mx-auto"
            id="email"
            name="email"
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="flex w-3/4 mx-auto mt-4"
            id="password"
            name="password"
            label="Password"
            variant="standard"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex w-3/4 mx-auto mt-8">
            <Button
              className="ml-auto"
              variant="contained"
              type="submit"
              onClick={(e) => signUp(e)}
            >
              Sign Up
            </Button>
          </div>
        </form>
      </Paper>
    </>
  );
};

export { Login, Login as default };