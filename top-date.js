function updateDateTime() {
  const now = new Date();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const day = dayNames[now.getDay()];
  const month = monthNames[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 => 12

  const formattedDate = `${day}, ${month} ${date}, ${year}, ${hours}:${minutes} ${ampm}`;
  const text = `${formattedDate}. You are in Chris Cameron’s website, enjoy!`;

  document.querySelector(".top-date-type").textContent = text;
}

updateDateTime();
setInterval(updateDateTime, 60000); // Optional: update every minute