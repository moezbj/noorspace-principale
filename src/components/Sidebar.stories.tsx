import React from 'react';
import Sidebar from './Sidebar';

export default {
  title: 'Layout/Sidebar',
  component: Sidebar
};

export const Open = () => <Sidebar open={true} onToggle={() => {}} />;
export const Closed = () => <Sidebar open={false} onToggle={() => {}} />;