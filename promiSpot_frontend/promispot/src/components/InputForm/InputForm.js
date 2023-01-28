import React from "react";
import "./InputForm.scss";

export default function InputForm() {
  return (
    <div class="container">
      <form>
        <div class="group">
          <input type="text" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Username</label>
        </div>
      </form>
    </div>
  );
}
