import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <h3 className={style.title}>{title}</h3>
      <ul className={style.list}>
        {stats.map(statItem => (
          <li className={style.item} key={statItem.id}>
            <StatisticsItem statsData={statItem} icon={icons[statItem.id]} />
          </li>
        ))}
        {}
      </ul>
    </>
  );
};
const icons = {
  1: FaRegThumbsUp,
  2: MdPeople,
  3: GiTreeDoor,
  4: MdOutlineProductionQuantityLimits,
};
