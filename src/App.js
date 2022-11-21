import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timeId = setInterval(refreshClock, 1000);
  }, [])
  return (
    <div>
      <span>
        {date.toLocaleTimeString()}
      </span>
    </div>
  );
}
