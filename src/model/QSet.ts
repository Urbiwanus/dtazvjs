export interface QSet {
    satzlaenge: string;
    satzart: string;
    blz: string;
    kundennummer: string;
    auftraggeberdaten: string;
    erstellungsdatum: string;
    laufendenummer: number;
    ausfuehrungstermin: string;
    weiterleitunganbehoerde: string;
    bundesland?: string;
    firmennummer?: string;
    reserve: string;
}


export default QSet;