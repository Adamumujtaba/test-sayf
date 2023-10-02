/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function StudentTable({ data }) {
  // const list = data?.filter((item) => item.employed === employed);
  return (
    <table className="text-xs min-w-full text-left text-gray-light lg:text-[17px]">
      <thead className=" text-[#00d094]">
        <tr>
          <th class="text-left border-gray-light">S/N</th>
          <th>Name</th>
          <th>Graduate</th>
          <th>Age</th>
          <th>Course</th>
          <th>Employed</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-solid divide-y divide-gray-200">
        {data.data?.map((item, index) => {
          return (
            <tr key={item._id} className="">
              <td className="px-3 py-2 whitespace-no-wrap">{++index}</td>
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
