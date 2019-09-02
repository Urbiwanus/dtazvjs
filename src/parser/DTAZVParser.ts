import { QSet } from '../model/QSet';
import { TSet } from '../model/TSet';
import { DTAZV } from '../model/DTAZV';

export class DTAZVParser {
    spec: string;


    constructor(spec: string) {
        this.spec = spec;
    }
    public parse(): DTAZV {
        //Here comes the switch
        let textLeft = this.spec;
        let result: DTAZV = new DTAZV();
        while (textLeft.length > 0) {
            console.log('Bytes to go', textLeft.length);
            let type = this.specHelper(textLeft, 5, 1);
            console.log('parsing type ', type);
            switch (type) {
                case 'Q':
                    console.log('Found Q Set')
                    let q = this.parseQ(textLeft);
                    result.q = q;
                    textLeft = textLeft.substring(256);
                    break;
                case 'T':
                    console.log('Found T Set')
                    let t = this.parseT(textLeft);
                    result.t.push(t);
                    textLeft = textLeft.substring(768);
                    break;
                case 'V':
                    console.log('Found V Set');
                    textLeft = textLeft.substring(768);
                    break;
                case 'W':
                    console.log('Found W Set');
                    textLeft = textLeft.substring(768);
                    break;
                case 'Z':
                    console.log('Found Z Set');
                    textLeft = textLeft.substring(256);
                    break;
                default:
                    console.log("Unkonw data set found, skipping");
                    textLeft = textLeft.substring(256);

            }
        }
        console.log(result);
        return result;



    }
    private parseQ(textLeft: string): QSet {
        let result: QSet = {
            satzlaenge: this.specHelper(textLeft, 1, 4),
            satzart: 'Q',
            blz: this.specHelper(textLeft, 6, 8),
            kundennummer: this.specHelper(textLeft, 14, 10),
            auftraggeberdaten: this.specHelper(textLeft, 24, 4 * 35),
            erstellungsdatum: this.specHelper(textLeft, 164, 6),
            laufendenummer: parseInt(this.specHelper(textLeft, 170, 2)),
            ausfuehrungstermin: this.specHelper(textLeft, 172, 6),
            weiterleitunganbehoerde: this.specHelper(textLeft, 178, 1),
            bundesland: this.specHelper(textLeft, 179, 2),
            firmennummer: this.specHelper(textLeft, 181, 8),
            reserve: this.specHelper(textLeft, 189, 68)
        }
        return result;
    }

    private parseT(textLeft: string): TSet {
        let result: TSet = {
            satzlaenge: this.specHelper(textLeft, 1, 4),
            satzart: this.specHelper(textLeft, 5, 1),
            blz: this.specHelper(textLeft, 6, 8),
            iso_waehrungs: this.specHelper(textLeft, 14, 3),
            kontonummers: this.specHelper(textLeft, 17, 10),
            ausfuehrungstermin: this.specHelper(textLeft, 27, 6),
            blzkonotfuehrend: this.specHelper(textLeft, 33, 8),
            iso_waehrunge: this.specHelper(textLeft, 41, 3),
            kontonummere: this.specHelper(textLeft, 44, 10),
            bic: this.specHelper(textLeft, 54, 11),
            lande: this.specHelper(textLeft, 65, 3),
            anschrift: this.specHelper(textLeft, 68, 4 * 35),
            landz: this.specHelper(textLeft, 208, 3),
            zahlungsempfaenger: this.specHelper(textLeft, 211, 4 * 35),
            ordervermerk: this.specHelper(textLeft, 351, 2 * 35),
            ibane: this.specHelper(textLeft, 421, 35),
            auftragswaehrung: this.specHelper(textLeft, 456, 3),
            betragvorkomma: this.specHelper(textLeft, 459, 14),
            betragnachkomma: this.specHelper(textLeft, 473, 3),
            verwendungszweck: this.specHelper(textLeft, 476, 4 * 35),
            weisungsschluessel1: this.specHelper(textLeft, 616, 2),
            weisungsschluessel2: this.specHelper(textLeft, 618, 2),
            weisungsschluessel3: this.specHelper(textLeft, 620, 2),
            weisungsschluessel4: this.specHelper(textLeft, 622, 2),
            zusatzinfoweisungsschluessel: this.specHelper(textLeft, 624, 2),
            entgeldregelung: this.specHelper(textLeft, 649, 2),
            kennzeichnunguzahlungsart: this.specHelper(textLeft, 651, 2),
            variablertext: this.specHelper(textLeft, 653, 27),
            nametelefon: this.specHelper(textLeft, 680, 35),
            meldeschluessel: this.specHelper(textLeft, 715, 1),
            reserve: this.specHelper(textLeft, 716, 51),
            erweiterungskennzeichnung: this.specHelper(textLeft, 767, 2)
        }
        return result;
    }

    public validate(text: string): boolean {
        return true;

    }
    private specHelper(text: string, startposSpec: number, lengthSpec: number): string {
        return text.substr(startposSpec - 1, lengthSpec);
    }
}

export default DTAZVParser;
