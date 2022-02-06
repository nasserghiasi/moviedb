import styles from './styles.module.scss';

const SVG_SIZE = 50;
const SVG_CENTER = SVG_SIZE / 2;

function Spinner() {
  return (
    <svg
      style={{ width: SVG_SIZE, height: SVG_SIZE }}
      viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
      className={styles.spinner}>
      <circle
        className={styles.circle}
        cx={SVG_CENTER}
        cy={SVG_CENTER}
        r={SVG_CENTER - 4}
        fill="none"
        strokeWidth={4}
      />
    </svg>
  );
}

export default Spinner;
