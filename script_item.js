// TODO #4.0: Change this IP address to EC2 instance public IP address when you are going to deploy this web application
const backendIPAddress = "http://127.0.0.1:3000";

let itemsData;

// TODO #2.1: Edit group number
const getGroupNumber = () => {
  return 13;
};

/*
// TODO #2.2: Show group members
const showGroupMembers = async () => {
  const member_list = document.getElementById("member-list");
  member_list.innerHTML = "";
  const member_dropdown = document.getElementById("name-to-add");
  member_dropdown.innerHTML =
    "<option value='0'>-- เลือกผู้ฝากซื้อ --</option>";
  const options = {
    method: "GET",
    credentials: "include",
  };
  await fetch(`http://${backendIPAddress}/items/members`, options)
    .then((response) => response.json())
    .then((data) => {
      const members = data;
      members.map((member) => {
        member_list.innerHTML += `
          <li>${member.full_name}</li>
          `;
        // ----------------- FILL IN YOUR CODE UNDER THIS AREA ONLY ----------------- //
        member_dropdown.innerHTML += ``;
        // ----------------- FILL IN YOUR CODE ABOVE THIS AREA ONLY ----------------- //
      });
    })
    .catch((error) => console.error(error));
};
*/

// TODO #2.3: Send Get items ("GET") request to backend server and store the response in itemsData variable
const getItemsFromDB = async () => {
  /*
  const ToDo = document.getElementById("ToDo-to-add");
  ToDo.innerHTML = "";

  const Category = document.getElementById("Category-to-add");
  Category.innerHTML = "";

  const DueDate = document.getElementById("DueDate-to-add");
  DueDate.innerHTML = "";
  */
  const options = {
    method: "GET",
    credentials: "include"
  };
  await fetch(`http://${backendIPAddress}/items`, options)
    .then((response) => response.json())
    .then((data) => {
      itemsData = data
      //ToDo.innerHTML += 
      //Category.innerHTML +=
      //DueDate.innerHTML +=
    })
    .catch((error) => console.error(error));

};

// TODO #2.4: Show items in table (Sort itemsData variable based on created_date in ascending order)
const showItemsInTable = (itemsData) => {
  const table_body = document.getElementById("main-table-body");
  table_body.innerHTML = "";
  // ----------------- FILL IN YOUR CODE UNDER THIS AREA ONLY ----------------- //
  itemsData.sort((a, b) => {
    return a.created_date - b.created_date;
  })
  // ----------------- FILL IN YOUR CODE ABOVE THIS AREA ONLY ----------------- //
  itemsData.map((item) => {
    // ----------------- FILL IN YOUR CODE UNDER THIS AREA ONLY ----------------- //
    table_body.innerHTML += `
        <tr id="${item.item_id}">
            <td>${item.task}</td>
            <td>${item.category}</td>
            <td>${item.dueDate}</td>
            <td><button class="delete-row" onclick="deleteItem('${item.item_id}')">Delete</button></td>
        </tr>
        `;
    // ----------------- FILL IN YOUR CODE ABOVE THIS AREA ONLY ----------------- //
  });
};

// TODO #2.5: Send Add an item ("POST") request to backend server and update items in the table
const addItem = async () => {
  const item = document.getElementById("item-to-add").value;
  const name = document.getElementById("name-to-add").value;
  const price = document.getElementById("price-to-add").value;

  console.log(
    "This function should fetch 'add item' route from backend server and update items in the table."
  );
};

// TODO 2.6: Send Delete an item ("DELETE") request to backend server and update items in the table
const deleteItem = async (item_id) => {
  console.log(
    "This function should fetch 'delete item' route in backend server and update items in the table."
  );
};

const redrawDOM = () => {
  window.document.dispatchEvent(
    new Event("DOMContentLoaded", {
      bubbles: true,
      cancelable: true,
    })
  );
  document.getElementById("ToDo-to-add").value = "";
  document.getElementById("Category-to-add").value = "";
  document.getElementById("DueDate-to-add").value = "";
};

document.getElementById("group-no").innerHTML = getGroupNumber();

document.addEventListener("DOMContentLoaded", async function (event) {
  /*console.log("Showing group members.");
  await showGroupMembers();*/
  console.log("Showing items from database.");
  await getItemsFromDB();
  showItemsInTable(itemsData);
});
