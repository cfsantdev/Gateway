exports.Logger = function(res, alias, data){
    const dt = new Date();
    const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);

    let dFormatted = `${
        padL(dt.getMonth()+1)}/${
        padL(dt.getDate())}/${
        dt.getFullYear()} ${
        padL(dt.getHours())}:${
        padL(dt.getMinutes())}:${
        padL(dt.getSeconds())}`;

    console.log(`{\n    "TIMESTAMP": "${dFormatted}",\n    "STATUS": ${res.statusCode},\n    "ALIAS": "${alias}",\n    "DATA": ${JSON.stringify(data)}\n};`);
}