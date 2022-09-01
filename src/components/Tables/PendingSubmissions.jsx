import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from '@syncfusion/ej2-react-grids';

import { pendingSubmissionsRows } from '../../utils/data';

const PendingSubmissions = () => {
  console.log(pendingSubmissionsRows);
  return (
    <div className=" dark:bg-secondary-dark-bg bg-white  rounded-lg my-6 ">
      <h4>Pending Submssion</h4>

      <GridComponent dataSource={pendingSubmissionsRows} height="350">
        <ColumnsDirective>
          <ColumnDirective
            field="title"
            headerText="Title"
            width={150}
          ></ColumnDirective>
          <ColumnDirective field="type" headerText="Type" width={150} />
          <ColumnDirective field="due_date" headerText="Due Date" width={150} />
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};

export default PendingSubmissions;
