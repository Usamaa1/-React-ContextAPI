# 🌐 React Global State with Context API and useReducer

This project demonstrates how to use the **Context API** with **useReducer** to manage global state in a React application in a clean and scalable way.

---

## 📂 Files Overview

### 1. `context.js` — Global Context Setup

```js
import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const GlobalContext = createContext("Initial Value");

let data = {
  user: {},
  darkTheme: true
};

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
```

### 🔍 Explanation:

* `createContext()` creates a new global context.
* `useReducer()` handles complex state updates using `reducer` logic.
* `ContextProvider` wraps the app and provides access to state and dispatch everywhere.

---

### 2. `reducer.js` — Reducer Logic

```js
export const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      const name = action.payload?.userName || "";
      const wordCount = name.trim().split(/\s+/).length;

      if (wordCount > 5) {
        console.warn("Name has more than 5 words. Not updating user.");
        return state;
      }

      return { ...state, user: action.payload };
    }

    case "USER_LOGOUT": {
      return { ...state, user: null };
    }

    case "TOGGLE_THEME": {
      return { ...state, darkTheme: !state.darkTheme };
    }

    default: {
      return state;
    }
  }
};
```

---

### 3. `ComponentOne.jsx` — Consuming the Global Context

```js
import { GlobalContext } from '../context/Context';
import { useContext } from "react";

function ComponentOne() {
  const { state, dispatch } = useContext(GlobalContext);

  function logout() {
    dispatch({ type: "USER_LOGOUT" });
  }

  function login() {
    dispatch({
      type: "USER_LOGIN",
      payload: {
        userName: "Malik Ahmed Ali Khan Junior", // 5 words allowed
        email: "malik@sysborg.com",
        subject: "Computer Science"
      }
    });
  }

  function toggleTheme() {
    dispatch({ type: "TOGGLE_THEME" });
  }

  return (
    <>
      <h1>I am component One</h1>
      <p>
        username: {state?.user?.userName} <br />
        email: {state?.user?.email} <br />
        subject: {state?.user?.subject}
      </p>
      <button onClick={logout}>Logout</button>
      <button onClick={login}>Login Malik</button>
      <h2>{state.darkTheme ? "Dark Theme Activated" : "Light Theme Activated"}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
}

export default ComponentOne;
```

---

### 4. `App.jsx` — Wrapping Your App with ContextProvider

```js
import React from 'react';
import ContextProvider from './context/context';
import ComponentOne from './components/ComponentOne';

function App() {
  return (
    <ContextProvider>
      <ComponentOne />
    </ContextProvider>
  );
}

export default App;
```

> ⚠️ **Important:** Always wrap your component tree with `ContextProvider` so that all children can access the global state and dispatcher.

---

## 🧠 Concepts Used

| Term               | Description                                                       |
| ------------------ | ----------------------------------------------------------------- |
| `useReducer`       | Manages complex state logic (like Redux) within React.            |
| `dispatch()`       | Sends an action (with optional data) to the reducer.              |
| `action.type`      | A string that tells the reducer what to do (like `"USER_LOGIN"`). |
| `action.payload`   | Optional data sent with the action (like user info).              |
| `...state`         | Copies the current state to preserve unchanged properties.        |
| `Context.Provider` | Makes state and dispatcher accessible to all children.            |

---

## ✅ Bonus: Limiting Input

The reducer checks that the `userName` does **not exceed 5 words**. If it does, the user won't be updated and a warning is logged to the console.

---

## 🚀 Usage

1. Place the `<ContextProvider>` in your `App.jsx` or `main.jsx`.
2. Use `useContext(GlobalContext)` inside any component to get or update global state.

---

## 💡 When to Use This

Use this setup when:

* You want simple global state without adding Redux.
* You want predictable, centralized state logic.
* You need to manage more than one state value clean
