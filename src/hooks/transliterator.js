import { schemes } from './schemes'

export const schemerMap = {
    "lt_sd": schemes.latin.to.sunda,
    "lt_kw": schemes.latin.to.kawi,
    "lt_jw": schemes.latin.to.jawa,
    "lt_bl": schemes.latin.to.bali,
    "lt_pg": schemes.latin.to.pegon,
    // extra
    "lt_bt": schemes.latin.to.batak,
    "lt_rj": schemes.latin.to.rejang,
    // not fixed
    "lt_bg": schemes.latin.to.bugis,
    "lt_mk": schemes.latin.to.makassar,
};

export const translaterMap = {
    "lt_sd": "sunda",
    "lt_kw": "kawi",
    "lt_bl": "bali",
    "lt_jw": "jawa",
    "lt_pg": "pegon",
    // extra
    "lt_bt": "batak",
    "lt_rj": "rejang",
    // not fixed
    "lt_bg": "bugis",
    "lt_mk": "makassar",
};

export const languages = {
    "dt": "Deteksi Aksara",
    "lt": "Latin",
    "kw": "Aksara Kawi",
    "bl": "Aksara Bali",
    "jw": "Aksara Jawa",
    "sd": "Aksara Sunda",
    "pg": "Aksara Pegon",
    // extra
    "bt": "Aksara Batak",
    "rj": "Aksara Rejang",
    // not fixed
    "bg": "Aksara Bugis",
    "mk": "Aksara Makassar",
};

const sortArray = arr => {
    return arr.sort((a, b) => {
        return b.length - a.length;
    });
}

const arrayToRegex = arr => {
    return arr.join("|")
}

const makeRegEx = (currentScheme) => {
    let res = {};
    Object.keys(currentScheme).forEach(key => {
        let arr = []
        Object.keys(currentScheme[key]).forEach(key2 => {
            arr.push(regExBackslash(key2));
        });
        arr = sortArray(arr)
        res[key] = arrayToRegex(arr)
    });
    return res;
}

const regExBackslash = c => {
    let needBackslash = "[]().\\+-"
    if (needBackslash.includes(c)) {
        return "\\" + c
    }
    return c
}

export const transliterateRoman = (to, iStr, skema, opt) => {
    if (!iStr || !skema) return "";
    const from = "latin"
    const scheme = skema;
    const objRegEx = makeRegEx(scheme);
    const sigeg = c => {
        if (scheme.panyigeg[c]) {
            return scheme.panyigeg[c]
        }
        return scheme.nglegena[c] + scheme.virama
    }
    const PATT = {
        KRVK: 1,
        KRV: 2,
        KVK: 3,
        KV: 4,
        VK: 5,
        V: 6,
        K: 7,
        O: 0
    }
    iStr = iStr.toLowerCase()
    if (to == "jawa") {
        iStr = iStr.replace(/è/g, "é")
        iStr = iStr.replace(/ě/g, "e")
        iStr = iStr.replace(/ê/g, "e")
        iStr = iStr.replace(/([ié])([aiueéo])/g, "$1y$2")
        iStr = iStr.replace(/([u])([aieéo])/g, "$1w$2")
        iStr = iStr.replace(/([o])([aieé])/g, "$1w$2")
        iStr = iStr.replace(/r([ryl])/g, "r $1")
        iStr = iStr.replace(/l([r])/g, "l $1")
        iStr = iStr.replace(/n([cj])/g, "ny$1")
    }

    var iLength = iStr.length
    var idx = 0

    var tStr = ''
    var oStr = ''
    var aksara
    var suku
    var pattern = PATT.O
    var curIdx = '';
    const SYLLABLE = `^(${objRegEx.nglegena})?(${objRegEx.mandaswara})?(${objRegEx.swara})(${objRegEx.nglegena}|${objRegEx.panyigeg})?(${objRegEx.mandaswara}|${objRegEx.swara})?`
    while (idx < iLength) {
        curIdx = idx
        suku = ""
        let [m, mC1, mR, mV, mC2, mVR] = iStr.match(SYLLABLE) || [null]
        if (m !== null) {
            if (mC1) {
                if (mC2) {
                    if (mR) {
                        if (mVR) {
                            pattern = PATT.KRV
                        } else {
                            pattern = PATT.KRVK
                        }
                    } else {
                        if (mVR) {
                            pattern = PATT.KV
                        } else {
                            pattern = PATT.KVK
                        }
                    }
                } else {
                    if (mR) {
                        pattern = PATT.KRV
                    } else {
                        pattern = PATT.KV
                    }
                }
            } else {
                if (mC2) {
                    if (mVR) {
                        pattern = PATT.V
                    } else {
                        pattern = PATT.VK
                    }
                } else {
                    pattern = PATT.V
                }
            }
            if (pattern == PATT.KRVK) {
                suku = mC1 + mR + mV + mC2
                aksara = scheme.nglegena[mC1] +
                    scheme.mandaswara[mR] +
                    scheme.sandhanganSwara[mV] +
                    sigeg(mC2)
            } else if (pattern == PATT.KRV) {
                suku = mC1 + mR + mV
                aksara = scheme.nglegena[mC1] +
                    scheme.mandaswara[mR] +
                    scheme.sandhanganSwara[mV]
            } else if (pattern == PATT.KVK) {
                suku = mC1 + mV + mC2
                if (scheme.swara.hasOwnProperty(mC1 + mV)) {
                    aksara = scheme.swara[mC1 + mV] +
                        sigeg(mC2)
                } else {
                    aksara = scheme.nglegena[mC1] +
                        scheme.sandhanganSwara[mV] +
                        sigeg(mC2)
                }
            } else if (pattern == PATT.KV) {
                suku = mC1 + mV
                if (scheme.swara.hasOwnProperty(mC1 + mV)) {
                    aksara = scheme.swara[mC1 + mV]
                } else {
                    aksara = scheme.nglegena[mC1] +
                        scheme.sandhanganSwara[mV]
                }
            } else if (pattern == PATT.VK) {
                suku = mV + mC2
                aksara = scheme.swara[mV] +
                    sigeg(mC2)
            } else {
                suku = mV
                aksara = scheme.swara[mV]
            }
            oStr += aksara
            tStr += suku + '(' + pattern + '):'
            pattern = PATT.aksara
        } else {
            let [m, p1] = iStr.match(`^(${objRegEx.nglegena}|${objRegEx.panyigeg})`) || [null]
            if (m != null && m != "") {
                suku = p1
                aksara = scheme.nglegena[p1] + scheme.virama
                oStr += aksara
                tStr += suku + ";"
            } else {
                let [m, p1] = iStr.match('^([0-9]+)') || [null]
                if (m != null && m != "") {
                    aksara = scheme.pengapitAngka
                    suku = p1
                    for (let c of suku) {
                        aksara += scheme.angka[c]
                    }
                    aksara += scheme.pengapitAngka
                    oStr += aksara
                } else {
                    suku = iStr.substr(0, 1)
                    aksara = suku
                    oStr += suku
                }
                tStr += suku + '(?)'
            }
        }
        iStr = iStr.substr(suku.length)
        idx += suku.length
        if (idx == curIdx) {
            idx += 1;
        }
    }
    if (to == "jawa") {
        oStr = oStr.replace(/꧀꧈/g, '꧀\u200C')
        oStr = oStr.replace(/꧀꧉/g, '꧀꧈')
    }
    if (opt) {
        if (!opt.useSpaces) {
            oStr = oStr.replace(/ +/g, '')
        }
    }
    let pLen = Object.keys(scheme.pepadan).length;
    if (pLen > 0) {
        for (var key in scheme.pepadan) {
            if (!scheme.pepadan.hasOwnProperty(key)) {
                continue;
            }
            // console.log(key)
            oStr = oStr.replace(new RegExp(key, "g"), scheme.pepadan[key])
            //oStr = oStr.replace(/\?/g, scheme.pepadan[key])
        }
    }
    return oStr
}

const transliterateAknus = (lang, iStr, skema) => {
    var iLength = iStr.length
    var idx = 0
    var jump = 0
    var tStr = ''
    var oStr = ''
    var NGALAGENA = '(' + skema.regna.konsonan + ')'
    var VOKALMANDIRI = '(' + skema.regna.swara + ')'
    var SUBJOIN = '(' + skema.regna.subjoin + ')?'
    var VOKAL = '(' + skema.regna.rarangken + ')?'
    var TUNGTUNG = '(' + skema.regna.ahir + ')?'
    var PUNG = '(' + skema.regna.pungtuasi + ')'
    var ANGKA = ''
    if (skema.regna.angka.length > 0) {
        var ANGKA = '(' + skema.regna.angka + skema.regna.pungtuasi + ')'
    }
    var KRV0K = '^' + NGALAGENA + SUBJOIN + VOKAL + TUNGTUNG
    var VK = '^' + VOKALMANDIRI + TUNGTUNG
    if (lang == "sunda") {
        var angka = '^(\\|)?' + ANGKA + '(\\|)?'
    }
    if (lang == "jawa") {
        var angka = '^(\\꧇)?' + ANGKA + '(\\꧇)?'
    }
    var suku
    var silaba
    var r

    while (idx < iLength) {
        suku = ''
        silaba = ''
        r = iStr.match(KRV0K)
        if (r != null) {
            suku += r[1]
            silaba += skema.araka[r[1]]
            if (r[2]) {
                suku += r[2]
                silaba += skema.araka[r[2]]
            }
            if (r[3]) {
                suku += r[3]
                silaba += skema.araka[r[3]]
            } else {
                if (silaba !== "re") {
                    silaba += 'a'
                }
            }
            if (r[4]) {
                suku += r[4]
                silaba += skema.araka[r[4]]
            }
            oStr += silaba
            tStr += suku + ':'

        } else {
            // console.log(VK)
            // console.log(iStr.match(VK))
            r = iStr.match(VK)
            if (r != null) {
                suku += r[1]
                silaba += skema.araka[r[1]]
                if (r[2]) {
                    suku += r[2]
                    silaba += skema.araka[r[2]]
                }
                oStr += silaba
                tStr += suku + ':'
            } else {
                if (skema.regna.angka.length > 0) {
                    r = iStr.match(angka)
                    if (r) {
                        if (r[1]) {
                            suku += r[1]
                        }
                        suku += r[2]
                        oStr += skema.araka[r[2]]
                        if (r[3]) {
                            suku += r[3]
                        }
                    } else {
                        suku += iStr.substr(0, 1)
                        oStr += suku
                        tStr += suku + '(?)'
                    }
                }
            }
        }
        iStr = iStr.substr(suku.length)
        idx += suku.length
    }
    return oStr
}

export const cekAksara = (str) => {
    let trans;
    if (str.match(/([\u1B80-\u1BBF])/g)) {
        trans = transliterateAknus("sunda", str, schemes.sunda.to.latin);
    } else if (str.match(/([\uA980-\uA9DF])/g)) {
        trans = transliterateAknus("jawa", str, schemes.jawa.to.latin);
    } else if (str.match(/([\u1B00-\u1B7C])/g)) {
        trans = transliterateAknus("bali", str, schemes.bali.to.latin);

        // dev
    } else if (str.match(/([\u1BC0-\u1BFF])/g)) {
        trans = transliterateAknus("batak", str, schemes.batak.to.latin);
    } else if (str.match(/([\uA930-\uA95F])/g)) {
        trans = transliterateAknus("rejang", str, schemes.rejang.to.latin);
    } else if (str.match(/([\u1A00-\u1A1F])/g)) {
        trans = transliterateAknus("bugis", str, schemes.bugis.to.latin);
    } else if (str.match(/([\u{11EE0}-\u{11EFF}])/u)) {
        trans = transliterateAknus("makassar", str, schemes.makassar.to.latin);
        // end

    } else if (is_pegon(str)) {
        trans = "Transliterasi Aksara Pegon ke Latin untuk saat ini belum tersedia."
    } else if (str.match(/([\u{11F00}-\u{11F5F}])/u)) {
        trans = "Transliterasi Aksara Kawi ke Latin untuk saat ini belum tersedia."
    } else if (str.match(/([a-zA-Z0-9])/g)) {
        trans = "Silakan tulis menggunakan aksara nusantara, bukan Latin."
    } else {
        trans = "Transliterasi untuk aksara tersebut untuk saat ini belum tersedia."
    }
    return trans;
}

function is_pegon(str) {
    const includesAny = (arr, values) => values.some(v => arr.includes(v));
    const pegonlist = ["0652", "0643", "062e", "0642", "06ae", "063a", "06a0", "0686", "062c", "0632", "06d1", "062b", "0636", "062a", "062f", "0646", "06a4", "0641", "0628", "0645", "064a", "0631", "0644", "0648", "0633", "0634", "062d", "0639", "0627", "064e", "0627", "0650", "0627", "064f", "0627", "064e", "064a", "0652", "0627", "0897", "0627", "0897", "200c", "0627", "064e", "0648", "0652", "0627", "064e", "064a", "0652", "0897", "0897", "200c", "064e", "0648", "0652", "061f", "061b", "066a", "fd3f", "fd3e", "0660", "0661", "0662", "0663", "0664", "0665", "0666", "0667", "0668", "0669"]
    let chars = [];
    var hex, result;
    let i = 0;
    while (i < str.split("").length) {
        hex = str.charCodeAt(i).toString(16);
        result = ("000" + hex).slice(-4);
        chars.push(result);
        i++;
    }
    if (includesAny(pegonlist, chars)) {
        return true
    }
    return false
}

export function cekAknus(str) {
    if (str.match(/([\u1B80-\u1BBF])/g)) {
        return true
    } else if (str.match(/([\uA980-\uA9DF])/g)) {
        return true
    } else if (str.match(/([\u1B00-\u1B7C])/g)) {
        return true

        // dev
    } else if (str.match(/([\u1BC0-\u1BFF])/g)) {
        return true
    } else if (str.match(/([\uA930-\uA95F])/g)) {
        return true
    } else if (str.match(/([\u1A00-\u1A1F])/g)) { // bugis
        return true
    } else if (str.match(/([\u{11EE0}-\u{11EFF}])/u)) { // lontara makasar
        return true
        // end

    } else if (is_pegon(str)) {
        return true
    } else if (str.match(/([\u11F00-\u11F5F])/g)) {
        return true
    }
    return false;
}

export function availableAknus(str) {
    if (str.match(/([\u1B80-\u1BBF])/g)) {
        return true
    } else if (str.match(/([\uA980-\uA9DF])/g)) {
        return true
    } else if (str.match(/([\u1B00-\u1B7C])/g)) {
        return true

        // dev
    } else if (str.match(/([\u1BC0-\u1BFF])/g)) {
        return true
    } else if (str.match(/([\uA930-\uA95F])/g)) {
        return true
    } else if (str.match(/([\u1A00-\u1A1F])/g)) { // bugis
        return true
    } else if (str.match(/([\u{11EE0}-\u{11EFF}])/u)) { // makasar
        return true
        // end

    }
    return false;
}


export function cekAknusTag(str, tag) {
    if (str.match(/([\u1B80-\u1BBF])/g)) {
        if (tag.startsWith("sd_")) {
            return true
        }
    } else if (str.match(/([\uA980-\uA9DF])/g)) {
        if (tag.startsWith("jw_")) {
            return true
        }
    } else if (str.match(/([\u1B00-\u1B7C])/g)) {
        if (tag.startsWith("bl_")) {
            return true
        }

        // dev
    } else if (str.match(/([\u1BC0-\u1BFF])/g)) {
        if (tag.startsWith("bt_")) {
            return true
        }
    } else if (str.match(/([\uA930-\uA95F])/g)) {
        if (tag.startsWith("rj_")) {
            return true
        }
    } else if (str.match(/([\u1A00-\u1A1F])/g)) { // bugis
        if (tag.startsWith("bg_")) {
            return true
        }
    } else if (str.match(/([\u{11EE0}-\u{11EFF}])/u)) { // makasar
        if (tag.startsWith("mk_")) {
            return true
        }
        // end

    } else if (is_pegon(str)) {
        if (tag.startsWith("pg_")) {
            return true
        }
    } else if (str.match(/([\u11F00-\u11F5F])/g)) {
        if (tag.startsWith("kw_")) {
            return true
        }
    }
    return false;
}

export const cekAksaraTag = (str, tr_cmd) => {
    let stag = tr_cmd.split("_");
    let trans = "";
    if (stag[1] == "lt") {
        if (str.match(/([\u1B80-\u1BBF])/g)) {
            trans = transliterateAknus("sunda", str, schemes.sunda.to.latin);
        } else if (str.match(/([\uA980-\uA9DF])/g)) {
            trans = transliterateAknus("jawa", str, schemes.jawa.to.latin);
        } else if (str.match(/([\u1B00-\u1B7C])/g)) {
            trans = transliterateAknus("bali", str, schemes.bali.to.latin);

            // dev
        } else if (str.match(/([\u1BC0-\u1BFF])/g)) {
            trans = transliterateAknus("batak", str, schemes.batak.to.latin);
        } else if (str.match(/([\uA930-\uA95F])/g)) {
            trans = transliterateAknus("rejang", str, schemes.rejang.to.latin);
        } else if (str.match(/([\u1A00-\u1A1F])/g)) { // bugis
            trans = transliterateAknus("bugis", str, schemes.bugis.to.latin);
        } else if (str.match(/([\u{11EE0}-\u{11EFF}])/u)) { // makasar
            trans = transliterateAknus("makassar", str, schemes.makassar.to.latin);
            // end

        } else if (is_pegon(str)) {
            trans = "Transliterasi Aksara Pegon ke Latin untuk saat ini belum tersedia."
        } else if (str.match(/([\u11F00-\u11F5F])/g)) {
            trans = "Transliterasi Aksara Kawi ke Latin untuk saat ini belum tersedia."
        } else if (str.match(/([a-zA-Z0-9])/g)) {
            trans = "Silakan tulis menggunakan aksara nusantara, bukan Latin."
        } else {
            trans = "Transliterasi untuk aksara tersebut untuk saat ini belum tersedia."
        }
    } else {
        trans = `Transliterasi ${languages[stag[0]]} ke ${languages[stag[1]]} saat ini belum tersedia`
    }

    return trans;
}

export const transliterateToBugis = (iStr, skema, opt) => {
    const konsonan = "ngk|ng|mp|nr|nc|ny|[kgpbdmntjcslrwyh]";
    const vokal = "[aiueoé]";
    // Regex untuk memecah kata menjadi suku kata CV, V, atau CVC (yang akhirnya akan menjadi CV)
    const sukuKataRegex = new RegExp(`(${konsonan})?(${vokal})`, "g");

    let out = "";
    let cleanedStr = iStr.toLowerCase().replace(/[^a-z\s\é]/g, ''); // Hanya proses huruf

    // Pra-proses diftong seperti "au" menjadi "a" + "u"
    cleanedStr = cleanedStr.replace(/au/g, 'a' + '\u200B' + 'u').replace(/ai/g, 'a' + '\u200B' + 'i');

    const syllables = cleanedStr.match(sukuKataRegex);
    if (!syllables) return iStr; // Kembalikan input jika tidak ada suku kata yang cocok

    for (const suku of syllables) {
        let match = suku.match(new RegExp(`^(${konsonan})?(${vokal})$`));
        if (!match) continue;

        let [, kons, vok] = match;

        if (!kons) { // Jika hanya vokal (suku kata terbuka)
            out += skema.nglegena['a'] + (skema.sandhanganSwara[vok] || '');
        } else {
            let bugisKons = skema.nglegena[kons];
            if (bugisKons) {
                out += bugisKons;
                if (vok !== 'a') {
                    out += skema.sandhanganSwara[vok] || '';
                }
            } else {
                out += suku;
            }
        }
    }

    if (opt) {
        console.log('test spasi:', opt)
        if (opt.useSpaces) {
            out = out.replace(/ +/g, ' ')
        }
    }

    return out;
}

const transliterateFromBugis = (iStr, skema) => {
    let oStr = "";
    for (let i = 0; i < iStr.length; i++) {
        const char = iStr[i];
        const nextChar = iStr[i + 1];

        if (skema.araka[char]) {
            let dasarLatin = skema.araka[char];
            // Cek jika aksara adalah 'a' (pembawa vokal)
            if (char === '\u1a15' && nextChar && skema.regna.rarangken[nextChar]) {
                // Jika ya, jangan tambahkan 'a', langsung pakai vokal diakritik
                oStr += skema.regna.rarangken[nextChar];
                i++; // Lompati karakter diakritik
            } else if (nextChar && skema.regna.rarangken[nextChar]) {
                // Jika aksara lain dengan diakritik, ganti vokal 'a' bawaan
                oStr += dasarLatin.slice(0, -1) + skema.regna.rarangken[nextChar];
                i++; // Lompati karakter diakritik
            } else {
                // Jika tidak ada diakritik, gunakan vokal 'a' bawaan
                oStr += dasarLatin;
            }
        } else if (skema.regna.ahir[char]) {
            oStr += skema.regna.ahir[char];
        } else if (!skema.regna.rarangken[char]) { // Pastikan diakritik tidak tercetak sendiri
            oStr += char; // Simpan karakter tak dikenal
        }
    }
    return oStr;
}