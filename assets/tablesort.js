document$.subscribe(function() {
  var tables = document.querySelectorAll("article .sortable table:not([class])")
  tables.forEach(function(table) {
    const instance = new Tablesort(table);
    document.querySelectorAll("thead th")[2].click()
    document.querySelectorAll("thead th")[2].click()
  })
})

document.querySelectorAll('.md-ellipsis').forEach(span => {
  const match = span.textContent.trim().match(/^([\d.]+)\s+(.*)$/);
  if (match) {
    span.innerHTML = `<span>${match[1]}</span><span>${match[2]}</span>`;
  }
});