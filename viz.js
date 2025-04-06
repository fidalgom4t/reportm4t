// Called once when the chart is rendered
looker.plugins.visualizations.add({
  id: "month_card",
  label: "Custom Date Card",
  create: function (element) {
    element.innerHTML = "<div id='month-card'></div>";
  },
  updateAsync: function (data, element, config, queryResponse, details, done) {
    const container = element.querySelector("#month-card");
    const month = data[0].dimensions[0].value;
    container.innerHTML = `<div style="font-size:28px; color:#0097a7;">${month}</div>`;
    done();
  }
});
