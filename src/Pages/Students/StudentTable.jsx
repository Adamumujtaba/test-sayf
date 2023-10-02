/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function StudentTable({ data }) {
  // const list = data?.filter((item) => item.employed === employed);
  return (
    <table className="w-[90vw] text-left text-gray-light">
      <thead className="p-10 text-[#00d094]">
        <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Graduate</th>
          <th>Age</th>
          <th>Course</th>
          <th>Employed</th>
        </tr>
      </thead>
      <tbody className="">
        {data.data?.map((item, index) => {
          return (
            <tr key={item._id} className="">
              <td>{++index}</td>
              <td>{item.fullname}</td>
              <td>{item.graduate ? 'Yes' : 'No'}</td>
              <td>
                {new Date().getFullYear() - item?.dob?.toString().slice(0, 4)}
              </td>
              <td>{item.course}</td>
              {/* <td>{item.employed ? "Employed": "Unemployed"}</td> */}
              <td>{item.employed ? 'Yes' : 'No'}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default StudentTable;
