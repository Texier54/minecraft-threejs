import fs from "fs";

export class Store {

    log(data) {
        fs.writeFile('log.txt', data, err => {
            if (err) {
                console.error(err);
            } else {
                // file written successfully
            }
        });
    }

    world(data) {
        fs.writeFile('world.txt', data, err => {
            if (err) {
                console.error(err);
            } else {
                // file written successfully
            }
        });
    }


}