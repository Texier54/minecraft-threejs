import fs from "fs";

export class Store {

    log(data) {
        fs.appendFile('log.txt', data+'\n', err => {
            if (err) {
                console.error(err);
            } else {
                // file written successfully
            }
        });
    }

    world(data) {
        fs.appendFile('world.txt', data+'\n', err => {
            if (err) {
                console.error(err);
            } else {
                // file written successfully
            }
        });
    }


}