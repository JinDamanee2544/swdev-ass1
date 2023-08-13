const register = () => {
    event.preventDefault();
    const bName = document.getElementById("bName");
    const bSize = document.getElementById("bSize");
    const bTable = document.getElementById("bTable");
    const bChair = document.getElementById("bChair");
    const bContName = document.getElementById("bContName");
    const bContTel = document.getElementById("bContTel");

    const boothInfo = {
        bName: bName.value,
        bSize: bSize.value,
        bTable: bTable.checked,
        bChair: bChair.value,
        bContName: bContName.value,
        bContTel: bContTel.value,
    };

    if (!boothInfo.bName) {
        alert("Please enter your booth name");
        return;
    }
    if (!boothInfo.bContName) {
        alert("Please enter your contact name");
        return;
    }
    if (!boothInfo.bContTel) {
        alert("Please enter your contact telephone number");
        return;
    }
    if (!boothInfo.bSize) {
        alert("Please enter your booth size");
        return;
    }
    if (!boothInfo.bChair) {
        alert("Please enter number of chairs in your booth");
        return;
    } else if (boothInfo.bChair > 10 || boothInfo.bChair < 1) {
        alert("Please enter number of chairs between 1 and 10");
        return;
    }

    alert("Your booth has been registered");
};
