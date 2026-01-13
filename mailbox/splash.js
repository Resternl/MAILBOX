window.addEventListener("load", () => {
  setTimeout(() => {
    const splash = document.getElementById("splash");

    if (!splash) {
      console.error("ID splash tidak ditemukan");
      return;
    }

    splash.classList.add("hide");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 800);

  }, 2500);
});
