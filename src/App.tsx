import React, { useEffect, useState } from "react"
import "./App.css"
import { Table } from "antd"
import Chart from "react-apexcharts"
import { get } from "./api/axios"
import type { ColumnsType, TableProps } from "antd/es/table"

interface DataType {
  key: React.Key
  avgExcutionTime: number
  segmentId: string
  segmentName: string
}

// const columns: ColumnsType<DataType> = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     width: "30%"
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     sorter: (a, b) => a.age - b.age
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     filters: [
//       {
//         text: "London",
//         value: "London"
//       },
//       {
//         text: "New York",
//         value: "New York"
//       }
//     ],
//     onFilter: (value: any, record) => record.address.startsWith(value),
//     filterSearch: true,
//     width: "40%"
//   }
// ]

// const data: DataType[] = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park"
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park"
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sidney No. 1 Lake Park"
//   },
//   {
//     key: "4",
//     name: "Jim Red",
//     age: 32,
//     address: "London No. 2 Lake Park"
//   }
// ]

// const onChange: TableProps<DataType>["onChange"] = (
//   pagination,
//   filters,
//   sorter,
//   extra
// ) => {
//   console.log("params", pagination, filters, sorter, extra)
// }

// const App: React.FC = () => (
//   <Table columns={columns} dataSource={data} onChange={onChange} />
// )

// export default App
function App() {
  const [dataSource, setDataSource] = useState<DataType[]>([])

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt"
    },
    {
      title: "ID",
      dataIndex: "segmentId",
      key: "segmentId"
    },
    {
      title: "Name",
      dataIndex: "segmentName",
      key: "name"
    },
    {
      title: "Time",
      dataIndex: "avgExcutionTime",
      key: "time",
      sorter: (a: DataType, b: DataType) =>
        a.avgExcutionTime - b.avgExcutionTime
    }
  ]

  useEffect(() => {
    get("http://localhost:5050/tasks/ok")
      .then((data) => {
        // console.log(data)
        setDataSource(data?.data)
      })
      .catch((err) => {
        console.log("err", err)
      })
  }, [])

  const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: dataSource.map((data) => data.segmentName)
    }
  }
  const series = [
    {
      name: "avgExcutionTime",
      data: dataSource.map((data) => data.avgExcutionTime)
    }
  ]
  return (
    <div className="w-[80%] mx-[auto]">
      <Chart options={options} series={series} type="bar" width="100%" />
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default App
