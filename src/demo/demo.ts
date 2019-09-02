import { DTAZVParser } from "../../scripts/parser/DTAZVParser";
import QSet from "../model/QSet";
import TSet from "../model/TSet";
import DTAZV from "../model/DTAZV";



export function generate() {
    console.log('parsing');
    let tsnString = (document.querySelector("#dtazv") as HTMLTextAreaElement).value;
    console.log(tsnString);
    let parser = new DTAZVParser(tsnString);
    let result: DTAZV = parser.parse();
    console.log(result.q);
    generateQ(result.q);
    let div = generateT(result.t);
    document.getElementById('tresults').appendChild(div);

}

export function generateQ(data: QSet) {
    for (let i = 0; i < Object.keys(data).length; i++) {
        let key = Object.keys(data)[i];
        document.getElementById(key).innerHTML = data[key];
    }
}

export function generateT(data: TSet[]) {

    let div = document.createElement('div');
    for (let i = 0; i < data.length; i++) {
        let table = document.createElement('table');
        div.appendChild(table);
        for (let y = 0; y < Object.keys(data[i]).length; y++) {
            let key = Object.keys(data[i])[y];
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            td1.innerHTML = key;
            td2.innerHTML = data[i][key];
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);
        }
        div.appendChild(document.createElement('hr'));
    }

    return div;


}

export function initPage() {
    console.log('init');
    const button: HTMLElement = document.getElementById("dtazvButton");
    console.log(button, "button");
    button.addEventListener("click", (e: Event) => generate());
}
window.onload = () => {

    initPage();
}

