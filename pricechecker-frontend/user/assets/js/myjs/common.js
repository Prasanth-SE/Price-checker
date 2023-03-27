/**
 * This is javascript file for common settings
 */
const baseUserPathName = "/pricechecker-frontend/user";
const baseClientPathName = "/pricechecker-frontend"
const baseServerPathNameForUser = "http://localhost/pricechecker/user";
const numOfShowProducts = 10;
const isMockData = false;
function objLength(obj){
    let i=0;
    for (let x in obj){
        if(obj.hasOwnProperty(x)){
            i++;
        }
    }
    return i;
}