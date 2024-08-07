let SHEET_ID = '1IK6JT13Oa4IDYYEev6FSv1_jjeJ-ex2LJdXkgQEbPFc';
let SHEET_TITLE = 'Vòng 2';
let SHEET_RANGE_A_1 = 'A1:G8';

let FULL_URL_TABLE_A = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE_A_1}`;

fetch(FULL_URL_TABLE_A)
    .then((res) => res.text())
    .then((rep) => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let dataBody = document.getElementById('table_ranktable_A');
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


// Assuming rowData[0].v contains the source URL for the image


cell0.textContent = rowData[0].v;
cell1.textContent = rowData[1].v;
cell2.textContent = rowData[2].v;
cell3.textContent = rowData[3].v;
cell4.textContent = rowData[4].v;
cell5.textContent = rowData[5].v;
cell6.textContent = rowData[6].v;

row.appendChild(cell0);
row.appendChild(cell1);
row.appendChild(cell2);
row.appendChild(cell3);
row.appendChild(cell4);
row.appendChild(cell5);
row.appendChild(cell6);



            dataBody.appendChild(row);
        }
    });