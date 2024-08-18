import styles from './Card.module.css';

import { StoredData } from '../../types/StoredData';

const Card = ({ formData, status }: { formData: StoredData; status: string }) => {
  console.log(status);
  const cardStyle = status === 'active' ? styles.active : '';
  return (
    <div className={styles.card}>
      <div className={`${styles.wrapper} ${cardStyle}`}>
        <img src={formData.image} height="200" />
        <div className={styles.name}>{formData.name}</div>
        <div className={styles.age}>
          Age: {formData.age}, <span title="gender">{formData.gender}</span>
        </div>
        <div className={styles.email}>Email: {formData.email}</div>
        <div>Password: {formData.password}</div>
        <div>Country: {formData.country}</div>
      </div>
    </div>
  );
};

export default Card;
