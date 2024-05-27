db.venda_apriori.drop()
db.venda_apriori.insertMany([
  {
    "id": 168,
    "item_a": "P05",
    "item_b": "P22,P23,P24",
    "suporte": 0.0013783597518952446,
    "confianca": 0.13333333333333333,
    "lift": 38.693333333333335
  },
  {
    "id": 175,
    "item_a": "P22,P23,P24",
    "item_b": "P05",
    "suporte": 0.0013783597518952446,
    "confianca": 0.39999999999999997,
    "lift": 38.69333333333333
  },
  {
    "id": 171,
    "item_a": "P05,P24",
    "item_b": "P22,P23",
    "suporte": 0.0013783597518952446,
    "confianca": 0.6666666666666667,
    "lift": 29.31313131313132
  },
  {
    "id": 170,
    "item_a": "P05,P23",
    "item_b": "P22,P24",
    "suporte": 0.0013783597518952446,
    "confianca": 0.6666666666666667,
    "lift": 28.450980392156865
  },
  {
    "id": 169,
    "item_a": "P05,P22",
    "item_b": "P23,P24",
    "suporte": 0.0013783597518952446,
    "confianca": 0.39999999999999997,
    "lift": 26.38181818181818
  },
  {
    "id": 77,
    "item_a": "P23,P27",
    "item_b": "P17",
    "suporte": 0.0013783597518952446,
    "confianca": 0.18181818181818182,
    "lift": 13.885167464114833
  },
  {
    "id": 74,
    "item_a": "P17",
    "item_b": "P23,P27",
    "suporte": 0.0013783597518952446,
    "confianca": 0.10526315789473685,
    "lift": 13.885167464114833
  },
  {
    "id": 179,
    "item_a": "P19,P20,P22",
    "item_b": "P29",
    "suporte": 0.0013783597518952446,
    "confianca": 0.6666666666666667,
    "lift": 13.624413145539908
  },
  {
    "id": 184,
    "item_a": "P21,P26",
    "item_b": "P20,P24",
    "suporte": 0.0013783597518952446,
    "confianca": 0.19999999999999998,
    "lift": 13.19090909090909
  },
  {
    "id": 183,
    "item_a": "P20,P26",
    "item_b": "P21,P24",
    "suporte": 0.0013783597518952446,
    "confianca": 0.19999999999999998,
    "lift": 11.607999999999999
  },
  {
    "id": 186,
    "item_a": "P20,P21,P24",
    "item_b": "P26",
    "suporte": 0.0013783597518952446,
    "confianca": 0.6666666666666667,
    "lift": 11.118773946360154
  },
  {
    "id": 176,
    "item_a": "P19,P29",
    "item_b": "P20,P22",
    "suporte": 0.0013783597518952446,
    "confianca": 0.2222222222222222,
    "lift": 11.118773946360154
  },
  {
    "id": 185,
    "item_a": "P24,P26",
    "item_b": "P20,P21",
    "suporte": 0.0013783597518952446,
    "confianca": 0.2857142857142857,
    "lift": 10.909774436090226
  },
  {
    "id": 75,
    "item_a": "P17,P23",
    "item_b": "P27",
    "suporte": 0.0013783597518952446,
    "confianca": 0.6666666666666667,
    "lift": 10.868913857677905
  },
  {
    "id": 9,
    "item_a": "P02",
    "item_b": "P13",
    "suporte": 0.002067539627842867,
    "confianca": 0.1875,
    "lift": 9.716517857142858
  },
  {
    "id": 10,
    "item_a": "P13",
    "item_b": "P02",
    "suporte": 0.002067539627842867,
    "confianca": 0.10714285714285714,
    "lift": 9.716517857142856
  },
  {
    "id": 65,
    "item_a": "P22,P28",
    "item_b": "P14",
    "suporte": 0.0013783597518952446,
    "confianca": 0.125,
    "lift": 9.546052631578949
  },
  {
    "id": 62,
    "item_a": "P14",
    "item_b": "P22,P28",
    "suporte": 0.0013783597518952446,
    "confianca": 0.10526315789473685,
    "lift": 9.546052631578949
  },
  {
    "id": 27,
    "item_a": "P18",
    "item_b": "P09",
    "suporte": 0.0013783597518952446,
    "confianca": 0.1176470588235294,
    "lift": 9.483660130718953
  },
  {
    "id": 26,
    "item_a": "P09",
    "item_b": "P18",
    "suporte": 0.0013783597518952446,
    "confianca": 0.1111111111111111,
    "lift": 9.483660130718953
  },
  {
    "id": 57,
    "item_a": "P05",
    "item_b": "P23,P24",
    "suporte": 0.0013783597518952446,
    "confianca": 0.13333333333333333,
    "lift": 8.793939393939393
  },
  {
    "id": 177,
    "item_a": "P20,P29",
    "item_b": "P19,P22",
    "suporte": 0.0013783597518952446,
    "confianca": 0.16666666666666669,
    "lift": 7.557291666666668
  },
  {
    "id": 178,
    "item_a": "P22,P29",
    "item_b": "P19,P20",
    "suporte": 0.0013783597518952446,
    "confianca": 0.13333333333333333,
    "lift": 7.44102564102564
  },
  {
    "id": 172,
    "item_a": "P05,P22,P23",
    "item_b": "P24",
    "suporte": 0.0013783597518952446,
    "confianca": 1,
    "lift": 7.04368932038835
  },
  {
    "id": 76,
    "item_a": "P17,P27",
    "item_b": "P23",
    "suporte": 0.0013783597518952446,
    "confianca": 1,
    "lift": 6.020746887966805
  },
  {
    "id": 173,
    "item_a": "P05,P22,P24",
    "item_b": "P23",
    "suporte": 0.0013783597518952446,
    "confianca": 1,
    "lift": 6.020746887966805
  },
  {
    "id": 51,
    "item_a": "P05",
    "item_b": "P22,P23",
    "suporte": 0.0013783597518952446,
    "confianca": 0.13333333333333333,
    "lift": 5.862626262626263
  },
  {
    "id": 181,
    "item_a": "P19,P22,P29",
    "item_b": "P20",
    "suporte": 0.0013783597518952446,
    "confianca": 1,
    "lift": 5.804
  },
  {
    "id": 63,
    "item_a": "P14,P22",
    "item_b": "P28",
    "suporte": 0.0013783597518952446,
    "confianca": 0.33333333333333337,
    "lift": 5.690196078431373
  },
  {
    "id": 54,
    "item_a": "P05",
    "item_b": "P22,P24",
    "suporte": 0.0013783597518952446,
    "confianca": 0.13333333333333333,
    "lift": 5.690196078431372
  },
  {
    "id": 188,
    "item_a": "P20,P24,P26",
    "item_b": "P21",
    "suporte": 0.0013783597518952446,
    "confianca": 1,
    "lift": 5.66796875
  },
  {
    "id": 70,
    "item_a": "P16,P20",
    "item_b": "P22",
    "suporte": 0.0013783597518952446,
    "confianca": 1,
    "lift": 5.055749128919861
  },
  {
    "id": 174,
    "item_a": "P05,P23,P24",
    "item_b": "P22",
    "suporte": 0.0013783597518952446,
    "confianca": 1,
    "lift": 5.055749128919861
  },
  {
    "id": 58,
    "item_a": "P05,P23",
    "item_b": "P24",
    "suporte": 0.0013783597518952446,
    "confianca": 0.6666666666666667,
    "lift": 4.6957928802589
  },
  {
    "id": 60,
    "item_a": "P13,P20",
    "item_b": "P24",
    "suporte": 0.0013783597518952446,
    "confianca": 0.6666666666666667,
    "lift": 4.6957928802589
  },
  {
    "id": 187,
    "item_a": "P20,P21,P26",
    "item_b": "P24",
    "suporte": 0.0013783597518952446,
    "confianca": 0.6666666666666667,
    "lift": 4.6957928802589
  },
  {
    "id": 126,
    "item_a": "P20,P28",
    "item_b": "P26",
    "suporte": 0.0013783597518952446,
    "confianca": 0.25,
    "lift": 4.169540229885057
  },
  {
    "id": 96,
    "item_a": "P19,P26",
    "item_b": "P27",
    "suporte": 0.0013783597518952446,
    "confianca": 0.25,
    "lift": 4.075842696629214
  },
  {
    "id": 59,
    "item_a": "P05,P24",
    "item_b": "P23",
    "suporte": 0.0013783597518952446,
    "confianca": 0.6666666666666667,
    "lift": 4.0138312586445375
  },
  {
    "id": 49,
    "item_a": "P01,P19",
    "item_b": "P20",
    "suporte": 0.0013783597518952446,
    "confianca": 0.6666666666666667,
    "lift": 3.869333333333334
  },
  {
    "id": 61,
    "item_a": "P13,P24",
    "item_b": "P20",
    "suporte": 0.0013783597518952446,
    "confianca": 0.6666666666666667,
    "lift": 3.869333333333334
  },
  {
    "id": 189,
    "item_a": "P21,P24,P26",
    "item_b": "P20",
    "suporte": 0.0013783597518952446,
    "confianca": 0.6666666666666667,
    "lift": 3.869333333333334
  },
  {
    "id": 125,
    "item_a": "P20,P26",
    "item_b": "P28",
    "suporte": 0.0013783597518952446,
    "confianca": 0.19999999999999998,
    "lift": 3.414117647058823
  },
  {
    "id": 53,
    "item_a": "P05,P23",
    "item_b": "P22",
    "suporte": 0.0013783597518952446,
    "confianca": 0.6666666666666667,
    "lift": 3.370499419279908
  },
  {
    "id": 56,
    "item_a": "P05,P24",
    "item_b": "P22",
    "suporte": 0.0013783597518952446,
    "confianca": 0.6666666666666667,
    "lift": 3.370499419279908
  },
  {
    "id": 64,
    "item_a": "P14,P28",
    "item_b": "P22",
    "suporte": 0.0013783597518952446,
    "confianca": 0.6666666666666667,
    "lift": 3.370499419279908
  },
  {
    "id": 180,
    "item_a": "P19,P20,P29",
    "item_b": "P22",
    "suporte": 0.0013783597518952446,
    "confianca": 0.6666666666666667,
    "lift": 3.370499419279908
  },
  {
    "id": 144,
    "item_a": "P21,P26",
    "item_b": "P25",
    "suporte": 0.0027567195037904893,
    "confianca": 0.39999999999999997,
    "lift": 3.3356321839080456
  },
  {
    "id": 97,
    "item_a": "P19,P27",
    "item_b": "P26",
    "suporte": 0.0013783597518952446,
    "confianca": 0.19999999999999998,
    "lift": 3.3356321839080456
  },
  {
    "id": 14,
    "item_a": "P03",
    "item_b": "P27",
    "suporte": 0.002067539627842867,
    "confianca": 0.19999999999999998,
    "lift": 3.2606741573033706
  },
  {
    "id": 158,
    "item_a": "P22,P27",
    "item_b": "P28",
    "suporte": 0.0013783597518952446,
    "confianca": 0.18181818181818182,
    "lift": 3.1037433155080216
  },
  {
    "id": 66,
    "item_a": "P15,P21",
    "item_b": "P23",
    "suporte": 0.0013783597518952446,
    "confianca": 0.5,
    "lift": 3.0103734439834025
  },
  {
    "id": 68,
    "item_a": "P16,P19",
    "item_b": "P23",
    "suporte": 0.0013783597518952446,
    "confianca": 0.5,
    "lift": 3.0103734439834025
  },
  {
    "id": 182,
    "item_a": "P20,P22,P29",
    "item_b": "P19",
    "suporte": 0.0013783597518952446,
    "confianca": 0.5,
    "lift": 2.9979338842975207
  },
  {
    "id": 79,
    "item_a": "P19,P26",
    "item_b": "P20",
    "suporte": 0.0027567195037904893,
    "confianca": 0.5,
    "lift": 2.902
  },
  {
    "id": 127,
    "item_a": "P26,P28",
    "item_b": "P20",
    "suporte": 0.0013783597518952446,
    "confianca": 0.5,
    "lift": 2.902
  },
  {
    "id": 109,
    "item_a": "P20,P22",
    "item_b": "P29",
    "suporte": 0.0027567195037904893,
    "confianca": 0.13793103448275862,
    "lift": 2.818844099077222
  },
  {
    "id": 55,
    "item_a": "P05,P22",
    "item_b": "P24",
    "suporte": 0.0013783597518952446,
    "confianca": 0.39999999999999997,
    "lift": 2.81747572815534
  },
  {
    "id": 143,
    "item_a": "P21,P25",
    "item_b": "P26",
    "suporte": 0.0027567195037904893,
    "confianca": 0.16666666666666669,
    "lift": 2.7796934865900385
  },
  {
    "id": 35,
    "item_a": "P14",
    "item_b": "P28",
    "suporte": 0.002067539627842867,
    "confianca": 0.15789473684210525,
    "lift": 2.6953560371517025
  },
  {
    "id": 78,
    "item_a": "P19,P20",
    "item_b": "P26",
    "suporte": 0.0027567195037904893,
    "confianca": 0.15384615384615383,
    "lift": 2.5658709106984965
  },
  {
    "id": 145,
    "item_a": "P25,P26",
    "item_b": "P21",
    "suporte": 0.0027567195037904893,
    "confianca": 0.4444444444444444,
    "lift": 2.5190972222222223
  },
  {
    "id": 141,
    "item_a": "P24,P26",
    "item_b": "P21",
    "suporte": 0.002067539627842867,
    "confianca": 0.42857142857142855,
    "lift": 2.429129464285714
  },
  {
    "id": 52,
    "item_a": "P05,P22",
    "item_b": "P23",
    "suporte": 0.0013783597518952446,
    "confianca": 0.39999999999999997,
    "lift": 2.408298755186722
  },
  {
    "id": 80,
    "item_a": "P20,P26",
    "item_b": "P19",
    "suporte": 0.0027567195037904893,
    "confianca": 0.39999999999999997,
    "lift": 2.3983471074380165
  },
  {
    "id": 50,
    "item_a": "P01,P20",
    "item_b": "P19",
    "suporte": 0.0013783597518952446,
    "confianca": 0.39999999999999997,
    "lift": 2.3983471074380165
  },
  {
    "id": 69,
    "item_a": "P16,P23",
    "item_b": "P19",
    "suporte": 0.0013783597518952446,
    "confianca": 0.39999999999999997,
    "lift": 2.3983471074380165
  },
  {
    "id": 83,
    "item_a": "P19,P20",
    "item_b": "P29",
    "suporte": 0.002067539627842867,
    "confianca": 0.11538461538461538,
    "lift": 2.3580715059588297
  },
  {
    "id": 72,
    "item_a": "P16,P21",
    "item_b": "P24",
    "suporte": 0.0013783597518952446,
    "confianca": 0.33333333333333337,
    "lift": 2.34789644012945
  },
  {
    "id": 67,
    "item_a": "P15,P23",
    "item_b": "P21",
    "suporte": 0.0013783597518952446,
    "confianca": 0.39999999999999997,
    "lift": 2.2671875
  },
  {
    "id": 13,
    "item_a": "P03",
    "item_b": "P26",
    "suporte": 0.0013783597518952446,
    "confianca": 0.13333333333333333,
    "lift": 2.223754789272031
  },
  {
    "id": 30,
    "item_a": "P11",
    "item_b": "P29",
    "suporte": 0.0013783597518952446,
    "confianca": 0.10526315789473685,
    "lift": 2.1512231282431435
  },
  {
    "id": 36,
    "item_a": "P14",
    "item_b": "P29",
    "suporte": 0.0013783597518952446,
    "confianca": 0.10526315789473685,
    "lift": 2.1512231282431435
  },
  {
    "id": 140,
    "item_a": "P21,P26",
    "item_b": "P24",
    "suporte": 0.002067539627842867,
    "confianca": 0.3,
    "lift": 2.113106796116505
  },
  {
    "id": 11,
    "item_a": "P02",
    "item_b": "P26",
    "suporte": 0.0013783597518952446,
    "confianca": 0.125,
    "lift": 2.0847701149425286
  },
  {
    "id": 132,
    "item_a": "P22,P27",
    "item_b": "P21",
    "suporte": 0.0027567195037904893,
    "confianca": 0.36363636363636365,
    "lift": 2.0610795454545454
  },
  {
    "id": 159,
    "item_a": "P22,P28",
    "item_b": "P27",
    "suporte": 0.0013783597518952446,
    "confianca": 0.125,
    "lift": 2.037921348314607
  },
  {
    "id": 165,
    "item_a": "P23,P25",
    "item_b": "P27",
    "suporte": 0.0013783597518952446,
    "confianca": 0.125,
    "lift": 2.037921348314607
  },
  {
    "id": 157,
    "item_a": "P25,P29",
    "item_b": "P22",
    "suporte": 0.0013783597518952446,
    "confianca": 0.39999999999999997,
    "lift": 2.0222996515679443
  },
  {
    "id": 163,
    "item_a": "P23,P29",
    "item_b": "P24",
    "suporte": 0.0013783597518952446,
    "confianca": 0.2857142857142857,
    "lift": 2.0124826629681
  },
  {
    "id": 25,
    "item_a": "P08",
    "item_b": "P28",
    "suporte": 0.0013783597518952446,
    "confianca": 0.1176470588235294,
    "lift": 2.008304498269896
  },
  {
    "id": 139,
    "item_a": "P21,P24",
    "item_b": "P26",
    "suporte": 0.002067539627842867,
    "confianca": 0.11999999999999998,
    "lift": 2.001379310344827
  },
  {
    "id": 32,
    "item_a": "P12",
    "item_b": "P25",
    "suporte": 0.0027567195037904893,
    "confianca": 0.2352941176470588,
    "lift": 1.9621365787694385
  },
  {
    "id": 24,
    "item_a": "P08",
    "item_b": "P26",
    "suporte": 0.0013783597518952446,
    "confianca": 0.1176470588235294,
    "lift": 1.9621365787694385
  },
  {
    "id": 84,
    "item_a": "P19,P29",
    "item_b": "P20",
    "suporte": 0.002067539627842867,
    "confianca": 0.3333333333333333,
    "lift": 1.9346666666666665
  },
  {
    "id": 152,
    "item_a": "P22,P27",
    "item_b": "P24",
    "suporte": 0.002067539627842867,
    "confianca": 0.2727272727272727,
    "lift": 1.9210061782877317
  },
  {
    "id": 155,
    "item_a": "P24,P29",
    "item_b": "P22",
    "suporte": 0.002067539627842867,
    "confianca": 0.375,
    "lift": 1.8959059233449478
  },
  {
    "id": 73,
    "item_a": "P16,P24",
    "item_b": "P21",
    "suporte": 0.0013783597518952446,
    "confianca": 0.33333333333333337,
    "lift": 1.889322916666667
  },
  {
    "id": 45,
    "item_a": "P17",
    "item_b": "P28",
    "suporte": 0.0013783597518952446,
    "confianca": 0.10526315789473685,
    "lift": 1.7969040247678019
  },
  {
    "id": 119,
    "item_a": "P20,P25",
    "item_b": "P26",
    "suporte": 0.0013783597518952446,
    "confianca": 0.10526315789473685,
    "lift": 1.7555958862673928
  },
  {
    "id": 101,
    "item_a": "P21,P26",
    "item_b": "P20",
    "suporte": 0.002067539627842867,
    "confianca": 0.3,
    "lift": 1.7412
  },
  {
    "id": 167,
    "item_a": "P25,P27",
    "item_b": "P23",
    "suporte": 0.0013783597518952446,
    "confianca": 0.2857142857142857,
    "lift": 1.7202133965619442
  },
  {
    "id": 102,
    "item_a": "P20,P21",
    "item_b": "P27",
    "suporte": 0.0027567195037904893,
    "confianca": 0.10526315789473685,
    "lift": 1.7161442933175637
  },
  {
    "id": 44,
    "item_a": "P17",
    "item_b": "P27",
    "suporte": 0.0013783597518952446,
    "confianca": 0.10526315789473685,
    "lift": 1.7161442933175637
  },
  {
    "id": 122,
    "item_a": "P20,P25",
    "item_b": "P27",
    "suporte": 0.0013783597518952446,
    "confianca": 0.10526315789473685,
    "lift": 1.7161442933175637
  },
  {
    "id": 98,
    "item_a": "P26,P27",
    "item_b": "P19",
    "suporte": 0.0013783597518952446,
    "confianca": 0.2857142857142857,
    "lift": 1.7131050767414402
  },
  {
    "id": 100,
    "item_a": "P20,P26",
    "item_b": "P21",
    "suporte": 0.002067539627842867,
    "confianca": 0.3,
    "lift": 1.700390625
  },
  {
    "id": 110,
    "item_a": "P20,P29",
    "item_b": "P22",
    "suporte": 0.0027567195037904893,
    "confianca": 0.33333333333333337,
    "lift": 1.685249709639954
  },
  {
    "id": 160,
    "item_a": "P27,P28",
    "item_b": "P22",
    "suporte": 0.0013783597518952446,
    "confianca": 0.33333333333333337,
    "lift": 1.685249709639954
  },
  {
    "id": 17,
    "item_a": "P05",
    "item_b": "P22",
    "suporte": 0.0034458993797381117,
    "confianca": 0.3333333333333333,
    "lift": 1.6852497096399535
  },
  {
    "id": 89,
    "item_a": "P19,P28",
    "item_b": "P22",
    "suporte": 0.002067539627842867,
    "confianca": 0.3333333333333333,
    "lift": 1.6852497096399535
  },
  {
    "id": 120,
    "item_a": "P20,P26",
    "item_b": "P25",
    "suporte": 0.0013783597518952446,
    "confianca": 0.19999999999999998,
    "lift": 1.6678160919540228
  },
  {
    "id": 71,
    "item_a": "P16,P22",
    "item_b": "P20",
    "suporte": 0.0013783597518952446,
    "confianca": 0.2857142857142857,
    "lift": 1.6582857142857141
  },
  {
    "id": 116,
    "item_a": "P24,P26",
    "item_b": "P20",
    "suporte": 0.0013783597518952446,
    "confianca": 0.2857142857142857,
    "lift": 1.6582857142857141
  },
  {
    "id": 124,
    "item_a": "P25,P27",
    "item_b": "P20",
    "suporte": 0.0013783597518952446,
    "confianca": 0.2857142857142857,
    "lift": 1.6582857142857141
  },
  {
    "id": 47,
    "item_a": "P18",
    "item_b": "P24",
    "suporte": 0.0027567195037904893,
    "confianca": 0.2352941176470588,
    "lift": 1.657338663620788
  },
  {
    "id": 42,
    "item_a": "P16",
    "item_b": "P24",
    "suporte": 0.004135079255685734,
    "confianca": 0.23076923076923075,
    "lift": 1.6254667662434652
  },
  {
    "id": 103,
    "item_a": "P20,P27",
    "item_b": "P21",
    "suporte": 0.0027567195037904893,
    "confianca": 0.2857142857142857,
    "lift": 1.6194196428571428
  },
  {
    "id": 147,
    "item_a": "P25,P27",
    "item_b": "P21",
    "suporte": 0.0013783597518952446,
    "confianca": 0.2857142857142857,
    "lift": 1.6194196428571428
  },
  {
    "id": 34,
    "item_a": "P14",
    "item_b": "P22",
    "suporte": 0.004135079255685734,
    "confianca": 0.3157894736842105,
    "lift": 1.5965523565010087
  },
  {
    "id": 38,
    "item_a": "P15",
    "item_b": "P24",
    "suporte": 0.004135079255685734,
    "confianca": 0.2222222222222222,
    "lift": 1.5652642934196332
  },
  {
    "id": 16,
    "item_a": "P04",
    "item_b": "P25",
    "suporte": 0.002067539627842867,
    "confianca": 0.1875,
    "lift": 1.5635775862068966
  },
  {
    "id": 104,
    "item_a": "P21,P27",
    "item_b": "P20",
    "suporte": 0.0027567195037904893,
    "confianca": 0.26666666666666666,
    "lift": 1.5477333333333334
  },
  {
    "id": 111,
    "item_a": "P22,P29",
    "item_b": "P20",
    "suporte": 0.0027567195037904893,
    "confianca": 0.26666666666666666,
    "lift": 1.5477333333333334
  },
  {
    "id": 135,
    "item_a": "P23,P27",
    "item_b": "P21",
    "suporte": 0.002067539627842867,
    "confianca": 0.2727272727272727,
    "lift": 1.545809659090909
  },
  {
    "id": 166,
    "item_a": "P23,P27",
    "item_b": "P25",
    "suporte": 0.0013783597518952446,
    "confianca": 0.18181818181818182,
    "lift": 1.51619644723093
  },
  {
    "id": 164,
    "item_a": "P24,P29",
    "item_b": "P23",
    "suporte": 0.0013783597518952446,
    "confianca": 0.25,
    "lift": 1.5051867219917012
  },
  {
    "id": 93,
    "item_a": "P23,P25",
    "item_b": "P19",
    "suporte": 0.0027567195037904893,
    "confianca": 0.25,
    "lift": 1.4989669421487604
  },
  {
    "id": 85,
    "item_a": "P20,P29",
    "item_b": "P19",
    "suporte": 0.002067539627842867,
    "confianca": 0.25,
    "lift": 1.4989669421487604
  },
  {
    "id": 82,
    "item_a": "P20,P28",
    "item_b": "P19",
    "suporte": 0.0013783597518952446,
    "confianca": 0.25,
    "lift": 1.4989669421487604
  },
  {
    "id": 33,
    "item_a": "P14",
    "item_b": "P21",
    "suporte": 0.0034458993797381117,
    "confianca": 0.26315789473684215,
    "lift": 1.4915707236842108
  },
  {
    "id": 43,
    "item_a": "P17",
    "item_b": "P24",
    "suporte": 0.0027567195037904893,
    "confianca": 0.2105263157894737,
    "lift": 1.4828819621870213
  },
  {
    "id": 7,
    "item_a": "P01",
    "item_b": "P20",
    "suporte": 0.0034458993797381117,
    "confianca": 0.25,
    "lift": 1.451
  },
  {
    "id": 118,
    "item_a": "P24,P29",
    "item_b": "P20",
    "suporte": 0.0013783597518952446,
    "confianca": 0.25,
    "lift": 1.451
  },
  {
    "id": 150,
    "item_a": "P23,P28",
    "item_b": "P22",
    "suporte": 0.0013783597518952446,
    "confianca": 0.2857142857142857,
    "lift": 1.4444997511199602
  },
  {
    "id": 151,
    "item_a": "P23,P29",
    "item_b": "P22",
    "suporte": 0.0013783597518952446,
    "confianca": 0.2857142857142857,
    "lift": 1.4444997511199602
  },
  {
    "id": 23,
    "item_a": "P08",
    "item_b": "P23",
    "suporte": 0.0027567195037904893,
    "confianca": 0.2352941176470588,
    "lift": 1.4166463265804246
  },
  {
    "id": 31,
    "item_a": "P12",
    "item_b": "P19",
    "suporte": 0.0027567195037904893,
    "confianca": 0.2352941176470588,
    "lift": 1.4107924161400096
  },
  {
    "id": 19,
    "item_a": "P05",
    "item_b": "P24",
    "suporte": 0.002067539627842867,
    "confianca": 0.19999999999999998,
    "lift": 1.40873786407767
  },
  {
    "id": 154,
    "item_a": "P22,P29",
    "item_b": "P24",
    "suporte": 0.002067539627842867,
    "confianca": 0.19999999999999998,
    "lift": 1.40873786407767
  },
  {
    "id": 115,
    "item_a": "P20,P26",
    "item_b": "P24",
    "suporte": 0.0013783597518952446,
    "confianca": 0.19999999999999998,
    "lift": 1.40873786407767
  },
  {
    "id": 153,
    "item_a": "P24,P27",
    "item_b": "P22",
    "suporte": 0.002067539627842867,
    "confianca": 0.2727272727272727,
    "lift": 1.3788406715235983
  },
  {
    "id": 22,
    "item_a": "P08",
    "item_b": "P20",
    "suporte": 0.0027567195037904893,
    "confianca": 0.2352941176470588,
    "lift": 1.3656470588235292
  },
  {
    "id": 40,
    "item_a": "P16",
    "item_b": "P22",
    "suporte": 0.004824259131633356,
    "confianca": 0.2692307692307692,
    "lift": 1.3611632270168856
  },
  {
    "id": 131,
    "item_a": "P21,P27",
    "item_b": "P22",
    "suporte": 0.0027567195037904893,
    "confianca": 0.26666666666666666,
    "lift": 1.3481997677119628
  },
  {
    "id": 29,
    "item_a": "P09",
    "item_b": "P23",
    "suporte": 0.0027567195037904893,
    "confianca": 0.2222222222222222,
    "lift": 1.3379437528815121
  },
  {
    "id": 92,
    "item_a": "P19,P23",
    "item_b": "P25",
    "suporte": 0.0027567195037904893,
    "confianca": 0.15999999999999998,
    "lift": 1.3342528735632182
  },
  {
    "id": 136,
    "item_a": "P21,P24",
    "item_b": "P25",
    "suporte": 0.0027567195037904893,
    "confianca": 0.15999999999999998,
    "lift": 1.3342528735632182
  },
  {
    "id": 28,
    "item_a": "P09",
    "item_b": "P19",
    "suporte": 0.0027567195037904893,
    "confianca": 0.2222222222222222,
    "lift": 1.3324150596877868
  },
  {
    "id": 162,
    "item_a": "P23,P25",
    "item_b": "P24",
    "suporte": 0.002067539627842867,
    "confianca": 0.1875,
    "lift": 1.3206917475728157
  },
  {
    "id": 39,
    "item_a": "P16",
    "item_b": "P21",
    "suporte": 0.004135079255685734,
    "confianca": 0.23076923076923075,
    "lift": 1.3079927884615383
  },
  {
    "id": 81,
    "item_a": "P19,P28",
    "item_b": "P20",
    "suporte": 0.0013783597518952446,
    "confianca": 0.2222222222222222,
    "lift": 1.2897777777777777
  },
  {
    "id": 113,
    "item_a": "P23,P26",
    "item_b": "P20",
    "suporte": 0.0013783597518952446,
    "confianca": 0.2222222222222222,
    "lift": 1.2897777777777777
  },
  {
    "id": 121,
    "item_a": "P25,P26",
    "item_b": "P20",
    "suporte": 0.0013783597518952446,
    "confianca": 0.2222222222222222,
    "lift": 1.2897777777777777
  },
  {
    "id": 108,
    "item_a": "P20,P28",
    "item_b": "P22",
    "suporte": 0.0013783597518952446,
    "confianca": 0.25,
    "lift": 1.2639372822299653
  },
  {
    "id": 8,
    "item_a": "P01",
    "item_b": "P25",
    "suporte": 0.002067539627842867,
    "confianca": 0.15,
    "lift": 1.2508620689655172
  },
  {
    "id": 12,
    "item_a": "P03",
    "item_b": "P23",
    "suporte": 0.002067539627842867,
    "confianca": 0.19999999999999998,
    "lift": 1.204149377593361
  },
  {
    "id": 18,
    "item_a": "P05",
    "item_b": "P23",
    "suporte": 0.002067539627842867,
    "confianca": 0.19999999999999998,
    "lift": 1.204149377593361
  },
  {
    "id": 134,
    "item_a": "P21,P27",
    "item_b": "P23",
    "suporte": 0.002067539627842867,
    "confianca": 0.19999999999999998,
    "lift": 1.204149377593361
  },
  {
    "id": 94,
    "item_a": "P19,P27",
    "item_b": "P23",
    "suporte": 0.0013783597518952446,
    "confianca": 0.19999999999999998,
    "lift": 1.204149377593361
  },
  {
    "id": 112,
    "item_a": "P20,P26",
    "item_b": "P23",
    "suporte": 0.0013783597518952446,
    "confianca": 0.19999999999999998,
    "lift": 1.204149377593361
  },
  {
    "id": 130,
    "item_a": "P22,P23",
    "item_b": "P21",
    "suporte": 0.004824259131633356,
    "confianca": 0.21212121212121213,
    "lift": 1.2022964015151516
  },
  {
    "id": 123,
    "item_a": "P20,P27",
    "item_b": "P25",
    "suporte": 0.0013783597518952446,
    "confianca": 0.14285714285714285,
    "lift": 1.1912972085385878
  },
  {
    "id": 88,
    "item_a": "P19,P24",
    "item_b": "P22",
    "suporte": 0.0027567195037904893,
    "confianca": 0.2352941176470588,
    "lift": 1.1895880303340847
  },
  {
    "id": 137,
    "item_a": "P21,P25",
    "item_b": "P24",
    "suporte": 0.0027567195037904893,
    "confianca": 0.16666666666666669,
    "lift": 1.173948220064725
  },
  {
    "id": 117,
    "item_a": "P20,P29",
    "item_b": "P24",
    "suporte": 0.0013783597518952446,
    "confianca": 0.16666666666666669,
    "lift": 1.173948220064725
  },
  {
    "id": 41,
    "item_a": "P16",
    "item_b": "P23",
    "suporte": 0.0034458993797381117,
    "confianca": 0.1923076923076923,
    "lift": 1.1578359399936162
  },
  {
    "id": 105,
    "item_a": "P20,P22",
    "item_b": "P25",
    "suporte": 0.0027567195037904893,
    "confianca": 0.13793103448275862,
    "lift": 1.1502179944510504
  },
  {
    "id": 20,
    "item_a": "P06",
    "item_b": "P22",
    "suporte": 0.0034458993797381117,
    "confianca": 0.22727272727272727,
    "lift": 1.149033892936332
  },
  {
    "id": 149,
    "item_a": "P23,P24",
    "item_b": "P22",
    "suporte": 0.0034458993797381117,
    "confianca": 0.22727272727272727,
    "lift": 1.149033892936332
  },
  {
    "id": 129,
    "item_a": "P21,P23",
    "item_b": "P22",
    "suporte": 0.004824259131633356,
    "confianca": 0.22580645161290322,
    "lift": 1.1416207710464201
  },
  {
    "id": 21,
    "item_a": "P06",
    "item_b": "P25",
    "suporte": 0.002067539627842867,
    "confianca": 0.13636363636363635,
    "lift": 1.1371473354231973
  },
  {
    "id": 161,
    "item_a": "P23,P24",
    "item_b": "P25",
    "suporte": 0.002067539627842867,
    "confianca": 0.13636363636363635,
    "lift": 1.1371473354231973
  },
  {
    "id": 138,
    "item_a": "P24,P25",
    "item_b": "P21",
    "suporte": 0.0027567195037904893,
    "confianca": 0.19999999999999998,
    "lift": 1.13359375
  },
  {
    "id": 87,
    "item_a": "P19,P27",
    "item_b": "P21",
    "suporte": 0.0013783597518952446,
    "confianca": 0.19999999999999998,
    "lift": 1.13359375
  },
  {
    "id": 90,
    "item_a": "P22,P28",
    "item_b": "P19",
    "suporte": 0.002067539627842867,
    "confianca": 0.1875,
    "lift": 1.1242252066115703
  },
  {
    "id": 91,
    "item_a": "P19,P29",
    "item_b": "P22",
    "suporte": 0.0013783597518952446,
    "confianca": 0.2222222222222222,
    "lift": 1.1234998064266357
  },
  {
    "id": 133,
    "item_a": "P21,P28",
    "item_b": "P22",
    "suporte": 0.0013783597518952446,
    "confianca": 0.2222222222222222,
    "lift": 1.1234998064266357
  },
  {
    "id": 37,
    "item_a": "P15",
    "item_b": "P23",
    "suporte": 0.0034458993797381117,
    "confianca": 0.18518518518518517,
    "lift": 1.11495312740126
  },
  {
    "id": 146,
    "item_a": "P21,P27",
    "item_b": "P25",
    "suporte": 0.0013783597518952446,
    "confianca": 0.13333333333333333,
    "lift": 1.1118773946360154
  },
  {
    "id": 156,
    "item_a": "P22,P29",
    "item_b": "P25",
    "suporte": 0.0013783597518952446,
    "confianca": 0.13333333333333333,
    "lift": 1.1118773946360154
  },
  {
    "id": 95,
    "item_a": "P23,P27",
    "item_b": "P19",
    "suporte": 0.0013783597518952446,
    "confianca": 0.18181818181818182,
    "lift": 1.0901577761081893
  },
  {
    "id": 99,
    "item_a": "P20,P23",
    "item_b": "P21",
    "suporte": 0.0034458993797381117,
    "confianca": 0.1923076923076923,
    "lift": 1.0899939903846152
  },
  {
    "id": 15,
    "item_a": "P04",
    "item_b": "P20",
    "suporte": 0.002067539627842867,
    "confianca": 0.1875,
    "lift": 1.08825
  },
  {
    "id": 48,
    "item_a": "P29",
    "item_b": "P22",
    "suporte": 0.010337698139214336,
    "confianca": 0.21126760563380284,
    "lift": 1.0681160131520835
  },
  {
    "id": 148,
    "item_a": "P22,P23",
    "item_b": "P24",
    "suporte": 0.0034458993797381117,
    "confianca": 0.15151515151515152,
    "lift": 1.0672256546042955
  },
  {
    "id": 106,
    "item_a": "P20,P25",
    "item_b": "P22",
    "suporte": 0.0027567195037904893,
    "confianca": 0.2105263157894737,
    "lift": 1.0643682376673391
  },
  {
    "id": 107,
    "item_a": "P22,P25",
    "item_b": "P20",
    "suporte": 0.0027567195037904893,
    "confianca": 0.18181818181818182,
    "lift": 1.0552727272727274
  },
  {
    "id": 114,
    "item_a": "P23,P27",
    "item_b": "P20",
    "suporte": 0.0013783597518952446,
    "confianca": 0.18181818181818182,
    "lift": 1.0552727272727274
  },
  {
    "id": 128,
    "item_a": "P21,P22",
    "item_b": "P23",
    "suporte": 0.004824259131633356,
    "confianca": 0.175,
    "lift": 1.053630705394191
  },
  {
    "id": 142,
    "item_a": "P24,P27",
    "item_b": "P21",
    "suporte": 0.0013783597518952446,
    "confianca": 0.18181818181818182,
    "lift": 1.0305397727272727
  },
  {
    "id": 46,
    "item_a": "P18",
    "item_b": "P20",
    "suporte": 0.002067539627842867,
    "confianca": 0.1764705882352941,
    "lift": 1.024235294117647
  },
  {
    "id": 86,
    "item_a": "P19,P24",
    "item_b": "P21",
    "suporte": 0.002067539627842867,
    "confianca": 0.1764705882352941,
    "lift": 1.0002297794117647
  },
  {
    "id": 3,
    "item_a": "",
    "item_b": "P22",
    "suporte": 0.1977946243969676,
    "confianca": 0.1977946243969676,
    "lift": 1
  },
  {
    "id": 2,
    "item_a": "",
    "item_b": "P21",
    "suporte": 0.17643004824259131,
    "confianca": 0.17643004824259131,
    "lift": 1
  },
  {
    "id": 1,
    "item_a": "",
    "item_b": "P20",
    "suporte": 0.17229496898690558,
    "confianca": 0.17229496898690558,
    "lift": 1
  },
  {
    "id": 0,
    "item_a": "",
    "item_b": "P19",
    "suporte": 0.1667815299793246,
    "confianca": 0.1667815299793246,
    "lift": 1
  },
  {
    "id": 4,
    "item_a": "",
    "item_b": "P23",
    "suporte": 0.16609235010337697,
    "confianca": 0.16609235010337697,
    "lift": 1
  },
  {
    "id": 5,
    "item_a": "",
    "item_b": "P24",
    "suporte": 0.1419710544452102,
    "confianca": 0.1419710544452102,
    "lift": 1
  },
  {
    "id": 6,
    "item_a": "",
    "item_b": "P25",
    "suporte": 0.11991729841488628,
    "confianca": 0.11991729841488628,
    "lift": 1
  }
])