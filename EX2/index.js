const numberA = document.getElementById('numeroA');
const numberB = document.getElementById('numeroB');
const operation = document.getElementById('operacao');
const result = document.getElementById('resultado');
const btnCalculate = document.getElementById('calcular');
const btnClean = document.getElementById('limpar');

const parseNumber = input => { return Number(input.value.trim()) };

const isNumberIsValid = n => { return Number.isFinite(n) };

const  formatNumber = n => { return Number.isInteger(n) ? String(n) : n.toString() };

function calculate() {
  const a = parseNumber(numberA);
  const b = parseNumber(numberB);
  const op = operation.value;

  if (!a || !b || !isNumberIsValid(a) || !isNumberIsValid(b)) {
    result.innerHTML = '<span class="erro">Entrada inválida. Informe dois números.</span>';
    return;
  }

  const results = [];

  const soma = a + b;
  const sub = a - b;
  const mul = a * b;

  const div = (b === 0) ? 'Não é possível dividir por zero' : formatNumber(a / b);
  const mod = (b === 0) ? 'Indefinido (módulo por zero)' : formatNumber(a % b);

  switch (op) {
    case 'soma':
      results.push(`Soma: ${formatNumber(a)} + ${formatNumber(b)} = ${formatNumber(soma)}`);
      break;
    case 'sub':
      results.push(`Subtração: ${formatNumber(a)} - ${formatNumber(b)} = ${formatNumber(sub)}`);
      break;
    case 'mul':
      results.push(`Multiplicação: ${formatNumber(a)} × ${formatNumber(b)} = ${formatNumber(mul)}`);
      break;
    case 'div':
      results.push(`Divisão: ${formatNumber(a)} ÷ ${formatNumber(b)} = ${div}`);
      break;
    case 'mod':
      results.push(`Resto: ${formatNumber(a)} % ${formatNumber(b)} = ${mod}`);
      break;
    case 'todas':
    default:
      results.push(
        `Soma: ${formatNumber(a)} + ${formatNumber(b)} = ${formatNumber(soma)}`,
        `Subtração: ${formatNumber(a)} - ${formatNumber(b)} = ${formatNumber(sub)}`,
        `Multiplicação: ${formatNumber(a)} × ${formatNumber(b)} = ${formatNumber(mul)}`,
        `Divisão: ${formatNumber(a)} ÷ ${formatNumber(b)} = ${div}`,
        `Resto: ${formatNumber(a)} % ${formatNumber(b)} = ${mod}`
      );
      break;
  }

  result.textContent = results.join('\n');
}

btnCalculate.addEventListener('click', (e) => {
  e.preventDefault();
  calculate();
});

btnClean.addEventListener('click', () => {
  numberA.value = '';
  numberB.value = '';
  operation.value = 'todas';
  result.textContent = 'Preencha os números e selecione a operação.';
  numberA.focus();
});

[numberA, numberB].forEach(inp => {
  inp.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') calculate();
  });
});