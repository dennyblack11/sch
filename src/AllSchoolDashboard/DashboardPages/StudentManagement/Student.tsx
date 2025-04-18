import { useState } from "react";
import DashboardNavs from "../../../Components/Props/DashboardNavs";
import { Table, Avatar, notification } from "antd";
import CustomButton from "../../../Components/Props/CustomButton";
import CustomInput from "../../../Components/Props/CustomInput";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import { Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import CreateStudent from "./CreateStudent";
import BulkUploadStudent from "./BulkUploadStudent";
import { FilePlus, Filter, UploadCloud, XCircle } from "lucide-react";
import DeleteStudent from "./DeleteStudent";

interface StudentType {
  key: number;
  avatar: string;
  name: string;
  surname: string;
  address: string;
  parentEmail: string;
  parentPhone: string;
  gender: string;
  class: string;
  token: string;
}

const Student = () => {
  const [pagination, setPagination] = useState({ current: 1, pageSize: 20 });
  const [showTokens, setShowTokens] = useState<Record<number, boolean>>({});
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const handleClearFilters = () => {
    setSelectedClass("");
    setSelectedGender("");
    setShowFilters(false);
  };

  const handleFilter = () => {
    setShowFilters(true);
  };

  const toggleShowToken = (id: number) => {
    setShowTokens((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const dataSource: StudentType[] = Array.from({ length: 40 }, (_, i) => ({
    key: i + 1,
    avatar: `https://api.dicebear.com/7.x/initials/svg?seed=Student${i + 1}`,
    name: `Name${i + 1}`,
    surname: `Surname${i + 1}`,
    address: `No. ${i + 1} Example Street, Lagos`,
    gender: `Female`,
    class: `SS1`,
    parentEmail: `parent${i + 1}@mail.com`,
    parentPhone: `0803${Math.floor(1000000 + Math.random() * 8999999)}`,
    token: `tok${Math.random().toString(36).substr(2, 8)}`,
  }));

  const filteredData = dataSource.filter((student) => {
    const matchClass = selectedClass ? student.class === selectedClass : true;
    const matchGender = selectedGender
      ? student.gender === selectedGender
      : true;
    return matchClass && matchGender;
  });

  const columns = [
    {
      title: "S/N",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Image",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar: string) => <Avatar src={avatar} alt="Student Avatar" />,
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "AccessID",
      key: "token",
      render: (_: any, record: StudentType) => (
        <div className="w-[100px] flex items-center gap-2">
          <span>
            {showTokens[record.key]
              ? record.token
              : `${record.token.slice(0, 2)}***`}
          </span>
          <button onClick={() => toggleShowToken(record.key)}>
            {showTokens[record.key] ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
      ),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Parent's Email",
      dataIndex: "parentEmail",
      key: "parentEmail",
    },
    {
      title: "Parent's Phone",
      dataIndex: "parentPhone",
      key: "parentPhone",
    },
    {
      title: "Delete",
      key: "delete",
      render: () => (
        <CustomButton
          text="Delete"
          bgColor="bg-red-500"
          textColor="text-white"
          onClick={() => setShowDeleteModal(true)}
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: () => {
        const menu = (
          <Menu>
            <Menu.Item key="view">
              <Link to="/dashboard/students/:ID">View Student</Link>
            </Menu.Item>
            <Menu.Item key="edit">Edit Student</Menu.Item>
          </Menu>
        );

        return (
          <Dropdown overlay={menu} trigger={["click"]}>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FaEllipsisV />
            </button>
          </Dropdown>
        );
      },
    },
  ];

  return (
    <>
      <div className="smooth relative z-10">
        <DashboardNavs
          currentPage="Students"
          currentPageUrl="/dashboard/students"
        />

        <div className="rounded-md shadow-sm">
          <div className="py-3 px-2 bg-white rounded-md grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Filters */}
            <div className="md:flex items-center gap-3">
              <CustomInput
                placeholder="Search Student Name, Class Here"
                W="w-full md:w-[250px] mb-3 md:mb-0"
                H="h-full"
              />
              {showFilters && (
                <div className="transition-all duration-500 flex items-center gap-3">
                  <select
                    className="border px-3 py-2 rounded-md"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                  >
                    <option value="">All Classes</option>
                    <option value="SS1">SS1</option>
                    <option value="SS2">SS2</option>
                    <option value="SS3">SS3</option>
                  </select>
                  <select
                    className="border px-3 py-2 rounded-md"
                    value={selectedGender}
                    onChange={(e) => setSelectedGender(e.target.value)}
                  >
                    <option value="">All Genders</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end items-center gap-4 flex-wrap transition-all duration-300">
              {showFilters ? (
                <CustomButton
                  text="Clear Filters"
                  bgColor="bg-red-600"
                  textColor="text-white"
                  onClick={handleClearFilters}
                  icon={<XCircle className="w-4 h-4" />}
                />
              ) : (
                <CustomButton
                  text="Filter"
                  bgColor="bg-gray-600"
                  textColor="text-white"
                  onClick={handleFilter}
                  icon={<Filter className="w-4 h-4" />}
                />
              )}

              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item
                      key="manual"
                      onClick={() => setShowCreateModal(true)}
                    >
                      <div className="flex items-center gap-2">
                        <FilePlus className="w-4 h-4 text-blue-600" />
                        <span>Create Manually</span>
                      </div>
                    </Menu.Item>

                    <Menu.Item
                      key="bulk"
                      onClick={() => setShowBulkModal(true)}
                    >
                      <div className="flex items-center gap-2">
                        <UploadCloud className="w-4 h-4 text-yellow-600" />
                        <span>Bulk Upload</span>
                      </div>
                    </Menu.Item>
                  </Menu>
                }
                trigger={["click"]}
              >
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 transition-all">
                  New Student
                </button>
              </Dropdown>
            </div>
          </div>

          <div className="my-5 py-2 overflow-x-auto w-full transition-all duration-300">
            <Table
              dataSource={filteredData}
              columns={columns}
              pagination={pagination}
              bordered
              scroll={{ x: true }}
              components={{
                body: {
                  wrapper: (props) => (
                    <tbody {...props} style={{ backgroundColor: "white" }} />
                  ),
                },
              }}
            />
          </div>
        </div>
      </div>

      {showCreateModal && (
        <CreateStudent onClose={() => setShowCreateModal(false)} />
      )}
      {showBulkModal && (
        <BulkUploadStudent isOpen onClose={() => setShowBulkModal(false)} />
      )}
      {showDeleteModal && (
        <DeleteStudent
          isOpen
          onClose={() => setShowDeleteModal(false)}
          studentName="John Doe"
          studentImage="https://i.pravatar.cc/150?img=12"
        />
      )}
    </>
  );
};

export default Student;
