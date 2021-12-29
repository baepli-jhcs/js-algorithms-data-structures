function checkCashRegister(price, cash, cid) {
    let change = [];
    let values = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let need = cash - price;
    let total = 0;
    cid.forEach(item => {
        total += item[1];
    })
    if (total == need) return { status: "CLOSED", change: cid };
    if (total < need) return { status: "INSUFFICIENT_FUNDS", change: [] };
    let i = 8;
    outerloop: while (need > 0 && i >= 0) {
        while (cid[i][1] < values[i] || need - values[i] < 0) {
            i--;
            continue outerloop;
        }
        try {
            if (cid[i][0] == change[change.length - 1][0]) {
                change[change.length - 1][1] += values[i];
            } else {
                change.push([cid[i][0], values[i]]);
            }
        } catch {
            change.push([cid[i][0], values[i]]);
        }
        cid[i][1] -= values[i];
        need -= values[i];
        need = need.toFixed(2);
    }
    if (need != 0) return { status: "INSUFFICIENT_FUNDS", change: [] };
    console.log(change);
    return { status: "OPEN", change: change };
}

checkCashRegister(19.5, 23.04, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);