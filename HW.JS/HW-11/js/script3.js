function actionContact(addAction, deletAction) {

    const add = addAction("add");

    const delet = deletAction("delet");

    return add, delet;
};

function b (action) {

    if (action === "add") {

        return "Контакт додано до списку";
    } else {

        return "Дію не знайдено";
    }
};

function c (action) {

   if (action === "delet") {

        return "Контакт видалено з списку";
    } else {

        return "Дію не знайдено";
    }
};

console.log(actionContact(b, c));