import { DTAZVParser } from './DTAZVParser';


let testString = '0256Q760200700022007009NKD SERVICES GMBH                                                     BUEHLSTRASSE 5 - 7                 95463 BINDLACH                     19082200190822N0900000001                                                                    0768T76020070EUR002200700919082200000000   0000000000KOMBCZPPXXX                                                                                                                                               CZ ADVOKTN KANCELR MARK - ZSEMLER                                        KARDINLA BERANA 967/8              301 00 PLZEN                                                                                             /CZ4501000000000978847311          CZK00000000002420000 219168 B 2420.00 CZK                                                                                                                       00000000                         0200                                                              0                                                   000768T76020070EUR002200700919082200000000   0000000000BACXCZPP                                                                                                                                                  CZ EASY POWER S. R. O.                                                   TALAFUSOVA 974                     284 01 KUTN HORA                                                                                         /CZ5627000000002105667900          CZK00000000001738000 015190098 B 1738.00 CZK                                                                                                                    00000000                         0200                                                              0                                                   000768T76020070EUR002200700919082200000000   0000000000KOMBCZPPXXX                                                                                                                                               CZ ING. LEOS JAREN - JARLIN                                              ELISKY KRSNOHORSK 17               323 00 PLZEN                                                                                             /CZ2001000001076616320237          CZK00000000005965000 19/11 B 5965.00 CZK                                                                                                                        00000000                         0200                                                              0                                                   000768T76020070EUR002200700919082200000000   0000000000KOMBCZPPXXX                                                                                                                                               CZ PETR DVORK                                                            GENERALA LISKY 3                   32600 PLZEN                                                                                              /CZ0701000000001136844311          CZK00000000052468000 2019-06 B 52468.00 CZK                                                                                                                     00000000                         0200                                                              0                                                   000256Z000000000062591000000000000004                                                                                                                                                                                                                             ';


test('Q Set', () => {
    let parser = new DTAZVParser(testString);
    let result = parser.parse();
    expect(result.q.satzart).toBe('Q');
});

test('T Sets', () => {
    let parser = new DTAZVParser(testString);
    let result = parser.parse();
    expect(result.t.length).toBe(4);
});