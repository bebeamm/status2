function checkStatus() {
  const queueId = document.getElementById("queueInput").value.trim();
  const result = document.getElementById("statusResult");

  if (!queueId) {
    result.textContent = "กรุณากรอกรหัสคิว";
    return;
  }

  const scriptURL = "https://script.google.com/macros/s/AKfycbz_JuB2FApZXzq4YlBb2YcxiOMYIWoV0zYxXoy-m4d4JLgLWlG3vKMSAnwACyJdmCujEA/exec";

  fetch(`${scriptURL}?queue=${encodeURIComponent(queueId)}`)
    .then(response => response.text())
    .then(data => {
      result.textContent = data;
    })
    .catch(error => {
      console.error("Error:", error);
      result.textContent = "เกิดข้อผิดพลาดในการเชื่อมต่อ";
    });
}