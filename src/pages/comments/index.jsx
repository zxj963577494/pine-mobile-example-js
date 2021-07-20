import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCurrentAsync } from '@/models/topic';

import styles from './index.module.less';

export default function TopicPage(props) {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState({});

  useEffect(() => {
    const {
      match: {
        params: { id },
      },
    } = props;
    const fn = async () => {
      const response = await dispatch(fetchCurrentAsync(id));
      setCurrent(response);
    };
    fn();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>{current.title}</div>
        <div className={styles.body}>{current.body}</div>
      </div>
    </div>
  );
}
