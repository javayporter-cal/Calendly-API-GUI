import React from 'react';

interface ResponseObject {
  [key: string]: any;
}

interface Props {
  data: ResponseObject;
}

const DataTable: React.FC<Props> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data to display.</p>;
  }

  const headers = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header}>{item[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;