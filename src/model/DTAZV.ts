import { QSet } from "./QSet";
import TSet from "./TSet";
export class DTAZV {
    public q: QSet = {
        satzlaenge: "",
        satzart: "",
        blz: "",
        kundennummer: "",
        auftraggeberdaten: "",
        erstellungsdatum: "",
        laufendenummer: 0,
        ausfuehrungstermin: "",
        weiterleitunganbehoerde: "",
        bundesland: "",
        firmennummer: "",
        reserve: "",
    };
    public t: TSet[] = []
}

export default DTAZV;