const filters = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('.path-card');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const selected = button.dataset.filter;
    cards.forEach((card) => {
      card.classList.toggle('hidden', selected !== 'all' && !card.dataset.category.includes(selected));
    });
  });
});

const goal = document.querySelector('#goal');
const rate = document.querySelector('#rate');
const money = new Intl.NumberFormat('cs-CZ');

function updateCalculator() {
  const monthlyHours = Math.ceil(Number(goal.value) / Number(rate.value));
  document.querySelector('#goalOutput').textContent = `${money.format(goal.value)} Kč`;
  document.querySelector('#rateOutput').textContent = `${money.format(rate.value)} Kč`;
  document.querySelector('#hours').textContent = `${monthlyHours} hodin`;
  document.querySelector('#weekly').textContent = `tedy ${(monthlyHours / 4).toLocaleString('cs-CZ', { maximumFractionDigits: 1 })} hodiny týdně`;
}

goal.addEventListener('input', updateCalculator);
rate.addEventListener('input', updateCalculator);
