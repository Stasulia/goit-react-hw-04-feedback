import React from 'react';
import css from './Notification.module.css';

export const Notification = ({ message }) => (
  <p className={css.notificationTitle}>{message}</p>
);
