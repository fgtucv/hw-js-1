function actionContact(actions) {

    const action = actions("add");

    return action;
};

function b (action) {

    if (action === "add") {

        return "Контакт додано до списку";
    } else if (action === "delet") {

        return "Контакт видалено з списку";
    } else {

        return "Дію не знайдено";
    }

};

console.log(actionContact(b));