(function() {
  const dscc = window.dscc;

  dscc.subscribeToData((data) => {
    const container = document.getElementById("app");
    const date = data.tables.DEFAULT[0].date_month;
    container.innerHTML = `<div class="month-card">${date}</div>`;
  });
})();
