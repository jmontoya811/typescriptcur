var dbQuery = function () {
    setTimeout(function () {
        console.log("Query results");
    }, 3000);
};
function loadPage(q) {
    console.log("Header");
    q();
    console.log("Sidebar");
    console.log("Footer");
}
loadPage(dbQuery);
//# sourceMappingURL=420highorderfunction.js.map