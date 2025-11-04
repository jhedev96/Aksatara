// Transliterasi
export const schemes = {
    // Latin ke aksara
    latin: {
        to: {
            jawa: {
                virama: "\ua9c0",
                pengapitAngka: "\ua9c7",
                nglegena: {
                    "k": "\ua98f",
                    "kh": "\ua98f\ua9b3",
                    "q": "\ua990",
                    "g": "\ua992",
                    "gh": "\ua992\ua9b3",
                    "ng": "\ua994",
                    "c": "\ua995",
                    "j": "\ua997",
                    "z": "\ua997\ua9b3",
                    "ny": "\ua99a",
                    "th": "\ua99b",
                    "dh": "\ua99d",
                    "t": "\ua9a0",
                    "d": "\ua9a2",
                    "n": "\ua9a4",
                    "p": "\ua9a5",
                    "f": "\ua9a5\ua9b3",
                    "b": "\ua9a7",
                    "m": "\ua9a9",
                    "y": "\ua9aa",
                    "r": "\ua9ab",
                    "l": "\ua9ad",
                    "w": "\ua9ae",
                    "v": "\ua9ae\ua9b3",
                    "s": "\ua9b1",
                    "h": "\ua9b2"
                },
                swara: {
                    "a": "\ua984",
                    "i": "\ua986",
                    "u": "\ua988",
                    "é": "\ua98c",
                    "e": "\ua984\ua9bc",
                    "eu": "\ua9b2\ua9bc\ua9b4",
                    "o": "\ua98e",
                    "re": "\ua989",
                    "reu": "\ua989\ua9b4",
                    "le": "\ua98a",
                    "leu": "\ua98b"
                },
                mandaswara: {
                    "y": "\ua9be",
                    "r": "\ua9bf"
                },
                panyigeg: {
                    "ng": "\ua981",
                    "h": "\ua983",
                    "r": "\ua982"
                },
                sandhanganSwara: {
                    "a": "",
                    "i": "\ua9b6",
                    "u": "\ua9b8",
                    "é": "\ua9ba",
                    "e": "\ua9bc",
                    "eu": "\ua9bc\ua9b4",
                    "o": "\ua9ba\ua9b4",
                    "re": "\ua9bd",
                    "reu": "\ua9bd\ua9b4",
                    "le": "\ua9c0\ua9ad\ua9bc",
                    "leu": "\ua9ad\ua9bc\ua9b4"
                },
                pepadan: {
                    "[.]": "\ua9c9",
                    "[,]": "\ua9c8"
                },
                angka: {
                    "0": "\ua9d0",
                    "1": "\ua9d1",
                    "2": "\ua9d2",
                    "3": "\ua9d3",
                    "4": "\ua9d4",
                    "5": "\ua9d5",
                    "6": "\ua9d6",
                    "7": "\ua9d7",
                    "8": "\ua9d8",
                    "9": "\ua9d9"
                },
                lainnya: {}
            },

            sunda: {
                virama: "\u1baa",
                pengapitAngka: "\u007c",
                nglegena: {
                    "k": "\u1b8a",
                    "q": "\u1b8b",
                    "x": "\u1b9f",
                    "g": "\u1b8c",
                    "ng": "\u1b8d",
                    "c": "\u1b8e",
                    "j": "\u1b8f",
                    "z": "\u1b90",
                    "ny": "\u1b91",
                    "t": "\u1b92",
                    "d": "\u1b93",
                    "n": "\u1b94",
                    "p": "\u1b95",
                    "f": "\u1b96",
                    "b": "\u1b98",
                    "m": "\u1b99",
                    "y": "\u1b9a",
                    "r": "\u1b9b",
                    "l": "\u1b9c",
                    "w": "\u1b9d",
                    "v": "\u1b97",
                    "s": "\u1b9e",
                    "h": "\u1ba0"
                },
                swara: {
                    "a": "\u1b83",
                    "i": "\u1b84",
                    "u": "\u1b85",
                    "é": "\u1b86",
                    "e": "\u1b88",
                    "eu": "\u1b89",
                    "o": "\u1b87",
                    "reu": "\u1bbb",
                    "leu": "\u1bbc"
                },
                mandaswara: {
                    "y": "\u1ba1",
                    "r": "\u1ba2",
                    "l": "\u1ba3"
                },
                panyigeg: {
                    "ng": "\u1b80",
                    "h": "\u1b82",
                    "r": "\u1b81"
                },
                sandhanganSwara: {
                    "a": "",
                    "i": "\u1ba4",
                    "u": "\u1ba5",
                    "é": "\u1ba6",
                    "e": "\u1ba8",
                    "eu": "\u1ba9",
                    "o": "\u1ba7"
                },
                pepadan: {},
                angka: {
                    "0": "\u1bb0",
                    "1": "\u1bb1",
                    "2": "\u1bb2",
                    "3": "\u1bb3",
                    "4": "\u1bb4",
                    "5": "\u1bb5",
                    "6": "\u1bb6",
                    "7": "\u1bb7",
                    "8": "\u1bb8",
                    "9": "\u1bb9"
                },
                lainnya: {}
            },

            batak: {
                virama: "\u1bf2",
                pengapitAngka: "",
                nglegena: {
                    "k": "\u1bc3",
                    "q": "\u1bc2",
                    "g": "\u1bce",
                    "ng": "\u1bdd",
                    "c": "\u1be1",
                    "j": "\u1bd0",
                    "z": "\u1bd0",
                    "ny": "\u1be0",
                    "t": "\u1bd6",
                    "d": "\u1bd1",
                    "n": "\u1bc9",
                    "nd": "\u1be2",
                    "p": "\u1bc7",
                    "f": "\u1bc7",
                    "b": "\u1bc5",
                    "m": "\u1bd4",
                    "mb": "\u1be3",
                    "y": "\u1bdb",
                    "r": "\u1bd2",
                    "l": "\u1bde",
                    "w": "\u1bcb",
                    "v": "\u1bc7",
                    "s": "\u1bd8",
                    "h": "\u1bc2"
                },
                swara: {
                    "a": "\u1bc0",
                    "i": "\u1be4",
                    "u": "\u1be5"
                },
                mandaswara: {},
                panyigeg: {
                    "ng": "\u1bf0",
                    "h": "\u1bf1"
                },
                sandhanganSwara: {
                    "a": "",
                    "i": "\u1bea",
                    "u": "\u1bee",
                    "é": "\u1be9",
                    "e": "\u1be7",
                    "o": "\u1bec"
                },
                pepadan: {},
                angka: {},
                lainnya: {}
            },

            bali: {
                virama: "\u1b44",
                pengapitAngka: "",
                nglegena: {
                    "k": "\u1b13",
                    "q": "\u1b13",
                    "g": "\u1b15",
                    "gh": "\u1b16",
                    "ng": "\u1b17",
                    "c": "\u1b18",
                    "j": "\u1b1a",
                    "z": "\u1b1a",
                    "ny": "\u1b1c",
                    "dh": "\u1b25",
                    "t": "\u1b22",
                    "d": "\u1b24",
                    "n": "\u1b26",
                    "p": "\u1b27",
                    "ph": "\u1b28",
                    "f": "\u1b27\u1b34",
                    "b": "\u1b29",
                    "bh": "\u1b2a",
                    "m": "\u1b2b",
                    "y": "\u1b2c",
                    "r": "\u1b2d",
                    "l": "\u1b2e",
                    "w": "\u1b2f",
                    "v": "\u1b27",
                    "s": "\u1b32",
                    "h": "\u1b33"
                },
                swara: {
                    "a": "\u1b05",
                    "i": "\u1b07",
                    "u": "\u1b33\u1b38",
                    "é": "\u1b33\u1b3e",
                    "e": "\u1b33\u1b3e",
                    "o": "\u1b33\u1b40",
                    "re": "\u1b0b",
                    "le": "\u1b0d"
                },
                mandaswara: {},
                panyigeg: {
                    "ng": "\u1b02",
                    "h": "\u1b04",
                    "r": "\u1b03"
                },
                sandhanganSwara: {
                    "a": "",
                    "ai": "\u1b3f",
                    "au": "\u1b41",
                    "i": "\u1b36",
                    "u": "\u1b38",
                    "é": "\u1b3e",
                    "e": "\u1b42",
                    "o": "\u1b40",
                    "re": "\u1b3a",
                    "le": "\u1b3c"
                },
                pepadan: {
                    "[.]": "\u1b5f",
                    "[,]": "\u1b5e"
                },
                angka: {
                    "0": "\u1b50",
                    "1": "\u1b51",
                    "2": "\u1b52",
                    "3": "\u1b53",
                    "4": "\u1b54",
                    "5": "\u1b55",
                    "6": "\u1b56",
                    "7": "\u1b57",
                    "8": "\u1b58",
                    "9": "\u1b59"
                },
                lainnya: {}
            },

            rejang: {
                virama: "\ua953",
                pengapitAngka: "",
                nglegena: {
                    "k": "\ua930",
                    "g": "\ua931",
                    "ng": "\ua932",
                    "c": "\ua939",
                    "j": "\ua93a",
                    "ny": "\ua93b",
                    "t": "\ua933",
                    "d": "\ua934",
                    "n": "\ua935",
                    "nd": "\ua944",
                    "p": "\ua936",
                    "b": "\ua937",
                    "m": "\ua938",
                    "mb": "\ua942",
                    "y": "\ua93f",
                    "r": "\ua93d",
                    "l": "\ua93e",
                    "w": "\ua940",
                    "s": "\ua93c",
                    "h": "\ua941"
                },
                swara: {
                    "a": "\ua946",
                    "i": "",
                    "u": "",
                    "é": "",
                    "e": "",
                    "eu": "",
                    "o": "",
                    "re": ""
                },
                mandaswara: {},
                panyigeg: {
                    "n": "\ua950",
                    "ng": "\ua94f",
                    "h": "\ua952",
                    "r": "\ua951"
                },
                sandhanganSwara: {
                    "a": "",
                    "ai": "\ua94a",
                    "au": "\ua94c",
                    "i": "\ua947",
                    "u": "\ua948",
                    "é": "\ua94e",
                    "e": "\ua949",
                    "eu": "\ua94d",
                    "o": "\ua94b"
                },
                pepadan: {},
                angka: {},
                lainnya: {}
            },

            kawi: {
                virama: "\u{11f41}",
                pengapitAngka: "\u{11f03}",
                nglegena: {
                    "k": "\u{11f12}",
                    "kh": "\u{11f13}",
                    "q": "\u{11f12}\u{11f4b}",
                    "x": "\u{11f12}",
                    "g": "\u{11f14}",
                    "gh": "\u{11f15}",
                    "ng": "\u{11f16}",
                    "c": "\u{11f17}",
                    "j": "\u{11f19}",
                    "z": "\u{11f19}\u{11f4b}",
                    "ny": "\u{11f1b}",
                    "th": "\u{11f1d}",
                    "dh": "\u{11f1f}",
                    "t": "\u{11f21}",
                    "d": "\u{11f23}",
                    "n": "\u{11f20}",
                    "p": "\u{11f26}",
                    "ph": "\u{11f27}",
                    "f": "\u{11f26}\u{11f4b}",
                    "b": "\u{11f28}",
                    "bh": "\u{11f29}",
                    "m": "\u{11f2a}",
                    "y": "\u{11f2b}",
                    "r": "\u{11f2c}",
                    "l": "\u{11f2d}",
                    "w": "\u{11f2e}",
                    "v": "\u{11f2e}\u{11f4b}",
                    "s": "\u{11f31}",
                    "h": "\u{11f32}"
                },
                swara: {
                    "a": "\u{11f04}",
                    "i": "\u{11f06}",
                    "u": "\u{11f08}",
                    "é": "\u{11f0e}",
                    "e": "\u{11f04}\u{11f40}",
                    "eu": "\u{11f04}\u{11f40}",
                    "o": "\u{11f10}"
                },
                mandaswara: {
                    "r": "\u{11f0a}",
                    "l": "\u{11f0c}"
                },
                panyigeg: {
                    "m": "\u{11f00}",
                    "ng": "\u{11f01}",
                    "h": "\u{11f03}",
                    "r": "\u{11f3a}"
                },
                sandhanganSwara: {
                    "a": "",
                    "ai": "\u{11f3f}",
                    "i": "\u{11f36}",
                    "u": "\u{11f38}",
                    "é": "\u{11f3e}",
                    "e": "\u{11f40}",
                    "eu": "\u{11f40}",
                    "o": "\u{11f3e}\u{11f34}",
                    "re": "\u{11f3a}"
                },
                pepadan: {
                    "[.]": "\u{11f49}"
                },
                angka: {
                    "0": "\u{11f50}",
                    "1": "\u{11f51}",
                    "2": "\u{11f52}",
                    "3": "\u{11f53}",
                    "4": "\u{11f54}",
                    "5": "\u{11f55}",
                    "6": "\u{11f56}",
                    "7": "\u{11f57}",
                    "8": "\u{11f58}",
                    "9": "\u{11f59}"
                },
                lainnya: {}
            },

            pegon: {
                virama: "\u0652",
                pengapitAngka: "",
                nglegena: {
                    "k": "\u0643",
                    "kh": "\u062e",
                    "q": "\u0642",
                    "x": "\u062e",
                    "g": "\u06ae",
                    "gh": "\u063a",
                    "ng": "\u06a0",
                    "c": "\u0686",
                    "j": "\u062c",
                    "z": "\u0632",
                    "ny": "\u06d1",
                    "th": "\u062b",
                    "dh": "\u0636",
                    "t": "\u062a",
                    "d": "\u062f",
                    "n": "\u0646",
                    "p": "\u06a4",
                    "f": "\u0641",
                    "b": "\u0628",
                    "m": "\u0645",
                    "y": "\u064a",
                    "r": "\u0631",
                    "l": "\u0644",
                    "w": "\u0648",
                    "v": "\u06a4",
                    "s": "\u0633",
                    "sy": "\u0634",
                    "h": "\u062d"
                },
                swara: {
                    "'a": "\u0639",
                    "a": "\u0627\u064e",
                    "i": "\u0627\u0650",
                    "u": "\u0627\u064f",
                    "é": "\u0627\u064e\u064a\u0652",
                    "e": "\u0627\u0897",
                    "eu": "\u0627\u0897\u200c",
                    "o": "\u0627\u064e\u0648\u0652"
                },
                mandaswara: {},
                panyigeg: {},
                sandhanganSwara: {
                    "a": "\u0627",
                    "i": "\u064a",
                    "u": "\u0648",
                    "é": "\u064e\u064a\u0652",
                    "e": "\u0897",
                    "eu": "\u0897\u200c",
                    "o": "\u064e\u0648\u0652"
                },
                pepadan: {
                    "[?]": "\u061f",
                    ";": "\u061b",
                    "%": "\u066a",
                    "[(]": "\ufd3f",
                    "[)]": "\ufd3e"
                },
                angka: {
                    "0": "\u0660",
                    "1": "\u0661",
                    "2": "\u0662",
                    "3": "\u0663",
                    "4": "\u0664",
                    "5": "\u0665",
                    "6": "\u0666",
                    "7": "\u0667",
                    "8": "\u0668",
                    "9": "\u0669"
                },
                lainnya: {}
            },

            // Not fixed
            bugis: {
                virama: "",
                pengapitAngka: "",
                nglegena: {
                    "ka": "\u1a00", // ᨀ
                    "ga": "\u1a01", // ᨁ
                    "nga": "\u1a02", // ᨂ
                    "ngka": "\u1a03", // ᨃ
                    "pa": "\u1a04", // ᨄ
                    "ba": "\u1a05", // ᨅ
                    "ma": "\u1a06", // ᨆ
                    "mpa": "\u1a07", // ᨇ
                    "ta": "\u1a08", // ᨈ
                    "da": "\u1a09", // ᨉ
                    "na": "\u1a0a", // ᨊ
                    "nra": "\u1a0b", // ᨋ
                    "ca": "\u1a0c", // ᨌ
                    "ja": "\u1a0d", // ᨍ
                    "nya": "\u1a0e", // ᨎ
                    "nyca": "\u1a0f", // ᨏ
                    "ya": "\u1a10", // ᨐ
                    "ra": "\u1a11", // ᨑ
                    "la": "\u1a12", // ᨒ
                    "va": "\u1a13", // ᨓ
                    "sa": "\u1a14", // ᨔ
                    "a": "\u1a15", // ᨕ
                    "ha": "\u1a16", // ᨖ

                    // konsonan tambahan
                    "A": "\u1a15", // ᨕ
                    "B": "\u1a05", // ᨅ
                    "C": "\u1a0c", // ᨌ
                    "D": "\u1a09", // ᨉ
                    "E": "\u1a15\u1a1b", // ᨕᨛ 
                    "F": "\u1a04", // ᨄ
                    "G": "\u1a01", // ᨁ
                    "H": "\u1a16", // ᨖ
                    "I": "\u1a15\u1a17", // ᨕᨗ
                    "J": "\u1a0d", // ᨍ
                    "K": "\u1a00", // ᨀ
                    "L": "\u1a12", // ᨒ
                    "M": "\u1a06", // ᨆ
                    "N": "\u1a0a", // ᨊ
                    "O": "\u1a15\u1a1a", // ᨕᨚ
                    "P": "\u1a04", // ᨄ
                    "Q": "\u1a00", // ᨀ
                    "R": "\u1a11", // ᨑ
                    "S": "\u1a14", // ᨔ
                    "T": "\u1a08", // ᨈ
                    "U": "\u1a15\u1a18", // ᨕᨘ
                    "V": "\u1a04", // ᨄ
                    "W": "\u1a13", // ᨓ
                    "X": "\u1a15\u1a19", // ᨕᨙ
                    "Y": "\u1a10", // ᨐ
                    "Z": "\u1a0d", // ᨍ
                    "​": "ᨕ", //zws zero-width spacean
                    "b": "\u1a05", // ᨅ
                    "c": "\u1a0c", // ᨌ
                    "d": "\u1a09", // ᨉ
                    "e": "\u1a15\u1a1b", // ᨕᨛ 
                    "f": "\u1a04", // ᨄ
                    "g": "\u1a01", // ᨁ
                    "h": "\u1a16", // ᨖ
                    "i": "\u1a15\u1a17", // ᨕᨗ
                    "j": "\u1a0d", // ᨍ
                    "k": "\u1a00", // ᨀ
                    "l": "\u1a12", // ᨒ
                    "m": "\u1a06", // ᨆ
                    "n": "\u1a0a", // ᨊ
                    "o": "\u1a15\u1a1a", // ᨕᨚ
                    "p": "\u1a04", // ᨄ
                    "q": "\u1a00", // ᨀ
                    "r": "\u1a11", // ᨑ
                    "s": "\u1a14", // ᨔ
                    "t": "\u1a08", // ᨈ
                    "u": "\u1a15\u1a18", // ᨕᨘ
                    "v": "\u1a04", // ᨄ
                    "w": "\u1a13", // ᨓ
                    "x": "\u1a15\u1a19", // ᨕᨙ
                    "y": "\u1a10", // ᨐ
                    "z": "\u1a0d", // ᨍ
                    "È": "\u1a15\u1a19", // ᨕᨙ
                    "É": "\u1a15\u1a19", // ᨕᨙ
                    "è": "\u1a15\u1a19", // ᨕᨙ
                    "é": "\u1a15\u1a19" // ᨕᨙ
                },
                swara: {
                    "i": "\u1a17", // ᨗ
                    "u": "\u1a18", // ᨘ
                    "e": "\u1a19", // ᨙ
                    "o": "\u1a1a", // ᨚ
                    "ae": "\u1a1b", // ᨛ
                    "é": "\u1a1b" // ᨛ
                },
                mandaswara: {},
                panyigeg: {},
                sandhanganSwara: {
                    "i": "\u1a17",
                    "u": "\u1a18",
                    "e": "\u1a19",
                    "o": "\u1a1a",
                    "é": "\u1a1b"
                },
                pepadan: {
                    "[.]": "\u1a1e",
                    "[,]": "\u1a1f"
                },
                angka: {},
                lainnya: {}
            },

            
            makassar: {
                virama: "\u{11EF7}",
                pengapitAngka: "\u{11EF2}",
                nglegena: {
                    "k": "\u{11EE0}",
                    "g": "\u{11EE1}",
                    "ng": "\u{11EE2}",
                    "p": "\u{11EE3}",
                    "b": "\u{11EE4}",
                    "m": "\u{11EE5}",
                    "t": "\u{11EE6}",
                    "d": "\u{11EE7}",
                    "n": "\u{11EE8}",
                    "c": "\u{11EE9}",
                    "j": "\u{11EEA}",
                    "ny": "\u{11EEB}",
                    "y": "\u{11EEC}",
                    "r": "\u{11EED}",
                    "l": "\u{11EEE}",
                    "w": "\u{11EEF}",
                    "s": "\u{11EF0}",
                    "a": "\u{11EF1}"
                },
                swara: {},
                mandaswara: {},
                panyigeg: {},
                sandhanganSwara: {
                    "i": "\u{11EF3}",
                    "u": "\u{11EF4}",
                    "e": "\u{11EF5}",
                    "o": "\u{11EF6}"
                },
                pepadan: {
                    "[.]": "\u{11EF8}"
                },
                angka: {},
                lainnya: {}
            },
        }
    },

    // Aksara ke latin
    sunda: {
        to: {
            latin: {
                araka: {
                    "\u1b8a": "k",
                    "\u1b98": "b",
                    "\u1b99": "m",
                    "\u1b9a": "y",
                    "\u1b9b": "r",
                    "\u1b9c": "l",
                    "\u1b9d": "w",
                    "\u1b9e": "s",
                    "\u1b9f": "x",
                    "\u1ba0": "h",
                    "\u1bae": "kha",
                    "\u1baf": "sya",
                    "\u1b97": "v",
                    "\u1b96": "f",
                    "\u1b8b": "q",
                    "\u1b8c": "g",
                    "\u1b8d": "ng",
                    "\u1b8e": "c",
                    "\u1b8f": "j",
                    "\u1b90": "z",
                    "\u1b91": "ny",
                    "\u1b92": "t",
                    "\u1b93": "d",
                    "\u1b94": "n",
                    "\u1b95": "p",
                    "\u1bbd": "bha",
                    "\u1b83": "a",
                    "\u1bbe": "k",
                    "\u1bbc": "leu",
                    "\u1bbb": "reu",
                    "\u1b89": "eu",
                    "\u1b88": "e",
                    "\u1b87": "o",
                    "\u1b86": "é",
                    "\u1b85": "u",
                    "\u1b84": "i",
                    "\u1bbf": "m",
                    "\u1ba4": "i",
                    "\u1ba5": "u",
                    "\u1ba6": "é",
                    "\u1ba7": "o",
                    "\u1ba8": "e",
                    "\u1ba9": "eu",
                    "\u1baa": "",
                    "\u1ba1": "y",
                    "\u1ba2": "r",
                    "\u1ba3": "l",
                    "\u1bac": "m",
                    "\u1bad": "w",
                    "\u1bb0": "0",
                    "\u1bb8": "8",
                    "\u1bb7": "7",
                    "\u1bb6": "6",
                    "\u1bb5": "5",
                    "\u1bb4": "4",
                    "\u1bb3": "3",
                    "\u1bb2": "2",
                    "\u1bb1": "1",
                    "\u1bb9": "9",
                    "\u1b80": "ng",
                    "\u1b81": "r",
                    "\u1b82": "h"
                },
                regna: {
                    konsonan: "\u1b8a|\u1b98|\u1b99|\u1b9a|\u1b9b|\u1b9c|\u1b9d|\u1b9e|\u1b9f|\u1ba0|\u1bae|\u1baf|\u1b97|\u1b96|\u1b8b|\u1b8c|\u1b8d|\u1b8e|\u1b8f|\u1b90|\u1b91|\u1b92|\u1b93|\u1b94|\u1b95|\u1bbd",
                    swara: "\u1b83|\u1bbe|\u1bbc|\u1bbb|\u1b89|\u1b88|\u1b87|\u1b86|\u1b85|\u1b84|\u1bbf",
                    rarangken: "\u1ba4|\u1ba5|\u1ba6|\u1ba7|\u1ba8|\u1ba9|\u1baa",
                    subjoin: "\u1ba1|\u1ba2|\u1ba3|\u1bac|\u1bad",
                    angka: "\u1bb0|\u1bb8|\u1bb7|\u1bb6|\u1bb5|\u1bb4|\u1bb3|\u1bb2|\u1bb1|\u1bb9",
                    ahir: "\u1b80|\u1b81|\u1b82",
                    pungtuasi: ""
                }
            }
        }
    },

    jawa: {
        to: {
            latin: {
                araka: {
                    "\ua9af": "s",
                    "\ua9a3": "d",
                    "\ua9a2": "d",
                    "\ua9a1": "t",
                    "\ua9a0": "t",
                    "\ua99f": "d",
                    "\ua99e": "d",
                    "\ua99d": "d",
                    "\ua99c": "th",
                    "\ua99b": "th",
                    "\ua9a4": "n",
                    "\ua9a5\ua9b3": "f",
                    "\ua9ae\ua9b3": "v",
                    "\ua98f\ua9b3": "kh",
                    "\ua992\ua9b3": "gh",
                    "\ua997\ua9b3": "z",
                    "\ua9a5": "p",
                    "\ua9ae": "w",
                    "\ua9ad": "l",
                    "\ua9ac": "r",
                    "\ua9ab": "r",
                    "\ua9b0": "s",
                    "\ua9a9": "m",
                    "\ua9a8": "b",
                    "\ua9a7": "b",
                    "\ua9a6": "p",
                    "\ua99a": "ny",
                    "\ua999": "j",
                    "\ua9aa": "y",
                    "\ua98b": "ng",
                    "\ua98a": "ng",
                    "\ua989": "re",
                    "\ua9b2": "h",
                    "\ua98f": "k",
                    "\ua998": "ny",
                    "\ua997": "j",
                    "\ua9b1": "s",
                    "\ua995": "c",
                    "\ua994": "ng",
                    "\ua993": "g",
                    "\ua992": "g",
                    "\ua991": "k",
                    "\ua990": "k",
                    "\ua996": "c",
                    "\ua98d": "ai",
                    "\ua988": "u",
                    "\ua985": "i",
                    "\ua987": "Ī",
                    "\ua986": "i",
                    "\ua984": "a",
                    "\ua98e": "o",
                    "\ua98c": "é",
                    "\ua9ba\ua9b4": "o",
                    "\ua9b7": "i",
                    "\ua9c0": "",
                    "\ua9bc": "e",
                    "\ua9b6": "i",
                    "\ua9b9": "u",
                    "\ua9b8": "u",
                    "\ua9ba": "é",
                    "\ua9bf": "r",
                    "\ua9be": "y",
                    "\ua9d9": "9",
                    "\ua9d8": "8",
                    "\ua9d7": "7",
                    "\ua9d6": "6",
                    "\ua9d5": "5",
                    "\ua9d4": "4",
                    "\ua9d3": "3",
                    "\ua9d0": "0",
                    "\ua9d1": "1",
                    "\ua9d2": "2",
                    "\ua982": "r",
                    "\ua983": "h",
                    "\ua981": "ng",
                    "\ua9c7": "",
                    "\ua9c8": ",",
                    "\ua9c9": "."
                },
                regna: {
                    konsonan: "\ua9af|\ua9a3|\ua9a2|\ua9a1|\ua9a0|\ua99f|\ua99e|\ua99d|\ua99c|\ua99b|\ua9a4|\ua9a5\ua9b3|\ua9ae\ua9b3|\ua98f\ua9b3|\ua992\ua9b3|\ua997\ua9b3|\ua9a5|\ua9ae|\ua9ad|\ua9ac|\ua9ab|\ua9b0|\ua9a9|\ua9a8|\ua9a7|\ua9a6|\ua99a|\ua999|\ua9aa|\ua98b|\ua98a|\ua989|\ua9b2|\ua98f|\ua998|\ua997|\ua9b1|\ua995|\ua994|\ua993|\ua992|\ua991|\ua990|\ua996",
                    swara: "\ua98d|\ua988|\ua985|\ua987|\ua986|\ua984|\ua98e|\ua98c",
                    rarangken: "\ua9ba\ua9b4|\ua9b7|\ua9c0|\ua9bc|\ua9b6|\ua9b9|\ua9b8|\ua9ba",
                    subjoin: "\ua9bf|\ua9be",
                    angka: "\ua9d9|\ua9d8|\ua9d7|\ua9d6|\ua9d5|\ua9d4|\ua9d3|\ua9d0|\ua9d1|\ua9d2",
                    ahir: "\ua982|\ua983|\ua981",
                    pungtuasi: "\ua9c7|\ua9c8|\ua9c9"
                }
            }
        }
    },

    bali: {
        to: {
            latin: {
                araka: {
                    "\u1b2f\u1b34": "v",
                    "\u1b1a\u1b34": "z",
                    "\u1b27\u1b34": "f",
                    "\u1b28": "p",
                    "\u1b27": "p",
                    "\u1b26": "n",
                    "\u1b25": "d",
                    "\u1b24": "d",
                    "\u1b23": "t",
                    "\u1b22": "t",
                    "\u1b21": "n",
                    "\u1b20": "d",
                    "\u1b1f": "d",
                    "\u1b1e": "d",
                    "\u1b29": "b",
                    "\u1b2a": "b",
                    "\u1b33": "h",
                    "\u1b32": "s",
                    "\u1b31": "s",
                    "\u1b30": "s",
                    "\u1b2f": "w",
                    "\u1b2e": "l",
                    "\u1b2d": "r",
                    "\u1b2c": "y",
                    "\u1b2b": "m",
                    "\u1b1d": "t",
                    "\u1b1c": "ny",
                    "\u1b1b": "j",
                    "\u1b0d": "l",
                    "\u1b0c": "r",
                    "\u1b16": "g",
                    "\u1b0b": "r",
                    "\u1b13": "k",
                    "\u1b14": "k",
                    "\u1b15": "g",
                    "\u1b17": "ng",
                    "\u1b18": "c",
                    "\u1b19": "c",
                    "\u1b1a": "j",
                    "\u1b0e": "l",
                    "\u1b33\u1b3e": "e",
                    "\u1b33\u1b38": "u",
                    "\u1b33\u1b3e": "é",
                    "\u1b06": "a",
                    "\u1b05": "a",
                    "\u1b07": "i",
                    "\u1b08": "i",
                    "\u1b09": "u",
                    "\u1b0a": "u",
                    "\u1b0f": "e",
                    "\u1b11": "o",
                    "\u1b12": "o",
                    "\u1b10": "ai",
                    "\u1b40": "o",
                    "\u1b41": "au",
                    "\u1b3b": "re",
                    "\u1b43": "e",
                    "\u1b44": "",
                    "\u1b3f": "é",
                    "\u1b3e": "é",
                    "\u1b36": "i",
                    "\u1b37": "i",
                    "\u1b38": "u",
                    "\u1b39": "u",
                    "\u1b3a": "re",
                    "\u1b3c": "le",
                    "\u1b3d": "le",
                    "\u1b42": "e",
                    "\u1b57": "7",
                    "\u1b59": "9",
                    "\u1b58": "8",
                    "\u1b56": "6",
                    "\u1b55": "5",
                    "\u1b54": "4",
                    "\u1b53": "3",
                    "\u1b52": "2",
                    "\u1b50": "0",
                    "\u1b51": "1",
                    "\u1b02": "ng",
                    "\u1b03": "r",
                    "\u1b04": "h",
                    "\u1b5f": ",",
                    "\u1b5e": ","
                },
                regna: {
                    konsonan: "\u1b2f\u1b34|\u1b1a\u1b34|\u1b27\u1b34|\u1b28|\u1b27|\u1b26|\u1b25|\u1b24|\u1b23|\u1b22|\u1b21|\u1b20|\u1b1f|\u1b1e|\u1b29|\u1b2a|\u1b33|\u1b32|\u1b31|\u1b30|\u1b2f|\u1b2e|\u1b2d|\u1b2c|\u1b2b|\u1b1d|\u1b1c|\u1b1b|\u1b0d|\u1b0c|\u1b16|\u1b0b|\u1b13|\u1b14|\u1b15|\u1b17|\u1b18|\u1b19|\u1b1a|\u1b0e",
                    swara: "\u1b33\u1b3e|\u1b33\u1b38|\u1b33\u1b3e|\u1b06|\u1b05|\u1b07|\u1b08|\u1b09|\u1b0a|\u1b0f|\u1b11|\u1b12|\u1b10",
                    rarangken: "\u1b40|\u1b41|\u1b3b|\u1b43|\u1b44|\u1b3f|\u1b3e|\u1b36|\u1b37|\u1b38|\u1b39|\u1b3a|\u1b3c|\u1b3d|\u1b42",
                    subjoin: "",
                    angka: "\u1b57|\u1b59|\u1b58|\u1b56|\u1b55|\u1b54|\u1b53|\u1b52|\u1b50|\u1b51",
                    ahir: "\u1b02|\u1b03|\u1b04|\u1b5f|\u1b5e",
                    pungtuasi: ""
                }
            }
        }
    },

    batak: {
        to: {
            latin: {
                araka: {
                    "\u1bc2": "h",
                    "\u1bd4": "m",
                    "\u1bd5": "m",
                    "\u1bd6": "t",
                    "\u1bd7": "t",
                    "\u1bd8": "s",
                    "\u1bd9": "s",
                    "\u1bda": "s",
                    "\u1bdb": "y",
                    "\u1bdc": "y",
                    "\u1bdd": "ng",
                    "\u1bde": "l",
                    "\u1bdf": "l",
                    "\u1be0": "ny",
                    "\u1be1": "c",
                    "\u1be2": "nd",
                    "\u1bd3": "r",
                    "\u1bd2": "r",
                    "\u1bc3": "h",
                    "\u1bc4": "h",
                    "\u1bc5": "b",
                    "\u1bc6": "b",
                    "\u1bc7": "p",
                    "\u1bc8": "p",
                    "\u1bc9": "n",
                    "\u1bca": "n",
                    "\u1bcb": "w",
                    "\u1bcc": "w",
                    "\u1bcd": "w",
                    "\u1bce": "g",
                    "\u1bcf": "g",
                    "\u1bd0": "j",
                    "\u1bd1": "d",
                    "\u1be3": "mb",
                    "\u1bc0": "a",
                    "\u1bc1": "a",
                    "\u1be4": "i",
                    "\u1be5": "u",
                    "\u1be7": "e",
                    "\u1be8": "e",
                    "\u1be9": "ee",
                    "\u1bea": "i",
                    "\u1beb": "i",
                    "\u1bec": "o",
                    "\u1bed": "o",
                    "\u1bee": "u",
                    "\u1bf2": "",
                    "\u1bf0": "ng",
                    "\u1bf1": "h"
                },
                regna: {
                    konsonan: "\u1bc2|\u1bd4|\u1bd5|\u1bd6|\u1bd7|\u1bd8|\u1bd9|\u1bda|\u1bdb|\u1bdc|\u1bdd|\u1bde|\u1bdf|\u1be0|\u1be1|\u1be2|\u1bd3|\u1bd2|\u1bc3|\u1bc4|\u1bc5|\u1bc6|\u1bc7|\u1bc8|\u1bc9|\u1bca|\u1bcb|\u1bcc|\u1bcd|\u1bce|\u1bcf|\u1bd0|\u1bd1|\u1be3",
                    swara: "\u1bc0|\u1bc1|\u1be4|\u1be5",
                    rarangken: "\u1be7|\u1be8|\u1be9|\u1bea|\u1beb|\u1bec|\u1bed|\u1bee|\u1bf2",
                    subjoin: "",
                    angka: "",
                    ahir: "\u1bf0|\u1bf1",
                    pungtuasi: ""
                }
            }
        }
    },

    rejang: {
        to: {
            latin: {
                araka: {
                    "\ua930": "k",
                    "\ua93c": "s",
                    "\ua93d": "r",
                    "\ua93e": "l",
                    "\ua93f": "y",
                    "\ua940": "w",
                    "\ua941": "h",
                    "\ua942": "mb",
                    "\ua943": "ngg",
                    "\ua944": "nd",
                    "\ua93b": "ny",
                    "\ua93a": "j",
                    "\ua931": "g",
                    "\ua932": "ng",
                    "\ua933": "t",
                    "\ua934": "d",
                    "\ua935": "n",
                    "\ua936": "p",
                    "\ua937": "b",
                    "\ua938": "m",
                    "\ua939": "c",
                    "\ua945": "nyj",
                    "\ua946": "a",
                    "\ua947": "i",
                    "\ua950": "n",
                    "\ua94e": "é",
                    "\ua94d": "eu",
                    "\ua94c": "au",
                    "\ua94b": "o",
                    "\ua94a": "ai",
                    "\ua949": "e",
                    "\ua948": "u",
                    "\ua953": "",
                    "\ua94f": "ng",
                    "\ua951": "r",
                    "\ua952": "h"
                },
                regna: {
                    konsonan: "\ua930|\ua93c|\ua93d|\ua93e|\ua93f|\ua940|\ua941|\ua942|\ua943|\ua944|\ua93b|\ua93a|\ua931|\ua932|\ua933|\ua934|\ua935|\ua936|\ua937|\ua938|\ua939|\ua945",
                    swara: "\ua946",
                    rarangken: "\ua947|\ua950|\ua94e|\ua94d|\ua94c|\ua94b|\ua94a|\ua949|\ua948|\ua953",
                    subjoin: "",
                    angka: "",
                    ahir: "\ua94f|\ua951|\ua952",
                    pungtuasi: ""
                }
            }
        }
    },

    bugis: {
        to: {
            latin: {
                araka: {
                    "\u1a00": "ka",
                    "\u1a01": "ga",
                    "\u1a02": "nga",
                    "\u1a03": "ngka",
                    "\u1a04": "pa",
                    "\u1a05": "ba",
                    "\u1a06": "ma",
                    "\u1a07": "mpa",
                    "\u1a08": "ta",
                    "\u1a09": "da",
                    "\u1a0a": "na",
                    "\u1a0b": "nra",
                    "\u1a0c": "ca",
                    "\u1a0d": "ja",
                    "\u1a0e": "nya",
                    "\u1a0f": "nyca",
                    "\u1a10": "ya",
                    "\u1a11": "ra",
                    "\u1a12": "la",
                    "\u1a13": "va",
                    "\u1a14": "sa",
                    "\u1a15": "a",
                    "\u1a16": "ha"
                },
                regna: {
                    konsonan: "\u1a00|\u1a01|\u1a02|\u1a03|\u1a04|\u1a05|\u1a06|\u1a07|\u1a08|\u1a09|\u1a0a|\u1a0b|\u1a0c|\u1a0d|\u1a0e|\u1a0f|\u1a10|\u1a11|\u1a12|\u1a13|\u1a14|\u1a15|\u1a16",
                    swara: "\u1a17",
                    rarangken: "\u1a17|\u1a18|\u1a19|\u1a1a|\u1a1b",
                    subjoin: "",
                    angka: "",
                    ahir: "\u1a1e|\u1a1f",
                    pungtuasi: ""
                }
            }
        }
    },

    makassar: {
        to: {
            latin: {
                araka: {
                    "\u{11EE0}": "ka",
                    "\u{11EE1}": "ga",
                    "\u{11EE2}": "nga",
                    "\u{11EE3}": "pa",
                    "\u{11EE4}": "ba",
                    "\u{11EE5}": "ma",
                    "\u{11EE6}": "ta",
                    "\u{11EE7}": "da",
                    "\u{11EE8}": "na",
                    "\u{11EE9}": "ca",
                    "\u{11EEA}": "ja",
                    "\u{11EEB}": "nya",
                    "\u{11EEC}": "ya",
                    "\u{11EED}": "ra",
                    "\u{11EEE}": "la",
                    "\u{11EEF}": "wa",
                    "\u{11EF0}": "sa",
                    "\u{11EF1}": "a"
                },
                regna: {
                    konsonan: "\u{11EE0}|\u{11EE1}|\u{11EE2}|\u{11EE3}|\u{11EE4}|\u{11EE5}|\u{11EE6}|\u{11EE7}|\u{11EE8}|\u{11EE9}|\u{11EEA}|\u{11EEB}|\u{11EEC}|\u{11EED}|\u{11EEE}|\u{11EEF}|\u{11EF0}|\u{11EF1}",
                    swara: "\u{11EF3}",
                    rarangken: "\u{11EF3}|\u{11EF4}|\u{11EF5}|\u{11EF6}",
                    subjoin: "",
                    angka: "\u{11Ef2}",
                    ahir: "",
                    pungtuasi: "\u{11EF7}|\u{11EF8}"
                }
            }
        }
    }
};
