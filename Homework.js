var alcoholRate = 0.5
if (alcoholRate >= 0 && alcoholRate <=0.2) {
    console.log("Недостаточная доза для наказания")
} else if (alcoholRate > 0.2 && alcoholRate <= 0.4) {
    console.log("Средняя доза, наказание: штраф и предупреждение")
} else if (alcoholRate > 0,4 && alcoholRate <= 1) {
    console.log("Высокая доза, наказание: лишение водительских прав и условный срок")
} else {
    console.log("Замер произвиден не коректно")
}

switch (true){
    case alcoholRate >= 0 && alcoholRate < 0.2:
        console.log("Недостаточная доза для наказания");
            break;
    case  alcoholRate >= 0.2 && alcoholRate < 0.4:
            console.log("Средняя доза, наказание: штраф и предупреждение");
            break;
    case alcoholRate >= 0,4 && alcoholRate <= 1:
            console.log("Высокая доза, наказание: лишение водительских прав и условный срок");
            break;
    default:
            console.log("Замер произвиден не коректно");
            break;
}