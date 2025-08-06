export const locationData = {
    airports: [
      { value: "jomo-kenyatta", label: "Jomo Kenyatta International Airport (NBO)" },
      { value: "mombasa-airport", label: "Moi International Airport (MBA)" },
      { value: "kisumu-airport", label: "Kisumu International Airport (KIS)" },
      { value: "eldoret-airport", label: "Eldoret International Airport (EDL)" },
    ],
    cities: [
      { value: "nairobi", label: "Nairobi" },
      { value: "mombasa", label: "Mombasa" },
      { value: "kisumu", label: "Kisumu" },
      { value: "nakuru", label: "Nakuru" },
      { value: "eldoret", label: "Eldoret" },
      { value: "thika", label: "Thika" },
      { value: "kakamega", label: "Kakamega" },
      { value: "nanyuki", label: "Nanyuki" },
    ],
    hotels: [
      { value: "safari-park", label: "Safari Park Hotel, Nairobi" },
      { value: "serena-nairobi", label: "Nairobi Serena Hotel" },
      { value: "fairmont-nairobi", label: "Fairmont The Norfolk, Nairobi" },
      { value: "sarova-stanley", label: "Sarova Stanley, Nairobi" },
      { value: "serena-mombasa", label: "Mombasa Serena Beach Resort" },
      { value: "voyager-mombasa", label: "Voyager Beach Resort, Mombasa" },
    ],
    landmarks: [
      { value: "kenyatta-conference", label: "Kenyatta International Convention Centre" },
      { value: "westlands", label: "Westlands, Nairobi" },
      { value: "kilimani", label: "Kilimani, Nairobi" },
      { value: "lavington", label: "Lavington, Nairobi" },
      { value: "karen", label: "Karen, Nairobi" },
      { value: "nyali", label: "Nyali, Mombasa" },
      { value: "bamburi", label: "Bamburi, Mombasa" },
    ],
    other: [
      { value: "custom", label: "Custom Location (Specify)" },
    ]
  } as const;
  
  export type LocationCategory = keyof typeof locationData;