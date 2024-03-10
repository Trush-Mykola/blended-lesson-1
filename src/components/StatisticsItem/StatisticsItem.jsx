import style from './Statistics.module.css';
export const StatisticsItem = ({ statsData: { total, title }, icon: Icon }) => {
  return (
    <>
      <Icon size={30} />
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};
