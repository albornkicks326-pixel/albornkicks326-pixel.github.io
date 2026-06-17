document.addEventListener("DOMContentLoaded", () => {
  const name = document.querySelector(".hero h1")?.textContent?.trim();

  if (name) {
    document.title = `${name} | 个人主页`;
  }
});
