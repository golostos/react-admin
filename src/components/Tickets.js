import { DataGrid } from '@mui/x-data-grid';

import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';


/** @type {import('@mui/x-data-grid/models/colDef/gridColDef').GridColDef[]} */
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 130,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 110,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 110,
    editable: true,
  },
  {
    field: 'task',
    headerName: 'Task',
    width: 180,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Date',
    type: 'date',
    width: 180,
    editable: true,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

/** @type {import('@mui/x-data-grid/models/props/DataGridProps').DataGridProps} */
const rows = [
  { id: 1, name: 'Snow Jon', phone: '9999999', email: 'test1@example.com', task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nemo.', date: randomCreatedDate() },
  { id: 2, name: 'Lannister Cersei', phone: '9999999', email: 'test2@example.com', task: 'Officiis eos eaque perspiciatis sit reiciendis, nihil excepturi tempora dicta?', date: randomCreatedDate() },
  { id: 3, name: 'Lannister Jaime', phone: '9999999', email: 'test3@example.com', task: 'Maiores quaerat nisi aliquid quae ut optio iusto ducimus nihil.', date: new Date('Wed Dec 21 2021 14:31:16 GMT+0300') },
];

export default function Tickets() {
  console.log(randomCreatedDate());
  return (
    <div style={{ height: 400, width: '100%' }}>
      
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}