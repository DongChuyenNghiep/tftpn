document.addEventListener("DOMContentLoaded", function () {
    // By default, show only the 'table_test_all' table
    document.querySelector('.table_lobby').style.display = 'block';
    document.querySelector('.table_rank').style.display = 'none';
});

function showTable(tableToShow) {
    // Hide all tables
    document.querySelector('.table_lobby').style.display = 'none';
    document.querySelector('.table_rank').style.display = 'none';

    // Show the selected table
    document.querySelector('.table_' + tableToShow).style.display = 'block';
}
