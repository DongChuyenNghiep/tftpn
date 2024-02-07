document.addEventListener("DOMContentLoaded", function () {
    // By default, show only the 'table_test_all' table
    document.querySelector('.table_rank_B').style.display = 'none';
    document.querySelector('.table_fixture_B').style.display = 'block';
});

function showTableB(tableToShow) {
    // Hide all tables
    document.querySelector('.table_fixture_B').style.display = 'none';
    document.querySelector('.table_rank_B').style.display = 'none';

    // Show the selected table
    document.querySelector('.table_' + tableToShow + '_B').style.display = 'block';
}
