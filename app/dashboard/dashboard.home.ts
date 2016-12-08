import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dashboard-home',
    //host属性中添加的字段将添加到 <dashboard-home ... 中>  <dashboard-home class="test"> ...
    // host: {
    //     class: 'test'
    // },
    templateUrl: './dashboard.home.html',
    styleUrls: ['./dashboard.home.css']
})
export class DashboardHomeComponent {
    opened = false;
    selectedItem = null;
    datas = [
        {
            "Decimal": "1",
            "Hexadecimal": "2",
            "Binary": "3",
            "Roman_Numeral": "4"
        }, {
            "Decimal": "11111111111111",
            "Hexadecimal": "1222222222222",
            "Binary": "333333333333333",
            "Roman_Numeral": "3444444444444444"
        }, {
            "Decimal": "122222222223333333333333334444444444",
            "Hexadecimal": "2133243",
            "Binary": "4324234324",
            "Roman_Numeral": "231432q4214"
        }, {
            "Decimal": "fsfasfs ",
            "Hexadecimal": "saf sdaf sd fsa f",
            "Binary": "sadf sd fs ",
            "Roman_Numeral": "sd fsda fs "
        }];

    update(item: Object) {
        this.selectedItem = item;
        this.opened = true;
    };

    updateConfirm(updateItem: Object) {
        let newData = [];
        this.datas.filter(item => {
            if (item == this.selectedItem)
                newData.push(updateItem);
            else
                newData.push(item);
        });
        this.datas = newData;
        this.opened = false;
        this.selectedItem = null;
    };

    delete(deleteItem: Object) {
        let newData = [];
        this.datas.filter(item => {
            if (item != deleteItem) newData.push(item);
        });
        this.datas = newData;
    }
}