"use client";
import { useState } from "react";

export default function Counter() {
  var [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>
      {/* حيث أن الـ prev ضمن الـ setState تدل على القيمة السابقة */}
        Clicked {count} Times
      </button>
    </>
  );
}
