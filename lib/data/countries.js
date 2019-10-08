const countries = [
    {
        country: {
            name: "Afghanistan",
            cities : [
                {
                    name: "Kabul",
                    anc_name: "Chabolo",
                    region: "East"
                },
                {
                    name: "Kandahar",
                    anc_name: "Arachosia",
                    region: "South"
                },
                {
                    name: "Herat",
                    anc_name: "Haraiva",
                    region: "West"
                },
                {
                    name: "Mazar-i-Sharif",
                    anc_name: "Haraiva",
                    region: ""
                },
                {
                    name: "Kunduz",
                    anc_name: "",
                    region: "North"
                },
                {
                    name: "Jalalabad",
                    anc_name: "Adinapur",
                    region: "East"
                },
                {
                    name: "Lashkar Gah",
                    anc_name: "Bost",
                    region: "South"
                },
                {
                    name: "Taluqan",
                    anc_name: "",
                    region: "North"
                },
                {
                    name: "Puli Khumri",
                    anc_name: "",
                    region: "North"
                },
                {
                    name: "Khost",
                    anc_name: "",
                    region: "East"
                },
                {
                    name: "Ghazni",
                    anc_name: "Ghazna",
                    region: "East"
                },
                {
                    name: "Sheberghan",
                    anc_name: "",
                    region: "North"
                },
                {
                    name: "Sari Pul",
                    anc_name: "",
                    region: "North"
                },
                {
                    name: "Farah",
                    anc_name: "",
                    region: "West"
                },
                {
                    name: "Balkh",
                    anc_name: "Baktra",
                    region: ""
                }
            ],
            region: "Asia",
            subregion: "Southern Asia"
        }
    },
    {
        country: {
            name: "Aaland",
            cities : [
                {
                    name: "Mariehamn",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Jomala",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Finström",
                    anc_name: "Finstrom",
                    region: ""
                },
                {
                    name: "Lemland",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Saltvik",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Hammarland",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Sund",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Eckerö",
                    anc_name: "Eckero",
                    region: ""
                },
                {
                    name: "Föglö",
                    anc_name: "Foglo",
                    region: ""
                },
                {
                    name: "Geta",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Brändö",
                    anc_name: "Brando",
                    region: ""
                },
                {
                    name: "Vårdö",
                    anc_name: "Vardo",
                    region: ""
                },
                {
                    name: "Lumparland",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Kumlinge",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Kökar",
                    anc_name: "Kokar",
                    region: ""
                },
                {
                    name: "Sottunga",
                    anc_name: "",
                    region: ""
                }
            ],
            region: "Europe",
            subregion: "Northern Europe"
        }
    },
    {
        country: {
            name: "Albania",
            cities: [
                {
                    name: "Tirana",
                    anc_name: "",
                    region: "Capital"
                },
                {
                    name: "Durrës",
                    anc_name: "Durres",
                    region: ""
                },
                {
                    name: "Vlorë",
                    anc_name: "Vlore",
                    region: ""
                },
                {
                    name: "Elbasan",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Shkodër",
                    anc_name: "Shkoder",
                    region: ""
                },
                {
                    name: "Fier",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Kamëz",
                    anc_name: "Kamez",
                    region: ""
                },
                {
                    name: "Korçë",
                    anc_name: "Korce",
                    region: ""
                },
                {
                    name: "Berat",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Lushnjë",
                    anc_name: "Lushnje",
                    region: ""
                },
                {
                    name: "Pogradec",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Kavajë",
                    anc_name: "Kavaje",
                    region: ""
                },
                {
                    name: "Gjirokastër",
                    anc_name: "Gjirokaster",
                    region: ""
                },
                {
                    name: "Fushë-Krujë",
                    anc_name: "Fushe-Kruje",
                    region: ""
                },
                {
                    name: "Sarandë",
                    anc_name: "Sarande",
                    region: ""
                },
                {
                    name: "Laç",
                    anc_name: "Lac",
                    region: ""
                },
                {
                    name: "Kukës",
                    anc_name: "Kukes",
                    region: ""
                },
                {
                    name: "Sukth",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Patos",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Lezhë",
                    anc_name: "Lezhe",
                    region: ""
                },
                {
                    name: "Mamurras",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Peshkopi",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Kuçovë",
                    anc_name: "Kucove",
                    region: ""
                },
                {
                    name: "Krujë",
                    anc_name: "Kruje",
                    region: ""
                },
                {
                    name: "Vorë",
                    anc_name: "Vore",
                    region: ""
                },
                {
                    name: "Burrel",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Rrëshen",
                    anc_name: "Rreshen",
                    region: ""
                },
                {
                    name: "Milot",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Divjakë",
                    anc_name: "Divjake",
                    region: ""
                },
                {
                    name: "Gramsh",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Bulqizë",
                    anc_name: "Bulqize",
                    region: ""
                },
                {
                    name: "Vau i Dejës",
                    anc_name: "Vau i Dejes",
                    region: ""
                },
                {
                    name: "Shëngjin",
                    anc_name: "Shengjin",
                    region: ""
                },
                {
                    name: "Klos",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Ballsh",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Shijak",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Ura Vajgurore",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Rrogozhinë",
                    anc_name: "Rrogozhine",
                    region: ""
                },
                {
                    name: "Librazhd",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Cërrik",
                    anc_name: "Cerrik",
                    region: ""
                },
                {
                    name: "Manëz",
                    anc_name: "Manez",
                    region: ""
                },
                {
                    name: "Peqin",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Bilisht",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Krumë",
                    anc_name: "Krume",
                    region: ""
                },
                {
                    name: "Përmet",
                    anc_name: "Permet",
                    region: ""
                },
                {
                    name: "Prrenjas",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Delvinë",
                    anc_name: "Delvine",
                    region: ""
                },
                {
                    name: "Orikum",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Bajram Curri",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Roskovec",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Rubik",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Tepelenë",
                    anc_name: "Tepelene",
                    region: ""
                },
                {
                    name: "Poliçan",
                    anc_name: "Polican",
                    region: ""
                },
                {
                    name: "Maliq",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Çorovodë",
                    anc_name: "Corovodë",
                    region: ""
                },
                {
                    name: "Ersekë",
                    anc_name: "Erseke",
                    region: ""
                },
                {
                    name: "Koplik",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Pukë",
                    anc_name: "Puke",
                    region: ""
                },
                {
                    name: "Himarë",
                    anc_name: "Himare",
                    region: ""
                },
                {
                    name: "Këlcyrë",
                    anc_name: "Kelcyre",
                    region: ""
                },
                {
                    name: "Memaliaj",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Fushe-Arrez",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Bajzë",
                    anc_name: "Bajze",
                    region: ""
                },
                {
                    name: "Krrabë",
                    anc_name: "Krrabe",
                    region: ""
                },
                {
                    name: "Selenicë",
                    anc_name: "Selenice",
                    region: ""
                },
                {
                    name: "Konispol",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Libohovë",
                    anc_name: "Libohove",
                    region: ""
                },
                {
                    name: "Reps",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Fierzë",
                    anc_name: "Fierze",
                    region: ""
                },
                {
                    name: "Krastë",
                    anc_name: "Kraste",
                    region: ""
                },
                {
                    name: "Leskovik",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Finiq",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Ulëz",
                    anc_name: "Ulez",
                    region: ""
                },
                {
                    name: "Kurbnesh",
                    anc_name: "",
                    region: ""
                }
            ],
            region: "Europe",
            subregion: "Southern Europe"
        }
    },
    {
        country: {
            name: "Algeria",
            cities: [
                {
                    name: "Algiers",
                    anc_name: "",
                    region: "North-Central"
                },
                {
                    name: "Oran",
                    anc_name: "",
                    region: "North-West"
                },
                {
                    name: "Constantine",
                    anc_name: "",
                    region: "North-East"
                },
                {
                    name: "Annaba",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Blida",
                    anc_name: "",
                    region: "South-West"
                },
                {
                    name: "Batna",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Djelfa",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Sétif",
                    anc_name: "Setif",
                    region: "East"
                },
                {
                    name: "Sidi Bel Abbès",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Biskra",
                    anc_name: "",
                    region: "North-East"
                },
                {
                    name: "Tébessa",
                    anc_name: "Tebessa",
                    region: ""
                },
                {
                    name: "El Oued",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Skikda",
                    anc_name: "",
                    region: "North-East"
                },
                {
                    name: "Tiaret",
                    anc_name: "",
                    region: "South-West"
                },
                {
                    name: "Béjaïa",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Tlemcen",
                    anc_name: "",
                    region: "North-West"
                },
                {
                    name: "Ouargla",
                    anc_name: "",
                    region: "South"
                },
                {
                    name: "Béchar",
                    anc_name: "Bechar",
                    region: ""
                },
                {
                    name: "Mostaganem",
                    anc_name: "",
                    region: "North-West"
                },
                {
                    name: "Bordj Bou Arréridj",
                    anc_name: "Bordj Bou Arreridj",
                    region: ""
                },
                {
                    name: "Chlef",
                    anc_name: "",
                    region: "North"
                },
                {
                    name: "Souk Ahras",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Médéa",
                    anc_name: "Medea",
                    region: "South"
                },
                {
                    name: "El Eulma",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Touggourt",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Ghardaïa",
                    anc_name: "Ghardaia",
                    region: ""
                },
                {
                    name: "Saïda",
                    anc_name: "Saida",
                    region: ""
                },
                {
                    name: "Laghouat",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "M'Sila",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Jijel",
                    anc_name: "",
                    region: "North-East"
                },
                {
                    name: "Relizane",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Guelma",
                    anc_name: "",
                    region: "North-East"
                },
                {
                    name: "Aïn Béïda",
                    anc_name: "Ain Beida",
                    region: "North-East"
                },
                {
                    name: "Khenchela",
                    anc_name: "",
                    region: "North-East"
                },
                {
                    name: "Bousaada",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Mascara",
                    anc_name: "",
                    region: "North-West"
                },
                {
                    name: "Tindouf",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Tizi Ouzou",
                    anc_name: "",
                    region: "North-Central"
                }
            ],
            region: "Africa",
            subregion: "Northern Africa"
        }
    },
    {
        country: {
            name: "American Samoa",
            cities: [
                {
                    name: "Pago Pago",
                    anc_name: "",
                    region: "Eastern District"
                },
                {
                    name: "Tāfuna",
                    anc_name: "Tafuna",
                    region: "Western District"
                },
                {
                    name: "Leone",
                    anc_name: "",
                    region: "Western District"
                },
                {
                    name: "Faleniu",
                    anc_name: "",
                    region: "Western District"
                },
                {
                    name: "Aūa",
                    anc_name: "Aua",
                    region: "Eastern District"
                },
                {
                    name: "Mapusagafou",
                    anc_name: "",
                    region: "Western District"
                },
                {
                    name: "Fagatogo",
                    anc_name: "Fagatogo",
                    region: "Eastern District"
                },
                {
                    name: "Vaitogi",
                    anc_name: "",
                    region: "Western District"
                },
                {
                    name: "Malaeimi",
                    anc_name: "",
                    region: "Western District"
                },
                {
                    name: "Vailoatai",
                    anc_name: "",
                    region: "Western District"
                },
                {
                    name: "Aoloau",
                    anc_name: "",
                    region: "Western District"
                }
            ],
            region: "Oceania",
            subregion: "Polynesia"
        }
    },
    {
        country: {
            name: "Andorra",
            cities: [
                {
                    name: "Andorra la Vella",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Escaldes-Engordany",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Encamp",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Sant Julià de Lòria",
                    anc_name: "Sant Julia de Loria",
                    region: ""
                },
                {
                    name: "La Massana",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Santa Coloma",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Ordino",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "El Pas de la Casa",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Canillo",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Arinsal",
                    anc_name: "",
                    region: ""
                }
            ],
            region: "Europe",
            subregion: "Southern Europe"
        }
    },
    {
        country: {
            name: "Angola",
            cities: [
                {
                    name: "Luanda",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Huambo",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Lobito",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Lubango",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Kuito",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Malanje",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Benguela",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Lucapa",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Namibe",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Soyo",
                    anc_name: "",
                    region: ""
                }
            ],
            region: "Africa",
            subregion: "Central Africa"
        }
    },
    {
        country: {
            name: "Anguilla",
            cities: [
                {
                    name: "The Valley",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Blowing Point Village",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Sandy Ground Village",
                    anc_name: "",
                    region: ""
                }
            ],
            region: "Americas",
            subregion: "Caribbean"
        }
    },
    {
        country: {
            name: "Antigua and Barbuda",
            cities: [
                {
                    name: "Saint John's",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "All Saints",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Liberta",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Potter's Village",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Bolans",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Swetes",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Seaview Farm",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Pigotts",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Codrington",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Parham",
                    anc_name: "",
                    region: ""
                }
            ],
            region: "Americas",
            subregion: "Caribbean"
        }
    },
    {
        country: {
            name: "Argentina",
            cities: [
                {
                    name: "Buenos Aires",
                    anc_name: "",
                    region: "West"
                },
                {
                    name: "Córdoba",
                    anc_name: "Cordoba",
                    region: ""
                },
                {
                    name: "Rosario",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Mendoza",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "La Plata",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Tucumán",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Mar del Plata",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Salta",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "Santa Fe",
                    anc_name: "",
                    region: ""
                },
                {
                    name: "San Juan",
                    anc_name: "",
                    region: ""
                }
            ],
            region: "Americas",
            subregion: "South America"
        }
    }
]

module.exports = countries