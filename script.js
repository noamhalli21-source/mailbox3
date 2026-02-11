function checkCode() {
  const code = document.getElementById("codeInput").value;
  const message = document.getElementById("message");

  const users = {
    "1234": "דייר א",
    "5678": "דייר ב",
    "9999": "דייר ג"
  };

  if (users[code]) {
    message.innerText = "התיבה נפתחה ✅ שלום " + users[code];
  } else {
    message.innerText = "קוד שגוי ❌";
  }
}
