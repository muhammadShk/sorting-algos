function getMeds(ailments, medications) {
    let meds = [];
    let possibleMeds = {};
  
    for (let i = 0; i < ailments.length; i++) {
      for (let j = 0; j < medications.length; j++) {
        for (let k = 0; k < medications[j].treatableSymptoms.length; k++) {
          if (ailments[i] === medications[j].treatableSymptoms[k]) {
            if (possibleMeds[medications[j].name]) {
              possibleMeds[medications[j].name]++;
            } else {
              possibleMeds[medications[j].name] = 1;
            }
          }
        }
      }
    }
  
    let max = 0;
  
    for (const key in possibleMeds) {
      if (possibleMeds[key] > max) {
        max = possibleMeds[key];
        meds = [key];
      } else if (possibleMeds[key] === max) {
        meds.push(key);
      }
    }
  
    return meds;
  }
  
  const medications = [
    {
      name: "Sulforaphane",
      treatableSymptoms: [
        "dementia",
        `alzheimer's`,
        "cancer",
        "inflammation",
        "neuropathy",
      ],
    },
    {
      name: "Longvida Curcumin",
      treatableSymptoms: [
        "pain",
        "inflammation",
        "depression",
        "arthritis",
        "anxiety",
      ],
    },
    {
      name: "Hericium erinaceus",
      treatableSymptoms: ["anxiety", "cognitive decline", "depression"],
    },
    {
      name: "Nicotinamide mononucleotide",
      treatableSymptoms: [
        "ageing",
        "low NAD",
        "obesity",
        "mitochondrial myopathy",
        "diabetes",
      ],
    },
    {
      name: "PainAssassinator",
      treatableSymptoms: [
        "pain",
        "inflammation",
        "cramps",
        "headache",
        "toothache",
        "back pain",
        "fever",
      ],
    },
  ];
  
  console.log(getMeds(["pain"], medications));
  // should log ['PainAssassinator', 'Longvida Curcumin']
  
  console.log(getMeds(["pain", "inflammation", "depression"], medications));
  // should log ['Longvida Curcumin']
  
  console.log(getMeds(["existential dread"], medications));
  // should log []