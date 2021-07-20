import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAsync } from '@/models/topic';

import styles from './index.module.less';

export default function TopicPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const topic = useSelector((state) => state.topic);

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  const handleGo = (id) => {
    history.push(`/comments/${id}`);
  };

  return (
    <div className={styles.container}>
      {topic.data.list.map((x) => (
        <div className={styles.card} key={x.key} onClick={() => handleGo(x.id)}>
          <div className={styles.title}>{x.title}</div>
          <div className={styles.body}>{x.body}</div>
        </div>
      ))}
    </div>
  );
}
