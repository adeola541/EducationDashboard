import React, { useState } from 'react';
import { Radio, Space, Table } from 'antd';
import { Link } from '@mui/material';


const bottomOptions = [
 
 
];
const columns = [
  {
    title: 'Course Title',
    dataIndex: 'course',
    key: 'course',
    render: (text) => <Link style={{
      textDecoration: 'none',
      
    }}>
      {text}
      </Link>,
  },
  {
    title: 'Lesson Completed',
    dataIndex: 'lesson',
    key: 'lesson',
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
  },
  {
    title: 'Intructor',
    key: 'intructor',
    dataIndex: 'intructor',
    
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Link style={{
      textDecoration: 'none',
      
    }}>Review {record.name}</Link>
        <Link style={{
      textDecoration: 'none',
      
    }}>Delete</Link>
      </Space>
    ),
  },
];
// const fabs = [
//   {
//     sx: fabStyle,
//     icon: ,
//     label: '',
//   },
//   {
//     sx: fabStyle,
//     icon:,
//     label: '',
//   },
//   {
//     sx: fabStyle,
//     icon: ,
//     label: '',
//   },
// ];

const data = [
  {
    key: '1',
    course: 'UI/UX Design Certificate',
    lesson: '18/40(48%)',
    duration: '24h 13m 28s',
    intructor: 'Mckinney',
  },
  {
    key: '2',
    course: 'SEO Experts from Zero',
    lesson: '21/23(97%)',
    duration: '10h 0m 0s',
    intructor: 'Sloan',
  },
  {
    key: '3',
    course: 'Projext Management',
    lesson: '7/35(20%)',
    duration: '17h 59m 0s',
    intructor: 'Johnson',
    
    
  },
];
const App = () => {
  const [bottom, setBottom] = useState('bottomRight');
  return (
    <div>
      
      <Radio.Group
        style={{
          marginBottom: 10,          
        }}
        options={bottomOptions}
        value={bottom}
        onChange={(e) => {
          setBottom(e.target.value);
        }}
      />

      <Table
        columns={columns}
        pagination={{
          position: [bottom],
        }}
        dataSource={data}
      />
      {/* {fabs.map((fabs, index) =>(

      )
      
      )} */}
    </div>
  );
};
export default App;