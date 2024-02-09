
let SHEET_RANGE_VONG_1 = 'I1:P16';

let FULL_URL_SHEET_RANGE_VONG_1 = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE_VONG_1}`;

fetch(FULL_URL_SHEET_RANGE_VONG_1)
.then((res) => res.text())
.then((rep) => {
  let data = JSON.parse(rep.substr(47).slice(0, -2));
  let dataBody = document.getElementById('table_ranktable_bxh');
  for (let i = 0; i < data.table.rows.length; i++) {
    let rowData = data.table.rows[i].c;
    let row = document.createElement('tr');
    let cell0 = document.createElement('td');
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
    let cell3 = document.createElement('td');
    let cell4 = document.createElement('td');
    let cell5 = document.createElement('td');
    let cell6 = document.createElement('td');
    let cell7 = document.createElement('td');
    

    cell0.textContent= rowData[0].v;
    cell1.textContent = rowData[1].v;
    cell2.textContent = rowData[2].v;
    cell3.textContent = rowData[3].v;
    cell4.textContent = rowData[4].v;
    cell5.textContent = rowData[5].v;
    cell6.textContent = rowData[6].v;
    cell7.textContent = rowData[7].v;


    row.appendChild(cell0);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);
    row.appendChild(cell7);


    dataBody.appendChild(row);
  }

  // Call the function to set up pagination after loading data
  setupPagination();
});

function setupPagination() {
const table = document.getElementById('leaderboard');
const tbody = table.querySelector('tbody');
const itemsPerPage = 8;
const totalPages = Math.ceil(tbody.rows.length / itemsPerPage);
let currentPage = 1;

// Function to show the specified page
function showPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const rows = Array.from(tbody.rows);

    rows.forEach((row, index) => {
        row.style.display = (index >= startIndex && index < endIndex) ? '' : 'none';
    });
}

// Function to generate pagination links
function generatePaginationLinks() {
    const paginationContainer = document.getElementById('pagination-container');
    const paginationList = paginationContainer.querySelector('.pagination');

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#leaderboard1';
        a.textContent = i;
        a.addEventListener('click', () => {
            currentPage = i;
            showPage(currentPage);
            highlightCurrentPage();
        });
        li.appendChild(a);
        paginationList.appendChild(li);
    }
}

// Function to highlight the current page
function highlightCurrentPage() {
    const paginationLinks = document.querySelectorAll('.pagination a');
    paginationLinks.forEach((link, index) => {
        link.classList.remove('active');
        if (index + 1 === currentPage) {
            link.classList.add('active');
        }
    });
}

// Initial setup
showPage(currentPage);
generatePaginationLinks();
highlightCurrentPage();
}
