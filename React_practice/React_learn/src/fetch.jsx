import React, { useState, useEffect } from "react";
import axios from "axios";

const CounterApp = () => {
  const [count, setCount] = useState(1); // Start with user 1

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user whenever count changes
  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch user");
        setUser(null);
        setLoading(false);
      });
  }, [count]);

  const increment = () => {
    if (count < 10) setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🧮 Counter App with User Info</h2>
      <h3>Count: {count}</h3>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>

      <hr />

      <h3>👤 User Info</h3>
      {loading && <p>⏳ Loading user data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div style={{ textAlign: "left", lineHeight: "1.6" }}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>

          <h4>📍 Address</h4>
          <p>{user.address.street}, {user.address.city}, {user.address.zipcode}</p>

          <h4>🏢 Company</h4>
          <p><strong>Name:</strong> {user.company.name}</p>
          <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
        </div>
      )}
    </div>
  );
};

export default CounterApp;
