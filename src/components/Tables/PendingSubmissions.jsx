import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from '@syncfusion/ej2-react-grids';

import { pendingSubmissionsRows } from '../../utils/data';
import Header from '../Header';

const PendingSubmissions = () => {
  console.log(pendingSubmissionsRows);
  return (
    // <div className=" dark:bg-secondary-dark-bg bg-white  rounded-lg my-6 ">
    //   <h4>Pending Submssion</h4>

    //   <GridComponent dataSource={pendingSubmissionsRows} height="350">
    //     <ColumnsDirective>
    //       <ColumnDirective
    //         field="title"
    //         headerText="Title"
    //         width={150}
    //       ></ColumnDirective>
    //       <ColumnDirective field="type" headerText="Type" width={150} />
    //       <ColumnDirective field="due_date" headerText="Due Date" width={150} />
    //     </ColumnsDirective>
    //   </GridComponent>
    // </div>

    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl wi">
      <div className="flex items-end justify-between mb-8">
        <Header category="Page" title="Pending Submissions" />
      </div>

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
