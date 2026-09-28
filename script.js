const filterButtons = document.querySelectorAll('.filterbar button');
const productRows = document.querySelectorAll('.table-row[data-category]');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    const selected = button.dataset.filter;
    productRows.forEach((row) => {
      const isVisible = selected === 'all' || row.dataset.category.split(' ').includes(selected);
      row.classList.toggle('hidden', !isVisible);
    });
  });
});
