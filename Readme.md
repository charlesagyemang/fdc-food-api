## API DOCS

#### GET FOOD BY FOODNAME
#### /food/find

#### Post Body
```javascript
{
  foodName: 'Jollof'
}
```

#### Response <SUCCESS>
```javascript
[
      {
        fdcId: 699150,
        description: 'JOLLOF RICE PILAF SEASONING AUTHENTIC AFRICAN SPICES, JOLLOF RICE PILAF SEASONING',
        dataType: 'Branded',
        gtinUpc: '861521000203',
        publishedDate: '2019-12-06',
        brandOwner: 'IYA FOODS',
        ingredients: 'TURMERIC, PAPRIKA, CHILI PEPPER, BLACK PEPPER, CUMIN, CORIANDER, FENUGREEK, CLOVES, NUTMEG, ONION, GARLIC, GINGER, THYME, YELLOW MAIZE, SALT, SUGAR',
        foodNutrients: [
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object]
        ],
        allHighlightFields: '',
        score: -43.235466
      },
      {
        fdcId: 436752,
        description: "NEILLY'S FOODS, JOLLOF RICE MIX",
        dataType: 'Branded',
        gtinUpc: '188314000074',
        publishedDate: '2019-04-01',
        brandOwner: 'Ultimate Seasonings LLC',
        ingredients: 'LONG GRAIN PARBOILED RICE, TOMATO POWDER, SUNDRIED TOMATO, ONION FLAKES, CHOPPED GARLIC FLAKES, RED PEPPER, SALT, BLACK PEPPER, SPICES.',
        foodNutrients: [
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object]
        ],
        allHighlightFields: '',
        score: -60.56096
      }
]
```

#### Single Response From Array <SUCCESS>
```javascript
{
      fdcId: 699150,
      description: 'JOLLOF RICE PILAF SEASONING AUTHENTIC AFRICAN SPICES, JOLLOF RICE PILAF SEASONING',
      dataType: 'Branded',
      gtinUpc: '861521000203',
      publishedDate: '2019-12-06',
      brandOwner: 'IYA FOODS',
      ingredients: 'TURMERIC, PAPRIKA, CHILI PEPPER, BLACK PEPPER, CUMIN, CORIANDER, FENUGREEK, CLOVES, NUTMEG, ONION, GARLIC, GINGER, THYME, YELLOW MAIZE, SALT, SUGAR',
      foodNutrients: [
        {
          nutrientId: 1003,
          nutrientName: 'Protein',
          nutrientNumber: '203',
          unitName: 'G',
          derivationCode: 'LCCD',
          derivationDescription: 'Calculated from a daily value percentage per serving size measure',
          value: 0
        },
        {
          nutrientId: 1004,
          nutrientName: 'Total lipid (fat)',
          nutrientNumber: '204',
          unitName: 'G',
          derivationCode: 'LCCD',
          derivationDescription: 'Calculated from a daily value percentage per serving size measure',
          value: 0
        },
        {
          nutrientId: 1005,
          nutrientName: 'Carbohydrate, by difference',
          nutrientNumber: '205',
          unitName: 'G',
          derivationCode: 'LCCD',
          derivationDescription: 'Calculated from a daily value percentage per serving size measure',
          value: 0
        },
        {
          nutrientId: 1008,
          nutrientName: 'Energy',
          nutrientNumber: '208',
          unitName: 'KCAL',
          derivationCode: 'LCCS',
          derivationDescription: 'Calculated from value per serving size measure',
          value: 300
        },
        {
          nutrientId: 2000,
          nutrientName: 'Sugars, total including NLEA',
          nutrientNumber: '269',
          unitName: 'G',
          derivationCode: 'LCSL',
          derivationDescription: 'Calculated from a less than value per serving size measure',
          value: 20
        },
        {
          nutrientId: 1079,
          nutrientName: 'Fiber, total dietary',
          nutrientNumber: '291',
          unitName: 'G',
          derivationCode: 'LCCD',
          derivationDescription: 'Calculated from a daily value percentage per serving size measure',
          value: 0
        },
        {
          nutrientId: 1087,
          nutrientName: 'Calcium, Ca',
          nutrientNumber: '301',
          unitName: 'MG',
          derivationCode: 'LCCS',
          derivationDescription: 'Calculated from value per serving size measure',
          value: 130
        },
        {
          nutrientId: 1089,
          nutrientName: 'Iron, Fe',
          nutrientNumber: '303',
          unitName: 'MG',
          derivationCode: 'LCCS',
          derivationDescription: 'Calculated from value per serving size measure',
          value: 7.2
        },
        {
          nutrientId: 1092,
          nutrientName: 'Potassium, K',
          nutrientNumber: '306',
          unitName: 'MG',
          derivationCode: 'LCCS',
          derivationDescription: 'Calculated from value per serving size measure',
          value: 260
        },
        {
          nutrientId: 1093,
          nutrientName: 'Sodium, Na',
          nutrientNumber: '307',
          unitName: 'MG',
          derivationCode: 'LCCS',
          derivationDescription: 'Calculated from value per serving size measure',
          value: 11800
        },
        {
          nutrientId: 1110,
          nutrientName: 'Vitamin D (D2 + D3), International Units',
          nutrientNumber: '324',
          unitName: 'IU',
          derivationCode: 'LCCD',
          derivationDescription: 'Calculated from a daily value percentage per serving size measure',
          value: 0
        },
        {
          nutrientId: 1253,
          nutrientName: 'Cholesterol',
          nutrientNumber: '601',
          unitName: 'MG',
          derivationCode: 'LCCD',
          derivationDescription: 'Calculated from a daily value percentage per serving size measure',
          value: 0
        },
        {
          nutrientId: 1257,
          nutrientName: 'Fatty acids, total trans',
          nutrientNumber: '605',
          unitName: 'G',
          derivationCode: 'LCCS',
          derivationDescription: 'Calculated from value per serving size measure',
          value: 0
        },
        {
          nutrientId: 1258,
          nutrientName: 'Fatty acids, total saturated',
          nutrientNumber: '606',
          unitName: 'G',
          derivationCode: 'LCCD',
          derivationDescription: 'Calculated from a daily value percentage per serving size measure',
          value: 0
        }
      ],
      allHighlightFields: '',
      score: -43.235466
    }
```

#### ON FAILED RESPONSE
```javascript
  []
```
