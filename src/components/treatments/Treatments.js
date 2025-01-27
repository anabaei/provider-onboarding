import React from 'react';
import './Treatments.css';
import { Divider, Table } from 'antd';

const Treatments = ({ selectedService, onBack, onNext }) => {
    // const treatmentsList = [
    //     { name: 'Treatment 1', price: '$100', duration: '1 hour', specialist: 'PIC' },
    //     { name: 'Treatment 2', price: '$450', duration: '30 minutes', specialist: 'GP' },
    //     { name: 'Treatment 3', price: '$300', duration: '1 hour', specialist: 'PIC' },
    //     { name: 'Treatment 4', price: '$50', duration: '30 minutes', specialist: 'GP' }
    // ];

    const columns = [
        {
          title: 'Treatment',
          dataIndex: 'treatment',
          key: 'treatment',
        },
        {
          title: 'Price (Optional)',
          dataIndex: 'price',
          key: 'price',
          render: (price) => price ? `$${price}` : 'N/A',
        },
        {
          title: 'Duration',
          dataIndex: 'duration',
          key: 'duration',
        },
        {
          title: 'Specialist',
          dataIndex: 'specialist',
          key: 'specialist',
        },
      ];
      
      const data = [
        {
          key: '1',
          treatment: 'Initial Treatment',
          price: 50,
          duration: '30 mins',
          specialist: 'Smith',
        },
        {
          key: '2',
          treatment: 'Followup Treatment',
          price: null,
          duration: '1 hour',
          specialist: 'Dr. Johnson',
        },
        {
          key: '3',
          treatment: 'Future Treatment',
          price: 75,
          duration: '45 mins',
          specialist: 'Tom Lee',
        },
      ];


    return (
        <div className="treatments-container">
            <h1 style={{marginBottom: '3rem'}}>ONBOARDING</h1>
            <h3>STEP: 4</h3>
            <div style={{textAlign: 'left'}}>{selectedService} Treatments</div>
            <Divider style={{ borderColor: 'black', borderWidth: '2px' }} />
            <div className="treatments-table-container">
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered
                style={{ borderRadius: '8px', overflow: 'hidden' }}
                rowClassName="custom-row"
                />
            </div>
            <div className="broadcumb" style={{marginTop: '4rem'}}>
                <div className="default-button" onClick={onBack}>Back</div>
                <div className="default-button" onClick={onNext}>Next</div>
                <div></div>
            </div>
        </div>
    );
};

export default Treatments;
