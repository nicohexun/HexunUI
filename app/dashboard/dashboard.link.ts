import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dashboard-link',
    templateUrl: './dashboard.link.html',
    styleUrls: ['./dashboard.link.css']
})
export class DashboardLinkComponent {
    opened = false;
    selectedItem = null;

    users = [{
        id: 1,
        name: '1',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 1'
        },
        color: 'red'
    }, {
        id: 2,
        name: '2',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 2'
        }, color: 'yellow'
    }, {
        id: 3,
        name: '3',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 3'
        }, color: 'purple'
    }, {
        id: 4,
        name: '4',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 4'
        }, color: 'pink'
    }, {
        id: 1,
        name: '1',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 1'
        },
        color: 'red'
    }, {
        id: 2,
        name: '2',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 2'
        }, color: 'yellow'
    }, {
        id: 3,
        name: '3',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 3'
        }, color: 'purple'
    }, {
        id: 4,
        name: '4',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 4'
        }, color: 'pink'
    }, {
        id: 1,
        name: '1',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 1'
        },
        color: 'red'
    }, {
        id: 2,
        name: '2',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 2'
        }, color: 'yellow'
    }, {
        id: 3,
        name: '3',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 3'
        }, color: 'purple'
    }, {
        id: 4,
        name: '4',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 4'
        }, color: 'pink'
    }, {
        id: 1,
        name: '1',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 1'
        },
        color: 'red'
    }, {
        id: 2,
        name: '2',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 2'
        }, color: 'yellow'
    }, {
        id: 3,
        name: '3',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 3'
        }, color: 'purple'
    }, {
        id: 4,
        name: '4',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 4'
        }, color: 'pink'
    }, {
        id: 1,
        name: '1',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 1'
        },
        color: 'red'
    }, {
        id: 2,
        name: '2',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 2'
        }, color: 'yellow'
    }, {
        id: 3,
        name: '3',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 3'
        }, color: 'purple'
    }, {
        id: 4,
        name: '4',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 4'
        }, color: 'pink'
    }, {
        id: 1,
        name: '1',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 1'
        },
        color: 'red'
    }, {
        id: 2,
        name: '2',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 2'
        }, color: 'yellow'
    }, {
        id: 3,
        name: '3',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 3'
        }, color: 'purple'
    }, {
        id: 4,
        name: '4',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 4'
        }, color: 'pink'
    }, {
        id: 1,
        name: '1',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 1'
        },
        color: 'red'
    }, {
        id: 2,
        name: '2',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 2'
        }, color: 'yellow'
    }, {
        id: 3,
        name: '3',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 3'
        }, color: 'purple'
    }, {
        id: 4,
        name: '4',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 4'
        }, color: 'pink'
    }, {
        id: 1,
        name: '1',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 1'
        },
        color: 'red'
    }, {
        id: 2,
        name: '2',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 2'
        }, color: 'yellow'
    }, {
        id: 3,
        name: '3',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 3'
        }, color: 'purple'
    }, {
        id: 4,
        name: '4',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 4'
        }, color: 'pink'
    }, {
        id: 1,
        name: '1',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 1'
        },
        color: 'red'
    }, {
        id: 2,
        name: '2',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 2'
        }, color: 'yellow'
    }, {
        id: 3,
        name: '3',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 3'
        }, color: 'purple'
    }, {
        id: 4,
        name: '4',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 4'
        }, color: 'pink'
    }, {
        id: 1,
        name: '1',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 1'
        },
        color: 'red'
    }, {
        id: 2,
        name: '2',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 2'
        }, color: 'yellow'
    }, {
        id: 3,
        name: '3',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 3'
        }, color: 'purple'
    }, {
        id: 4,
        name: '4',
        creation: '2016-12-08 11:22:33',
        pokemon: {
            name: 'poke 4'
        }, color: 'pink'
    }];

    update(item: Object) {
        this.selectedItem = item;
        this.opened = true;
    };

    updateConfirm(updateItem: Object) {
        let newData = [];
        this.users.filter(item => {
            if (item == this.selectedItem)
                newData.push(updateItem);
            else
                newData.push(item);
        });
        this.users = newData;
        this.opened = false;
        this.selectedItem = null;
    };

    delete(deleteItem: Object) {
        let newData = [];
        this.users.filter(item => {
            if (item != deleteItem) newData.push(item);
        });
        this.users = newData;
    }
}