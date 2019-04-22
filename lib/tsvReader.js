const _ = require("lodash");

const fs = require('fs');
const d3 = require('d3-dsv');
const glob = require('glob');

exports.read = function (tsvFilename) {
    if (tsvFilename) {
        glob(`${tsvFilename}.tsv`, function (err, files) {
            if (err) return err;
    
            if (_.head(files)) {
                const content = fs.readFileSync(_.head(files), "utf8");
                console.log(d3.tsvParse(content));
            } else {
                console.log('TSV file not found!');
            }
        });
    } else {
        console.log('TSV filename is not specified!');
    }
}
