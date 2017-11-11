exports.run = (client, text) => {
    
    if(text.includes('http')) return false;
    //Permutation list
    const arrayA = ["a", "@"];
    const arrayE = ["e", "3"];
    const arrayF = ["f", "4"];
    const arrayG = ["g", "b", "6", "p", "q", "9", "4"];
    const arrayI = ["i", "1", "|"];
    const arrayO = ["o", "0", "e", "3", "i", "a", "@"];
    const arrayP = ["p", "q"];
    const arrayQ = ["q", "p", "g,", "c"];
    const arrayR = ["r", "®"];
    const arrayS = ["s", "$"];
    const arrayT = ["t", "+"];
    const arrayU = ["u", "w", "μ", "v"];
    
    //n****r
    for (i = 0; i < arrayI.length; i++) {
        for (j = 0; j < arrayG.length; j++) {
            for (k = 0; k < arrayG.length; k++) {
                for (l = 0; l < arrayE.length; l++) {
                    var wordyDurd = "n" + arrayI[i] + arrayG[j] + arrayG[k] + arrayE[l] + "r";
                    if (text.toLowerCase().includes(wordyDurd)) return true;
                }
            }
        }
    }

    //f*ggot
    for (i = 0; i < arrayF.length; i++) {
        for (j = 0; j < arrayA.length; j++) {
            for (k = 0; k < arrayG.length; k++) {
                for (l = 0; l < arrayG.length; l++) {
                    for (m = 0; m < arrayO.length; m++) {
                        for (n = 0; n < arrayT.length; n++) {
                            var wordyDurd = arrayF[i] + arrayA[j] + arrayG[k] + arrayG[l] + arrayO[m] + arrayT[n];
                            var wordyDurdShort = arrayF[i] + arrayA[j] + arrayG[k];
                            if (text.toLowerCase().includes(wordyDurd)) return true;
                        }
                    }
                }
            }
        }
    }

    //f*g
    for (i = 0; i < arrayF.length; i++) {
        for (j = 0; j < arrayA.length; j++) {
            for (k = 0; k < arrayG.length; k++) {
                var wordyDurd = arrayF[i] + arrayA[j] + arrayG[k];
                if (text.toLowerCase().includes(wordyDurd) && text.charAt(text.search(wordyDurd) - 1) !== ' ') return true;
            }
        }
    }

    //p*ssy
    for (i = 0; i < arrayP.length; i++) {
        for (j = 0; j < arrayS.length; j++) {
            for (k = 0; k < arrayS.length; k++) {
                var wordyDurd = arrayP[i] + "u" + arrayS[j] + arrayS[k] + "y";
                var wordyDurdShort = arrayP[i] + "u" + arrayS[j] + arrayS[k];
                if (text.toLowerCase().includes(wordyDurd) || (text.toLowerCase().includes(wordyDurdShort) && text.charAt(text.search(wordyDurdShort) - 1) !== ' ')) return true;
            }
        }
    }

    //q*eer
    for (i = 0; i < arrayQ.length; i++) {
        for (j = 0; j < arrayU.length; j++) {
            for (k = 0; k < arrayE.length; k++) {
                for (l = 0; l < arrayE.length; l++) {
                    for (m = 0; m < arrayR.length; m++) {
                        var wordyDurd = arrayQ[i] + arrayU[j] + arrayE[k] + arrayE[l] + arrayR[m];
                        if (text.toLowerCase().includes(wordyDurd) || (text.toLowerCase().includes(wordyDurdShort) && text.charAt(text.search(wordyDurdShort) - 1) !== ' ')) return true;
                    }
                }
            }
        }
    }
}
