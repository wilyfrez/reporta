import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from '@syncfusion/ej2-react-grids';

import { dataSource, pendingSubmissionsRows } from '../../utils/data';
import Header from '../Header';

const PendingSubmissions = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl wi">
      <div className="flex items-end justify-between mb-8">
        <Header category="Page" title="Pending Submissions" />
      </div>

      <div className="App">
        <GridComponent dataSource={dataSource}>
          <ColumnsDirective>
            <ColumnDirective
              field="OrderID"
              headerText="Order ID"
              width={100}
            ></ColumnDirective>

            <ColumnDirective
              field="CustomerID"
              headerText="Customer ID"
              width={100}
            ></ColumnDirective>

            <ColumnDirective
              field="EmployeeID"
              headerText="Employee ID"
              width={100}
            ></ColumnDirective>

            <ColumnDirective
              field="OrderDate"
              headerText="Order Date"
              width={100}
            ></ColumnDirective>

            <ColumnDirective
              field="ShipName"
              headerText="Ship Name"
              width={150}
            ></ColumnDirective>

            <ColumnDirective
              field="ShipAddress"
              headerText="Ship Address "
              width={150}
            ></ColumnDirective>

            <ColumnDirective
              field="ShipRegion"
              headerText="Ship Region"
              width={50}
            ></ColumnDirective>

            <ColumnDirective
              field="ShipPostalCode"
              headerText="Shi pPostal Code"
              width={100}
            ></ColumnDirective>
            <ColumnDirective
              field="ShipCountry"
              headerText="Ship Country"
              width={50}
            ></ColumnDirective>
            <ColumnDirective
              field="Freight"
              headerText="Freight"
              width={50}
            ></ColumnDirective>
            <ColumnDirective
              field="Verified"
              headerText="Verified"
              width={50}
            ></ColumnDirective>
          </ColumnsDirective>
        </GridComponent>
      </div>
    </div>
  );
};

export default PendingSubmissions;
