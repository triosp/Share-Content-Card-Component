// write your JavaScript here
let btn = document.querySelector("#btn");
let url = document.querySelector("#url");
let icon = document.querySelectorAll(".icon");
let link = [
  "https://twitter.com",
  "https://linkedin.com",
  "https://facebook.com",
  "https://instagram.com",
  "https://pinterest.com",
  "https://telegram.org",
];

// Click icon
icon.forEach((items, index) => {
  items.addEventListener("click", function () {
    url.value = link[index];
    window.open(link[index], "_blank");
  });
});

// click Copy link
btn.addEventListener("click", (e) => {
  if (!url.value == "") {
    navigator.clipboard.writeText(url.value);
    btn.textContent = "Copied!";
    setTimeout(function () {
      btn.textContent = "Copy!";
    }, 1000);
  } else {
    btn.textContent = "Failed";
    setTimeout(function () {
      btn.textContent = "Copy";
    }, 1000);
  }
});
