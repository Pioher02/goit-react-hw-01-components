import propTypes from 'prop-types';
import './Statistics.css';

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => (
          <li
            className="item"
            key={stat.id}
            style={{ backgroundColor: colorRGB(), border: 0 }}
          >
            <span className="labelstat">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function generarNumero(numero) {
  return (Math.random() * numero).toFixed(0);
}

function colorRGB() {
  var coolor =
    '(' +
    generarNumero(255) +
    ',' +
    generarNumero(255) +
    ',' +
    generarNumero(255) +
    ')';
  return 'rgb' + coolor;
}

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.array.isRequired,
};

export default Statistics;
